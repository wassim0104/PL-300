// Vercel Routing Middleware: every request to the site needs a valid session,
// except the login/signup pages, their assets and the auth API.
import { COOKIE, getCookie, verifySession, getUser, clearCookie } from './lib/auth.js';

export const config = { matcher: '/:path*' };

const PUBLIC = [/^\/login\.html$/, /^\/signup\.html$/, /^\/auth\//, /^\/assets\/course\.css$/, /^\/api\/(login|signup|logout)$/, /^\/favicon\.ico$/];
const BLOCKED = [/^\/lib\//, /^\/middleware\.js$/, /^\/package\.json$/];

// Same effect as next() from @vercel/functions: let the request continue.
const next = () => new Response(null, { headers: { 'x-middleware-next': '1' } });

export default async function middleware(req) {
  const url = new URL(req.url);
  const path = url.pathname;
  if (BLOCKED.some((r) => r.test(path))) return new Response('Not found', { status: 404 });
  if (PUBLIC.some((r) => r.test(path))) return next();

  const email = await verifySession(getCookie(req, COOKIE));
  // Pages (not assets): also check the account is still approved, so revoking access takes effect immediately.
  const isPage = path === '/' || path.endsWith('.html') || !/\.[a-z0-9]+$/i.test(path);
  let ok = !!email;
  if (ok && isPage) {
    try { const u = await getUser(email); ok = !!u && u.status === 'approved'; } catch { ok = false; }
  }
  if (ok) return next();

  if (path.startsWith('/api/')) {
    return new Response(JSON.stringify({ error: 'Non connecté.' }), { status: 401, headers: { 'content-type': 'application/json' } });
  }
  const login = new URL('/login.html', url);
  if (isPage) login.searchParams.set('next', path + url.search);
  return new Response(null, { status: 302, headers: { location: login.toString(), 'set-cookie': clearCookie(), 'cache-control': 'no-store' } });
}
