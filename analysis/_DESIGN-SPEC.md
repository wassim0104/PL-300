# Design spec — "PL-300 Studio" site redesign

Read this whole file. It is the contract shared by several agents working in parallel. Stay inside the files you own.

## Concept
The site should feel like a modern product, not a pile of documents. Its visual language comes from **the Power BI report canvas**: a cool grey canvas, white "visual" surfaces with a thin border and a title, a left pages pane, and data colours that carry meaning. The single memorable element is on the home page: **the exam matrix**, a conditional-formatting heatmap of the 36 lessons by domain, coloured by the learner's real progress. Conditional formatting is itself a PL-300 topic, so the hero is on-subject. Everything else stays quiet and disciplined.

Avoid: cream background + serif display + terracotta (the old look, now banned); identical rounded cards everywhere with the same shadow; gradient washes; ALL-CAPS tracked eyebrow labels; "→" appended to buttons; "A · B · C" meta strings; monospace for small labels.

## Tokens (CSS custom properties on :root; dark values under prefers-color-scheme AND [data-theme=dark]; [data-theme=light] forces light)
| Token | Light | Dark | Role |
|---|---|---|---|
| --canvas | #F1F3F6 | #11151B | page background (report canvas) |
| --surface | #FFFFFF | #1A2029 | panels, "visuals", header |
| --surface-2 | #F7F8FA | #212833 | subtle fills, table stripes, code |
| --ink | #18202B | #E7EBF0 | text |
| --muted | #5A6676 | #9AA6B5 | secondary text |
| --rule | #DCE1E8 | #2C3542 | borders |
| --focus | #2E6BE6 | #7FA6FF | focus ring, links |
| --prep | #16807F | #3FB8B5 | domain PREP (teal) |
| --model | #4A4FC2 | #8F93FF | domain MODEL (indigo) |
| --viz | #C98A0B | #F0B93A | domain VIZ (amber) |
| --manage | #B93A64 | #F07CA3 | domain MANAGE (rose) |
| --good / --bad | #1E8E4E / #C2362F | #4CC37F / #F07067 | quiz feedback |

Radii have hierarchy: 4px controls, 8px visuals/panels, 999px only for pills. One shadow token for floating things only (menus, header on scroll): `0 6px 24px rgba(16,24,40,.08)`. Panels use borders, not shadows.

## Type
- **UI + headings**: "Bricolage Grotesque" (Google Fonts, weights 400–800, opsz), fallback `ui-sans-serif, system-ui, sans-serif`. Headings tight (letter-spacing -0.01em to -0.02em), weight 700; h1 clamp(2rem, 4vw, 3rem).
- **Long-form reading (lesson/reference prose)**: "Source Serif 4" (400, 600, italic), fallback Georgia, serif; 1.0625rem/1.7; measure ≤ 70ch.
- **Code (DAX/M)**: "JetBrains Mono" 400/600, fallback ui-monospace. Code only, never labels.
- One `<link>` for all three (preconnect + css2 URL with display=swap). site.js injects it if missing. Pages must still look fine offline with the fallbacks.
- Labels in sentence case. Small labels use the UI face at 0.8rem, weight 600, muted colour.

## Language
Site chrome (header, sidebar, home page, progress page, auth pages, buttons) in **French**. Lesson and reference body content stays in English (exam terminology). Domain names in French chrome: Préparer les données · Modéliser · Visualiser & analyser · Gérer & sécuriser.

## Shell contract (owned by assets/site.js + assets/course.css)
Every page includes, in `<head>`: `<link rel="stylesheet" href="{root}assets/course.css">` and before `</body>`: `<script src="{root}assets/manifest.js"></script><script src="{root}assets/site.js"></script>` (plus progress.js / quiz.js / bank.js where needed, unchanged). `{root}` is `../` from subfolders, empty at the root.

`<body data-page="home|lesson|reference|practice|progress|auth|admin">` (lessons also `data-lesson="0003"`, reference `data-sheet="glossary"`).

site.js (no dependencies, works on file:// and https):
- computes the site root from its own `<script src>`;
- injects `<header class="site-header">`: brand "PL-300 Studio" (link home), primary nav: Parcours (index.html#parcours), Fiches (reference dropdown or index.html#fiches), Entraînement (practice/mixed.html), Examens blancs, Progression (progress.html); right side: theme toggle (light/dark/auto, saved in localStorage with try/catch, sets `data-theme` on <html>), user slot `<div class="site-user">` (filled from /api/me when not file:, with "Gérer les accès" for admin and "Se déconnecter"); a hamburger for < 900px opening a sheet menu. Not injected on `data-page="auth"`.
- on `lesson` pages injects `<nav class="site-side">`: the 36 lessons grouped by phase (from manifest), current one highlighted, done ones ticked (Progress.lessonsDone()), a thin progress bar (done/36) at the top; collapsible on < 1100px (button "Leçons"). On `reference` pages the side lists the sheets.
- adds `<footer class="site-footer">` (short: sources = Microsoft Learn, "Pose tes questions à ton professeur IA", link to exam overview).
- marks the active nav item; adds `body.has-shell` / `body.has-side` classes; header gets `.is-scrolled` after 8px scroll.
- Keyboard accessible, Esc closes menus, focus-visible ring with --focus.
- Removes existing in-page "← Home" back links only if they are the first child link of main (`a[href$="index.html"]` text starting with "←") to avoid duplication.

course.css must keep every existing class from assets/README.md working (callouts, badges, quiz, sidenotes, cards, lesson-nav, review-due, table-wrap, print styles) — restyled to the new tokens. Domain badges use the domain colours. Quiz options become clear clickable rows with good/bad states. Lesson layout: content column ≤ 70ch, sidenotes in a right rail ≥ 1280px, left side nav 280px when present.

## Shared components (in course.css, usable by every page)
`.btn` (primary: ink background on light / light on dark; `.btn.secondary` outline; `.btn.small`), `.panel` (white surface, 1px rule, 8px radius, optional `.panel-title` row like a Power BI visual header), `.pill`, `.stat` (number + label, used sparingly), `.grid-2/.grid-3` responsive, `.domain-dot.prep|model|viz|manage`, `.matrix` (heatmap grid: `.matrix .cell[data-level="0..4"]` coloured by mixing the domain colour with the surface via color-mix(), `.cell.done`), `.progress-bar > span` (width %).

## File ownership (do not edit files you don't own)
- Agent SHELL: assets/course.css, assets/site.js, assets/README.md, and the one-line includes / data-page attributes in lessons/*.html and reference/*.html (by script).
- Agent HOME: index.html only.
- Agent PRACTICE: practice/*.html and new progress.html.
- Agent AUTH: login.html, signup.html, admin.html, auth/auth.css, auth/auth.js (keep the form logic and API calls exactly; restyle and improve UX).
- Nobody edits: assets/quiz.js, assets/progress.js, assets/bank.js, assets/manifest.js, middleware.js, api/, lib/.

Page-specific CSS goes in a `<style>` block in that page, using the tokens above. Use the shared components first.

## Quality floor
Responsive to 360px with no horizontal page scroll; visible keyboard focus; prefers-reduced-motion respected; contrast AA in both themes; no console errors; works from file:// (auth bits silently skipped). One orchestrated motion moment at most (the home matrix filling in on load); no fade-up on every section.

## Verify
Screenshot your pages with the headless browser script in /workspace/jamel/analysis/qa/render.cjs (`node analysis/qa/render.cjs <outdir> <abs paths…>` prints errors and quiz counts) and look at the PNGs (desktop 1200px; for mobile copy the script and change the viewport to 375). Fix what looks wrong before you finish. Reply with files changed and a 3-line self-critique.
