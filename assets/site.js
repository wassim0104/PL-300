/* site.js - PL-300 Studio shell (header, side nav, footer, theme). Vanilla; never throws if Progress/manifest missing. */
(function () {
  'use strict';
  var doc = document, win = window, root = doc.documentElement;
  var THEME_KEY = 'pl300.theme', PROGRESS_KEY = 'pl300.progress.v1';

  function safe(fn, dflt) { try { return fn(); } catch (e) { return dflt; } }
  function store(k, v) {
    return safe(function () {
      if (v === undefined) return win.localStorage.getItem(k);
      if (v === null) win.localStorage.removeItem(k); else win.localStorage.setItem(k, v);
      return v;
    }, null);
  }
  function h(tag, attrs, kids) {
    var el = doc.createElement(tag), k;
    for (k in (attrs || {})) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === 'text') el.textContent = attrs[k]; else if (k === 'html') el.innerHTML = attrs[k]; else el.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) el.appendChild(typeof c === 'string' ? doc.createTextNode(c) : c); });
    return el;
  }

  var MODES = ['auto', 'light', 'dark'], LABELS = { auto: 'automatique', light: 'clair', dark: 'sombre' };
  function getMode() { var m = store(THEME_KEY); return MODES.indexOf(m) > -1 ? m : 'auto'; }
  function applyMode(m) { if (m === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', m); }
  applyMode(getMode());

  var body = doc.body;
  if (!body) return;
  var page = body.getAttribute('data-page') || '';
  if (page === 'auth') return; /* auth pages carry their own minimal chrome */
  if (doc.querySelector('.site-header')) return; /* already built */

  var self = doc.currentScript || safe(function () {
    var s = doc.querySelectorAll('script[src*="site.js"]'); return s[s.length - 1];
  });
  var src = (self && self.getAttribute('src')) || 'assets/site.js';
  var R = /assets\/site\.js/.test(src) ? src.replace(/assets\/site\.js.*$/, '') : src.replace(/site\.js.*$/, '') + '../';

  var M = win.PL300_MANIFEST || {};
  var lessons = M.lessons || [], sheets = M.sheets || [], practice = M.practice || [], domains = M.domains || {};
  var path = safe(function () { return decodeURIComponent(location.pathname); }, '');
  var file = path.split('/').pop() || 'index.html';
  var lessonId = body.getAttribute('data-lesson') || (path.match(/\/lessons\/(\d{4})-/) || [])[1] || '';
  var sheetSlug = body.getAttribute('data-sheet') || (path.match(/\/reference\/([^/]+)\.html$/) || [])[1] || '';

  if (lessonId && !body.getAttribute('data-domain')) {
    lessons.forEach(function (l) { if (l.n === lessonId && l.domain) body.setAttribute('data-domain', l.domain); });
  }

  function doneSet() {
    var set = {};
    var list = safe(function () { return win.Progress && win.Progress.lessonsDone ? win.Progress.lessonsDone() : null; }, null);
    if (!list) {
      var raw = store(PROGRESS_KEY), o = raw ? safe(function () { return JSON.parse(raw); }, null) : null;
      list = o && o.lessons ? Object.keys(o.lessons).filter(function (k) { return o.lessons[k]; }) : [];
    }
    (list || []).forEach(function (id) { set[String(id)] = 1; });
    return set;
  }

  if (!doc.querySelector('link[href*="fonts.googleapis.com"]')) {
    var head = doc.head;
    ['googleapis', 'gstatic'].forEach(function (d) { head.appendChild(h('link', { rel: 'preconnect', href: 'https://fonts.' + d + '.com', crossorigin: '' })); });
    head.appendChild(h('link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=JetBrains+Mono:wght@400;600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap'
    }));
  }

  var ICON = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" stroke-dasharray="1.5 4.6"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
    auto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor"/></svg>',
    burger: '\u2630',
    close: '\u2715'
  };
  var MARK = '<svg viewBox="0 0 22 22" aria-hidden="true"><path d="M1 11h4v10H1z" fill="var(--prep)"/><path d="M6.5 5h4v16h-4z" fill="var(--model)"/><path d="M12 8h4v13h-4z" fill="var(--viz)"/><path d="M17.5 1h4v20h-4z" fill="var(--manage)"/></svg>';

  function link(href, text, here) { return h('a', { href: R + href, text: text, 'aria-current': here ? 'page' : null }); }
  function samePath(href) { return path.split('/').slice(-2).join('/') === href.split('#')[0].split('/').slice(-2).join('/'); }

  var dds = [];
  function dropdown(label, items, active) {
    var btn = h('button', { type: 'button', 'aria-expanded': 'false', text: label });
    var menu = h('div', { class: 'nav-menu' }, items.map(function (it) { return link(it.file, it.title, samePath(it.file)); }));
    var dd = h('div', { class: 'nav-dd' + (active ? ' is-active' : '') }, [btn, menu]);
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !dd.classList.contains('is-open');
      closeMenus(); if (open) { dd.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); }
    });
    dds.push({ dd: dd, btn: btn });
    return dd;
  }
  function closeMenus(focus) {
    dds.forEach(function (d) {
      if (d.dd.classList.contains('is-open') && focus) d.btn.focus();
      d.dd.classList.remove('is-open'); d.btn.setAttribute('aria-expanded', 'false');
    });
  }

  var mocks = practice.filter(function (p) { return /mock-exam/.test(p.file); });
  if (!mocks.length) mocks = [{ file: 'practice/mock-exam-1.html', title: 'Examen blanc 1' }];

  var nav = h('nav', { class: 'site-nav', id: 'site-nav', 'aria-label': 'Navigation principale' });
  nav.appendChild(link('index.html#parcours', 'Parcours', page === 'home' || page === 'lesson'));
  nav.appendChild(sheets.length ? dropdown('Fiches', sheets.map(function (s) { return { file: s.file, title: s.title }; }), page === 'reference')
    : link('index.html#fiches', 'Fiches', page === 'reference'));
  nav.appendChild(link('practice/mixed.html', 'Entraînement', /\/practice\/mixed\.html$/.test(path)));
  nav.appendChild(dropdown('Examens blancs', mocks, /\/practice\/mock-exam/.test(path)));
  nav.appendChild(link('progress.html', 'Progression', page === 'progress'));

  var themeBtn = h('button', { type: 'button', class: 'icon-btn theme-toggle' });
  function paintTheme() {
    var m = getMode();
    themeBtn.innerHTML = ICON[m === 'auto' ? 'auto' : m === 'light' ? 'sun' : 'moon'];
    themeBtn.setAttribute('aria-label', 'Thème : ' + LABELS[m] + '. Changer de thème');
    themeBtn.setAttribute('title', 'Thème : ' + LABELS[m]);
  }
  themeBtn.addEventListener('click', function () {
    var next = MODES[(MODES.indexOf(getMode()) + 1) % MODES.length];
    store(THEME_KEY, next); applyMode(next); paintTheme();
  });
  paintTheme();

  var user = h('div', { class: 'site-user' });
  var burger = h('button', { type: 'button', class: 'icon-btn nav-burger', 'aria-label': 'Ouvrir le menu', 'aria-expanded': 'false', 'aria-controls': 'site-nav', html: ICON.burger });
  var header = h('header', { class: 'site-header' }, [
    h('a', { class: 'brand', href: R + 'index.html', html: MARK + '<span>PL-300 Studio</span>' }),
    nav,
    h('div', { class: 'site-tools' }, [user, themeBtn, burger])
  ]);
  function setSheet(open) {
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    burger.innerHTML = open ? ICON.close : ICON.burger;
  }
  burger.addEventListener('click', function (e) { e.stopPropagation(); setSheet(!header.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('a')) setSheet(false); });
  doc.addEventListener('click', function (e) { if (!header.contains(e.target)) closeMenus(); });
  doc.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var wasOpen = header.classList.contains('is-open');
    closeMenus(true);
    if (wasOpen) { setSheet(false); burger.focus(); }
    var sd = doc.querySelector('.site-side.is-open'), t = sd && sd.querySelector('.side-toggle');
    if (t) t.click();
  });

  var main = doc.querySelector('main, .page, article');
  if (main && !main.id) main.id = 'main';
  if (main) main.setAttribute('tabindex', '-1');
  body.insertBefore(header, body.firstChild);
  body.insertBefore(h('a', { class: 'skip-link', href: '#' + (main ? main.id : 'main'), text: 'Aller au contenu' }), body.firstChild);
  body.classList.add('has-shell');

  function onScroll() { header.classList.toggle('is-scrolled', (win.pageYOffset || root.scrollTop) > 8); }
  win.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  if (/^https?:$/.test(location.protocol) && win.fetch) {
    safe(function () {
      win.fetch('/api/me', { credentials: 'same-origin' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
          var u = d && d.user; if (!u) return;
          user.appendChild(h('span', { class: 'who', text: u.name || u.email || '' }));
          if (u.admin) user.appendChild(h('a', { href: '/admin.html', text: 'Gérer les accès' }));
          user.appendChild(h('a', { class: 'logout', href: '/api/logout', text: 'Se déconnecter' }));
        })
        .catch(function () {});
    });
  }

  var side = null, sideLinks = [], bar = null, count = null, toggleCount = null;
  function buildSide(kind) {
    var isLesson = kind === 'lesson';
    var items = isLesson ? lessons : sheets;
    if (!items.length || !main) return;
    var label = isLesson ? 'Leçons' : 'Fiches';
    var bodyEl = h('div', { class: 'side-body', id: 'side-body' });
    var toggle = h('button', { type: 'button', class: 'side-toggle', 'aria-expanded': 'false', 'aria-controls': 'side-body' }, [h('span', { text: label })]);
    if (isLesson) {
      count = h('span', { text: '' });
      bar = h('span');
      bodyEl.appendChild(h('div', { class: 'side-head' }, [
        h('div', { class: 'row' }, [h('span', { text: 'Progression' }), count]),
        h('div', { class: 'progress-bar' }, [bar])
      ]));
      var phase = null, ol = null;
      lessons.forEach(function (l) {
        if (l.phase !== phase) {
          phase = l.phase; bodyEl.appendChild(h('div', { class: 'side-phase', text: phase || '' }));
          ol = h('ol'); bodyEl.appendChild(ol);
        }
        var here = l.n === lessonId;
        var a = h('a', { href: R + l.file, 'aria-current': here ? 'page' : null, 'data-n': l.n }, [
          h('span', { class: 'n', text: l.n }), h('span', { class: 't', text: l.title }), h('span', { class: 'tick', 'aria-hidden': 'true' })
        ]);
        sideLinks.push(a); ol.appendChild(h('li', {}, [a]));
      });
    } else {
      var ol2 = h('ol');
      sheets.forEach(function (s) {
        var a = h('a', { href: R + s.file, 'aria-current': s.slug === sheetSlug ? 'page' : null }, [h('span', { class: 't', text: s.title })]);
        ol2.appendChild(h('li', {}, [a]));
      });
      bodyEl.appendChild(ol2);
    }
    side = h('nav', { class: 'site-side', 'aria-label': label }, [toggle, bodyEl]);
    toggle.addEventListener('click', function () {
      var open = !side.classList.contains('is-open');
      side.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    body.insertBefore(side, main);
    body.classList.add('has-side');
    var cur = side.querySelector('[aria-current="page"]');
    if (cur) safe(function () { side.scrollTop = cur.getBoundingClientRect().top - side.getBoundingClientRect().top + side.scrollTop - side.clientHeight / 3; });
  }
  function paintDone() {
    if (!sideLinks.length) return;
    var done = doneSet(), n = 0;
    sideLinks.forEach(function (a) {
      var d = !!done[a.getAttribute('data-n')]; if (d) n++;
      a.classList.toggle('is-done', d);
      var t = a.querySelector('.tick'); if (t) t.textContent = d ? '✓' : '';
    });
    var total = sideLinks.length;
    if (count) count.textContent = n + '/' + total;
    if (bar) bar.style.width = (total ? Math.round(n * 100 / total) : 0) + '%';
  }

  function buildFooter() {
    var f = h('footer', { class: 'site-footer' }, [
      h('p', { html: 'Sources : <a href="https://learn.microsoft.com/credentials/certifications/exams/pl-300/">Microsoft Learn</a>. Pose tes questions à ton professeur IA.' }),
      h('p', {}, [h('a', { href: R + 'reference/exam-overview.html', text: 'Aperçu de l’examen' })])
    ]);
    body.appendChild(f);
  }

  function dropBackLink() {
    if (!main) return;
    var first = main.firstElementChild; if (!first) return;
    var a = first.tagName === 'A' ? first : first.querySelector('a[href$="index.html"]');
    if (!a || !/^\s*(←|&larr;)/.test(a.textContent) || !/index\.html$/.test(a.getAttribute('href') || '')) return;
    var parent = a.parentNode; parent.removeChild(a);
    if (parent !== main && !parent.textContent.trim()) parent.parentNode.removeChild(parent);
  }

  function init() {
    safe(dropBackLink);
    if (page === 'lesson') safe(function () { buildSide('lesson'); });
    else if (page === 'reference') safe(function () { buildSide('sheet'); });
    safe(buildFooter);
    safe(paintDone);
    doc.addEventListener('click', function (e) {
      if (e.target && e.target.closest && e.target.closest('button')) win.setTimeout(function () { safe(paintDone); }, 60);
    });
    win.addEventListener('storage', function (e) { if (!e.key || e.key === PROGRESS_KEY) safe(paintDone); });
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init); else init();
})();
