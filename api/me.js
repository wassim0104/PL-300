import { currentUser, isAdmin, json } from '../lib/auth.js';

export async function GET(req) {
  const u = await currentUser(req);
  if (!u) return json({ user: null }, 401);
  return json({ user: { email: u.email, name: u.name, admin: isAdmin(u.email) } });
}
