import { currentUser, isAdmin, normEmail, getUser, saveUser, redis, json, readJson } from '../lib/auth.js';

async function requireAdmin(req) {
  const u = await currentUser(req);
  return u && isAdmin(u.email) ? u : null;
}

// GET → list of users (no password data).
export async function GET(req) {
  if (!(await requireAdmin(req))) return json({ error: 'Réservé à l’administrateur.' }, 403);
  const emails = (await redis('SMEMBERS', 'users')) || [];
  const users = [];
  for (const e of emails.sort()) {
    const u = await getUser(e);
    if (u) users.push({ email: u.email, name: u.name, status: u.status, created: u.created, admin: isAdmin(u.email) });
  }
  return json({ users });
}

// POST {email, action: "approve" | "revoke" | "delete"}
export async function POST(req) {
  const me = await requireAdmin(req);
  if (!me) return json({ error: 'Réservé à l’administrateur.' }, 403);
  const body = await readJson(req);
  const email = normEmail(body && body.email);
  const action = body && body.action;
  if (!email || !['approve', 'revoke', 'delete'].includes(action)) return json({ error: 'Requête invalide.' }, 400);
  if (isAdmin(email)) return json({ error: 'Impossible de modifier le compte administrateur.' }, 400);
  const u = await getUser(email);
  if (!u) return json({ error: 'Utilisateur introuvable.' }, 404);

  if (action === 'delete') {
    await redis('DEL', 'user:' + email);
    await redis('SREM', 'users', email);
  } else {
    u.status = action === 'approve' ? 'approved' : 'revoked';
    await saveUser(u);
  }
  return json({ ok: true });
}
