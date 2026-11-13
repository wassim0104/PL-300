// usage: node render.js out_dir file1.html file2.html ...
const { chromium } = require('/root/.npm/_npx/e41f203b7505f1fb/node_modules/playwright-core');
(async () => {
  const [out, ...files] = process.argv.slice(2);
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 375, height: 800 } });
  for (const f of files) {
    const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push('pageerror: ' + e.message));
    p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    await p.goto('file://' + f); await p.waitForTimeout(600);
    const info = await p.evaluate(() => ({ q: document.querySelectorAll('.quiz input').length, err: [...document.querySelectorAll('.quiz-error')].map(e => e.textContent), w: document.documentElement.scrollWidth }));
    const name = f.split('/').slice(-2).join('_').replace('.html', '.png');
    if (out !== '-') await p.screenshot({ path: out + '/' + name, fullPage: false });
    console.log(f.replace('/workspace/jamel/', ''), JSON.stringify(info), errs.length ? errs.join(' | ') : 'OK');
    await p.close();
  }
  await b.close();
})();
