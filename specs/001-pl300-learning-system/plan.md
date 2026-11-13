# Implementation Plan: PL-300 Learning System

**Branch**: `001-pl300-learning-system` | **Date**: 2026-11-11 | **Spec**: [spec.md](./spec.md)

## Summary

The system is a static, offline teaching workspace for PL-300. About 430 practice questions were analysed (`analysis/*.md`) and synthesised into one curriculum blueprint (`analysis/synthesis.md`): 69 concepts, 36 lessons in learning order, 48 traps, a disputed-answer register, a 6-week plan, and specs for the reference sheets. Developer agents render the blueprint into HTML pages that share one component library.

## Technical Context

- **Stack**: static HTML5 + one shared CSS file + vanilla JS. No build step, no CDN, works from `file://`.
- **Components** (`assets/`): `course.css` (Tufte-like, light and dark, print), `quiz.js` (practice and exam modes, timer, weighted mixed bank), `progress.js` (Leitner spaced review in localStorage with an in-memory fallback), `bank.js` (`window.PL300_BANK`). The contract is in `assets/README.md`.
- **Data**: quiz questions are JSON objects (`id, domain, topic, q, options, answer, multi, explain, cite, disputed, lesson`), 180 in total, with domain shares within ±5 points of the official weights.
- **Constraints**: every claim cites Microsoft Learn (verified URLs, §i); the dumps are never cited; option lengths are balanced.

## Structure

```
index.html                    home: mission, path, progress, links
lessons/0001-…0036-*.html     36 lessons (see analysis/lesson-index.md)
reference/*.html              glossary, concept-map, dax-patterns, power-query-m, visuals-chooser,
                              storage-modes-connectivity, security-and-sharing, common-mistakes,
                              study-plan, review-topics, exam-overview
practice/mixed.html           interleaved practice (domain filters, 10/20/40 questions)
practice/mock-exam-1.html     50 questions, 100 min, weighted 14/14/14/8
practice/mock-exam-2.html     second mock with a different random seed
assets/                       course.css, quiz.js, progress.js, bank.js, README.md
```

## Phases and agent split (each agent < 170k tokens)

| Phase | Work | Agent model | Input slice |
|---|---|---|---|
| 0 | Extract question analyses (9 slices) | haiku ×9 | one source file or line range each |
| 1 | Curriculum blueprint | opus | `analysis/*.md` + Microsoft Learn |
| 2 | Component library | sonnet | spec + contract |
| 3a | Rebalance quiz bank → `bank.json`, `bank.js` | sonnet | `bank-raw.json` |
| 3b | Reference sheets (2 batches of 5–6) | sonnet ×2 | `### Sheet:` slices |
| 4 | Lessons (6 batches × 6 lessons) | sonnet ×6 | `### Lesson` slices + `bank.json` filtered by lesson |
| 5 | Home + practice pages | sonnet | lesson index, sheet list |
| 6 | QA: links, quiz JSON, rendering screenshots | haiku + headless Chromium | built site |

Hand-off happens through files only (`analysis/_DEV-BRIEF.md`, `analysis/lesson-index.md`, `analysis/bank.json`). No agent reads the whole blueprint.

## Quality gates

1. Zero broken internal links (script check).
2. Every quiz block parses as JSON and follows the contract.
3. Correct answer is the longest option in ≤ 30% of questions; answer positions roughly uniform.
4. Every lesson has: scenario, worked example, traps, a primary source, citations, a quiz, the "ask your teacher" box, prev/next links.
5. Pages render without JS errors in headless Chromium (screenshot spot-check).
