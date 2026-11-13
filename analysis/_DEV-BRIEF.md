# Developer brief (sonnet agents)

You build pages for an offline PL-300 (Power BI Data Analyst) teaching workspace at /workspace/jamel.

## Read first (only these, plus your assigned slice)
1. /workspace/jamel/CLAUDE.md
2. /workspace/jamel/assets/README.md — the component catalogue, quiz JSON contract, and lesson skeleton. USE these components; don't invent new CSS unless it's truly missing (if so, add a small `<style>` block in the page and mention it in your final reply).
3. Your assigned slice of /workspace/jamel/analysis/synthesis.md (the curriculum blueprint). Find headings with Grep (`^### Lesson NNNN` / `^### Sheet:`), then Read only those line ranges. Do NOT read the whole file (242 KB) and do NOT read pl300/ sources.
4. If you need canonical wording, Grep the glossary section (`### Sheet: glossary`, lines ~1301–1431) for specific terms instead of reading it all.

## Rules
- Paths: lessons in `lessons/NNNN-slug.html`, sheets in `reference/<slug>.html`, practice in `practice/`, home `index.html`. From lessons/reference/practice, assets are at `../assets/`.
- Terminology: "semantic model" (not dataset), "Microsoft Entra ID" (not Azure AD).
- Cite only URLs listed in synthesis.md §i (Grep `^## i\.` and read that section, ~lines 1531–end). Never cite the dump/practice PDFs.
- Tufte-like: short, calm, scannable. Lessons ≤ 20 minutes reading + quiz.
- Cross-link: lessons link prev/next lessons and relevant `../reference/*.html` sheets; sheets link lessons. Reference slugs: glossary, concept-map, dax-patterns, storage-modes-connectivity, security-and-sharing, common-mistakes, study-plan, review-topics, power-query-m, visuals-chooser. Home is `../index.html`.
- Lesson file slugs come from the blueprint ("### Lesson NNNN — Title" + the slug field). If a slug is missing, derive dash-case from the title, max 5 words. The full lesson list with slugs is in /workspace/jamel/analysis/lesson-index.md — use it for all links.
- HTML-escape `<`, `>`, `&` inside quiz JSON strings that are meant to display literally (quiz text is inserted as HTML).
- Every page: `<meta charset="utf-8">`, viewport meta, `<title>` (short), back-to-home link.
- Keep your context lean (< 170k tokens). Write each file once, then verify with a quick Grep/Bash check (valid JSON in quiz blocks: extract with python3 -I and json.loads; links to existing or planned files).

When done, reply with: files written, anything you couldn't do, and any blueprint errors you noticed.
