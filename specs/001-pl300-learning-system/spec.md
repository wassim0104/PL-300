# Feature Specification: PL-300 Learning System

**Feature Branch**: `001-pl300-learning-system`

**Created**: 2026-11-11

**Status**: Draft

**Input**: User description: "PL-300 learning system: a static, offline teaching workspace that turns the PL-300 practice PDFs in pl300/ into a complete study system for passing the Microsoft Power BI Data Analyst exam. Include the most important concepts, learning order, common mistakes, practical examples, weekly study plan, review topics, and knowledge checks. Content derived from analysis of ~600 questions, cross-checked against Microsoft Learn; disputed dump answers flagged."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Know what to study and in what order (Priority: P1)

The learner opens a single home page and immediately sees the exam's four skill domains, the most important concepts ranked by how often they appear in the ~600 analysed questions, and a recommended learning order (prerequisites first).

**Why this priority**: Without a map and an order, the learner wastes time on low-yield topics. This alone is a usable MVP (a prioritized syllabus).

**Independent Test**: Open the home page and the concept map; confirm every concept is tagged with a domain, a frequency/priority, and a position in the learning order, and that following the order never requires a concept introduced later.

**Acceptance Scenarios**:

1. **Given** the workspace is opened offline, **When** the learner opens the home page, **Then** they see links to the mission, study plan, concept map, lessons, reference sheets and knowledge checks.
2. **Given** the concept map, **When** the learner looks up any concept, **Then** they see its domain, priority, prerequisites, and the lesson that teaches it.

---

### User Story 2 - Learn each concept through short lessons with practical examples (Priority: P1)

The learner works through short lessons in the recommended order. Each lesson teaches one skill with a practical, exam-style scenario, a worked example, the common traps for that topic, a recommended primary source, and an immediate-feedback knowledge check.

**Why this priority**: Lessons are the main unit of teaching; they convert the map into skills.

**Independent Test**: Complete any single lesson in under 20 minutes and answer its knowledge check, receiving instant per-question feedback with explanations.

**Acceptance Scenarios**:

1. **Given** a lesson, **When** the learner selects a quiz answer, **Then** they immediately see whether it is right and why, with a citation.
2. **Given** a lesson, **When** the learner finishes it, **Then** links point to the next lesson and to the related reference sheets.

---

### User Story 3 - Follow a weekly study plan to exam day (Priority: P2)

The learner follows a week-by-week plan that sequences lessons, practice, spaced review sessions, and mock exams, ending with exam readiness.

**Why this priority**: Converts content into a schedule; drives spacing for long-term retention.

**Independent Test**: Open the plan; every week lists specific lessons, review topics, practice counts and a checkpoint, and every lesson appears in some week.

**Acceptance Scenarios**:

1. **Given** the plan, **When** the learner opens week N, **Then** they see the lessons to do, which earlier topics to review, and the knowledge check to pass before moving on.

---

### User Story 4 - Avoid common mistakes (Priority: P2)

The learner consults a "common mistakes & traps" sheet distilled from recurring wrong answers and distractors across the analysed questions, each with the correct rule.

**Why this priority**: Exam questions are designed around confusable options; the traps list targets exactly those.

**Independent Test**: Every trap entry states the wrong belief, the correct rule, the domain, and a source link.

**Acceptance Scenarios**:

1. **Given** the traps sheet, **When** the learner reads an entry, **Then** they can tell which lesson covers it.

---

### User Story 5 - Test and review with mixed knowledge checks and a mock exam (Priority: P2)

The learner practices with an interleaved question bank across all domains and a timed mock exam, and gets a list of review topics based on what they got wrong.

**Why this priority**: Retrieval practice and interleaving build storage strength and expose weak domains.

**Independent Test**: Start a mixed practice session; questions span all four domains; at the end, a per-domain score and a list of weak topics with links to the relevant lessons are shown.

**Acceptance Scenarios**:

1. **Given** a completed session, **When** results are shown, **Then** missed topics are scheduled for review and visible on the next visit on the same device.
2. **Given** the mock exam, **When** the learner starts it, **Then** a timer runs and the score is shown only at the end.

---

### User Story 6 - Quick reference before the exam (Priority: P3)

The learner prints or skims compact reference sheets: glossary, DAX patterns, storage modes & connectivity, security/RLS & workspace roles, review topics.

**Why this priority**: Reference sheets are revisited far more often than lessons.

**Independent Test**: Each sheet prints cleanly on A4/Letter without cut-off content.

### Edge Cases

- A dump's stated answer contradicts Microsoft documentation → the system shows the documented answer and flags the item "disputed".
- A source question depends on an image exhibit missing from the text → the question is rewritten as a self-contained scenario or excluded.
- The learner's browser blocks local storage → quizzes still work; only progress tracking is lost, with a notice.
- The learner opens files directly from disk without internet → all pages render and quizzes work; only external citation links need connectivity.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a home page linking every lesson, reference sheet, the study plan, and knowledge checks.
- **FR-002**: The system MUST capture the learner's mission, trusted resources (official documentation first), and teaching notes as workspace documents.
- **FR-003**: The system MUST present the most important concepts, each tagged with exactly one of the four PL-300 domains, a priority derived from question frequency, and prerequisites.
- **FR-004**: The system MUST define a learning order in which no concept depends on one taught later.
- **FR-005**: Each lesson MUST teach one tightly scoped skill and include: a practical exam-style scenario, a worked example, topic traps, a primary source recommendation, citations, a knowledge check with immediate feedback, a reminder to ask the teacher agent questions, and navigation to previous/next lessons.
- **FR-006**: Quiz answer options MUST be of near-equal length, the correct option position MUST vary, and formatting MUST not hint at the answer.
- **FR-007**: The system MUST provide a common mistakes & traps sheet derived from the analysed questions.
- **FR-008**: The system MUST provide a weekly study plan covering all lessons, spaced reviews, and at least two mock exams.
- **FR-009**: The system MUST provide a review topics schedule with spaced intervals.
- **FR-010**: The system MUST provide an interleaved question bank covering all four domains, weighted roughly to the official domain weights, plus a timed mock exam.
- **FR-011**: The system MUST record quiz results on the learner's device and surface weak topics for review.
- **FR-012**: The system MUST provide reference sheets: glossary, DAX patterns, storage modes & connectivity, security/RLS & workspace roles; all printable.
- **FR-013**: Answers MUST be cross-checked against official documentation; disputed source answers MUST be flagged.
- **FR-014**: Question content MUST be rewritten in the system's own words (not verbatim copies of the dumps).
- **FR-015**: All pages MUST work offline from local files with a consistent look via shared components.

### Key Entities

- **Concept**: name, domain, priority, prerequisites, frequency in sources, lesson link, common traps.
- **Lesson**: number, title, skill, concepts taught, examples, knowledge check, sources, previous/next.
- **Question**: stem, options, correct answer, explanation, domain, topic, citation, disputed flag.
- **Trap**: wrong belief, correct rule, domain, related lesson.
- **Study Week**: week number, lessons, review topics, practice targets, checkpoint.
- **Learner Progress**: per-topic results and next review date (device-local).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of the top-frequency topics found in the source analysis are covered by at least one lesson and one knowledge-check question.
- **SC-002**: Every lesson can be completed in 20 minutes or less.
- **SC-003**: The question bank contains at least 150 original questions, with each domain's share within ±5 points of the official weighting.
- **SC-004**: The study plan reaches exam readiness in 6 weeks at about 6–8 hours per week.
- **SC-005**: The learner scores ≥ 80% on two consecutive mock exams before booking the exam (readiness gate; Microsoft's pass mark is 700/1000).
- **SC-006**: Zero broken internal links across the workspace.

## Assumptions

- Mission: the learner wants to pass PL-300 (to be confirmed with the learner).
- Learner starts at beginner-to-intermediate Power BI level; DAX is the likely weakest area.
- Study budget ≈ 6–8 hours per week over 6 weeks; plan can be compressed or extended.
- Official domain weights (Microsoft Learn PL-300 study guide): Prepare the data 25–30%, Model the data 25–30%, Visualize and analyze 25–30%, Manage and secure 15–20%.
- Language of the material: English (sources are English).
- Single learner, single device; no accounts or server.
- Source exhibits (images) are unavailable in text form.
