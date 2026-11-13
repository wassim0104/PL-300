# Lesson brief (sonnet lesson builders)

Read /workspace/jamel/analysis/_DEV-BRIEF.md first (general rules), then this.

## Inputs
- Your lessons' blueprint sections in /workspace/jamel/analysis/synthesis.md. Line ranges are in /workspace/jamel/analysis/lesson-index.md. Read ONLY those ranges.
- /workspace/jamel/assets/README.md: the lesson skeleton and the components.
- Look at ONE existing sheet for style consistency, e.g. /workspace/jamel/reference/dax-patterns.html (just skim the head and first ~80 lines).

## Each lesson = one file `lessons/NNNN-slug.html` (exact name from lesson-index.md)
Structure (use the README skeleton and classes):
1. Header: "Lesson NNNN", title, domain badge, est. minutes (≤ 20), the learning objective as "After this lesson you can …".
2. **Why this matters for the exam**: 2–3 sentences tying it to the mission (pass PL-300) and how often the topic showed up in practice questions.
3. **Recall first** (retrieval warm-up): 1–2 short questions on the previous lesson's idea, with answers in a `<details>` (skip for 0001).
4. **Core idea**: the blueprint key points, written as tight prose + a table or small diagram (inline SVG or CSS, both themes) where it helps. Margin notes (.sidenote) for citations and asides. Every factual claim links to a §i URL.
5. **Practical example**: the blueprint scenario as a worked example: business context → steps → DAX/M code (code blocks) → the result and why it works.
6. **Traps**: the lesson's traps as `.callout.trap` items, "Wrong belief → correct rule", and link to `../reference/common-mistakes.html`.
7. **Knowledge check**: do NOT embed questions. Use exactly:
   ```html
   <div class="quiz" data-quiz-id="lesson-NNNN" data-bank="lesson" data-lesson="NNNN"></div>
   ```
   with `<script src="../assets/progress.js" defer></script><script src="../assets/bank.js" defer></script><script src="../assets/quiz.js" defer></script>` in that order. Add a "Mark lesson done" button calling `Progress.markLesson('NNNN')` (guard if Progress is undefined).
8. **Primary source**: the blueprint's primary source (one link, why to read it, rough time) + extra citations.
9. `.ask` box: remind the learner to ask the teacher agent follow-up questions (suggest 2 concrete questions they could ask about this lesson).
10. **Related**: links to the relevant reference sheets and glossary terms.
11. `.lesson-nav`: prev / home / next (0001 has no prev; 0036 next → ../practice/mock-exam-1.html).

Keep each lesson short: aim for ~6–10 KB of HTML text content excluding boilerplate. Short, beautiful, one tangible win.

## Verify
- Run a quick python3 -I check that each file exists, contains `data-bank="lesson"` with the right number, links to bank.js, and that every local href resolves to an existing file or to a name in lesson-index.md / the reference slug list.
