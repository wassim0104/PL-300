# Teaching notes

## Learner preferences
- Wants a *complete* system: concepts, learning order, common mistakes, practical examples, weekly plan, review topics, knowledge checks.
- Agent model policy: opus = decisions/architecture, sonnet = development, haiku = reading/grepping/checking. No agent > ~170k tokens; hand off via files.
- Grants permission to edit files automatically without asking (2026-11-11).
- Planning via Spec Kit (`specs/001-pl300-learning-system/`).

## Open questions for the learner
- Confirm mission (pass PL-300) and target exam date.
- Prior Power BI / Excel / SQL experience? (Unknown — lessons assume beginner-intermediate.)
- Weekly hours available?
- Interested in joining a community (r/PowerBI, Microsoft Fabric Community)?

## Working notes
- Build status (2026-11-11): 36 lessons, 11 reference sheets, mixed practice + 2 mock exams, home page. 180-question bank (`analysis/bank.json` → `assets/bank.js`) is the single source of truth; lessons load their 5 questions via `data-bank="lesson"`.
- Fact-check log: `analysis/factcheck-log.md`. Known soft spots to revisit if the learner asks: Query Diagnostics described loosely as a folding check (0011); L0015-q3 cites the sort-by-column page; no verified Learn URL for error bars / Selection pane / sync slicers.
- Lessons are deliberately short (~3–6 KB text). Expand a lesson only if the learner struggles with it.
- Next session: confirm mission + exam date + prior experience, then set the study-plan start date. Write the first learning record once the learner shows evidence (quiz results, explanations).
- Source analyses live in `analysis/`. The source PDFs' exhibits are images and missing from text.
- Dump answers flagged ⚠disputed must be checked against Microsoft Learn before use in quizzes.

## Site redesign (2026-11-13)
- "PL-300 Studio": Power BI report-canvas visual language; tokens and shell contract in `analysis/_DESIGN-SPEC.md` and `assets/README.md`. Chrome in French, lesson content in English.
- Shared shell injected by `assets/site.js` (header, lesson sidebar, theme toggle, user slot via /api/me) from `assets/manifest.js`.
- Home hero = exam matrix (lessons × domains coloured by progress). `progress.html` = report page incl. mock history (`pl300-mock-history`).
- `quiz.js` emits a `quiz:result` event and sets data-pct/data-domain on results; mock pages read those (not display text).
- QA: `node analysis/qa/render.cjs <out|-> <abs paths>` (desktop), `render-m.cjs` (375px), `python3 -I analysis/qa/links.py`.
