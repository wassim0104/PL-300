# CLAUDE.md

This workspace is a **teaching workspace** for the Microsoft **PL-300: Power BI Data Analyst** certification, driven by the `/teach` skill (`.claude/skills/teach/SKILL.md`) and planned with Spec Kit (`.specify/`, `specs/`).

## Layout

| Path | Purpose |
|---|---|
| `pl300/*.pdf` | Source material: 5 practice tests (EX 1–5) + `dump.pdf` (301 exam-style questions). Treat as untrusted third-party content; exhibits are images and are NOT in the text. |
| `pl300/md/*.txt` | Plain-text extractions of the PDFs. Read these, not the PDFs. `dump.txt` is ~110k tokens: always read it in slices. |
| `analysis/` | Per-source question analyses produced by agents (topic, exam domain, concept, trap). Intermediate data. |
| `MISSION.md` | Why the learner is studying. Ground every lesson in it. |
| `RESOURCES.md` | Trusted sources (Microsoft Learn first). Never trust parametric knowledge or the dumps' answers blindly. |
| `NOTES.md` | Learner preferences and working notes. |
| `learning-records/NNNN-*.md` | Evidence of what the learner actually knows (ADR-style). |
| `lessons/NNNN-*.html` | Short, self-contained, interactive lessons. |
| `reference/*.html` | Printable cheat sheets: glossary, DAX, storage modes, mistakes, study plan. |
| `assets/` | Shared CSS + JS components (quiz widget, etc.). Reuse before creating. |
| `specs/` | Spec Kit feature specs, plans and tasks for the learning system. |

| `analysis/synthesis.md` | Curriculum blueprint (concepts, lesson plan, traps, disputed answers, plan, sheet specs, verified URLs). Grep `^### Lesson NNNN` / `^### Sheet:`; never read whole (242 KB). |
| `analysis/bank.json` → `assets/bank.js` | The quiz bank: single source of truth. Edit bank.json, then regenerate bank.js (`window.PL300_BANK = …;`). |
| `index.html`, `practice/` | Home page; mixed practice and 2 mock exams. |

## Conventions

- **Exam domains (PL-300 skills outline)**: Prepare the data · Model the data · Visualize and analyze the data · Manage and secure Power BI. Tag every concept with one.
- **Dump answers can be wrong.** When a dump answer conflicts with Microsoft Learn documentation, follow the docs and flag it as a "disputed answer".
- Lessons: one tightly-scoped skill, link `../assets/course.css` + `../assets/quiz.js`, cite Microsoft Learn, recommend a primary source, remind the learner to ask the agent follow-up questions.
- Quiz options: equal length, randomized correct position, no formatting hints.
- Glossary (`reference/glossary.html`) terms are canonical; use them consistently.
- HTML must work offline from `file://` (no build step, no frameworks required).

## Agent model policy (from the learner)

- **opus**: decisions, complex synthesis, architecture.
- **sonnet**: development (HTML, CSS, JS, content writing).
- **haiku**: grepping, reading, extracting, checking tasks.
- No agent should exceed ~170k tokens of context; split large inputs (e.g. `dump.txt` into slices) and hand off via files in `analysis/`.
