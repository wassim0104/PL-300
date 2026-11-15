/* quiz.js - vanilla quiz widget (practice + exam modes, weighted bank sampling).
   See assets/README.md for the contract. Works from file://. */
(function (root) {
  'use strict';
  var WEIGHTS = { PREP: 27.5, MODEL: 27.5, VIZ: 27.5, MANAGE: 17.5 };
  var DNAME = { PREP: 'Préparer les données', MODEL: 'Modéliser', VIZ: 'Visualiser & analyser', MANAGE: 'Gérer & sécuriser' };
  var uid = 0;

  /* ---------- pure logic (unit-tested in node) ---------- */
  function shuffle(a, rnd) {
    rnd = rnd || Math.random; a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function range(n) { var r = []; for (var i = 0; i < n; i++) r.push(i); return r; }

  // Largest-remainder allocation of `count` slots across domains, capped by availability.
  function quotas(count, avail, w, rnd) {
    rnd = rnd || Math.random;
    var doms = Object.keys(avail).filter(function (d) { return avail[d] > 0 && w[d] > 0; });
    var q = {}, total = 0;
    doms.forEach(function (d) { q[d] = 0; total += avail[d]; });
    var left = Math.min(count, total);
    while (left > 0) {
      var act = doms.filter(function (d) { return q[d] < avail[d]; });
      if (!act.length) break;
      var tw = 0; act.forEach(function (d) { tw += w[d]; });
      var given = 0, ideal = act.map(function (d) {
        var x = left * w[d] / tw, g = Math.min(Math.floor(x), avail[d] - q[d]);
        q[d] += g; given += g;
        return { d: d, f: x - Math.floor(x) + rnd() * 1e-6 };
      });
      left -= given;
      if (left <= 0) break;
      ideal.sort(function (a, b) { return b.f - a.f; });
      for (var i = 0; i < ideal.length && left > 0; i++) {
        if (q[ideal[i].d] < avail[ideal[i].d]) { q[ideal[i].d]++; left--; }
      }
    }
    return q;
  }

  function normDomain(d) { return String(d || '').toUpperCase(); }

  function sampleBank(bank, count, domains, weighted, rnd) {
    rnd = rnd || Math.random;
    var pool = bank.filter(function (q) {
      return !domains || !domains.length || domains.indexOf(normDomain(q.domain)) > -1;
    });
    count = count > 0 ? count : pool.length;
    var groups = {}, avail = {};
    pool.forEach(function (q) {
      var d = normDomain(q.domain); (groups[d] = groups[d] || []).push(q);
    });
    Object.keys(groups).forEach(function (d) { avail[d] = groups[d].length; });
    var hasWeighted = Object.keys(avail).some(function (d) { return WEIGHTS[d]; });
    if (!weighted || !hasWeighted) return shuffle(pool, rnd).slice(0, count);
    var q = quotas(count, avail, WEIGHTS, rnd), out = [];
    Object.keys(q).forEach(function (d) { out = out.concat(shuffle(groups[d], rnd).slice(0, q[d])); });
    return shuffle(out, rnd);
  }

  // order[displayPos] = original option index. Correct positions are kept in memory only.
  function prepare(q, rnd) {
    var order = shuffle(range(q.options.length), rnd), ans = [].concat(q.answer), correct = [];
    order.forEach(function (orig, pos) { if (ans.indexOf(orig) > -1) correct.push(pos); });
    return { q: q, order: order, correct: correct, multi: q.multi === true || Array.isArray(q.answer) };
  }
  function grade(pq, sel) {
    if (sel.length !== pq.correct.length) return false;
    return sel.every(function (p) { return pq.correct.indexOf(p) > -1; });
  }

  /* ---------- DOM helpers ---------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function txt(tag, cls, t) { var e = el(tag, cls); e.textContent = t; return e; }
  function safeUrl(u) { return /^https?:\/\//i.test(u || '') ? u : null; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function record(topic, ok) { try { if (root.Progress && topic) root.Progress.record(topic, ok); } catch (e) {} }
  function badge(d) {
    d = normDomain(d);
    return el('span', 'badge ' + d.toLowerCase(), esc(d));
  }

  function readInline(div) {
    var s = div.querySelector('script.quiz-data'), n = div.nextElementSibling;
    if (!s && n && n.matches && n.matches('script.quiz-data')) s = n;
    if (!s) return null;
    var data = JSON.parse(s.textContent);
    s.parentNode.removeChild(s);
    return data;
  }

  /* ---------- widget ---------- */
  function mount(div) {
    if (div.__quiz) return; div.__quiz = true;
    var mode = div.getAttribute('data-mode') === 'exam' ? 'exam' : 'practice';
    var mins = parseFloat(div.getAttribute('data-timer-minutes')) || 0;
    var defTopic = div.getAttribute('data-topic') || '';
    var bankKind = div.getAttribute('data-bank');
    var src = div.getAttribute('data-src');
    var inline = null, inlineErr = null;
    try { inline = readInline(div); } catch (e) { inlineErr = e; }
    var body = el('div', 'quiz-body'); div.appendChild(body);
    var timerId = null;

    function pick() {
      if (inlineErr) throw new Error('Quiz data is not valid JSON: ' + inlineErr.message);
      if (bankKind) {
        var B = root.PL300_BANK;
        if (!Array.isArray(B)) throw new Error('Question bank not loaded (window.PL300_BANK missing).');
        var doms = (div.getAttribute('data-domains') || '').split(',').map(function (s) { return normDomain(s.trim()); }).filter(Boolean);
        var count = parseInt(div.getAttribute('data-count'), 10) || 0;
        var weighted = div.getAttribute('data-weighted') !== 'false';
        var pool = B;
        if (bankKind === 'topic') pool = B.filter(function (q) { return q.topic === defTopic; });
        if (bankKind === 'lesson') { var ls = div.getAttribute('data-lesson'); pool = B.filter(function (q) { return q.lesson === ls; }); }
        var r = sampleBank(pool, count, doms, weighted && bankKind === 'mixed');
        if (!r.length) throw new Error('No questions match this quiz filter.');
        return r;
      }
      if (!Array.isArray(inline) || !inline.length) throw new Error('No quiz questions found.');
      return inline;
    }

    function start() {
      if (timerId) clearInterval(timerId);
      body.textContent = '';
      var qs;
      try { qs = pick(); } catch (e) { body.appendChild(txt('p', 'quiz-error', e.message)); return; }
      var base = 'qz' + (++uid);
      var items = qs.map(function (q) {
        var it = prepare(q); it.topic = q.topic || defTopic; it.ok = null; it.inputs = []; return it;
      });
      var submitted = false, timerEl = null, endAt = 0;

      var list = el('div', 'q-list');
      var bar = el('div', 'quiz-bar');
      var status = txt('span', 'quiz-status', '');
      var sum = el('div', 'quiz-summary'); sum.setAttribute('aria-live', 'polite'); sum.tabIndex = -1;
      var retry = txt('button', 'btn', 'Recommencer'); retry.type = 'button';
      retry.addEventListener('click', start);
      var submit = null;

      function answeredCount() {
        return items.filter(function (it) { return it.answered || it.inputs.some(function (i) { return i.checked; }); }).length;
      }
      function updateStatus() {
        if (mode === 'exam' && !submitted) status.textContent = 'Répondu : ' + answeredCount() + ' sur ' + items.length;
        else {
          var done = items.filter(function (i) { return i.ok !== null; }).length;
          var good = items.filter(function (i) { return i.ok; }).length;
          status.textContent = 'Répondu : ' + done + ' sur ' + items.length + ' · Justes : ' + good;
        }
      }

      function reveal(it, node, fb, sel) {
        it.ok = grade(it, sel);
        it.sel = sel;
        it.inputs.forEach(function (inp, pos) {
          inp.disabled = true;
          var lab = inp.parentNode, chosen = sel.indexOf(pos) > -1, right = it.correct.indexOf(pos) > -1;
          lab.classList.remove('sel');
          if (right) lab.classList.add('is-correct');
          else if (chosen) lab.classList.add('is-wrong');
          var m = null;
          if (chosen && right) m = '✓ Votre réponse (juste)';
          else if (chosen) m = '✗ Votre réponse';
          else if (right) m = it.multi ? '✓ Bonne réponse, non cochée' : '✓ Bonne réponse';
          if (m) lab.appendChild(txt('span', 'mark', m));
        });
        var q = it.q, h = '<strong>' + (it.ok ? 'Juste.' : (sel.length ? 'Faux.' : 'Sans réponse.')) + '</strong> ';
        if (q.explain) h += q.explain;
        fb.innerHTML = h;
        fb.className = 'fb ' + (it.ok ? 'ok' : 'no');
        var u = safeUrl(q.cite);
        if (u) {
          var p = el('p', 'cite'); var a = txt('a', '', 'Source : Microsoft Learn');
          a.href = u; a.target = '_blank'; a.rel = 'noopener noreferrer'; p.appendChild(a); fb.appendChild(p);
        }
        if (q.disputed) fb.appendChild(txt('p', 'disputed', '⚠ Réponse contestée : les dumps donnent une réponse différente. Celle-ci suit la documentation Microsoft.'));
      }

      items.forEach(function (it, i) {
        var q = it.q, name = base + '-' + i;
        var fs = el('fieldset', 'q');
        var lg = el('legend', 'q-stem');
        lg.appendChild(txt('span', 'q-no', (i + 1) + '.'));
        if (q.domain) lg.appendChild(badge(q.domain));
        lg.appendChild(el('span', 'q-text', q.q));
        fs.appendChild(lg);
        if (it.multi) fs.appendChild(txt('p', 'q-hint', 'Plusieurs réponses possibles.'));
        var opts = el('div', 'opts');
        it.order.forEach(function (orig, pos) {
          var lab = el('label', 'opt');
          var inp = el('input'); inp.type = it.multi ? 'checkbox' : 'radio'; inp.name = name; inp.value = pos;
          lab.appendChild(inp); lab.appendChild(el('span', 'opt-text', q.options[orig]));
          opts.appendChild(lab); it.inputs.push(inp);
        });
        fs.appendChild(opts);
        var fb = el('div', 'fb'); if (mode === 'practice') fb.setAttribute('aria-live', 'polite');
        function selected() { var s = []; it.inputs.forEach(function (x, p) { if (x.checked) s.push(p); }); return s; }
        function doCheck() {
          var sel = selected();
          if (!sel.length) return;
          it.answered = true;
          reveal(it, fs, fb, sel);
          if (chk) chk.parentNode.removeChild(chk);
          record(it.topic, it.ok); updateStatus(); maybeFinish();
        }
        var chk = null;
        it.inputs.forEach(function (inp) {
          inp.addEventListener('change', function () {
            inp.parentNode.classList[inp.checked ? 'add' : 'remove']('sel');
            if (!it.multi) it.inputs.forEach(function (o) { if (o !== inp) o.parentNode.classList.remove('sel'); });
            if (mode === 'exam') updateStatus();
            else if (!it.multi) doCheck();
          });
        });
        if (mode === 'practice' && it.multi) {
          chk = txt('button', 'btn', 'Vérifier'); chk.type = 'button'; chk.addEventListener('click', doCheck);
          fs.appendChild(chk);
        }
        fs.appendChild(fb);
        list.appendChild(fs);
        it.node = fs; it.fb = fb;
      });

      function summary(note) {
        var tot = items.length, good = items.filter(function (i) { return i.ok; }).length;
        var pct = Math.round(100 * good / tot);
        var h = '<h3>Score : ' + good + ' / ' + tot + ' (' + pct + ' %)</h3>';
        if (note) h += '<p>' + esc(note) + '</p>';
        var by = {}, order = [], missed = [];
        items.forEach(function (it) {
          var d = normDomain(it.q.domain) || 'OTHER';
          if (!by[d]) { by[d] = { n: 0, ok: 0 }; order.push(d); }
          by[d].n++; if (it.ok) by[d].ok++;
          if (!it.ok && it.topic && missed.indexOf(it.topic) < 0) missed.push(it.topic);
        });
        if (mode === 'exam' || order.length > 1) {
          h += '<div class="table-wrap"><table><thead><tr><th>Domaine</th><th>Justes</th><th>Score</th></tr></thead><tbody>';
          order.forEach(function (d) {
            h += '<tr data-domain="' + esc(d) + '" data-pct="' + Math.round(100 * by[d].ok / by[d].n) + '"><td>' + esc(DNAME[d] || d) + '</td><td>' + by[d].ok + ' / ' + by[d].n + '</td><td>' + Math.round(100 * by[d].ok / by[d].n) + '%</td></tr>';
          });
          h += '</tbody></table></div>';
        }
        if (missed.length) h += '<p><strong>Sujets à revoir :</strong></p><ul class="missed">' + missed.map(function (t) { return '<li>' + esc(t.replace(/[-_]+/g, ' ')) + '</li>'; }).join('') + '</ul>';
        else h += '<p>Aucun sujet manqué. Bravo.</p>';
        sum.innerHTML = h;
        sum.setAttribute('data-good', good); sum.setAttribute('data-total', tot); sum.setAttribute('data-pct', pct);
        var perDomain = {}; order.forEach(function (d) { perDomain[d] = Math.round(100 * by[d].ok / by[d].n); });
        try { div.dispatchEvent(new CustomEvent('quiz:result', { bubbles: true, detail: { good: good, total: tot, pct: pct, perDomain: perDomain, missed: missed, mode: mode } })); } catch (e) {}
      }

      function maybeFinish() {
        if (mode === 'practice' && items.every(function (i) { return i.ok !== null; })) summary();
      }

      function doSubmit(auto) {
        if (submitted) return; submitted = true;
        if (timerId) clearInterval(timerId);
        items.forEach(function (it) {
          var sel = []; it.inputs.forEach(function (x, p) { if (x.checked) sel.push(p); });
          reveal(it, it.node, it.fb, sel);
          record(it.topic, it.ok);
        });
        if (submit) submit.parentNode.removeChild(submit);
        if (timerEl) timerEl.parentNode.removeChild(timerEl);
        bar.appendChild(retry); updateStatus();
        summary(auto ? 'Temps écoulé : l’examen a été rendu automatiquement.' : '');
        try { sum.focus(); sum.scrollIntoView({ block: 'nearest' }); } catch (e) {}
      }

      if (mode === 'exam') {
        if (mins > 0) {
          timerEl = txt('div', 'quiz-timer', ''); timerEl.setAttribute('role', 'timer');
          body.appendChild(timerEl);
          endAt = Date.now() + mins * 60000;
          var tick = function () {
            var left = Math.max(0, Math.round((endAt - Date.now()) / 1000));
            timerEl.textContent = 'Temps restant ' + Math.floor(left / 60) + ':' + ('0' + (left % 60)).slice(-2);
            if (left <= 60) timerEl.classList.add('low');
            if (left <= 0) doSubmit(true);
          };
          tick(); timerId = setInterval(tick, 1000);
        }
        submit = txt('button', 'btn primary', 'Rendre l’examen'); submit.type = 'button';
        submit.addEventListener('click', function () { doSubmit(false); });
        bar.appendChild(submit);
      } else bar.appendChild(retry);
      bar.insertBefore(status, bar.firstChild);
      updateStatus();
      body.appendChild(list); body.appendChild(bar); body.appendChild(sum);
    }

    if (src && !Array.isArray(root.PL300_BANK)) {
      body.textContent = 'Chargement des questions…';
      var s = document.createElement('script');
      s.src = src;
      s.onload = start;
      s.onerror = function () { body.textContent = ''; body.appendChild(txt('p', 'quiz-error', 'Impossible de charger la banque de questions : ' + src)); };
      document.head.appendChild(s);
    } else start();
  }

  function init() {
    var qs = document.querySelectorAll('.quiz');
    for (var i = 0; i < qs.length; i++) mount(qs[i]);
  }

  var api = { shuffle: shuffle, quotas: quotas, sampleBank: sampleBank, prepare: prepare, grade: grade, WEIGHTS: WEIGHTS, init: init };
  root.PL300Quiz = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
  }
})(typeof window !== 'undefined' ? window : globalThis);
