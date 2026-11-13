// Login / signup form handling. The server does all checks; this file posts the form
// and adds inline validation, a show/hide password toggle and a loading state.
(function () {
  function post(url, data) {
    return fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify(data) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { j._status = r.status; return j; }); });
  }
  function safeNext() {
    var n = new URLSearchParams(location.search).get('next') || '/';
    return /^\/(?!\/)/.test(n) ? n : '/'; // same-site paths only (no open redirect)
  }
  var form = document.querySelector('form[data-auth]');
  if (!form) return;
  var kind = form.getAttribute('data-auth');
  var msg = form.querySelector('.auth-msg'), btn = form.querySelector('button[type="submit"]');
  var label = btn.querySelector('.au-btn-label'), idleText = label ? label.textContent : btn.textContent;
  function show(t, cls) { msg.textContent = t; msg.className = 'auth-msg ' + (cls || ''); }

  // Show / hide password
  Array.prototype.forEach.call(form.querySelectorAll('.au-eye'), function (b) {
    b.addEventListener('click', function () {
      var input = document.getElementById(b.getAttribute('aria-controls'));
      var on = input.type === 'password';
      input.type = on ? 'text' : 'password';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.setAttribute('aria-label', on ? 'Masquer le mot de passe' : 'Afficher le mot de passe');
      b.classList.toggle('is-on', on);
    });
  });

  // Inline validation (the server remains the authority)
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function check(input) {
    var v = input.value, e = '';
    if (input.name === 'email') {
      if (!v.trim()) e = 'Saisis ton adresse e-mail.';
      else if (!EMAIL_RE.test(v.trim())) e = 'Cette adresse e-mail n’est pas valide.';
    } else if (input.name === 'password') {
      if (!v) e = 'Saisis ton mot de passe.';
      else if (kind === 'signup' && v.length < 10) e = 'Au moins 10 caractères (' + v.length + '/10).';
    } else if (input.name === 'password2') {
      if (!v) e = 'Confirme ton mot de passe.';
      else if (v !== form.password.value) e = 'Les deux mots de passe ne correspondent pas.';
    }
    var field = input.closest('.au-field'), out = field && field.querySelector('.au-error');
    if (out) out.textContent = e;
    input.setAttribute('aria-invalid', e ? 'true' : 'false');
    if (field) field.classList.toggle('has-error', !!e);
    return !e;
  }
  var inputs = Array.prototype.slice.call(form.querySelectorAll('input[name="email"],input[name="password"],input[name="password2"]'));
  inputs.forEach(function (i) {
    i.addEventListener('blur', function () { if (i.value || i.dataset.touched) { i.dataset.touched = '1'; check(i); } });
    i.addEventListener('input', function () {
      if (i.dataset.touched || i.getAttribute('aria-invalid') === 'true') check(i);
      if (i.name === 'password' && form.password2 && form.password2.dataset.touched) check(form.password2);
      if (msg.className.indexOf('err') > -1) show('');
    });
  });

  function setLoading(on) {
    btn.disabled = on; btn.classList.toggle('is-loading', on);
    if (label) label.textContent = on ? (kind === 'login' ? 'Connexion…' : 'Envoi…') : idleText;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var okAll = true, first = null;
    inputs.forEach(function (i) { i.dataset.touched = '1'; if (!check(i)) { okAll = false; first = first || i; } });
    if (!okAll) { show(''); first.focus(); return; }
    var data = { email: form.email.value, password: form.password.value };
    if (kind === 'signup') data.name = form.name.value;
    setLoading(true); show('');
    post('/api/' + kind, data).then(function (j) {
      setLoading(false);
      if (!j.ok) return show(j.error || 'Une erreur est survenue, réessaie.', 'err');
      if (kind === 'login') { setLoading(true); location.href = safeNext(); return; }
      var done = document.querySelector('.au-done');
      if (j.status === 'approved') {
        show('Compte administrateur créé. Redirection vers la connexion…', 'ok');
        setTimeout(function () { location.href = '/login.html'; }, 1200);
      } else {
        form.reset();
        if (done) { form.hidden = true; var alt = document.querySelector('.au-alt'); if (alt) alt.hidden = true; done.hidden = false; done.focus(); }
        else show('Demande envoyée. L’administrateur doit valider ton compte avant ta première connexion.', 'ok');
      }
    }).catch(function () { setLoading(false); show('Connexion au serveur impossible, réessaie.', 'err'); });
  });
})();
