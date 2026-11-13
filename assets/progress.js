/* progress.js - device-local Leitner spaced-review tracker. No dependencies.
   API: window.Progress = { record, getTopics, dueTopics, weakTopics, reset, markLesson, lessonsDone, storageOk } */
(function (root) {
  'use strict';
  var KEY = 'pl300.progress.v1';
  var INTERVALS = [1, 3, 7, 14, 30]; // days for boxes 1..5
  var mem = { topics: {}, lessons: {} };
  var ok = true;

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function iso(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function toIso(t) {
    if (!t) return iso(new Date());
    if (t instanceof Date) return iso(t);
    return String(t).slice(0, 10);
  }
  function addDays(s, n) {
    var p = s.split('-');
    return iso(new Date(+p[0], +p[1] - 1, +p[2] + n));
  }

  function read() {
    try {
      var raw = root.localStorage.getItem(KEY);
      if (raw) {
        var o = JSON.parse(raw);
        if (o && typeof o === 'object') {
          mem = { topics: o.topics || {}, lessons: o.lessons || {} };
        }
      }
    } catch (e) { ok = false; }
    return mem;
  }
  function write() {
    try { root.localStorage.setItem(KEY, JSON.stringify(mem)); }
    catch (e) { ok = false; }
  }

  function record(topic, correct, today) {
    if (!topic) return null;
    var s = read();
    var t = s.topics[topic] || { seen: 0, correct: 0, box: 1, nextReview: '' };
    t.seen++;
    if (correct) { t.correct++; t.box = Math.min(5, (t.box || 1) + 1); }
    else { t.box = 1; }
    t.nextReview = addDays(toIso(today), INTERVALS[t.box - 1]);
    s.topics[topic] = t;
    write();
    return t;
  }

  function getTopics() {
    var s = read(), out = {};
    Object.keys(s.topics).forEach(function (k) {
      var t = s.topics[k];
      out[k] = { seen: t.seen, correct: t.correct, box: t.box, nextReview: t.nextReview };
    });
    return out;
  }

  function entries() {
    var t = getTopics();
    return Object.keys(t).map(function (k) {
      var e = t[k]; e.topic = k; e.accuracy = e.seen ? e.correct / e.seen : 0; return e;
    });
  }

  // Topics whose nextReview is today or earlier, most overdue first.
  function dueTopics(today) {
    var d = toIso(today);
    return entries().filter(function (e) { return e.nextReview && e.nextReview <= d; })
      .sort(function (a, b) { return a.nextReview < b.nextReview ? -1 : a.nextReview > b.nextReview ? 1 : 0; });
  }

  // Lowest-accuracy topics (accuracy < 70%), at most n.
  function weakTopics(n) {
    return entries().filter(function (e) { return e.seen > 0 && e.accuracy < 0.7; })
      .sort(function (a, b) { return a.accuracy - b.accuracy || b.seen - a.seen; })
      .slice(0, n == null ? 5 : n);
  }

  function reset() { mem = { topics: {}, lessons: {} }; write(); }

  function markLesson(id) {
    if (!id) return;
    var s = read(); s.lessons[id] = iso(new Date()); write();
  }
  function lessonsDone() { return Object.keys(read().lessons); }

  var Progress = {
    record: record, getTopics: getTopics, dueTopics: dueTopics, weakTopics: weakTopics,
    reset: reset, markLesson: markLesson, lessonsDone: lessonsDone,
    storageOk: function () { read(); return ok; },
    _addDays: addDays, _INTERVALS: INTERVALS
  };
  root.Progress = Progress;
  if (typeof module !== 'undefined' && module.exports) module.exports = Progress;

  /* ---------- DOM: notice + review-due renderer ---------- */
  function human(s) { return s.replace(/[-_]+/g, ' '); }
  function safeHref(u) { return u && !/^\s*(javascript|data):/i.test(u) ? u : null; }

  function renderDue(box) {
    var links = {};
    try { links = JSON.parse(box.getAttribute('data-topic-links') || '{}') || {}; } catch (e) {}
    var due = dueTopics(), seen = {}, rows = [];
    due.forEach(function (e) { seen[e.topic] = 1; rows.push([e, 'À revoir']); });
    weakTopics(5).forEach(function (e) { if (!seen[e.topic]) rows.push([e, 'Fragile']); });
    box.textContent = '';
    var h = document.createElement('h3'); h.textContent = 'File de révision'; box.appendChild(h);
    if (!rows.length) {
      var p = document.createElement('p'); p.className = 'review-empty';
      p.textContent = 'Rien à revoir pour l’instant. Réponds à des questions : les sujets réapparaîtront ici au bon moment.';
      box.appendChild(p); return;
    }
    var wrap = document.createElement('div'); wrap.className = 'table-wrap';
    var tb = document.createElement('table');
    tb.innerHTML = '<thead><tr><th>Sujet</th><th>Pourquoi</th><th>Réussite</th><th>Boîte</th><th>Prochaine révision</th></tr></thead>';
    var body = document.createElement('tbody');
    rows.forEach(function (r) {
      var e = r[0], tr = document.createElement('tr'), td = document.createElement('td');
      var href = safeHref(links[e.topic]);
      if (href) { var a = document.createElement('a'); a.href = href; a.textContent = human(e.topic); td.appendChild(a); }
      else td.textContent = human(e.topic);
      tr.appendChild(td);
      [r[1], Math.round(e.accuracy * 100) + '% (' + e.correct + '/' + e.seen + ')', e.box + '/5', e.nextReview]
        .forEach(function (v) { var c = document.createElement('td'); c.textContent = v; tr.appendChild(c); });
      body.appendChild(tr);
    });
    tb.appendChild(body); wrap.appendChild(tb); box.appendChild(wrap);
  }

  function ready() {
    if (!Progress.storageOk() && !document.querySelector('.progress-notice')) {
      var n = document.createElement('div');
      n.className = 'progress-notice'; n.setAttribute('role', 'status');
      n.textContent = 'Le stockage du navigateur est indisponible : ta progression est gardée en mémoire et sera perdue en quittant la page.';
      document.body.insertBefore(n, document.body.firstChild);
    }
    var boxes = document.querySelectorAll('.review-due');
    for (var i = 0; i < boxes.length; i++) renderDue(boxes[i]);
  }
  Progress.renderReviewDue = function () { ready(); };

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
    else ready();
  }
})(typeof window !== 'undefined' ? window : globalThis);
