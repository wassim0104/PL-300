// Shared auth helpers: Web Crypto only (works in Vercel Middleware and Node functions).
// Env vars: SESSION_SECRET (≥32 random chars), ADMIN_EMAIL,
//   KV_REST_API_URL + KV_REST_API_TOKEN  (or UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN)

export const COOKIE = 'pl300_session';
export const SESSION_DAYS = 7;
const enc = new TextEncoder();
const PBKDF2_ITER = 210000;

const b64u = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const unb64u = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)), (c) => c.charCodeAt(0));

export const normEmail = (e) => String(e || '').trim().toLowerCase();
export const validEmail = (e) => /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/.test(e);
export const isAdmin = (email) => !!process.env.ADMIN_EMAIL && normEmail(process.env.ADMIN_EMAIL) === email;

function secret() {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 32) throw new Error('SESSION_SECRET missing or shorter than 32 characters');
  return s;
}

// ---------- passwords (PBKDF2-SHA256) ----------
export async function hashPassword(password, saltB64) {
  const salt = saltB64 ? unb64u(saltB64) : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: PBKDF2_ITER }, key, 256);
  return { salt: b64u(salt), hash: b64u(bits) };
}
export async function checkPassword(password, user) {
  const { hash } = await hashPassword(password, user.salt);
  if (hash.length !== user.hash.length) return false;
  let diff = 0;
  for (let i = 0; i < hash.length; i++) diff |= hash.charCodeAt(i) ^ user.hash.charCodeAt(i);
  return diff === 0;
}

// ---------- sessions (HMAC-SHA256 signed token) ----------
async function hmacKey() {
  return crypto.subtle.importKey('raw', enc.encode(secret()), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}
export async function signSession(email) {
  const body = b64u(enc.encode(JSON.stringify({ e: email, x: Date.now() + SESSION_DAYS * 864e5 })));
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(), enc.encode(body));
  return body + '.' + b64u(sig);
}
export async function verifySession(token) {
  try {
    const [body, sig] = String(token || '').split('.');
    if (!body || !sig) return null;
    const ok = await crypto.subtle.verify('HMAC', await hmacKey(), unb64u(sig), enc.encode(body));
    if (!ok) return null;
    const p = JSON.parse(new TextDecoder().decode(unb64u(body)));
    return p.x > Date.now() ? p.e : null;
  } catch { return null; }
}

// ---------- cookies ----------
export function getCookie(req, name) {
  const m = (req.headers.get('cookie') || '').match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
  return m ? decodeURIComponent(m[1]) : null;
}
export const sessionCookie = (token) => `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}`;
export const clearCookie = () => `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;

// ---------- Redis (Upstash REST) ----------
export async function redis(...cmd) {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const tok = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !tok) throw new Error('Redis env vars missing');
  const r = await fetch(url, { method: 'POST', headers: { Authorization: `Bearer ${tok}` }, body: JSON.stringify(cmd) });
  const j = await r.json();
  if (j.error) throw new Error('Redis: ' + j.error);
  return j.result;
}
export async function getUser(email) {
  const raw = await redis('GET', 'user:' + email);
  return raw ? JSON.parse(raw) : null;
}
export const saveUser = (u) => redis('SET', 'user:' + u.email, JSON.stringify(u));

// Simple fixed-window rate limit. Returns true if the call is allowed.
export async function rateLimit(key, max, windowSec) {
  const n = await redis('INCR', 'rl:' + key);
  if (n === 1) await redis('EXPIRE', 'rl:' + key, windowSec);
  return n <= max;
}

// ---------- request helpers ----------
export const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store', ...headers } });

export async function readJson(req) {
  if (!(req.headers.get('content-type') || '').includes('application/json')) return null; // blocks form-based CSRF
  try { return await req.json(); } catch { return null; }
}
export const clientIp = (req) => (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';

export async function currentUser(req) {
  const email = await verifySession(getCookie(req, COOKIE));
  if (!email) return null;
  const u = await getUser(email);
  return u && u.status === 'approved' ? u : null;
}
