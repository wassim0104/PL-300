import { normEmail, validEmail, isAdmin, hashPassword, getUser, saveUser, redis, rateLimit, clientIp, json, readJson } from '../lib/auth.js';

// POST {email, password, name} → creates a "pending" account (the admin's own email is approved at once).
export async function POST(req) {
  const body = await readJson(req);
  if (!body) return json({ error: 'Requête invalide.' }, 400);
  const email = normEmail(body.email);
  const password = String(body.password || '');
  const name = String(body.name || '').trim().slice(0, 80);
  if (!validEmail(email)) return json({ error: 'Adresse e-mail invalide.' }, 400);
  if (password.length < 10 || password.length > 200) return json({ error: 'Le mot de passe doit contenir au moins 10 caractères.' }, 400);
  if (!(await rateLimit('signup:' + clientIp(req), 5, 3600))) return json({ error: 'Trop de tentatives. Réessaie plus tard.' }, 429);
  if (await getUser(email)) return json({ error: 'Un compte existe déjà avec cette adresse.' }, 409);

  const { salt, hash } = await hashPassword(password);
  const admin = isAdmin(email);
  await saveUser({ email, name, salt, hash, status: admin ? 'approved' : 'pending', created: new Date().toISOString() });
  await redis('SADD', 'users', email);
  return json({ ok: true, status: admin ? 'approved' : 'pending' }, 201);
}
