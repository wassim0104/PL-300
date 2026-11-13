# assets/ component catalogue

Shared CSS and JS for every page. Vanilla, offline-capable, works from `file://`. No build step. Design name: "PL-300 Studio" (Power BI report-canvas look). The full design contract is `analysis/_DESIGN-SPEC.md`.

Files: `course.css` (design system), `site.js` (shell), `manifest.js` (site map, read by site.js/home/progress), `progress.js`, `quiz.js`, `bank.js`, `_demo.html` (open it to eyeball every component, in light and dark).

## Page contract
```html
<link rel="stylesheet" href="../assets/course.css">          <!-- in <head>; ../ from lessons/ reference/ practice/, empty at the root -->
<body data-page="lesson" data-lesson="0003">                  <!-- home|lesson|reference|practice|progress|auth|admin ; reference: data-sheet="glossary" -->
...
<script src="../assets/progress.js" defer></script>          <!-- as needed: progress.js, bank.js, quiz.js (unchanged) -->
<script src="../assets/manifest.js"></script><script src="../assets/site.js"></script>   <!-- before </body> -->
```
Page-specific CSS goes in a `<style>` block in the page and must use tokens, never literal colours. Chrome is French, lesson and reference body text stays English.

## Tokens (`:root`; dark under `prefers-color-scheme` and `[data-theme=dark]`; `[data-theme=light]` forces light)
| Token | Light | Dark | Role |
|---|---|---|---|
| `--canvas` `--surface` `--surface-2` | #F1F3F6 #FFF #F7F8FA | #11151B #1A2029 #212833 | page, panels/header, subtle fills and code |
| `--ink` `--muted` `--rule` | #18202B #5A6676 #DCE1E8 | #E7EBF0 #9AA6B5 #2C3542 | text, secondary text, borders |
| `--focus` | #2E6BE6 | #7FA6FF | links, focus ring |
| `--prep` `--model` `--viz` `--manage` | teal #16807F, indigo #4A4FC2, amber #C98A0B, rose #B93A64 | lighter variants | exam domains |
| `--good` `--bad` | #1E8E4E #C2362F | #4CC37F #F07067 | quiz feedback |
| `--shadow` | floating things only (menus, header on scroll) | | |
| `--r-ctl` 4px, `--r-panel` 8px | | | radii (pills 999px) |
| `--sans` Bricolage Grotesque, `--serif` Source Serif 4 (prose), `--mono` JetBrains Mono (code only) | | | fonts, with system fallbacks |

Derived tints (colour-mix, follow the theme): `--tip-*`, `--warn-*`, `--trap-*`, `--example-*`, `--source-*` (`-bg -bd -fg`) and `--prep-bg/-fg` (same for model, viz, manage). Legacy aliases kept for old inline SVG/CSS: `--bg --fg --link --card-bg --code-bg --accent`. On lesson pages site.js sets `body[data-domain]`, which defines `--dom` (the lesson's domain colour).

## Shell contract (`site.js`)
Injects, except on `data-page="auth"`: skip link, `header.site-header` (brand, nav Parcours / Fiches dropdown / Entraînement / Examens blancs dropdown / Progression, theme toggle auto-light-dark saved in `localStorage` `pl300.theme`, `.site-user` filled from `/api/me` over http(s) only, burger sheet below 900px) and `footer.site-footer`. Adds `body.has-shell`, `.has-side`, and `.is-scrolled` on the header. On `lesson` pages it adds `nav.site-side` (36 lessons grouped by phase from the manifest, current highlighted, done ones ticked from `Progress.lessonsDone()` or the localStorage fallback, thin progress bar, collapsible under 1100px); on `reference` pages the side lists the sheets. It removes a leading "<- Home" link in the page. Esc closes menus. It injects the Google Fonts link if missing; pages still render with the fallbacks offline. Everything is try/catch-guarded: no manifest or no Progress means the pieces that need them are skipped.

## Shared components
| Class | Use |
|---|---|
| `.btn` | Primary button (ink on light, light on dark). `.btn.secondary` outline, `.btn.small`. `.btn.primary` is the same as `.btn`. Works on `<a>` and `<button>`. |
| `.panel` + `.panel-title` | White surface, 1px rule, 8px radius; `.panel-title` is a Power BI style visual header row (put it first). |
| `.pill` | Small rounded label. |
| `.stat` | `<div class="stat"><b>12</b><span>Leçons terminées</span></div>`. Use sparingly. |
| `.grid-2`, `.grid-3` | Responsive grids (1 column on phones). |
| `.domain-dot.prep/.model/.viz/.manage` | Small domain colour square. |
| `.progress-bar > span` | Set `style="width:40%"`; colour follows `--dom` or `--focus`. |
| `.matrix` + `.cell` | Heatmap grid. `.matrix{--cols:12}`; `.cell` takes `prep/model/viz/manage` (class or `data-domain`), `data-level="0..4"` (domain colour mixed with the surface), `.done` adds a dot. A cell can be an `<a>`. |

## CSS classes (lessons and reference sheets)

| Class | Use |
|---|---|
| `.page` (or `<main>` / `<article>`) | Page column, 70ch. From 1280px a right rail opens for sidenotes. With `.site-side` the content sits right of a 280px pane. |
| `.lesson-header` | Wraps `.lesson-no` ("Lesson 0003", domain-coloured), `<h1>`, `.meta`. |
| `.meta` | Flex strip of `<span>`s: badge, minutes, skill. Also used inside `.card`. |
| `.badge.prep` `.model` `.viz` `.manage` | Domain pill, domain colour. Always put the domain name in the text. |
| `.sidenote` | Margin note in the right rail on wide screens, inline block otherwise and in print. Prefix "Note." is generated. |
| `.callout` + `.tip` `.warn` `.trap` `.example` `.source` | Boxed notes. Label generated ("Tip", "Heads up", "Exam trap", "Example", "Primary source"); override with `data-title`. |
| `.ask` | "Ask your teacher" reminder box. |
| `.lesson-nav` | Prev/next row: `<a class="prev">`, optional `<a class="home">`, `<a class="next">`, each with an optional `<small>`. |
| `.cards` > `.card` | Grid of clickable cards: `<h3><a href>`, `<p>`, `.meta`. |
| `.table-wrap` | Wraps wide tables; scrolls inside the box (`position:relative`). |
| `figure` / `figcaption` | Centered figure with caption. |
| `pre` (+ `data-lang`) | Code block with language label. Inline `code` is styled too. |
| `details > summary` | Boxed disclosure (used for "Show answer"). |
| `.muted`, `.small`, `.sr-only` | Utilities. |
| `.review-due` | See Progress renderer below. |
| `.quiz` and children | Styled by `quiz.js`; you only write `<div class="quiz">`. Options are clickable rows with good/bad states. |

Print is always light: header, side, footer, nav, buttons and quizzes are hidden, external link URLs are printed after the link text.

## Quiz widget (`quiz.js`)

```html
<div class="quiz" data-quiz-id="lesson-0003" data-topic="storage-modes"></div>
<script type="application/json" class="quiz-data">[ ...questions... ]</script>
```
The JSON script may sit inside the div or immediately after it. It is read once and removed from the DOM.

### Question object
```json
{"id":"q1","domain":"MODEL","topic":"storage-modes","q":"stem (simple HTML ok)",
 "options":["A","B","C","D"],"answer":2,"multi":false,
 "explain":"why (HTML ok)","cite":"https://learn.microsoft.com/...","disputed":false}
```
- `answer`: index into `options` (as written, before shuffle). For multi-select: array of indices and `"multi": true`.
- `domain`: `PREP` | `MODEL` | `VIZ` | `MANAGE` (case-insensitive). Shown as a badge; drives weighting and the exam domain table.
- `topic`: slug passed to `Progress.record`. Falls back to the div's `data-topic`.
- `q`, `options`, `explain` are inserted as HTML. Escape literal `<` as `&lt;`. JSON strings must escape `"` and newlines.
- `cite`: only `http(s)` URLs are linked. `disputed: true` adds "Disputed in source dumps".
- Options are shuffled when rendered. The correct positions live in JS memory only; no class, attribute or DOM order reveals them before answering. (View-source of the page still shows the JSON; this is a study tool, not a secure exam.)
- Quiz-writing rule from CLAUDE.md still applies: equal-length options, no formatting hints.

### Div attributes
| Attribute | Meaning |
|---|---|
| `data-quiz-id` | Identifier (informational, for your own bookkeeping). |
| `data-topic` | Default topic for questions without `topic`. |
| `data-mode` | `practice` (default) or `exam`. |
| `data-timer-minutes` | Exam only. Countdown, auto-submits at 0. |
| `data-bank` | `mixed` draws from `window.PL300_BANK`; `topic` draws all bank questions whose `topic` equals `data-topic`; `lesson` draws all bank questions whose `lesson` equals `data-lesson` (e.g. `data-bank="lesson" data-lesson="0003"`; load `../assets/bank.js` before `quiz.js`). **Lessons use `lesson`**, so the bank stays the single source of truth. |
| `data-count` | Questions to draw (default: all matching). |
| `data-domains` | Comma list, e.g. `PREP,MODEL`, to restrict the draw. |
| `data-weighted` | `false` for a uniform draw. Default weights: PREP 27.5, MODEL 27.5, VIZ 27.5, MANAGE 17.5 (largest-remainder allocation, capped by availability, then interleaved randomly). |
| `data-src` | e.g. `../assets/bank.js`. Loaded on demand if `window.PL300_BANK` is not already set. The file must do `window.PL300_BANK = [ ... ];`. |

### Modes
- **practice**: single-choice answers on selection with immediate feedback (correct/incorrect styling plus a text marker, explanation, citation, disputed note). Multi-select shows a Check button. Summary appears when all are answered. Retry reshuffles options (and redraws the sample for bank quizzes).
- **exam**: no feedback until Submit. Optional timer. Results show score, per-domain table and the missed topics list; every question is then revealed for review.

Every graded question calls `Progress.record(topic, correct)` (exam: at submit; unanswered counts as wrong). Feedback regions use `aria-live="polite"`; options are real radio/checkbox inputs inside labels.

## Progress (`progress.js`)

Leitner boxes 1..5 with intervals 1, 3, 7, 14, 30 days. Correct: box+1 (max 5). Wrong: box 1. Stored in `localStorage` key `pl300.progress.v1`. All storage access is try/catch with an in-memory fallback, plus a visible `.progress-notice` bar if storage fails.

| API (`window.Progress`) | Returns |
|---|---|
| `record(topic, correct)` | Updated topic entry. |
| `getTopics()` | `{topic: {seen, correct, box, nextReview: "YYYY-MM-DD"}}` |
| `dueTopics(today?)` | Array of `{topic, seen, correct, box, nextReview, accuracy}` with `nextReview <= today` (ISO date or Date; default today), most overdue first. |
| `weakTopics(n=5)` | Lowest-accuracy topics with accuracy under 70%. |
| `markLesson(id)` / `lessonsDone()` | Mark a lesson done; array of ids. |
| `reset()` | Clear everything. |
| `storageOk()` | `false` if falling back to memory. |

Review box (fills itself on page load; call `Progress.renderReviewDue()` to refresh):
```html
<div class="review-due" data-topic-links='{"storage-modes":"../lessons/0003-storage-modes.html"}'></div>
```
`data-topic-links` is optional. The table lists due topics and weak topics with accuracy, box and next review date.

## Lesson skeleton (copy-paste)

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Storage modes: Import, DirectQuery, Dual</title>
<link rel="stylesheet" href="../assets/course.css">
<script src="../assets/progress.js" defer></script>
<script src="../assets/bank.js" defer></script>
<script src="../assets/quiz.js" defer></script>
</head>
<body data-page="lesson" data-lesson="0003">
<main class="page">

<header class="lesson-header">
  <p class="lesson-no">Lesson 0003</p>
  <h1>Storage modes: Import, DirectQuery, Dual</h1>
  <p class="meta"><span class="badge model">Model</span><span>About 10 min</span><span>Skill: choose a storage mode</span></p>
</header>

<h2>Why this matters for the exam</h2>
<p>...ground it in MISSION.md...</p>

<h2>Core idea</h2>
<p>Text with a margin note.<span class="sidenote">Short aside.</span></p>

<h2>Practical example</h2>
<div class="callout example"><p>Scenario...</p></div>
<pre data-lang="DAX"><code>Total Sales = SUM ( Sales[Amount] )</code></pre>

<h2>Traps</h2>
<div class="callout trap"><p>What the exam writers do.</p></div>

<h2>Knowledge check</h2>
<div class="quiz" data-quiz-id="lesson-0003" data-topic="storage-modes"></div>
<script type="application/json" class="quiz-data">
[{"id":"q1","domain":"MODEL","topic":"storage-modes","q":"Stem?","options":["A","B","C","D"],"answer":1,"explain":"Why.","cite":"https://learn.microsoft.com/power-bi/","disputed":false}]
</script>

<h2>Primary source</h2>
<div class="callout source"><p><a href="https://learn.microsoft.com/power-bi/">Microsoft Learn: title</a></p></div>

<div class="ask">Stuck or curious? Ask me a follow-up question about this lesson.</div>

<nav class="lesson-nav" aria-label="Lesson navigation">
  <a class="prev" href="0002-xxx.html"><small>Previous</small>Title</a>
  <a class="next" href="0004-xxx.html"><small>Next</small>Title</a>
</nav>
</main>
<script src="../assets/manifest.js"></script><script src="../assets/site.js"></script>
</body>
</html>
```
Reference sheets use the same CSS (`../assets/course.css` from `reference/`). Use `data-page="reference" data-sheet="<slug>"` (slug as in the manifest). Print them with the browser.

## Caveats
- Chrome shares `localStorage` across `file://` pages; Firefox may isolate each file, so progress would not carry between pages there. Serving the folder (e.g. `python3 -m http.server`) avoids that.
- `:has()` is used only for a cursor nicety; everything works without it.
