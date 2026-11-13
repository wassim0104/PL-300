# Tasks: PL-300 Learning System

**Input**: [spec.md](./spec.md), [plan.md](./plan.md) · `[P]` = can run in parallel · `[USn]` = user story

## Phase 1: Setup and analysis

- [x] T001 Initialise `CLAUDE.md`, `MISSION.md`, `NOTES.md`
- [x] T002 Write spec and quality checklist (`specs/001-pl300-learning-system/`)
- [x] T003 [P] Extract the question analyses: `analysis/ex1.md`, `ex2.md`, `ex3.md`, `ex4-5.md`, `dump-a.md`…`dump-e.md`
- [x] T004 Synthesise the curriculum blueprint `analysis/synthesis.md` (concepts, order, lessons, traps, disputed items, plan, sheet specs, URLs)
- [x] T005 Write `RESOURCES.md` from the verified URLs

## Phase 2: Foundation (blocks all pages)

- [x] T006 [P] Component library: `assets/course.css`, `quiz.js`, `progress.js`, `README.md`, `_demo.html`
- [x] T007 Build `analysis/lesson-index.md` (file names and blueprint line ranges)
- [x] T008 Rebalance quiz options → `analysis/bank.json`, `assets/bank.js`

## Phase 3: Reference sheets [US1][US4][US6]

- [x] T009 [P] `reference/glossary.html`, `concept-map.html`, `dax-patterns.html`, `power-query-m.html`, `visuals-chooser.html`
- [x] T010 [P] `reference/storage-modes-connectivity.html`, `security-and-sharing.html`, `common-mistakes.html` (+ disputed register), `study-plan.html` [US3], `review-topics.html`, `exam-overview.html`

## Phase 4: Lessons [US2] (depends on T008)

- [x] T011 [P] Lessons 0001–0006
- [x] T012 [P] Lessons 0007–0012
- [x] T013 [P] Lessons 0013–0018
- [x] T014 [P] Lessons 0019–0024
- [x] T015 [P] Lessons 0025–0030
- [x] T016 [P] Lessons 0031–0036

## Phase 5: Practice and home [US5][US1]

- [x] T017 `practice/mixed.html`, `mock-exam-1.html`, `mock-exam-2.html`
- [x] T018 `index.html` (path, progress, review-due box, links to everything)

## Phase 6: QA and polish

- [x] T019 Link check across all HTML; fix broken links
- [x] T020 Quiz JSON check + answer-position and length statistics
- [x] T021 Headless render check (no console errors) + screenshots of a lesson, a sheet, a mock exam
- [x] T022 Update `NOTES.md` and `CLAUDE.md`; open the home page for the learner
