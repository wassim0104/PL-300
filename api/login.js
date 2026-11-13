import { normEmail, getUser, checkPassword, signSession, sessionCookie, rateLimit, clientIp, json, readJson } from '../lib/auth.js';

// POST {email, password} → sets the session cookie if the account is approved.
export async function POST(req) {
  const body = await readJson(req);
  if (!body) return json({ error: 'Requête invalide.' }, 400);
  const email = normEmail(body.email);
  const password = String(body.password || '');
  const ip = clientIp(req);
  if (!(await rateLimit('login:' + ip, 20, 900)) || !(await rateLimit('login:' + email, 8, 900)))
    return json({ error: 'Trop de tentatives. Réessaie dans 15 minutes.' }, 429);

  const user = await getUser(email);
  const ok = user ? await checkPassword(password, user) : false;
  if (!ok) return json({ error: 'E-mail ou mot de passe incorrect.' }, 401);
  if (user.status === 'pending') return json({ error: 'Ton compte attend la validation de l’administrateur.' }, 403);
  if (user.status !== 'approved') return json({ error: 'Accès refusé.' }, 403);

  return json({ ok: true }, 200, { 'set-cookie': sessionCookie(await signSession(email)) });
}
