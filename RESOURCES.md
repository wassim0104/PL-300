# PL-300 Power BI Data Analyst Resources

All Microsoft Learn URLs below were checked on 2026-11-11 (HTTP 200). The full verified list, with an alias for each page, is in `analysis/synthesis.md` §i.

## Knowledge

- [Study guide: PL-300 skills measured (Microsoft Learn)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-300)
  The authoritative outline and domain weights (April 2026 revision). Use for: deciding what's in scope and checking every lesson's coverage.
- [Exam page: PL-300](https://learn.microsoft.com/en-us/credentials/certifications/exams/pl-300/) · [Certification page](https://learn.microsoft.com/en-us/credentials/certifications/power-bi-data-analyst-associate/)
  Booking, renewal, exam format. Use for: logistics.
- [Free official practice assessment](https://aka.ms/PL300-PA)
  Microsoft's own practice questions. Use for: a final readiness check alongside the mock exams, since it is the cleanest question source available.
- [Course PL-300T00 learning paths](https://learn.microsoft.com/en-us/training/courses/pl-300t00) (e.g. [Prepare data for analysis](https://learn.microsoft.com/en-us/training/paths/prepare-data-power-bi/))
  Free self-paced modules with exercises. Use for: the primary source behind most lessons; do the hands-on labs if you have Power BI Desktop.
- [Power Query documentation](https://learn.microsoft.com/en-us/power-query/) — [profiling](https://learn.microsoft.com/en-us/power-query/data-profiling-tools), [merge](https://learn.microsoft.com/en-us/power-query/merge-queries-overview), [unpivot](https://learn.microsoft.com/en-us/power-query/unpivot-column), [query folding](https://learn.microsoft.com/en-us/power-query/query-folding-basics)
  Use for: the PREP domain, lessons 0004–0011.
- [Storage mode](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-storage-mode) · [DirectQuery](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-about) · [Composite models](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-composite-models) · [Direct Lake](https://learn.microsoft.com/en-us/fabric/fundamentals/direct-lake-overview)
  Use for: Import vs DirectQuery vs Dual vs Direct Lake decisions (lesson 0003).
- [Star schema guidance](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema) · [Model relationships](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand) · [Date tables](https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables)
  Use for: the MODEL domain, lessons 0012–0015.
- [DAX reference](https://learn.microsoft.com/en-us/dax/dax-overview) · [CALCULATE](https://learn.microsoft.com/en-us/dax/calculate-function-dax) · [Time intelligence functions](https://learn.microsoft.com/en-us/dax/time-intelligence-functions-dax)
  Use for: exact function semantics, lessons 0016–0021.
- [dax.guide](https://dax.guide/) and [SQLBI](https://www.sqlbi.com/) (Marco Russo & Alberto Ferrari)
  The best independent DAX references. Use for: understanding filter context and context transition at depth, beyond what the exam needs.
- [Data reduction techniques](https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction) · [Performance Analyzer](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-performance-analyzer)
  Use for: model optimisation (lesson 0022).
- [Visualization types](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a) · [Key influencers](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-influencers) · [Decomposition tree](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-decomposition-tree) · [Bookmarks](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-bookmarks)
  Use for: the VIZ domain, lessons 0023–0031.
- [Workspace roles](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces) · [Apps](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-distribute-apps) · [Build permission](https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-build-permissions) · [Row-level security](https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security) · [On-premises gateway](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem) · [Incremental refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/incremental-refresh-overview)
  Use for: the MANAGE domain, lessons 0032–0036.
- [Guy in a Cube](https://guyinacube.com/) (Adam Saxton & Patrick LeBlanc, YouTube)
  Short, practitioner-quality videos. Use for: seeing a feature demonstrated when docs are too abstract.
- `pl300/` practice PDFs (5 practice tests + a 301-question dump)
  Third-party, partly outdated, with some wrong answers (see `reference/common-mistakes.html#disputed`). Use for: seeing how questions are phrased only. Never use them as a source of truth.

## Wisdom (Communities)

- [r/PowerBI](https://www.reddit.com/r/PowerBI/)
  Large, active subreddit. Use for: exam experience reports and "how would you model this?" critique.
- [Microsoft Fabric Community — Power BI forums](https://community.fabric.microsoft.com/)
  The official forum, with Microsoft staff and Super Users. Use for: specific technical questions, DAX help, posting a PBIX for review.

## Gaps

- No verified Microsoft Learn page for **error bars**, the **Selection pane**, or **sync slicers** as standalone topics (their old URLs return 404). Use the analytics pane, bookmarks and slicers pages for now.
- Newer outline topics (Direct Lake, calculation groups, visual calculations, DAX query view, Copilot) are barely covered by the practice PDFs. Knowledge checks for them come from the docs only.
- The learner's community preference is unknown. Ask before pushing communities.
