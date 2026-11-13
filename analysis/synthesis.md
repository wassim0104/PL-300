# PL-300 Curriculum Blueprint (synthesis)

> The one source of truth for the developer agents that build `lessons/`, `reference/` and `practice/`.
> Built from 9 analyses in `analysis/` (428 classified questions) and checked against the **official PL-300 study guide (skills measured as of April 20, 2026)** and Microsoft Learn docs. Dump answers that disagree with the docs are listed in §e and **the docs win**.
> Author: curriculum architect (opus), 2026-11-11.

**How to use this file (developer agents):** every lesson is under a heading `### Lesson NNNN — <title>` and every reference sheet is under `### Sheet: <slug>`. Grep for your heading and read only that part, plus §d (traps) and the glossary sheet for wording. Terms: say **semantic model**, not "dataset" (the current Microsoft name). Say **Microsoft Entra ID**, not "Azure AD". Quiz JSON objects are written one per line. Copy them into the lesson's quiz block as they are (see `assets/README.md` for the contract). Only use the URLs listed in §i (all checked: HTTP 200 on 2026-11-11).

---

## a. Corpus statistics

### a.1 Questions per domain vs official weights

| Domain | Questions | Share of corpus | Official weight (Apr 2026) | Gap |
|---|---|---|---|---|
| PREP: Prepare the data | 93 | 21.7% | 25–30% | under-represented, so add PREP questions to the bank |
| MODEL: Model the data | 127 | 29.7% | 25–30% | on target |
| VIZ: Visualize and analyze | 138 | 32.2% | 25–30% | over-represented, mostly key influencers, slicers and themes |
| MANAGE: Manage and secure | 70 | 16.4% | 15–20% | on target |
| **Total classified** | **428** | 100% | | plus 2 unclassifiable and 1 orphan chunk |

Sources: ex1 30, ex2 34, ex3 29, ex4-5 36, dump-a 75, dump-b 73, dump-c 75, dump-d 35, dump-e 41. The extractors flagged 25 items as ⚠disputed. Another 13 items have no answer stated in the source, because the exhibit is missing.

**What this means for the bank:** the lesson questions (36 lessons × 5) are spread by lesson domain: PREP 50 (27.8%), MODEL 55 (30.6%), VIZ 45 (25.0%), MANAGE 30 (16.7%). Every domain is within ±5 points of the official weight (SC-003). The mock exams draw 14 PREP, 14 MODEL, 14 VIZ and 8 MANAGE out of each 50.

### a.2 Top 40 topics (synonymous tags merged)

Merge rules: slicer-sync→slicers. data-reduction/model-size/column-cardinality/query-load→model-size-reduction. power-query-merge/append-queries/merge-join-types/denormalization→merge-append. split-column/date-parsing/date-transform→split-parse. row-context/context-transition/RELATED/AVERAGEX→row-filter-context. KPI-visual/kpi-visual→kpi-gauge. analyze-in-excel/dataset-permissions/build-permission/shared-datasets→build-permission. native-query/query-performance→query-folding. Dashboard and report themes→themes. data-cleaning/error-handling/data-types/null-handling/replace-values→cleaning-errors-types.

| # | Topic | Domain | n | Lesson |
|---|---|---|---|---|
| 1 | time-intelligence (incl. quick measures) | MODEL | 28 | 0019 |
| 2 | model-size-reduction / cardinality | MODEL | 22 | 0022 |
| 3 | RLS | MANAGE | 19 | 0036 |
| 4 | key-influencers | VIZ | 15 | 0031 |
| 5 | data-sources / connectors | PREP | 13 | 0002 |
| 6 | merge-append | PREP | 11 | 0008 |
| 7 | split-parse columns | PREP | 11 | 0007 |
| 8 | gateway | MANAGE | 10 | 0035 |
| 9 | cleaning-errors-types | PREP | 10 | 0006 |
| 10 | relationships (cardinality, direction) | MODEL | 10 | 0013 |
| 11 | row-filter-context / context transition | MODEL | 10 | 0018 |
| 12 | data-profiling | PREP | 9 | 0005 |
| 13 | workspace-roles | MANAGE | 9 | 0032 |
| 14 | query-folding / native query | PREP | 9 | 0011 |
| 15 | calc-column-vs-measure | MODEL | 9 | 0016 |
| 16 | slicers (incl. sync) | VIZ | 9 | 0025 |
| 17 | reference-lines / analytics pane | VIZ | 9 | 0030 |
| 18 | build-permission / Analyze in Excel | MANAGE | 8 | 0032 |
| 19 | themes (report + dashboard) | VIZ | 8 | 0024 |
| 20 | storage-modes | MODEL→PREP | 7 | 0003 |
| 21 | unpivot | PREP | 7 | 0009 |
| 22 | role-playing-dimension | MODEL | 7 | 0014 |
| 23 | visual-interactions | VIZ | 7 | 0026 |
| 24 | chart-selection | VIZ | 7 | 0023 |
| 25 | kpi-gauge | VIZ | 7 | 0023 |
| 26 | apps / sharing | MANAGE | 6 | 0033 |
| 27 | CALCULATE | MODEL | 6 | 0017 |
| 28 | conditional-formatting | VIZ | 6 | 0024 |
| 29 | alerts / subscriptions | MANAGE | 6 | 0034 |
| 30 | accessibility | VIZ | 6 | 0028 |
| 31 | star-schema | MODEL | 5 | 0012 |
| 32 | refresh (scheduled/incremental) | MANAGE | 5 | 0035 |
| 33 | performance-analyzer | VIZ→MODEL | 5 | 0022 |
| 34 | date-table / auto date-time | MODEL | 5 | 0014 |
| 35 | mobile-layout | VIZ | 5 | 0028 |
| 36 | forecast / anomaly detection | VIZ | 5 | 0030 |
| 37 | scatter / clustering / play axis | VIZ | 5 | 0030 |
| 38 | export settings | MANAGE→VIZ | 5 | 0029 |
| 39 | topn-rank | MODEL | 4 | 0018 |
| 40 | sensitivity-labels | MANAGE | 4 | 0033 |

Also seen (≤4): dashboards-tiles 4, tooltips 4, group-by 4, calculated-tables 4, parameters 3, Q&A 3, personalize-visuals 3, paginated-reports 3, data-category 3, decomposition-tree 2, bookmarks 2, dataflows 2, semi-additive 2, drillthrough 1, incremental-refresh 1, lineage 1, certification 1.

### a.3 Coverage gaps: in the April 2026 outline, rare or absent in the corpus

The dumps are older than the current outline. These objectives get lessons anyway, because the outline says so: **Direct Lake** (0003), **calculation groups** and **visual calculations** (0021), **DAX query view** (0022), **Copilot** for narrative, report pages and model summaries (0031), **error bars** (0030), **automatic page refresh** (0029), **item-level access** (0032), **reference vs duplicate queries** (0011), **creating keys for relationships** (0012). The extra bank questions for these (§h, practice bank) must come from docs only.

### a.4 Data-quality concerns
- Exhibits (images) are missing everywhere. 13 answers are not in the text, and about 10 more were rebuilt from explanations.
- Dump `Question: N` labels are out of place, so numbers in dump-b to dump-e are approximate.
- Repeated items inflate counts. The "2018-12-31 at 08:59" split appears 6 times, "remove unused columns from a 550 MB PBIX" 4 times, and slicer sync about 5 times.
- The dumps use old names (dataset, Azure AD, Power BI Premium only, "Data alerts on tiles only"). Lessons use current names.
- Some dump explanations contradict their own keyed answers (see §e).

---

## b. Concept map (69 concepts)

Priority: **P1** = high frequency and a core outline bullet. **P2** = medium. **P3** = low frequency or a new outline item.

| ID | Concept | Domain | Pri | Prereqs | Lesson |
|---|---|---|---|---|---|
| C01 | Power BI ecosystem: Desktop, service, semantic model, report, dashboard, app, workspace | MANAGE | P1 | — | 0001 |
| C02 | Connectors and file sources (Folder, SharePoint folder, Web, Dataverse, ODBC) | PREP | P1 | C01 | 0002 |
| C03 | Connect to a shared semantic model (live connection) | PREP | P2 | C01 | 0002 |
| C04 | Storage modes: Import, DirectQuery, Dual, Direct Lake, live, composite | PREP | P1 | C02 | 0003 |
| C05 | Data source settings, credentials, privacy levels | PREP | P2 | C02 | 0004 |
| C06 | Power Query parameters | PREP | P2 | C05 | 0004 |
| C07 | Data profiling (quality, distribution, profile; 1,000-row default) | PREP | P1 | C02 | 0005 |
| C08 | Data types, errors, nulls and import errors | PREP | P1 | C07 | 0006 |
| C09 | Split, extract, column from examples, text dates | PREP | P1 | C08 | 0007 |
| C10 | Merge queries and join kinds (incl. anti joins) | PREP | P1 | C08 | 0008 |
| C11 | Append queries | PREP | P1 | C08 | 0008 |
| C12 | Unpivot, pivot, transpose | PREP | P1 | C08 | 0009 |
| C13 | Semi-structured data (JSON, lists, records) to table | PREP | P2 | C12 | 0009 |
| C14 | Group by and aggregate rows | PREP | P2 | C08 | 0010 |
| C15 | Query folding and native queries | PREP | P1 | C10, C14 | 0011 |
| C16 | Load configuration; reference vs duplicate queries | PREP | P1 | C10 | 0011 |
| C17 | Dataflows for reusable preparation | PREP | P3 | C16 | 0011 |
| C18 | Star schema: fact and dimension tables, keys | MODEL | P1 | C10, C11 | 0012 |
| C19 | Relationship cardinality | MODEL | P1 | C18 | 0013 |
| C20 | Cross-filter direction (single vs both) | MODEL | P1 | C19 | 0013 |
| C21 | Active vs inactive relationships | MODEL | P1 | C19 | 0013 |
| C22 | Common date table, mark as date table, auto date/time | MODEL | P1 | C18 | 0014 |
| C23 | Role-playing dimensions (USERELATIONSHIP, copies) | MODEL | P1 | C21, C22 | 0014 |
| C24 | Table/column properties: sort by column, data category, summarization, hierarchies, synonyms | MODEL | P2 | C18 | 0015 |
| C25 | Calculated column vs measure; implicit vs explicit | MODEL | P1 | C18 | 0016 |
| C26 | Calculated tables (CALENDAR, GENERATESERIES, SUMMARIZE) | MODEL | P2 | C25 | 0016 |
| C27 | CALCULATE and filter context | MODEL | P1 | C25 | 0017 |
| C28 | ALL / REMOVEFILTERS / ALLSELECTED / KEEPFILTERS; % of total | MODEL | P1 | C27 | 0017 |
| C29 | Iterators (SUMX, AVERAGEX, MAXX, MINX) | MODEL | P1 | C25 | 0018 |
| C30 | Context transition; RELATED / RELATEDTABLE | MODEL | P1 | C27, C29 | 0018 |
| C31 | Counting and ranking: COUNTROWS, DISTINCTCOUNT, TOPN, RANKX | MODEL | P2 | C29 | 0018 |
| C32 | Time intelligence (YTD, SAMEPERIODLASTYEAR, DATEADD, windows) | MODEL | P1 | C22, C27 | 0019 |
| C33 | Semi-additive measures (balances, headcount, inventory) | MODEL | P2 | C32 | 0020 |
| C34 | Basic statistical functions; quick measures | MODEL | P2 | C27 | 0020 |
| C35 | Calculation groups | MODEL | P3 | C32 | 0021 |
| C36 | Visual calculations | VIZ | P3 | C27 | 0021 |
| C37 | Data reduction and column cardinality | MODEL | P1 | C18 | 0022 |
| C38 | Performance Analyzer and DAX query view | MODEL | P1 | C27 | 0022 |
| C39 | Reducing granularity; aggregations | MODEL | P2 | C37 | 0022 |
| C40 | Selecting a visual (incl. card, KPI, gauge) | VIZ | P1 | C25 | 0023 |
| C41 | Paginated vs Power BI report | VIZ | P2 | C40 | 0023 |
| C42 | Report themes and dashboard themes | VIZ | P2 | C40 | 0024 |
| C43 | Conditional formatting; number formats | VIZ | P1 | C40 | 0024 |
| C44 | Filter scopes (visual/page/report) and Top N | VIZ | P1 | C40 | 0025 |
| C45 | Slicers and sync slicers | VIZ | P1 | C44 | 0025 |
| C46 | Edit visual interactions | VIZ | P1 | C44 | 0026 |
| C47 | Drill down vs drillthrough | VIZ | P1 | C24, C46 | 0026 |
| C48 | Tooltips (field and report-page tooltips) | VIZ | P2 | C40 | 0026 |
| C49 | Bookmarks, buttons, page/bookmark navigators | VIZ | P2 | C45 | 0027 |
| C50 | Selection pane: layer order, visibility, grouping | VIZ | P3 | C49 | 0027 |
| C51 | Accessibility (alt text, tab order, colour-independent cues) | VIZ | P2 | C43, C50 | 0028 |
| C52 | Mobile layouts (report and dashboard) | VIZ | P2 | C40 | 0028 |
| C53 | Personalize visuals; export settings | VIZ | P2 | C40 | 0029 |
| C54 | Automatic page refresh | VIZ | P3 | C04 | 0029 |
| C55 | Analytics pane: reference lines, forecast, error bars; anomaly detection | VIZ | P1 | C40 | 0030 |
| C56 | Grouping, binning, clustering | VIZ | P2 | C40 | 0030 |
| C57 | Key influencers | VIZ | P1 | C25 | 0031 |
| C58 | Decomposition tree | VIZ | P2 | C57 | 0031 |
| C59 | Q&A, smart narrative and Copilot | VIZ | P2 | C24 | 0031 |
| C60 | Workspace roles | MANAGE | P1 | C01 | 0032 |
| C61 | Sharing, Build/Reshare and item-level access | MANAGE | P1 | C60 | 0032 |
| C62 | Apps and distribution methods | MANAGE | P1 | C60 | 0033 |
| C63 | Endorsement (promoted, certified) | MANAGE | P3 | C62 | 0033 |
| C64 | Sensitivity labels | MANAGE | P2 | C62 | 0033 |
| C65 | Dashboards and tiles (pin visual, pin live page) | MANAGE | P2 | C40 | 0034 |
| C66 | Data alerts and subscriptions | MANAGE | P2 | C65 | 0034 |
| C67 | On-premises data gateway | MANAGE | P1 | C04 | 0035 |
| C68 | Scheduled and incremental refresh | MANAGE | P1 | C67, C06 | 0035 |
| C69 | RLS (static/dynamic, groups, testing) and OLS | MANAGE | P1 | C20, C60 | 0036 |

Check: every prerequisite ID is lower than the concept that needs it, or is taught in an earlier lesson. So the learning order never uses a concept before it is taught (FR-004).

---

## c. Learning order and lesson plan

**Order and why:** start with the platform (0001), so later words like semantic model, workspace and app make sense. Then **Power Query** (0002–0011): the exam calls it "Prepare", and clean, well-shaped tables come before any model. **Storage modes** sit in 0003, early, because the April 2026 outline puts "choose between Direct Lake, DirectQuery and Import" under Prepare, and the choice shapes everything after it. Then **modelling** (0012–0016), before **DAX** (0017–0021), since DAX only makes sense once filter propagation through relationships is clear. **Performance** (0022) ends the model block, because it pulls together columns, cardinality and DAX. Then **visuals and report design** (0023–0029), **analysis and AI** (0030–0031), and finally **service and security** (0032–0036). RLS comes last because it needs relationships (0013), DAX filters (0017) and workspace roles (0032).

Every lesson: ≤ 20 minutes, one skill, built as explain, then worked example, then traps, then a 5-question check. Interleaving happens in `practice/mixed.html` and in the spaced reviews (§f), never inside one lesson.

### Lesson 0001 — The Power BI landscape and the PL-300 exam
- **Slug:** `0001-power-bi-landscape` · **Domain:** MANAGE · **Concepts:** C01 · **Time:** 15 min
- **Objective:** Given a business need, name the Power BI item that meets it (semantic model, report, dashboard, app, workspace) and the tool where it is built (Desktop or service).
- **Key points:**
  - Power BI Desktop is the free Windows authoring tool. It holds Power Query (Get/Transform), the model (Model view), DAX, and report pages. It saves a .pbix file.
  - Publishing a .pbix to a **workspace** in the Power BI service creates two items: a **semantic model** (formerly "dataset") and a **report**.
  - A **report** has one or more pages, is interactive, and is built on one semantic model. A **dashboard** is a single canvas of pinned **tiles**, exists only in the service, and can show visuals from several reports.
  - An **app** packages chosen items from one workspace for consumers, who cannot edit them.
  - A **workspace** is the place where people work together. Access is given through roles: Admin, Member, Contributor, Viewer.
  - Licences: you need Pro or Premium Per User to share content in shared capacity. Free-licence users can view content only when it sits in Premium or Fabric capacity (F64 or larger).
  - The exam has four domains: Prepare 25–30%, Model 25–30%, Visualize and analyze 25–30%, Manage and secure 15–20%. You need 700/1000 to pass. Question types include case studies, Yes/No series, drag-and-drop and hotspot.
  - "Yes/No series" questions repeat one scenario with different solutions. Judge each solution on its own.
- **Example:** A sales director wants one screen with KPIs from the Finance and Sales reports, available on her phone. Answer: pin the visuals to a **dashboard** in the service. One report could not hold visuals from two reports.
- **Traps:**
  - Thinking dashboards can be built in Desktop. They are service-only.
  - Treating a report and a dashboard as the same thing. A dashboard has one page, is made of pinned tiles, and can span several reports.
  - Reading old exam text that says "dataset". It now means semantic model.
- **Knowledge check:**
```json
{"id":"q1","domain":"MANAGE","topic":"power-bi-ecosystem","q":"Which item can only be created in the Power BI service, not in Power BI Desktop?","options":["A report page","A dashboard","A semantic model","A calculated table"],"answer":1,"multi":false,"explain":"Dashboards are single-canvas collections of pinned tiles that exist only in the service; reports, models and calculated tables are authored in Desktop.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-create","disputed":false}
{"id":"q2","domain":"MANAGE","topic":"power-bi-ecosystem","q":"Publishing a .pbix file that contains data and visuals to a workspace creates which items?","options":["A dashboard and an app","An app and a dataflow","A semantic model and a report","A report and a dashboard"],"answer":2,"multi":false,"explain":"Publishing creates a semantic model (data, relationships, measures) and a report bound to it. Dashboards and apps are created separately in the service.","cite":"https://learn.microsoft.com/en-us/power-bi/fundamentals/service-basic-concepts","disputed":false}
{"id":"q3","domain":"MANAGE","topic":"power-bi-ecosystem","q":"Consumers must view curated reports without being able to edit them. Which item packages content for them?","options":["An app","A workspace","A template file","A dataflow"],"answer":0,"multi":false,"explain":"An app bundles selected workspace content for read-only consumption by chosen audiences.","cite":"https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-distribute-apps","disputed":false}
{"id":"q4","domain":"MANAGE","topic":"power-bi-ecosystem","q":"A single canvas must show tiles that come from three different reports. What should you build?","options":["A report with three pages","A paginated report","A report with bookmarks","A dashboard in the service"],"answer":3,"multi":false,"explain":"A dashboard can hold pinned tiles from many reports; a report is bound to one semantic model.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-create","disputed":false}
{"id":"q5","domain":"MANAGE","topic":"exam-domains","q":"Which PL-300 skill area carries the lowest official weight?","options":["Prepare the data","Model the data","Manage and secure Power BI","Visualize and analyze the data"],"answer":2,"multi":false,"explain":"Manage and secure is weighted 15–20%; the other three areas are 25–30% each.","cite":"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-300","disputed":false}
```
- **Primary source:** [PL-300 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-300) · **Extra:** [Power BI overview](https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview), [Service basic concepts](https://learn.microsoft.com/en-us/power-bi/fundamentals/service-basic-concepts)

### Lesson 0002 — Connect to the right data source
- **Slug:** `0002-get-data-connectors` · **Domain:** PREP · **Concepts:** C02, C03 · **Time:** 18 min
- **Objective:** Pick the right connector for a source description, including files stored in OneDrive/SharePoint and existing published semantic models.
- **Key points:**
  - **Folder** connector: lists every file in a local or network folder, with metadata columns (Name, Extension, Date modified, Attributes, Folder Path) and a binary **Content** column. Combine files to load the data. Remove Content to keep only metadata.
  - **SharePoint folder**: the same idea for a SharePoint or OneDrive for work site URL. Filter on Folder Path or Name, then combine. **SharePoint list** reads list items, not files inside a library.
  - An Excel file on OneDrive for work/SharePoint, connected through **Web** (file URL) or **SharePoint folder**, refreshes in the service with **no gateway**. The same file connected as a local path (Excel Workbook / Folder) needs a gateway.
  - **Dataverse** is the data store for Power Apps, including Dataverse for Teams. Use the Dataverse connector.
  - **ODBC** is the fallback for any source with a driver but no dedicated connector. Use a DSN or a connection string.
  - **Power BI semantic models** connector: a live connection to a published model. You reuse its measures and relationships and do no Power Query work. This is the least effort when the model already exists.
  - **Azure DevOps** (Boards) connector is for cloud Azure DevOps. **Azure DevOps Server** is for on-premises.
  - Excel files support Import only. Relational sources such as SQL Server and Azure SQL support Import or DirectQuery.
- **Example:** Manufacturing keeps 40 monthly Excel files in a SharePoint library alongside unrelated HR files. Steps: Get data → SharePoint folder → site URL → Transform → filter `Folder Path` contains "/Manufacturing/" → Combine files. It refreshes in the service without a gateway.
- **Traps:**
  - Choosing SharePoint **list** to read Excel files in a document library.
  - Rebuilding a model from the raw files when a published semantic model with the required measures already exists.
  - Keeping the Content column when only file metadata is wanted. It loads every file's data.
- **Knowledge check:**
```json
{"id":"q1","domain":"PREP","topic":"data-sources","q":"You need only the file names and modified dates of 50 JSON files in a folder, not their contents. What should you do?","options":["Use Folder and combine the files","Use Folder and remove Content","Use JSON and expand all records","Use Web and filter on the URL"],"answer":1,"multi":false,"explain":"The Folder connector exposes file metadata; removing the binary Content column avoids loading file data.","cite":"https://learn.microsoft.com/en-us/power-query/connectors/folder","disputed":false}
{"id":"q2","domain":"PREP","topic":"data-sources","q":"A Power Apps app stores its data in Dataverse for Teams. Which connector reads it?","options":["SQL Server","SharePoint list","Dataverse","OData feed"],"answer":2,"multi":false,"explain":"Power Apps and Dataverse for Teams store data in Dataverse, read with the Dataverse connector.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources","disputed":false}
{"id":"q3","domain":"PREP","topic":"data-sources","q":"A published semantic model already has all required measures. What is the least-effort way to build a new report on it?","options":["Connect to the Power BI semantic model","Import the source Excel files again","Export the model data to CSV files","Copy the queries into a new file"],"answer":0,"multi":false,"explain":"A live connection to the published semantic model reuses its tables, relationships and measures with no rebuild.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-report-lifecycle-datasets","disputed":false}
{"id":"q4","domain":"PREP","topic":"data-sources","q":"A vendor system has an ODBC driver but no dedicated Power BI connector. Which connector should you use?","options":["OLE DB","OData feed","Web","ODBC"],"answer":3,"multi":false,"explain":"The ODBC connector uses an installed driver through a DSN or connection string when no native connector exists.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources","disputed":false}
{"id":"q5","domain":"PREP","topic":"data-sources","q":"An Excel file on OneDrive for work must refresh in the service without a gateway. Which two connectors work? (Choose two.)","options":["Web with the file URL","Excel Workbook with a local path","SharePoint folder with the site URL","Folder with a synced local path"],"answer":[0,2],"multi":true,"explain":"Cloud connectors (Web, SharePoint folder) reach OneDrive for work directly; local-path connectors need an on-premises data gateway.","cite":"https://learn.microsoft.com/en-us/power-query/connectors/sharepoint-folder","disputed":false}
```
- **Primary source:** [Data sources for Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources) · **Extra:** [Folder connector](https://learn.microsoft.com/en-us/power-query/connectors/folder), [SharePoint folder](https://learn.microsoft.com/en-us/power-query/connectors/sharepoint-folder), [Connect to semantic models](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-report-lifecycle-datasets)

### Lesson 0003 — Choose a storage mode: Import, DirectQuery, Dual, Direct Lake
- **Slug:** `0003-storage-modes` · **Domain:** PREP (outline: "Choose between DirectLake, DirectQuery, and Import") · **Concepts:** C04 · **Time:** 20 min
- **Objective:** Given freshness, size, source and performance needs, pick the storage mode for each table and justify it.
- **Key points:**
  - **Import**: data is copied into the in-memory VertiPaq engine. It is the fastest to query and supports all DAX and Power Query features. Data is only as fresh as the last refresh (scheduled refresh: up to 8/day on Pro, 48/day on Premium/Fabric capacity).
  - **DirectQuery**: no data is stored. Each visual sends queries to the source, so data is near real time. Visuals are slower, some Power Query/DAX features are limited, and the load moves to the source. Use it when data must be minutes-fresh or is too large to import. Excel and CSV files cannot be DirectQuery sources.
  - **Dual**: a table acts as Import or DirectQuery depending on the query. Set dimension tables to Dual when they relate to both DirectQuery facts and Import tables (for example, an Import aggregation table). This avoids limited relationships and keeps slicers fast.
  - **Composite model**: one model that mixes storage modes, or that uses DirectQuery to a published semantic model plus local tables.
  - **Live connection** to Analysis Services or a published Power BI semantic model: no Power Query and no model editing (report measures only). RLS lives in the source model.
  - **Direct Lake** (Fabric): reads Delta tables in OneLake straight into memory, so performance is close to Import with no import refresh. Some queries fall back to DirectQuery. Choose it when data already lands in a Fabric lakehouse or warehouse.
  - With DirectQuery, the security roles of the source database apply to the signed-in user's credentials (if SSO is used). With Import they do not.
  - Automatic page refresh needs DirectQuery (or Direct Lake/push) sources (see 0029).
- **Example:** A retailer needs sales visible within 5 minutes, but historical trend pages must be fast. Design: `Sales` = DirectQuery, `SalesAgg` (monthly summary) = Import, `Date`/`Customer` = Dual. Monthly visuals hit SalesAgg in memory. Drill to transactions hits Sales at the source.
- **Traps:**
  - Choosing Import when the requirement is "visible within minutes of each change". Scheduled refresh cannot do that.
  - Leaving shared dimensions in Import next to a DirectQuery fact. This causes limited relationships. Use Dual.
  - Choosing DirectQuery for an Excel workbook. Files support Import only.
- **Knowledge check:**
```json
{"id":"q1","domain":"PREP","topic":"storage-modes","q":"Sales rows must appear in reports within five minutes of being written to Azure SQL. Which mode fits the Sales table?","options":["Import with daily refresh","Import with hourly refresh","DirectQuery to the database","Dual with daily refresh"],"answer":2,"multi":false,"explain":"DirectQuery queries the source at view time; Import is limited by refresh frequency.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-about","disputed":false}
{"id":"q2","domain":"PREP","topic":"storage-modes","q":"Date and Customer relate to a DirectQuery fact and to an Import aggregate table. Which mode should they use?","options":["Dual","Import","DirectQuery","Live connection"],"answer":0,"multi":false,"explain":"Dual tables behave as Import or DirectQuery per query, avoiding limited relationships in composite models.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-storage-mode","disputed":false}
{"id":"q3","domain":"PREP","topic":"storage-modes","q":"Your data already lands as Delta tables in a Fabric lakehouse. Which mode gives near-Import speed without import refresh?","options":["DirectQuery","Live connection","Dual","Direct Lake"],"answer":3,"multi":false,"explain":"Direct Lake reads Delta tables from OneLake into memory without copying data via scheduled import refresh.","cite":"https://learn.microsoft.com/en-us/fabric/fundamentals/direct-lake-overview","disputed":false}
{"id":"q4","domain":"PREP","topic":"storage-modes","q":"About 2 GB of SQL data plus a small Excel sheet need refreshing once a day for fast reports. Which mode fits?","options":["DirectQuery for all tables","Import for all tables","Dual for all tables","Live connection to SQL"],"answer":1,"multi":false,"explain":"Daily freshness and fast visuals point to Import; nothing requires real-time data.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/service-dataset-modes-understand","disputed":false}
{"id":"q5","domain":"PREP","topic":"storage-modes","q":"A report uses a live connection to a published semantic model. What can the report author still do?","options":["Edit Power Query steps","Add calculated columns","Create report-level measures","Change relationships"],"answer":2,"multi":false,"explain":"Live connections allow report measures but not Power Query or model edits (unless converted to a composite model).","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-report-lifecycle-datasets","disputed":false}
```
- **Primary source:** [Storage mode in Power BI Desktop](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-storage-mode) · **Extra:** [Composite models](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-composite-models), [Direct Lake overview](https://learn.microsoft.com/en-us/fabric/fundamentals/direct-lake-overview), [DirectQuery](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-about)

### Lesson 0004 — Data source settings, privacy levels and parameters
- **Slug:** `0004-data-source-settings-parameters` · **Domain:** PREP · **Concepts:** C05, C06 · **Time:** 15 min
- **Objective:** Repoint a report to a new server or file and switch environments with a Power Query parameter instead of editing every query.
- **Key points:**
  - **File › Options and settings › Data source settings** lists every source. **Change Source** repoints all queries that use it. **Edit Permissions** sets credentials and the privacy level.
  - Privacy levels are **Private**, **Organizational** and **Public**. They control whether data from one source may be sent to another while combining. Wrong levels cause Formula.Firewall errors or block query folding.
  - "Could not find file" after a file moves means the path is wrong or you lack permission. Fix it with Data source settings, the Source step in the formula bar, or the Advanced Editor.
  - **Power Query parameters** (Manage Parameters) hold values such as server, database or file path. Reference them in the Source step (`Sql.Database(ServerName, DbName)`). Change one value to switch Dev/Test/Prod. Parameters can be edited in the service under semantic model settings.
  - **What-if parameters** are a DAX/report feature for slicer-driven scenarios. They never change a data source.
  - Incremental refresh needs two DateTime parameters named exactly **RangeStart** and **RangeEnd** (see 0035).
- **Example:**
```m
// Parameters: ServerName = "sql-dev.contoso.com", DbName = "Sales"
let Source = Sql.Database(ServerName, DbName),
    Orders = Source{[Schema="dbo", Item="Orders"]}[Data]
in Orders
```
Switching to production means changing `ServerName` once. All queries follow.
- **Traps:**
  - Using a what-if parameter or a DAX variable to switch servers.
  - Editing every query by hand when Change Source or one parameter does the job.
  - Thinking credentials in the service change the file path. They only change authentication.
- **Knowledge check:**
```json
{"id":"q1","domain":"PREP","topic":"parameters","q":"One report must be tested against Dev, Test and Prod SQL servers with minimal effort. What should you create?","options":["A what-if parameter","A DAX variable","A Power Query parameter","A separate PBIX per server"],"answer":2,"multi":false,"explain":"A Power Query parameter referenced in the Source step switches the server for every dependent query.","cite":"https://learn.microsoft.com/en-us/power-query/power-query-query-parameters","disputed":false}
{"id":"q2","domain":"PREP","topic":"data-source-settings","q":"All imports must move to a new Azure SQL database with the least effort. Where do you make the change?","options":["Model view relationships","Data source settings, Change Source","Each query's Applied Steps","Report settings in Options"],"answer":1,"multi":false,"explain":"Data source settings › Change Source repoints every query using that source at once.","cite":"https://learn.microsoft.com/en-us/power-query/power-query-query-parameters","disputed":false}
{"id":"q3","domain":"PREP","topic":"privacy-levels","q":"Combining a public web source with a private database raises a Formula.Firewall error. What controls this behaviour?","options":["Privacy levels of the sources","The storage mode of each table","The relationship cross-filter","The gateway cluster settings"],"answer":0,"multi":false,"explain":"Privacy levels decide whether data may flow between sources during combination; the firewall enforces them.","cite":"https://learn.microsoft.com/en-us/power-query/data-privacy-firewall","disputed":false}
{"id":"q4","domain":"PREP","topic":"data-sources","q":"A refresh fails with 'Could not find file' after IT reorganised folders. Which two are likely causes? (Choose two.)","options":["The file was moved","The privacy level is Public","You lost permission to the file","The model uses Dual mode"],"answer":[0,2],"multi":true,"explain":"A moved file or missing permission both make the stored path unreachable.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources","disputed":false}
{"id":"q5","domain":"PREP","topic":"parameters","q":"Which statement about Power Query parameters is correct?","options":["They filter visuals at report level","They only work with DirectQuery","They require a Premium capacity","They can feed source connection values"],"answer":3,"multi":false,"explain":"Parameters store values such as server names or file paths that queries reference, including in Source steps.","cite":"https://learn.microsoft.com/en-us/power-query/power-query-query-parameters","disputed":false}
```
- **Primary source:** [Query parameters](https://learn.microsoft.com/en-us/power-query/power-query-query-parameters) · **Extra:** [Privacy levels and the firewall](https://learn.microsoft.com/en-us/power-query/data-privacy-firewall)

### Lesson 0005 — Profile data before you transform it
- **Slug:** `0005-data-profiling` · **Domain:** PREP · **Concepts:** C07 · **Time:** 15 min
- **Objective:** Pick the profiling tool that answers a question (empties %, distinct vs unique, statistics) and know its row scope.
- **Key points:**
  - **Column quality**: % Valid, % Error, % Empty. This answers "what percentage is empty or wrong?".
  - **Column distribution**: a histogram plus **distinct** count (number of different values) and **unique** count (values that occur exactly once).
  - **Column profile**: full statistics (count, error, empty, distinct, unique, min, max, average, standard deviation, zeros, NaN) and a value distribution that you can group, for example by text length.
  - By default, profiling uses the **top 1,000 rows**. Switch the status bar to "Column profiling based on entire data set" for full accuracy.
  - `Table.Profile(table)` returns the statistics as a table. You can load it into the model so end users can see the stats.
  - Profiling in the editor adds nothing to the model. Calculated columns that count lengths do.
- **Example:** A 2-million-row Customer table shows Email 0% empty. Switch to the entire data set, and Column quality shows 3% empty. The fix happens in 0006.
- **Traps:**
  - Mixing up distinct and unique. In [A, A, B, C], distinct = 3 and unique = 2.
  - Trusting stats while the default 1,000-row scope is on.
  - Using a DAX calculated column for a one-off profile, which grows the model.
- **Knowledge check:**
```json
{"id":"q1","domain":"PREP","topic":"data-profiling","q":"Which Power Query tool shows the percentage of empty values in each column?","options":["Column distribution","Column profile","Query dependencies","Column quality"],"answer":3,"multi":false,"explain":"Column quality reports Valid, Error and Empty as percentages.","cite":"https://learn.microsoft.com/en-us/power-query/data-profiling-tools","disputed":false}
{"id":"q2","domain":"PREP","topic":"data-profiling","q":"A column holds the values A, A, B, C. What are its distinct and unique counts?","options":["Distinct 3, unique 2","Distinct 2, unique 3","Distinct 4, unique 3","Distinct 3, unique 3"],"answer":0,"multi":false,"explain":"Distinct counts different values (A, B, C = 3); unique counts values that appear once (B, C = 2).","cite":"https://learn.microsoft.com/en-us/power-query/data-profiling-tools","disputed":false}
{"id":"q3","domain":"PREP","topic":"data-profiling","q":"By default, on how many rows are column profiling statistics calculated?","options":["The first 100 rows","The first 1,000 rows","The first 10,000 rows","All rows in the table"],"answer":1,"multi":false,"explain":"Profiling defaults to the top 1,000 rows; switch to the entire data set in the status bar.","cite":"https://learn.microsoft.com/en-us/power-query/data-profiling-tools","disputed":false}
{"id":"q4","domain":"PREP","topic":"data-profiling","q":"You need the frequency of text lengths in a column without growing the model. What should you use?","options":["A DAX calculated column","A custom column in Power Query","Column profile grouped by length","A measure using LEN"],"answer":2,"multi":false,"explain":"Column profile's value distribution can group by text length and adds nothing to the model.","cite":"https://learn.microsoft.com/en-us/power-query/data-profiling-tools","disputed":false}
{"id":"q5","domain":"PREP","topic":"data-profiling","q":"End users need summary statistics of a fact table inside the report. What should you load?","options":["The output of Table.Profile","A screenshot of column quality","The column distribution chart","A bookmark of the editor"],"answer":0,"multi":false,"explain":"Table.Profile returns the statistics as a table that can be loaded and visualised.","cite":"https://learn.microsoft.com/en-us/powerquery-m/","disputed":false}
```
- **Primary source:** [Data profiling tools](https://learn.microsoft.com/en-us/power-query/data-profiling-tools) · **Extra:** [Power Query M reference](https://learn.microsoft.com/en-us/powerquery-m/)

### Lesson 0006 — Fix data types, errors and nulls
- **Slug:** `0006-clean-errors-and-types` · **Domain:** PREP · **Concepts:** C08 · **Time:** 18 min
- **Objective:** Choose the right cleaning action (change type, replace errors, replace values, remove rows) so that you keep the rows the requirement needs.
- **Key points:**
  - Set data types on purpose: Whole/Decimal/Fixed decimal number, Date, Date/Time, Text, True/False. Wrong types break relationships, sorting and time intelligence.
  - **Replace Errors** keeps the row and puts a value in place of the error. **Remove Errors** deletes the rows. **Keep Errors** keeps only the error rows (for diagnosis).
  - **Replace Values** (for example, null → 0): `Table.ReplaceValue(Orders, null, 0, Replacer.ReplaceValue, {"Order Value"})`.
  - Think before turning nulls into 0. AVERAGE ignores blanks but counts zeros, so replacing nulls lowers averages. Only replace when null really means zero.
  - Custom-column arithmetic needs compatible types. Convert operands (for example Text→Number) before you calculate.
  - Common refresh errors: "column 'X' not found" means the column was renamed or removed at the source. "Could not find file" means the file moved or permission was lost.
  - Case differences ("ABC" vs "abc"): Power Query is case-sensitive, but the VertiPaq engine is case-insensitive. Fix casing in the source or with Transform › Format › Uppercase. Changing storage mode or relying on implicit conversion does not fix it.
- **Example:** Discount holds a few "N/A" text entries that turn into errors when typed as Decimal. Requirement: keep all rows and use 0.05 for bad values. Steps: select Discount → Replace Errors → 0.05 (with the type change already applied). Do **not** use Remove Errors.
- **Traps:**
  - Remove Errors when the requirement says "keep all rows".
  - Replacing nulls with 0 before averaging, which biases the result.
  - Formatting a column (display) instead of changing its type (storage).
- **Knowledge check:**
```json
{"id":"q1","domain":"PREP","topic":"error-handling","q":"Some Discount values become errors after a type change. You must keep every row and use 0.05 instead. What do you apply?","options":["Remove Errors","Keep Errors","Replace Errors","Remove Blank Rows"],"answer":2,"multi":false,"explain":"Replace Errors substitutes a value while keeping the row; Remove Errors deletes rows.","cite":"https://learn.microsoft.com/en-us/power-query/dealing-with-errors","disputed":false}
{"id":"q2","domain":"PREP","topic":"error-handling","q":"After a source change, refresh fails with 'The column Region of the table wasn't found'. What is the most likely cause?","options":["The column changed data type","The column was renamed at source","The privacy level was changed","The table has duplicate rows"],"answer":1,"multi":false,"explain":"Steps reference columns by name; a renamed or removed source column breaks them.","cite":"https://learn.microsoft.com/en-us/power-query/dealing-with-errors","disputed":false}
{"id":"q3","domain":"PREP","topic":"replace-values","q":"Which M expression replaces nulls with 0 in the Order Value column?","options":["Table.ReplaceValue(Orders, 0, null, Replacer.ReplaceText, {\"Order Value\"})","Table.ReplaceValue(Orders, null, 0, Replacer.ReplaceValue, {\"Order Value\"})","Table.ReplaceErrorValues(Orders, {{\"Order Value\", null}})","Table.TransformColumns(Orders, {{\"Order Value\", null}})"],"answer":1,"multi":false,"explain":"Table.ReplaceValue takes table, old value, new value, replacer function and column list in that order.","cite":"https://learn.microsoft.com/en-us/power-query/replace-values","disputed":false}
{"id":"q4","domain":"PREP","topic":"null-handling","q":"Freight is null for orders where freight is unknown. Why is replacing nulls with 0 risky for an average freight measure?","options":["AVERAGE fails on zero values","Zeros are hidden in visuals","Nulls cannot be replaced at all","Zeros lower the average result"],"answer":3,"multi":false,"explain":"AVERAGE ignores blanks but includes zeros, so substituting 0 for unknown values biases the average down.","cite":"https://learn.microsoft.com/en-us/power-query/replace-values","disputed":false}
{"id":"q5","domain":"PREP","topic":"data-cleaning","q":"Product codes differ only by letter case and cause mismatches. Which fix addresses the cause?","options":["Normalise the casing in Power Query","Switch the table to DirectQuery","Rely on implicit type conversion","Add an index column to the table"],"answer":0,"multi":false,"explain":"Normalising case (Uppercase/Lowercase) in the source or Power Query makes values consistent; mode changes and index keys do not.","cite":"https://learn.microsoft.com/en-us/power-query/data-types","disputed":false}
```
- **Primary source:** [Dealing with errors](https://learn.microsoft.com/en-us/power-query/dealing-with-errors) · **Extra:** [Data types](https://learn.microsoft.com/en-us/power-query/data-types), [Replace values](https://learn.microsoft.com/en-us/power-query/replace-values)

### Lesson 0007 — Split, extract and parse columns
- **Slug:** `0007-split-and-parse-columns` · **Domain:** PREP · **Concepts:** C09 · **Time:** 15 min
- **Objective:** Turn messy text (combined fields, delimited lists, text timestamps) into typed columns or rows using the fewest steps.
- **Key points:**
  - **Split Column › By delimiter**: into columns (default) or, under Advanced options, **into rows**. Use "into rows" for "one product per row" from "A, B, C".
  - Split by number of characters, by positions, or by transitions (lowercase→uppercase, digit→non-digit) for camelCase or codes.
  - Text timestamps such as "2018-12-31 at 08:59" cannot be converted straight to Date. Split by the delimiter " at " (or the first 10–11 characters), then set Date and Time types. **Column From Examples** also works: type "2018-12-31" as the example and set type Date.
  - **Transform › Date › Year** replaces a date column with its year in one step. Extract › Text before/after delimiter is another way to get one part.
  - A DateTime split into separate Date and Time columns **lowers cardinality** and shrinks the model (see 0022). Changing DateTime to Date loses the time.
  - Do this in Power Query, not DAX (SUBSTITUTE, LEFT). Upstream transformations compress better.
- **Example:** `Logged = "2018-12-31 at 08:59"`. Steps: Split Column by delimiter " at " → Logged.1 (Date), Logged.2 (Time). Now the date hierarchy and a time-of-day analysis both work.
- **Traps:**
  - Changing the type to Date directly. Error, because of the "at" token.
  - Splitting into columns when the requirement says one value per row.
  - Keeping only the year as a whole number when a date hierarchy is needed.
- **Knowledge check:**
```json
{"id":"q1","domain":"PREP","topic":"split-column","q":"A Products cell contains 'Pen, Ink, Pad'. Each product must become its own row. What do you use?","options":["Unpivot selected columns","Split by delimiter into rows","Transpose the whole table","Pivot the Products column"],"answer":1,"multi":false,"explain":"Split Column by delimiter with the 'Rows' advanced option creates one row per value.","cite":"https://learn.microsoft.com/en-us/power-query/split-columns-delimiter","disputed":false}
{"id":"q2","domain":"PREP","topic":"date-parsing","q":"A text column holds values like '2018-12-31 at 08:59'. The date hierarchy is required. What should you do first?","options":["Change the type to Date","Change the type to Whole Number","Extract the year as text","Split the column on 'at'"],"answer":3,"multi":false,"explain":"The 'at' token prevents direct conversion; split it out, then type the parts as Date and Time.","cite":"https://learn.microsoft.com/en-us/power-query/split-columns-delimiter","disputed":false}
{"id":"q3","domain":"PREP","topic":"date-parsing","q":"Which feature builds a date column by typing a sample output such as 2018-12-31?","options":["Column From Examples","Conditional Column","Invoke Custom Function","Index Column"],"answer":0,"multi":false,"explain":"Column From Examples infers the transformation from sample values you type.","cite":"https://learn.microsoft.com/en-us/power-query/column-from-example","disputed":false}
{"id":"q4","domain":"PREP","topic":"date-transform","q":"Only the year of an OrderDate column is needed, with minimal effort. What do you apply?","options":["Split by delimiter '-'","Split by number of characters","Transform, Date, Year","Add a DAX YEAR column"],"answer":2,"multi":false,"explain":"Transform › Date › Year converts the column to its year in one step.","cite":"https://learn.microsoft.com/en-us/power-query/column-from-example","disputed":false}
{"id":"q5","domain":"PREP","topic":"split-column","q":"Column names are in camelCase, such as orderDate. Which split option inserts the break points?","options":["By delimiter, comma","By positions 0 and 5","By digit to non-digit","By lowercase to uppercase"],"answer":3,"multi":false,"explain":"The lowercase-to-uppercase transition splits camelCase words.","cite":"https://learn.microsoft.com/en-us/power-query/split-columns-delimiter","disputed":false}
```
- **Primary source:** [Split columns by delimiter](https://learn.microsoft.com/en-us/power-query/split-columns-delimiter) · **Extra:** [Column from examples](https://learn.microsoft.com/en-us/power-query/column-from-example)

### Lesson 0008 — Merge vs append, and choosing the join kind
- **Slug:** `0008-merge-and-append` · **Domain:** PREP · **Concepts:** C10, C11 · **Time:** 20 min
- **Objective:** Decide between merge and append, pick the join kind from the requirement's wording, and keep helper queries out of the model.
- **Key points:**
  - **Append** stacks rows from tables with the same (or similar) columns. Missing columns become null. Use "Append Queries as New" to keep the originals, then turn off load on them.
  - **Merge** joins columns from a related table on matching key(s). It works like a SQL join and returns a nested table column that you expand.
  - Join kinds: **Left outer** (all left rows + matches; the default), **Right outer**, **Full outer**, **Inner** (matches only), **Left anti** (left rows with **no** match, for example customers without sales), **Right anti**. Fuzzy matching is optional for text.
  - The match keys must have the same data type.
  - Remove duplicates **after** appending, not before. Duplicates across the two tables survive otherwise.
  - Merge as New + turn off load on the source queries = smallest model. Do **not delete** source queries that the merge references.
  - Flattening a snowflake (Product ← Subcategory ← Category) with merges makes one Product dimension. Use Inner when the link always exists and Left outer when the requirement says "keep all products".
- **Example:** Find customers who never bought: Merge Queries as New → Customers (left) and Sales (right) on CustomerID → **Left anti** → turn off "Enable load" on Customers and Sales if they are not needed elsewhere.
- **Traps:**
  - Using append to bring address columns onto customers. Append adds rows, not columns.
  - Inner join when the requirement says "include customers without addresses". Use Left outer.
  - Leaving intermediate queries loaded, which duplicates data in the model.
- **Knowledge check:**
```json
{"id":"q1","domain":"PREP","topic":"merge-append","q":"Two regional order tables have identical columns and must become one table. Which operation fits?","options":["Merge with left outer join","Merge with inner join","Append the queries","Pivot the region column"],"answer":2,"multi":false,"explain":"Append stacks rows of tables that share a schema; merge adds columns from a related table.","cite":"https://learn.microsoft.com/en-us/power-query/append-queries","disputed":false}
{"id":"q2","domain":"PREP","topic":"merge-append","q":"You must list customers who have no rows in Sales. Which join kind do you choose?","options":["Left anti","Inner","Full outer","Right outer"],"answer":0,"multi":false,"explain":"A left anti join returns only rows from the left table with no match in the right table.","cite":"https://learn.microsoft.com/en-us/power-query/merge-queries-left-anti","disputed":false}
{"id":"q3","domain":"PREP","topic":"merge-append","q":"Every customer must appear with address columns when an address exists. Which join keeps all customers?","options":["Inner join","Right anti join","Left anti join","Left outer join"],"answer":3,"multi":false,"explain":"Left outer keeps all left rows and adds matching right columns, null when no match.","cite":"https://learn.microsoft.com/en-us/power-query/merge-queries-overview","disputed":false}
{"id":"q4","domain":"PREP","topic":"merge-append","q":"Two product lists overlap. The result must hold each product once. What is the correct order?","options":["Remove duplicates, then append","Append, then remove duplicates","Merge, then remove duplicates","Transpose, then append both"],"answer":1,"multi":false,"explain":"Duplicates across the two tables only become visible after appending, so remove them afterwards.","cite":"https://learn.microsoft.com/en-us/power-query/append-queries","disputed":false}
{"id":"q5","domain":"PREP","topic":"load-settings","q":"After Merge Queries as New, how do you keep the two source queries out of the model safely?","options":["Delete both source queries","Hide both tables in report view","Disable load on both sources","Exclude them from report refresh"],"answer":2,"multi":false,"explain":"Disabling load keeps them as connection-only queries the merge can still reference; deleting breaks the merge, and refresh exclusion still loads data.","cite":"https://learn.microsoft.com/en-us/power-query/merge-queries-overview","disputed":false}
```
- **Primary source:** [Merge queries overview](https://learn.microsoft.com/en-us/power-query/merge-queries-overview) · **Extra:** [Append queries](https://learn.microsoft.com/en-us/power-query/append-queries), [Left anti join](https://learn.microsoft.com/en-us/power-query/merge-queries-left-anti)

### Lesson 0009 — Reshape tables: unpivot, pivot, transpose, JSON
- **Slug:** `0009-reshape-unpivot-json` · **Domain:** PREP · **Concepts:** C12, C13 · **Time:** 20 min
- **Objective:** Turn crosstab or nested data into a tidy long table that a star schema can use.
- **Key points:**
  - **Unpivot** turns columns into rows (wide → long): it creates **Attribute** and **Value** columns. Rename them (for example Month/Sales).
  - **Unpivot Other Columns**: select the key columns you keep (Product, Region) and unpivot everything else. It keeps working when new month columns appear. "Unpivot Only Selected Columns" fixes the list.
  - **Pivot** is the reverse (long → wide). **Transpose** swaps all rows and columns, and headers are lost. Demote headers first ("Use Headers as First Row") when transposing tables with header rows, then promote again.
  - Typical order for an Excel crosstab: Remove top rows → **Use First Row as Headers** → select key columns → Unpivot Other Columns → rename → set types.
  - JSON: parse a text column with **Transform › Parse › JSON** first, then expand. For a list of records: **To Table** → expand the column → **Expand to New Rows** for lists → **Expand to New Columns** for records.
- **Example:**
```m
let Source = Excel.Workbook(File.Contents(Path), null, true){[Item="Budget"]}[Data],
    Promoted = Table.PromoteHeaders(Source),
    Unpivoted = Table.UnpivotOtherColumns(Promoted, {"Department"}, "Year", "Revenue"),
    Typed = Table.TransformColumnTypes(Unpivoted, {{"Year", Int64.Type}, {"Revenue", Currency.Type}})
in Typed
```
- **Traps:**
  - Unpivoting the key columns (Department) instead of the value columns (years).
  - Pivot when the requirement is wide → long.
  - Expanding a JSON text column before parsing it.
- **Knowledge check:**
```json
{"id":"q1","domain":"PREP","topic":"unpivot","q":"A sheet has Product plus one column per month. You need Product, Month and Sales rows that still work when new months are added. What do you do?","options":["Select Product and Unpivot Other Columns","Select the months and Pivot Column","Transpose and promote the headers","Select the months and Unpivot Only Selected"],"answer":0,"multi":false,"explain":"Unpivot Other Columns keeps Product and unpivots every other column, including future month columns.","cite":"https://learn.microsoft.com/en-us/power-query/unpivot-column","disputed":false}
{"id":"q2","domain":"PREP","topic":"unpivot","q":"Which operation converts a long table back into a wide crosstab?","options":["Unpivot","Transpose","Pivot","Group By"],"answer":2,"multi":false,"explain":"Pivot turns distinct values of one column into new columns, the reverse of unpivot.","cite":"https://learn.microsoft.com/en-us/power-query/pivot-columns","disputed":false}
{"id":"q3","domain":"PREP","topic":"unpivot","q":"An Excel range has its real headers in the first data row. What should precede Unpivot Other Columns?","options":["Transpose the table","Use First Row as Headers","Remove duplicate rows","Add an index column"],"answer":1,"multi":false,"explain":"Promote the real headers first so the unpivoted Attribute values carry the right names.","cite":"https://learn.microsoft.com/en-us/power-query/unpivot-column","disputed":false}
{"id":"q4","domain":"PREP","topic":"json","q":"A text column holds JSON objects. What must you do before you can expand its fields?","options":["Split it by commas","Change its type to Any","Transpose the table","Parse it as JSON"],"answer":3,"multi":false,"explain":"Transform › Parse › JSON converts text to records/lists, which can then be expanded.","cite":"https://learn.microsoft.com/en-us/power-query/connectors/json","disputed":false}
{"id":"q5","domain":"PREP","topic":"json","q":"A column contains lists of records. Which expand sequence flattens it?","options":["Expand to New Rows, then expand records to columns","Expand records to columns, then lists to rows","Transpose, then expand to new rows","Pivot the list, then expand the records"],"answer":0,"multi":false,"explain":"Lists expand to new rows first; each row then holds a record that expands to columns.","cite":"https://learn.microsoft.com/en-us/power-query/connectors/json","disputed":false}
```
- **Primary source:** [Unpivot columns](https://learn.microsoft.com/en-us/power-query/unpivot-column) · **Extra:** [Pivot columns](https://learn.microsoft.com/en-us/power-query/pivot-columns), [JSON connector](https://learn.microsoft.com/en-us/power-query/connectors/json)

### Lesson 0010 — Group and aggregate rows
- **Slug:** `0010-group-and-aggregate-rows` · **Domain:** PREP · **Concepts:** C14 · **Time:** 15 min
- **Objective:** Use Group By (basic or advanced) with the right operation to reduce granularity or find a top item per group.
- **Key points:**
  - **Basic** Group By: one grouping column and one aggregation. **Advanced**: several grouping columns and several aggregations.
  - Operations: Sum, Average, Median, Min, Max, **Count Rows**, **Count Distinct Rows**, **All Rows** (keeps a nested table per group).
  - "How many distinct order days per city and channel": Advanced, group on City + Channel, Count Distinct Rows over a table with only those columns plus OrderDate (or group first by City, Channel, OrderDate).
  - Top item per group: group with **All Rows**, then add a column with `Table.Max([AllRows], "Units")`, which returns a **record**, then expand the fields you need.
  - Grouping before load reduces granularity and model size (for example, daily impressions instead of event rows; see 0022).
  - Numeric **binning** and **list grouping** of visual categories are report features (Data pane › New group), not Power Query (see 0030).
- **Example:**
```m
Grouped = Table.Group(Sales, {"Category"}, {{"AllRows", each _, type table}}),
Top = Table.AddColumn(Grouped, "TopRow", each Table.Max([AllRows], "Units")),
Expanded = Table.ExpandRecordColumn(Top, "TopRow", {"Product", "Units"})
```
- **Traps:**
  - Basic Group By when two grouping columns are needed.
  - The Max operation when the product name is also needed. Max returns only the number.
  - Count Rows when duplicates must be counted once.
- **Knowledge check:**
```json
{"id":"q1","domain":"PREP","topic":"group-by","q":"You must group by Region and Channel and count rows. Which Group By mode is required?","options":["Basic","Advanced","Pivot","Merge"],"answer":1,"multi":false,"explain":"Basic Group By accepts one grouping column; multiple grouping columns need Advanced.","cite":"https://learn.microsoft.com/en-us/power-query/group-by","disputed":false}
{"id":"q2","domain":"PREP","topic":"group-by","q":"Each category needs the product name and units of its biggest order. Which operation starts the solution?","options":["Max of Units","Sum of Units","Count Distinct Rows","All Rows"],"answer":3,"multi":false,"explain":"All Rows keeps each group's rows so Table.Max can return the whole record, including Product.","cite":"https://learn.microsoft.com/en-us/power-query/group-by","disputed":false}
{"id":"q3","domain":"PREP","topic":"group-by","q":"Repeated orders per day must count once per City and Channel. Which aggregation fits?","options":["Count Distinct Rows","Count Rows","Sum","Average"],"answer":0,"multi":false,"explain":"Count Distinct Rows counts each distinct combination once.","cite":"https://learn.microsoft.com/en-us/power-query/group-by","disputed":false}
{"id":"q4","domain":"PREP","topic":"group-by","q":"What does Table.Max(table, \"Units\") return?","options":["The maximum Units number","A list of all Units","The row with the largest Units","A table sorted by Units"],"answer":2,"multi":false,"explain":"Table.Max returns the record (row) with the largest value in the given column.","cite":"https://learn.microsoft.com/en-us/powerquery-m/","disputed":false}
{"id":"q5","domain":"PREP","topic":"group-by","q":"Event-level clicks are only reported per campaign per day. How do you reduce model size?","options":["Group by campaign and day before load","Create a calculated table in DAX","Hide the event-level columns","Add a measure for daily clicks"],"answer":0,"multi":false,"explain":"Grouping in Power Query loads fewer rows; calculated tables and hidden columns keep or add data.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction","disputed":false}
```
- **Primary source:** [Group by](https://learn.microsoft.com/en-us/power-query/group-by) · **Extra:** [Data reduction techniques](https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction)

### Lesson 0011 — Query folding, load settings and query reuse
- **Slug:** `0011-query-folding-load-reuse` · **Domain:** PREP · **Concepts:** C15, C16, C17 · **Time:** 20 min
- **Objective:** Keep refreshes fast and the model lean by folding filters to the source, configuring load, and reusing queries the right way.
- **Key points:**
  - **Query folding**: Power Query translates steps into one native query (for example SQL) that runs at the source. Filters, column removal and grouping that fold mean less data moves.
  - Check folding with right-click a step › **View Native Query** (greyed out does not prove there is no folding), the **folding indicators**, or **Query Diagnostics**. Performance Analyzer does **not** show folding.
  - Once a step can't fold (for example some custom functions or Table.Buffer), later steps don't fold either. Put foldable filters first.
  - Sampling a huge table: a WHERE in a native SQL statement or a folding Power Query filter both reduce rows **at the source**. A DAX FILTER or a report filter still imports everything.
  - **Enable load** off = the query is connection-only and not in the model. **Include in report refresh** off = the query is still in the model but skipped at refresh. Only the first reduces model size.
  - **Reference** creates a new query that starts from another query's output (shared logic, one source definition). **Duplicate** copies all steps, so the two are independent and maintained twice. Use Reference to branch a staging query into a fact and dimensions.
  - `Table.Buffer` can stop repeated evaluation of an expensive upstream query, but it blocks folding.
  - **Dataflows** (Power Query online) centralise reusable cleaned tables (for example a standard Product dimension) for many semantic models. Endorse them so others find them.
- **Example:** `All Sales` (staging, Enable load **off**) → Reference → `Fact Sales` (keys and measures) and Reference → `Dim Store` (distinct store columns). Filters on OrderDate come first so they fold to SQL.
- **Traps:**
  - Thinking "Include in report refresh" off removes data from the model.
  - Taking a greyed-out View Native Query as proof that the query doesn't fold.
  - Duplicating a query to reuse it, which doubles the maintenance and the source reads.
- **Knowledge check:**
```json
{"id":"q1","domain":"PREP","topic":"load-settings","q":"A helper query must stay available to other queries but not appear in the model. What do you change?","options":["Clear Include in report refresh","Hide the table in report view","Clear Enable load","Set the table to DirectQuery"],"answer":2,"multi":false,"explain":"Disabling Enable load makes it connection-only; clearing Include in report refresh still loads the table.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction","disputed":false}
{"id":"q2","domain":"PREP","topic":"query-folding","q":"Which tool does NOT help confirm that a Power Query step folds?","options":["View Native Query","Query folding indicators","Query Diagnostics","Performance Analyzer"],"answer":3,"multi":false,"explain":"Performance Analyzer times report visuals; it does not inspect Power Query folding.","cite":"https://learn.microsoft.com/en-us/power-query/query-folding-basics","disputed":false}
{"id":"q3","domain":"PREP","topic":"query-folding","q":"Only 2024 rows of a 100-million-row SQL table should be imported. Which approach reduces rows at the source?","options":["A DAX FILTER in each measure","A report-level filter on year","A folding filter step on the date","A visual-level Top N filter"],"answer":2,"multi":false,"explain":"A folding Power Query filter (or SQL WHERE) runs in the source; DAX and report filters act after import.","cite":"https://learn.microsoft.com/en-us/power-query/query-folding-basics","disputed":false}
{"id":"q4","domain":"PREP","topic":"reference-queries","q":"A staging query must feed a fact query and a dimension query with one shared definition. What do you use?","options":["Reference the staging query","Duplicate the staging query","Append the staging query","Copy the M into new queries"],"answer":0,"multi":false,"explain":"Reference builds on the original's output, so upstream changes flow to both; duplicate copies steps independently.","cite":"https://learn.microsoft.com/en-us/power-query/query-folding-basics","disputed":false}
{"id":"q5","domain":"PREP","topic":"dataflows","q":"Five teams need the same cleaned Product table in their own semantic models. What should you build?","options":["A calculated table in each model","A dataflow for the Product table","A bookmark with the Product view","A duplicate query in each file"],"answer":1,"multi":false,"explain":"Dataflows centralise reusable Power Query transformations consumed by many models.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/dataflows/dataflows-introduction-self-service","disputed":false}
```
- **Primary source:** [Query folding basics](https://learn.microsoft.com/en-us/power-query/query-folding-basics) · **Extra:** [Data reduction techniques](https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction), [Dataflows introduction](https://learn.microsoft.com/en-us/power-bi/transform-model/dataflows/dataflows-introduction-self-service), [Table.Buffer](https://learn.microsoft.com/en-us/powerquery-m/table-buffer)

### Lesson 0012 — Design a star schema: facts, dimensions and keys
- **Slug:** `0012-star-schema-design` · **Domain:** MODEL · **Concepts:** C18 · **Time:** 18 min
- **Objective:** Sort source columns into fact and dimension tables and choose a relationship key for each dimension.
- **Key points:**
  - **Fact tables** store events (sales lines, attendance): numeric columns to aggregate plus foreign keys. They have many rows and grow over time.
  - **Dimension tables** describe things (Customer, Product, Date, Teacher). They hold a unique key and descriptive attributes used to filter and group.
  - A star schema (facts in the middle, dimensions around them) is Microsoft's recommended design for performance and simple DAX.
  - Snowflake chains (Product → Subcategory → Category) are usually **flattened** into one dimension with merges (0008).
  - Header/detail facts (Order header + Order lines): merge the header attributes into the line-level fact so visuals don't cross two fact tables.
  - **Keys**: a dimension key must be unique and non-blank. Prefer a compact integer **surrogate key**. Don't concatenate text keys, which raises cardinality and size. Build a unique dimension with Remove Duplicates on the key column (for example, keep Country, drop City, then Remove Duplicates on Country).
  - Attributes that are fixed for a dimension member (teacher name, class period) belong on the dimension, not repeated on the fact.
  - Separate models are sometimes needed for security or scope. For example, analysts who must not see the balance sheet need their own semantic model, or RLS/OLS.
- **Example:** A school's attendance export has StudentID, StudentName, ClassID, Period, TeacherName, Date, Present. Star: `FactAttendance(StudentKey, ClassKey, DateKey, Present)`, `DimStudent`, `DimClass(ClassKey, Period, TeacherName)`, `DimDate`.
- **Traps:**
  - Leaving descriptive attributes on the fact, which repeats them per row.
  - Removing duplicates on the wrong column (City instead of Country).
  - Joining two fact tables directly instead of through shared dimensions.
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"star-schema","q":"In a star schema, which table typically holds numeric values to aggregate plus foreign keys?","options":["A dimension table","A fact table","A bridge table","A parameter table"],"answer":1,"multi":false,"explain":"Fact tables store event measures and foreign keys to dimensions.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/star-schema","disputed":false}
{"id":"q2","domain":"MODEL","topic":"star-schema","q":"Product, Subcategory and Category are three chained tables. What does star-schema guidance recommend?","options":["Keep all three as a snowflake","Merge them into the fact table","Flatten them into one dimension","Relate each one to the fact"],"answer":2,"multi":false,"explain":"Denormalising snowflake chains into one dimension simplifies filtering and improves performance.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/star-schema","disputed":false}
{"id":"q3","domain":"MODEL","topic":"keys","q":"Which column makes the best key for a large dimension table?","options":["A concatenated text code","A free-text name column","A nullable email column","A unique integer surrogate"],"answer":3,"multi":false,"explain":"Unique, compact integer keys compress well and relate reliably; concatenated text keys are large and slow.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/star-schema","disputed":false}
{"id":"q4","domain":"MODEL","topic":"star-schema","q":"A Geography table has City and Country. You need a unique Country dimension. What do you do?","options":["Remove City, then remove duplicates on Country","Remove duplicates on City, then remove Country","Group by City and count the rows","Keep both and mark Country as key"],"answer":0,"multi":false,"explain":"Drop the finer-grained column, then de-duplicate on the dimension key.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/star-schema","disputed":false}
{"id":"q5","domain":"MODEL","topic":"star-schema","q":"Teacher name is the same for every attendance row of a class. Where should it live?","options":["On the attendance fact table","In a calculated column on the fact","On the class or teacher dimension","In a separate disconnected table"],"answer":2,"multi":false,"explain":"Attributes that are constant for a dimension member belong to that dimension, not repeated in facts.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/star-schema","disputed":false}
```
- **Primary source:** [Understand star schema](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema) · **Extra:** [Model relationships](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand)

### Lesson 0013 — Relationships: cardinality, cross-filter direction, active paths
- **Slug:** `0013-relationships-cardinality-direction` · **Domain:** MODEL · **Concepts:** C19, C20, C21 · **Time:** 20 min
- **Objective:** Configure a relationship's cardinality and cross-filter direction from the data and the filtering requirement.
- **Key points:**
  - Cardinality: **one-to-many** (dimension key unique → fact; the default for a star), **one-to-one** (rare; consider merging), **many-to-many** (both sides repeat, for example region values in two tables or a bridge pattern).
  - Filters flow from the **one** side to the **many** side. **Single** direction is the default and the recommendation.
  - **Both** (bidirectional) lets the many side filter the one side. Use it only for specific needs (for example a bridge table in many-to-many, or slicers showing only items with data). It can cause ambiguity and slower queries.
  - Only **one active** relationship can exist between two tables (one active path). Others are **inactive** (dashed). Activate one in a measure with `USERELATIONSHIP` (0014).
  - Key columns on both sides must have the **same data type**. Text "101" won't relate to whole number 101 until you change the type.
  - "Repeated total for every supplier" usually means the filter can't reach the table. Fix the direction or the relationship, not the measure.
  - Assume referential integrity (DirectQuery only) lets Power BI use inner joins, which is faster.
  - RLS filters propagate one way by default even on bidirectional relationships. See 0036 for "Apply security filter in both directions".
- **Example:** Product ↔ Supplier through `Supplier_Product` (one row per pair). Set Product (1) → Supplier_Product (*) to **Both**, so a supplier filter reaches Product and then Sales.
- **Traps:**
  - Setting Both "just in case". It is not the default and slows things down.
  - Calling a relationship many-to-one "many-to-many" when the dimension key is actually unique.
  - Expecting an inactive relationship to filter without USERELATIONSHIP.
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"relationships","q":"City Key is unique in City and repeats in Orders. Which relationship fits Orders to City?","options":["Many-to-one, single direction","Many-to-many, both directions","One-to-one, both directions","Many-to-many, single direction"],"answer":0,"multi":false,"explain":"A unique key on one side gives many-to-one; single direction is the default and recommended.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand","disputed":false}
{"id":"q2","domain":"MODEL","topic":"relationships","q":"Sales[region_id] is Text and Region[region_id] is Whole Number. What allows the relationship to work?","options":["Add a measure that converts the key","Mark Region as a date table","Set the relationship to Both","Change Sales[region_id] to Whole Number"],"answer":3,"multi":false,"explain":"Relationship keys must share a data type; convert the text key.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-create-and-manage-relationships","disputed":false}
{"id":"q3","domain":"MODEL","topic":"relationships","q":"How many active relationships can exist directly between the same two tables?","options":["None","One","Two","Unlimited"],"answer":1,"multi":false,"explain":"Only one relationship between two tables can be active; others are inactive.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/relationships-active-inactive","disputed":false}
{"id":"q4","domain":"MODEL","topic":"cross-filter-direction","q":"Supplier filters must reach Product through a Supplier_Product bridge table. What do you set?","options":["Make the bridge relationship inactive","Change cardinality to one-to-one","Set the bridge cross-filter to Both","Hide the bridge table from view"],"answer":2,"multi":false,"explain":"Bidirectional filtering on the bridge relationship lets the supplier filter flow to Product.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/relationships-bidirectional-filtering","disputed":false}
{"id":"q5","domain":"MODEL","topic":"relationships","q":"Region values repeat in both Sales Employees and Customer Details. Which cardinality is required to relate them on region?","options":["One-to-many","One-to-one","Many-to-one","Many-to-many"],"answer":3,"multi":false,"explain":"When neither side holds unique values, the relationship must be many-to-many.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/relationships-many-to-many","disputed":false}
```
- **Primary source:** [Model relationships](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand) · **Extra:** [Bidirectional filtering guidance](https://learn.microsoft.com/en-us/power-bi/guidance/relationships-bidirectional-filtering), [Active vs inactive](https://learn.microsoft.com/en-us/power-bi/guidance/relationships-active-inactive)

### Lesson 0014 — Build a date table and handle role-playing dates
- **Slug:** `0014-date-table-role-playing` · **Domain:** MODEL · **Concepts:** C22, C23 · **Time:** 20 min
- **Objective:** Create and mark a common date table, then analyse a fact by two dates (order, ship) correctly.
- **Key points:**
  - A date table needs one row per day, with **no gaps**, covering **full years**, and a unique Date column. Create it with DAX `CALENDAR(start, end)` / `CALENDARAUTO()`, or in Power Query.
  - **Mark as date table** (Table tools) and pick the Date column. Do this when the relationship uses an integer key such as 20240131, or to make time intelligence reliable. If the relationship is on a Date-type column, time intelligence works even without marking.
  - **Auto date/time** creates a hidden date table per date column. It bloats the model and can't be shared across facts. Turn it off once you have a common date table.
  - Ten-year window that includes the current year: `CALENDAR(DATE(YEAR(TODAY())-9,1,1), DATE(YEAR(TODAY()),12,31))`.
  - **Role-playing dimension**: one Date table playing OrderDate, ShipDate and DueDate. Option A: one **active** relationship (OrderDate) plus **inactive** ones, with measures using `CALCULATE([Sales], USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))`. Option B: copy the table (calculated table `Ship Date = 'Date'` or a referenced query) with its own active relationship, so both dates can slice the same visual.
  - USERELATIONSHIP only activates an existing **inactive** relationship. It can't add one, and it isn't needed for the active one.
- **Example:**
```dax
Date = ADDCOLUMNS(CALENDAR(DATE(2020,1,1), DATE(2026,12,31)),
  "Year", YEAR([Date]), "Month", FORMAT([Date], "MMM YYYY"), "MonthNo", MONTH([Date]))
Sales by Ship Date = CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))
```
- **Traps:**
  - Making all three date relationships inactive and writing no USERELATIONSHIP measures. Nothing filters.
  - Relying on auto date/time for two date columns that need one shared slicer.
  - Building the calendar from the fact's distinct dates, which leaves gaps.
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"date-table","q":"Sales relates to Date on an integer DateKey. Time intelligence returns wrong results. What fixes it?","options":["Turn on auto date/time","Mark Date as a date table","Set the relationship to Both","Convert DateKey to text"],"answer":1,"multi":false,"explain":"With a non-date key, marking the Date table tells the engine which column holds dates so filters are handled correctly.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-date-tables","disputed":false}
{"id":"q2","domain":"MODEL","topic":"role-playing-dimension","q":"Date relates to Sales on OrderDate (active) and ShipDate (inactive). Which measure totals sales by ship date?","options":["CALCULATE([Sales], USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))","CALCULATE([Sales], RELATED('Date'[Date]))","CALCULATE([Sales], ALL(Sales[ShipDate]))","CALCULATE([Sales], CROSSFILTER(Sales[ShipDate], 'Date'[Date], NONE))"],"answer":0,"multi":false,"explain":"USERELATIONSHIP activates the inactive ShipDate relationship for that calculation.","cite":"https://learn.microsoft.com/en-us/dax/userelationship-function-dax","disputed":false}
{"id":"q3","domain":"MODEL","topic":"auto-date-time","q":"Why should you disable auto date/time once a common date table exists?","options":["It blocks marking a date table","It disables time intelligence","It forces DirectQuery mode","It adds hidden tables per date column"],"answer":3,"multi":false,"explain":"Auto date/time creates a hidden date table for each date column, increasing model size.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-auto-date-time","disputed":false}
{"id":"q4","domain":"MODEL","topic":"role-playing-dimension","q":"Users must slice one visual by order date and by ship date at the same time. What design supports this?","options":["One Date table, both relationships active","One Date table with auto date/time on","A second date table related to ShipDate","A slicer on the inactive relationship"],"answer":2,"multi":false,"explain":"A separate role-playing date table gives its own active relationship, so both can filter simultaneously.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/relationships-active-inactive","disputed":false}
{"id":"q5","domain":"MODEL","topic":"date-table","q":"Which DAX creates a calendar from 1 Jan nine years ago to 31 Dec this year?","options":["CALENDAR(TODAY()-9, TODAY())","CALENDAR(DATE(YEAR(TODAY())-9,1,1), DATE(YEAR(TODAY()),12,31))","CALENDARAUTO(YEAR(TODAY())-9)","GENERATESERIES(YEAR(TODAY())-9, YEAR(TODAY()))"],"answer":1,"multi":false,"explain":"CALENDAR takes explicit start and end dates; building them with DATE and YEAR(TODAY()) gives full years.","cite":"https://learn.microsoft.com/en-us/dax/calendar-function-dax","disputed":false}
```
- **Primary source:** [Date tables in Power BI Desktop](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-date-tables) · **Extra:** [Date table guidance](https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables), [USERELATIONSHIP](https://learn.microsoft.com/en-us/dax/userelationship-function-dax), [Auto date/time](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-auto-date-time)

### Lesson 0015 — Configure table and column properties
- **Slug:** `0015-table-column-properties` · **Domain:** MODEL · **Concepts:** C24 · **Time:** 15 min
- **Objective:** Set the property that fixes a display or usability problem: sort order, map geocoding, images, summarization, drill path, Q&A wording.
- **Key points:**
  - **Sort by column**: sort MonthName by MonthNo so months don't sort alphabetically. The sort column needs exactly one value per value of the column being sorted.
  - **Data category**: Country, State or Province, City, Postal code, Latitude/Longitude help maps geocode. **Image URL** shows images in tables, cards and slicers. **Web URL** shows clickable links.
  - **Default summarization**: numeric columns default to Sum. Set IDs and years to **Don't summarize**. A visual with "Don't summarize" shows every distinct value (including blanks) instead of one aggregate.
  - **Hierarchies** (Region → Manager → Salesperson) give drill-down paths. A calculated column doesn't.
  - Hide technical columns (keys) instead of deleting them when a relationship needs them. Format strings, display folders and descriptions improve usability.
  - **Synonyms** (Model view › Properties, or the Q&A setup) teach Q&A other words, for example "Calendar" for the Date hierarchy. Descriptions don't affect Q&A.
  - **Featured table** (with a Row label and a unique **Key column**) exposes the table as an Excel organisational data type.
- **Example:** Month names appear as Apr, Aug, Dec… Select `Date[Month]` → Column tools → Sort by column → `MonthNo`. Every visual now sorts Jan→Dec.
- **Traps:**
  - Deleting an ID column used by a relationship. Hide it instead.
  - Building a hierarchy only to geocode. Maps need data categories.
  - Using Web URL to show pictures.
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"sort-by-column","q":"Month names sort alphabetically in every visual. What should you configure?","options":["A hierarchy on Month","Sort by column using MonthNo","Default summarization None","A Q&A synonym for Month"],"answer":1,"multi":false,"explain":"Sort by column orders the month name by a numeric month column.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-sort-by-column","disputed":false}
{"id":"q2","domain":"MODEL","topic":"data-category","q":"A column holds product image links that must render as pictures in a table. Which data category?","options":["Web URL","Barcode","Image URL","Place"],"answer":2,"multi":false,"explain":"Image URL renders the image; Web URL shows a hyperlink.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-data-categorization","disputed":false}
{"id":"q3","domain":"MODEL","topic":"hierarchies","q":"Executives must drill from region manager down to sales managers in a visual. What do you create?","options":["A hierarchy","A calculated column","A disconnected table","A bookmark group"],"answer":0,"multi":false,"explain":"Hierarchies define drill-down levels in visuals.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-sort-by-column","disputed":false}
{"id":"q4","domain":"MODEL","topic":"qna","q":"Users type 'Calendar' in Q&A but the field is the Date hierarchy. What makes Q&A understand them?","options":["Add a description to Date","Rename the Date table","Add a Calendar bookmark","Add Calendar as a synonym"],"answer":3,"multi":false,"explain":"Synonyms map alternative words to model fields for Q&A; descriptions are not used.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-q-and-a","disputed":false}
{"id":"q5","domain":"MODEL","topic":"data-category","q":"A map plots 'Paris' in the wrong country. Which change most directly improves geocoding?","options":["Set City data category to City","Sort City by Country","Hide the Country column","Set City summarization to Count"],"answer":0,"multi":false,"explain":"Geographic data categories (plus a hierarchy with Country) disambiguate locations for maps.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-data-categorization","disputed":false}
```
- **Primary source:** [Data categorization](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-data-categorization) · **Extra:** [Sort by column](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-sort-by-column), [Q&A visual](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-q-and-a)

### Lesson 0016 — Calculated column, measure or calculated table?
- **Slug:** `0016-calculated-columns-vs-measures` · **Domain:** MODEL · **Concepts:** C25, C26 · **Time:** 18 min
- **Objective:** Choose between a calculated column, a measure and a calculated table for a requirement, and explain why from row vs filter context.
- **Key points:**
  - **Calculated column**: evaluated row by row (**row context**) at **refresh**, stored in the model (uses memory). Use it to slice or filter by a value, for example a size band or "Inactive - " & name.
  - **Measure**: evaluated at **query time** in the visual's **filter context**, not stored. Use it for any aggregate, ratio or KPI: margins, % of total, counts.
  - Ratios must be measures: `DIVIDE(SUM(T[EBITDA]), SUM(T[Revenue]))`. A ratio column averaged in a visual gives the wrong answer.
  - **Implicit measures** are created when you drag a numeric column (default summarization). **Explicit measures** are written in DAX and are reusable and needed by calculation groups.
  - **Calculated tables**: `CALENDAR`, `GENERATESERIES(-100, 100, 1)` (numbers, what-if), `SUMMARIZE('Date', 'Date'[Year], 'Date'[Quarter])` (distinct combinations), role-playing copies (`Ship Date = 'Date'`).
  - If the same logic can run in Power Query or the source, do it there. Upstream columns compress better than DAX columns.
  - Band logic: `SWITCH(TRUE(), [Amount] < 100, "Small", [Amount] < 1000, "Medium", "Large")`. Order the conditions so each boundary falls into exactly one band.
- **Example:** Finance wants EBITDA margin on a card and a Size band slicer. Margin → measure. Size band → calculated column (or Power Query conditional column).
- **Traps:**
  - Putting a margin % in a calculated column.
  - Thinking calculated columns respond to slicers. They are fixed at refresh.
  - ADDCOLUMNS to "group". It adds columns to every row. Use SUMMARIZE or VALUES to get distinct combinations.
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"calc-column-vs-measure","q":"A card must show EBITDA margin that responds to slicers. What do you create?","options":["A calculated column","A custom column in Power Query","A measure","A calculated table"],"answer":2,"multi":false,"explain":"Ratios must be evaluated in filter context as a measure (SUM over SUM), not averaged row ratios.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculated-columns","disputed":false}
{"id":"q2","domain":"MODEL","topic":"calc-column-vs-measure","q":"When is a calculated column evaluated?","options":["At refresh, in row context","At query time, in filter context","At publish, in no context","When a slicer changes, in row context"],"answer":0,"multi":false,"explain":"Calculated columns are computed row by row during refresh and stored.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculated-columns","disputed":false}
{"id":"q3","domain":"MODEL","topic":"calculated-tables","q":"Which DAX creates a one-column table of integers from -100 to 100?","options":["CALENDAR(-100, 100)","DATATABLE(-100, 100)","SUMMARIZE(-100, 100)","GENERATESERIES(-100, 100, 1)"],"answer":3,"multi":false,"explain":"GENERATESERIES(start, end, increment) returns a single-column numeric table.","cite":"https://learn.microsoft.com/en-us/dax/generateseries-function-dax","disputed":false}
{"id":"q4","domain":"MODEL","topic":"calculated-tables","q":"You need a calculated table with one row per Year and Quarter combination from Date. Which function fits?","options":["ADDCOLUMNS","SUMMARIZE","FILTER","CROSSJOIN"],"answer":1,"multi":false,"explain":"SUMMARIZE groups by the listed columns, returning distinct combinations.","cite":"https://learn.microsoft.com/en-us/dax/summarize-function-dax","disputed":false}
{"id":"q5","domain":"MODEL","topic":"implicit-measures","q":"Dragging a numeric column into a visual's Values creates what?","options":["An explicit measure","A calculated column","A calculation item","An implicit measure"],"answer":3,"multi":false,"explain":"The default summarization of the column produces an implicit measure.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculated-columns","disputed":false}
```
- **Primary source:** [Calculated columns](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculated-columns) · **Extra:** [Calculated tables](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculated-tables), [DAX overview](https://learn.microsoft.com/en-us/dax/dax-overview)

### Lesson 0017 — CALCULATE and filter modifiers
- **Slug:** `0017-calculate-filter-context` · **Domain:** MODEL · **Concepts:** C27, C28 · **Time:** 20 min
- **Objective:** Predict what a CALCULATE measure returns in each cell of a visual, and pick ALL, REMOVEFILTERS, ALLSELECTED or KEEPFILTERS to get % of total and fixed filters right.
- **Key points:**
  - `CALCULATE(expression, filter1, …)` evaluates the expression in a **modified filter context**. It is the only function that changes filter context (with CALCULATETABLE).
  - A Boolean filter such as `'Date'[Year] = 2023` **replaces** any existing filter on that column. In a table by Year, every row shows the 2023 value.
  - `KEEPFILTERS('Work Orders'[District] = "North")` **intersects** instead, so only the North row shows a value. `FILTER('Work Orders', …)` over the whole table (no ALL) also intersects.
  - `ALL(col or table)` / `REMOVEFILTERS(...)`: ignore filters, including slicers. **Grand total** denominator.
  - `ALLSELECTED(...)`: removes filters from inside the visual but **keeps** slicer, page and report filters. This is the "% of visible total" pattern.
  - % of total: `DIVIDE([Revenue], CALCULATE([Revenue], ALL(Product[Category])))`. `DIVIDE` handles divide-by-zero (returns BLANK or the alternate result).
  - Filtering on two columns: `FILTER(Orders, Orders[ShippedDate] > Orders[RequiredDate])`, because a column-to-column comparison needs a row iterator.
  - Variables (`VAR … RETURN`) make measures readable and evaluate an expression once.
- **Example:**
```dax
% Late Orders =
VAR Late = CALCULATE(COUNTROWS(Orders), FILTER(Orders, Orders[ShippedDate] > Orders[RequiredDate]))
RETURN DIVIDE(Late, COUNTROWS(Orders))
% of Visible Total = DIVIDE([Revenue], CALCULATE([Revenue], ALLSELECTED(Product[Category])))
```
- **Traps:**
  - Expecting blanks for other years from `CALCULATE([X], Year = 2023)`. It repeats 2023 for every year.
  - ALL when report or slicer filters must be respected. Use ALLSELECTED.
  - Plain AVERAGE when only one department is wanted. Wrap it in CALCULATE with the filter.
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"CALCULATE","q":"A table shows Year and the measure CALCULATE([Pop], 'Date'[Year] = 2023). What appears on each year's row?","options":["Blank except on 2023","The 2023 value on every row","Each year's own value","An error for other years"],"answer":1,"multi":false,"explain":"A Boolean filter replaces the existing Year filter, so every row evaluates for 2023.","cite":"https://learn.microsoft.com/en-us/dax/calculate-function-dax","disputed":false}
{"id":"q2","domain":"MODEL","topic":"CALCULATE","q":"Which filter argument shows North sales only on the North row and blank on other district rows?","options":["'Work Orders'[District] = \"North\"","FILTER(ALL('Work Orders'[District]), 'Work Orders'[District] = \"North\")","KEEPFILTERS('Work Orders'[District] = \"North\")","REMOVEFILTERS('Work Orders'[District])"],"answer":2,"multi":false,"explain":"KEEPFILTERS intersects with the existing district filter instead of replacing it.","cite":"https://learn.microsoft.com/en-us/dax/keepfilters-function-dax","disputed":false}
{"id":"q3","domain":"MODEL","topic":"ALLSELECTED","q":"A % of total must respect a report-level filter but ignore the category on each row. Which function goes in the denominator?","options":["ALLSELECTED","ALL","VALUES","RELATED"],"answer":0,"multi":false,"explain":"ALLSELECTED removes visual-level filters while keeping outer filters such as slicers and report filters.","cite":"https://learn.microsoft.com/en-us/dax/allselected-function-dax","disputed":false}
{"id":"q4","domain":"MODEL","topic":"CALCULATE","q":"Which measure returns the average salary for the Sales department only?","options":["AVERAGE(Emp[Salary])","AVERAGEX(Emp, Emp[Dept] = \"Sales\")","CALCULATE(AVERAGE(Emp[Salary]), ALL(Emp))","CALCULATE(AVERAGE(Emp[Salary]), Emp[Dept] = \"Sales\")"],"answer":3,"multi":false,"explain":"CALCULATE applies the department filter to the AVERAGE.","cite":"https://learn.microsoft.com/en-us/dax/calculate-function-dax","disputed":false}
{"id":"q5","domain":"MODEL","topic":"CALCULATE","q":"Why use DIVIDE instead of the / operator in a ratio measure?","options":["It ignores all filters","It handles division by zero","It forces integer results","It runs before relationships"],"answer":1,"multi":false,"explain":"DIVIDE returns BLANK (or an alternate result) when the denominator is zero.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/dax-divide-function-operator","disputed":false}
```
- **Primary source:** [CALCULATE](https://learn.microsoft.com/en-us/dax/calculate-function-dax) · **Extra:** [ALLSELECTED](https://learn.microsoft.com/en-us/dax/allselected-function-dax), [KEEPFILTERS](https://learn.microsoft.com/en-us/dax/keepfilters-function-dax), [SQLBI DAX Guide](https://dax.guide/)

### Lesson 0018 — Iterators, context transition, counting and ranking
- **Slug:** `0018-iterators-context-transition` · **Domain:** MODEL · **Concepts:** C29, C30, C31 · **Time:** 20 min
- **Objective:** Write an iterator measure that evaluates per dimension member (with context transition) and choose the right counting or ranking function.
- **Key points:**
  - **X functions** (SUMX, AVERAGEX, MINX, MAXX, COUNTX, RANKX) iterate a table and evaluate an expression in **row context** for each row.
  - Row context does **not** filter related tables. `MAXX(Product, SUMX(Sales, …))` returns the grand total for every product.
  - **Context transition**: CALCULATE turns the current row into a filter. A **measure reference** inside an iterator gets an implicit CALCULATE, so `MAXX(Product, [Total Sales])` is correct.
  - `RELATED(Dim[Col])` reads the one side from a row on the many side. `RELATEDTABLE(Fact)` returns the related many-side rows for the current one-side row.
  - Grain matters: average per **day** = `AVERAGEX(VALUES('Date'[Date]), [Total Income])`, not AVERAGEX over transaction rows.
  - Counting: `COUNTROWS(Sales)` counts rows (order lines). `DISTINCTCOUNT(Sales[OrderID])` counts orders. COUNTA counts non-blank values in a column.
  - `TOPN(n, table, orderBy, [DESC])` returns a **table**: use it inside CALCULATE or as a calculated table. `TOPN(2, VALUES(Supplier[Region]), [Units], DESC)` ranks regions, not rows.
  - `RANKX(ALL(Product[Name]), [Sales], , DESC, Dense)`: Dense doesn't skip numbers after ties. Skip (the default) does.
  - Inside a measure, a bare column reference with no aggregation or iterator is an error. Wrap it: `MIN('Date'[Date])`.
- **Example:**
```dax
Best Product Sales = MAXX(VALUES(Product[Name]), [Total Sales])        -- context transition via measure
Last 3 Txn Total = CALCULATE([Total Sales], TOPN(3, Sales, Sales[OrderDateKey], DESC))
Orders = DISTINCTCOUNT(Sales[OrderID])
```
- **Traps:**
  - Nesting SUMX over the fact inside an iterator over the dimension without CALCULATE.
  - COUNTROWS when the lines repeat the order ID.
  - Leaving out DESC in TOPN or RANKX when the "top" (highest) values are wanted.
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"context-transition","q":"MAXX(Product, SUMX(Sales, Sales[Qty] * Sales[Price])) returns the same total for every product. Which change fixes it?","options":["Replace MAXX with MAX","Wrap the SUMX in CALCULATE","Replace SUMX with SUM","Add ALL around Product"],"answer":1,"multi":false,"explain":"CALCULATE triggers context transition, turning each product row into a filter on Sales.","cite":"https://learn.microsoft.com/en-us/dax/calculate-function-dax","disputed":false}
{"id":"q2","domain":"MODEL","topic":"counting","q":"Sales has one row per order line and repeats Order ID. Which measure counts orders?","options":["COUNTROWS(Sales)","COUNT(Sales[Order ID])","DISTINCTCOUNT(Sales[Order ID])","COUNTA(Sales[Order ID])"],"answer":2,"multi":false,"explain":"DISTINCTCOUNT counts each Order ID once; the others count lines.","cite":"https://learn.microsoft.com/en-us/dax/dax-overview","disputed":false}
{"id":"q3","domain":"MODEL","topic":"row-context","q":"Why does referencing [Total Sales] inside MAXX over Product give per-product values?","options":["Measures are wrapped in implicit CALCULATE","MAXX ignores the filter context","Relationships filter in row context","Measures always remove all filters"],"answer":0,"multi":false,"explain":"A measure reference implies CALCULATE, which performs context transition on the current row.","cite":"https://learn.microsoft.com/en-us/dax/calculate-function-dax","disputed":false}
{"id":"q4","domain":"MODEL","topic":"topn-rank","q":"Ranks must not skip numbers after ties. Which RANKX setting do you use?","options":["Skip","ASC","Default","Dense"],"answer":3,"multi":false,"explain":"The Dense tie option assigns the next consecutive rank after ties.","cite":"https://learn.microsoft.com/en-us/dax/rankx-function-dax","disputed":false}
{"id":"q5","domain":"MODEL","topic":"row-filter-context","q":"Average income per day must ignore how many transactions occur each day. Which expression fits?","options":["AVERAGE(Revenue[Income])","AVERAGEX(Revenue, [Total Income])","AVERAGEX(VALUES('Date'[Date]), [Total Income])","SUMX(Revenue, [Total Income]) / 7"],"answer":2,"multi":false,"explain":"Iterating day-grain rows and calling the measure gives one value per day to average.","cite":"https://learn.microsoft.com/en-us/dax/dax-overview","disputed":false}
```
- **Primary source:** [SQLBI DAX Guide](https://dax.guide/) · **Extra:** [RELATED](https://learn.microsoft.com/en-us/dax/related-function-dax), [TOPN](https://learn.microsoft.com/en-us/dax/topn-function-dax), [RANKX](https://learn.microsoft.com/en-us/dax/rankx-function-dax)

### Lesson 0019 — Time intelligence measures
- **Slug:** `0019-time-intelligence` · **Domain:** MODEL · **Concepts:** C32 · **Time:** 20 min
- **Objective:** Pick and write the time-intelligence function that returns exactly the period the requirement describes (YTD, same period last year, previous quarter, rolling window).
- **Key points:**
  - All functions need a proper date table (0014) and take `'Date'[Date]` as their date argument. Don't pass a measure.
  - `TOTALYTD([Sales], 'Date'[Date])` = `CALCULATE([Sales], DATESYTD('Date'[Date]))`. Also QTD and MTD.
  - `SAMEPERIODLASTYEAR('Date'[Date])` = `DATEADD('Date'[Date], -1, YEAR)`: the **same** selected dates shifted back one year. March 2022 → March 2021. Leap-year safe.
  - `DATEADD(dates, -1, QUARTER)` shifts the selected set back one quarter. `DATEADD(…, -4, QUARTER)` = one year back.
  - `PREVIOUSYEAR / PREVIOUSQUARTER / PREVIOUSMONTH` and `PARALLELPERIOD` return the **whole** previous period. At month level, PREVIOUSYEAR gives the full prior year, not the same month.
  - Rolling windows: `DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -31, DAY)` or `DATESBETWEEN('Date'[Date], MAX('Date'[Date]) - 30, MAX('Date'[Date]))`. DATESBETWEEN bounds are **inclusive**. DATEADD is a shift, not a window.
  - Never use `LASTDATE(...) - 365` for the prior year. It breaks in leap years.
  - YoY %: `DIVIDE([Sales] - [Sales PY], [Sales PY])`.
  - Quick measures (0020) generate YTD, YoY and rolling averages from a date column of the marked date table, or from the auto date/time hierarchy.
- **Example:**
```dax
Sales PY      = CALCULATE([Sales], SAMEPERIODLASTYEAR('Date'[Date]))
Sales YTD     = TOTALYTD([Sales], 'Date'[Date])
Sales PY YTD  = CALCULATE([Sales YTD], SAMEPERIODLASTYEAR('Date'[Date]))
Sales Prev Q  = CALCULATE([Sales], DATEADD('Date'[Date], -1, QUARTER))
Sales 31D     = CALCULATE([Sales], DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -31, DAY))
```
- **Traps:**
  - PREVIOUSYEAR or PARALLELPERIOD when "same month last year" is asked.
  - DATEADD(-30, DAY) for a rolling 30-day total. That is a shifted set, not a window.
  - A fixed -365 offset.
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"time-intelligence","q":"A matrix by month must show each month's sales from the same month last year. Which filter goes inside CALCULATE?","options":["PREVIOUSYEAR('Date'[Date])","SAMEPERIODLASTYEAR('Date'[Date])","PARALLELPERIOD('Date'[Date], -1, YEAR)","DATESYTD('Date'[Date])"],"answer":1,"multi":false,"explain":"SAMEPERIODLASTYEAR shifts the selected dates back one year; PREVIOUSYEAR and PARALLELPERIOD return the whole prior year.","cite":"https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax","disputed":false}
{"id":"q2","domain":"MODEL","topic":"time-intelligence","q":"Which expression returns a rolling 31-day window ending on the latest visible date?","options":["DATEADD('Date'[Date], -31, DAY)","PREVIOUSMONTH('Date'[Date])","DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -31, DAY)","SAMEPERIODLASTYEAR('Date'[Date])"],"answer":2,"multi":false,"explain":"DATESINPERIOD returns a contiguous window from an anchor date; DATEADD only shifts dates.","cite":"https://learn.microsoft.com/en-us/dax/datesinperiod-function-dax","disputed":false}
{"id":"q3","domain":"MODEL","topic":"time-intelligence","q":"What is wrong with LASTDATE('Date'[Date]) - 365 as a prior-year anchor?","options":["It fails in leap years","It ignores the slicer","It returns a table","It requires DirectQuery"],"answer":0,"multi":false,"explain":"A fixed 365-day offset misaligns in leap years; use SAMEPERIODLASTYEAR or DATEADD by year.","cite":"https://learn.microsoft.com/en-us/dax/dateadd-function-dax","disputed":false}
{"id":"q4","domain":"MODEL","topic":"time-intelligence","q":"Which measure returns year-to-date sales up to the selected date?","options":["TOTALYTD([Sales], [Order Count])","DATESYTD([Sales])","TOTALYTD('Date'[Date], [Sales])","TOTALYTD([Sales], 'Date'[Date])"],"answer":3,"multi":false,"explain":"TOTALYTD takes the expression first and the date column second.","cite":"https://learn.microsoft.com/en-us/dax/totalytd-function-dax","disputed":false}
{"id":"q5","domain":"MODEL","topic":"time-intelligence","q":"Which DATEADD call returns the same period one year earlier?","options":["DATEADD('Date'[Date], -4, QUARTER)","DATEADD('Date'[Date], -1, QUARTER)","DATEADD('Date'[Date], 4, QUARTER)","DATEADD('Date'[Date], -12, DAY)"],"answer":0,"multi":false,"explain":"Four quarters back equals one year back.","cite":"https://learn.microsoft.com/en-us/dax/dateadd-function-dax","disputed":false}
```
- **Primary source:** [Time intelligence functions](https://learn.microsoft.com/en-us/dax/time-intelligence-functions-dax) · **Extra:** [SAMEPERIODLASTYEAR](https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax), [DATESINPERIOD](https://learn.microsoft.com/en-us/dax/datesinperiod-function-dax), [DATESBETWEEN](https://learn.microsoft.com/en-us/dax/datesbetween-function-dax)

### Lesson 0020 — Semi-additive measures, statistics and quick measures
- **Slug:** `0020-semi-additive-statistics-quick-measures` · **Domain:** MODEL · **Concepts:** C33, C34 · **Time:** 15 min
- **Objective:** Write a closing-balance (semi-additive) measure and use basic statistical functions and quick measures correctly.
- **Key points:**
  - **Semi-additive** values (account balance, inventory on hand, headcount) can be summed across accounts or products but **not across time**.
  - Closing value: `CALCULATE(SUM(Inv[Qty]), LASTDATE('Date'[Date]))`. Use `LASTNONBLANK('Date'[Date], [Qty])` when the last calendar day may have no snapshot.
  - Opening value: FIRSTDATE / FIRSTNONBLANK. `CALCULATE(DISTINCTCOUNT(Bal[AccountID]), LASTDATE('Date'[Date]))` counts accounts on the last day only.
  - Basic statistics: SUM, AVERAGE, MEDIAN, MIN, MAX, COUNT, DISTINCTCOUNT, STDEV.P/S, PERCENTILE.INC/EXC (and X versions). AVERAGE ignores blanks.
  - **Quick measures** (right-click › New quick measure) generate DAX for common patterns: rolling average, YTD, YoY change, running total, star rating. Rolling average "7 days including today" = **6** periods before, **0** after.
  - Quick measures that need a date work with the date column of the marked date table or with an auto date/time hierarchy. A bare date column on the many side without either is rejected.
- **Example:** A monthly inventory matrix should show month-end stock: `Stock on Hand = CALCULATE(SUM(Inventory[Units]), LASTNONBLANK('Date'[Date], CALCULATE(SUM(Inventory[Units]))))`.
- **Traps:**
  - SUM across days for inventory, which overstates the stock.
  - COUNTROWS of headcount snapshots across months.
  - Entering 7 periods before for a 7-day average that includes today.
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"semi-additive","q":"Daily inventory snapshots must show month-end stock in a monthly matrix. Which filter fits inside CALCULATE?","options":["DATESMTD('Date'[Date])","ALL('Date')","LASTDATE('Date'[Date])","SAMEPERIODLASTYEAR('Date'[Date])"],"answer":2,"multi":false,"explain":"Semi-additive closing balances take the last date in the period instead of summing all days.","cite":"https://learn.microsoft.com/en-us/dax/lastdate-function-dax","disputed":false}
{"id":"q2","domain":"MODEL","topic":"semi-additive","q":"Which type of value is semi-additive?","options":["Sales amount","Units shipped","Invoice count","Account balance"],"answer":3,"multi":false,"explain":"Balances can be summed across accounts but not across time periods.","cite":"https://learn.microsoft.com/en-us/dax/lastdate-function-dax","disputed":false}
{"id":"q3","domain":"MODEL","topic":"quick-measures","q":"A quick-measure rolling average over 7 days including the current day needs which settings?","options":["6 periods before, 0 after","7 periods before, 0 after","7 periods before, 7 after","3 periods before, 3 after"],"answer":0,"multi":false,"explain":"The current day plus 6 previous days makes a 7-day window.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-quick-measures","disputed":false}
{"id":"q4","domain":"MODEL","topic":"statistics","q":"Which aggregate returns the middle value of a numeric column?","options":["AVERAGE","MEDIAN","STDEV.P","DISTINCTCOUNT"],"answer":1,"multi":false,"explain":"MEDIAN returns the 50th-percentile value; AVERAGE returns the mean.","cite":"https://learn.microsoft.com/en-us/dax/dax-overview","disputed":false}
{"id":"q5","domain":"MODEL","topic":"quick-measures","q":"A time-intelligence quick measure rejects Sales[DueDate]. Which date field will it accept?","options":["Any text column with dates","A many-side date column","The marked date table's date column","A whole-number DateKey column"],"answer":2,"multi":false,"explain":"Quick measures need the primary date column of a marked date table or an auto date/time hierarchy.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-quick-measures","disputed":false}
```
- **Primary source:** [Quick measures](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-quick-measures) · **Extra:** [LASTDATE](https://learn.microsoft.com/en-us/dax/lastdate-function-dax), [SQLBI DAX Guide](https://dax.guide/)

### Lesson 0021 — Calculation groups and visual calculations
- **Slug:** `0021-calculation-groups-visual-calculations` · **Domain:** MODEL (visual calculations are a VIZ objective) · **Concepts:** C35, C36 · **Time:** 18 min
- **Objective:** Replace many repetitive time-intelligence measures with one calculation group, and know when a visual calculation is the simpler tool.
- **Key points:**
  - A **calculation group** is a table of **calculation items** that rewrite whichever measure is in the visual. Each item's DAX uses `SELECTEDMEASURE()`, for example `CALCULATE(SELECTEDMEASURE(), DATESYTD('Date'[Date]))`.
  - Create one in Power BI Desktop Model view (Calculation group). Creating one sets **Discourage implicit measures** on, so only explicit measures work with it.
  - Typical items: Current, YTD, PY, YoY, YoY %. They work for Sales, Cost and Margin without writing 15 measures. Put the calculation group column on the matrix columns or in a slicer.
  - **Format string expressions** let an item (for example YoY %) show as a percentage. **Precedence** orders several groups.
  - **Visual calculations** (Desktop, New calculation on a visual) are DAX evaluated on the visual's own data grid. Functions include `RUNNINGSUM`, `MOVINGAVERAGE`, `PREVIOUS`, `NEXT`, `FIRST`, `LAST`, `COLLAPSE`, `EXPAND`. They are stored in the visual, not the model.
  - Use a visual calculation for a one-off running total or "versus previous row" on one visual. Use a measure or calculation group when many visuals need the logic.
- **Example:**
```dax
-- Calculation group "Time Calc", column "Period"
Current = SELECTEDMEASURE()
YTD     = CALCULATE(SELECTEDMEASURE(), DATESYTD('Date'[Date]))
PY      = CALCULATE(SELECTEDMEASURE(), SAMEPERIODLASTYEAR('Date'[Date]))
-- Visual calculation on a monthly column chart
Running Sales = RUNNINGSUM([Sales])
```
- **Traps:**
  - Expecting implicit measures (dragged columns) to work with a calculation group.
  - Writing a separate YTD/PY measure for every base measure when a calculation group does the job.
  - Thinking visual calculations can be reused in other visuals. They live in one visual.
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"calculation-groups","q":"Which function inside a calculation item refers to whatever measure is in the visual?","options":["SELECTEDVALUE()","ISFILTERED()","SELECTEDMEASURE()","VALUES()"],"answer":2,"multi":false,"explain":"SELECTEDMEASURE returns the measure currently being evaluated, letting one item apply to any measure.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/calculation-groups","disputed":false}
{"id":"q2","domain":"MODEL","topic":"calculation-groups","q":"Ten base measures each need YTD, PY and YoY versions. What minimises the number of measures?","options":["A calculation group","Thirty quick measures","A calculated table","Bookmarks per period"],"answer":0,"multi":false,"explain":"One calculation group with three items applies to all ten measures.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/calculation-groups","disputed":false}
{"id":"q3","domain":"MODEL","topic":"calculation-groups","q":"What model setting is turned on when you create a calculation group?","options":["Auto date/time","Discourage implicit measures","Assume referential integrity","Apply security filter both ways"],"answer":1,"multi":false,"explain":"Calculation groups work only with explicit measures, so implicit measures are discouraged.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/calculation-groups","disputed":false}
{"id":"q4","domain":"VIZ","topic":"visual-calculations","q":"One chart needs a running total of its plotted values only. What is the simplest option?","options":["A calculated column","A calculation group","A new semantic model","A visual calculation"],"answer":3,"multi":false,"explain":"Visual calculations such as RUNNINGSUM operate on the visual's data and need no model changes.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-visual-calculations-overview","disputed":false}
{"id":"q5","domain":"VIZ","topic":"visual-calculations","q":"Where is a visual calculation stored?","options":["In the visual","In the Date table","In the dataflow","In the gateway"],"answer":0,"multi":false,"explain":"Visual calculations are defined on and stored with the visual, not in the semantic model.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-visual-calculations-overview","disputed":false}
```
- **Primary source:** [Calculation groups](https://learn.microsoft.com/en-us/power-bi/transform-model/calculation-groups) · **Extra:** [Visual calculations overview](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-visual-calculations-overview)

### Lesson 0022 — Optimise model performance
- **Slug:** `0022-model-performance` · **Domain:** MODEL · **Concepts:** C37, C38, C39 · **Time:** 20 min
- **Objective:** Diagnose a slow report with Performance Analyzer and DAX query view, and shrink the model by removing rows and columns, reducing cardinality and lowering granularity, without breaking the required visuals.
- **Key points:**
  - **Remove unused columns** (the biggest win) and **unneeded rows** (old history, cancelled orders) in Power Query. **Hiding** a column does not shrink the model. Never remove columns that visuals, relationships or distinct counts need.
  - **Cardinality**: high-cardinality columns (GUIDs, DateTime to the second, free text, concatenated keys) compress badly. Split DateTime into Date and Time. Keep one integer key and drop a redundant GUID. Round or truncate only when no information the requirement needs is lost.
  - Changing DateTime to Date loses the hours. Format changes don't change storage.
  - **Granularity**: group to the grain the report needs (daily instead of transaction level) or add an **aggregation** table. Disable auto date/time.
  - Do calculated columns and tables in Power Query or the source where possible.
  - **Performance Analyzer** (Optimize ribbon) records each visual's **DAX query**, **Visual display** and **Other** time. High "Other" = waiting for other visuals, so reduce the number of visuals per page or fix the slow neighbours. "Copy query" sends the DAX to **DAX query view** to test and tune measures with `EVALUATE`.
  - Too many visuals on one page (25+) is slow. Split them across pages or use drillthrough.
  - Bidirectional relationships and complex iterators over large facts also hurt.
- **Example:** A 550 MB PBIX with a 12-million-row fact: remove `Description`, `RowGUID` and the unused `TaxAmt`. Split `OrderDateTime` into Date and Time. Filter to the last 3 years if the visuals need only 3. Check with Performance Analyzer before and after.
- **Traps:**
  - Hiding or applying OLS to "reduce size".
  - Removing CustomerKey, which breaks a distinct-customer count.
  - Tuning the slow visual's own DAX when its time is mostly "Other".
- **Knowledge check:**
```json
{"id":"q1","domain":"MODEL","topic":"model-size-reduction","q":"A PIN column must not be visible and the model must get smaller. What do you do?","options":["Hide the column in the model","Remove the column in Power Query","Apply object-level security","Format the column as masked"],"answer":1,"multi":false,"explain":"Only removing the column before load reduces size; hiding, OLS or formatting keep the data loaded.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction","disputed":false}
{"id":"q2","domain":"MODEL","topic":"performance-analyzer","q":"In Performance Analyzer, a visual's time is mostly 'Other'. What does that indicate?","options":["Its DAX query is slow","Its data source is offline","Its DAX query is cached","It waits for other visuals"],"answer":3,"multi":false,"explain":"Other is time waiting on other operations, typically other visuals on the page.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-performance-analyzer","disputed":false}
{"id":"q3","domain":"MODEL","topic":"column-cardinality","q":"IoT events are analysed by day and hour. Which change cuts storage without losing information?","options":["Split DateTime into Date and Time","Change DateTime to Date","Round DateTime to the day","Format DateTime as short date"],"answer":0,"multi":false,"explain":"Two lower-cardinality columns compress better than one DateTime and keep the hour; the others lose data or change nothing.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction","disputed":false}
{"id":"q4","domain":"MODEL","topic":"dax-query-view","q":"You copied a slow visual's query from Performance Analyzer. Where can you run and tune it in Desktop?","options":["Power Query editor","Model view properties","DAX query view","Report settings"],"answer":2,"multi":false,"explain":"DAX query view runs EVALUATE queries so you can test and optimise measures.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/dax-query-view","disputed":false}
{"id":"q5","domain":"MODEL","topic":"model-size-reduction","q":"Reports only show the last three years of a ten-year fact table. What reduces size safely?","options":["Hide the older rows","Filter older rows in Power Query","Add a report-level year filter","Use a DAX FILTER in measures"],"answer":1,"multi":false,"explain":"Filtering rows before load removes them from the model; report and DAX filters do not.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction","disputed":false}
```
- **Primary source:** [Data reduction techniques for Import modeling](https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction) · **Extra:** [Performance Analyzer](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-performance-analyzer), [DAX query view](https://learn.microsoft.com/en-us/power-bi/transform-model/dax-query-view), [Aggregations](https://learn.microsoft.com/en-us/power-bi/transform-model/aggregations-advanced)

### Lesson 0023 — Choose the right visual (and when to go paginated)
- **Slug:** `0023-choose-the-right-visual` · **Domain:** VIZ · **Concepts:** C40, C41 · **Time:** 18 min
- **Objective:** Match an analysis need to a visual type, configure KPI and gauge wells, and recognise when a paginated report is required.
- **Key points:**
  - Compare categories → clustered bar/column. Trend over time → line. Part-to-whole → pie/donut (few slices), treemap. Part-to-whole over time as % → 100% stacked area/column. Running change from positive and negative steps → **waterfall**. Two measures plus correlation and outliers → **scatter** (play axis for time, automatic clusters). One value → card. Many values → table/matrix. Geography → map/filled map. Stage drop-off → funnel. Split one chart by a category → **small multiples**.
  - **KPI visual**: Value (indicator) = actual, **Trend axis** = time (needs a unique period such as Year-Quarter, not Quarter alone), **Target** = goal. Set direction (High is good / Low is good). The goal shows blank when the goal measure's grain doesn't match the trend axis.
  - **Gauge**: value against min, max and target. No trend. Use it for "current price vs low/high bounds".
  - Line chart with a forecast or anomaly detection needs a continuous date axis (0030).
  - **Paginated report** (Power BI Report Builder, .rdl): pixel-perfect, printable, prints **all rows** across pages, exports to PDF/Word/Excel/PowerPoint, suits invoices and statements. Contains a **tablix**. Interactive Power BI reports suit exploration.
  - Prefer bar charts over pie charts for comparing many categories accurately.
- **Example:** Board pack: monthly invoice PDFs for every customer, all line items → paginated report with a tablix. Executive exploration → Power BI report.
- **Traps:**
  - Pie chart for 10 categories or for comparing margins across regions.
  - Quarter alone on a KPI trend axis, which sums across years.
  - Interactive table for a printable 40-page list. It truncates; go paginated.
- **Knowledge check:**
```json
{"id":"q1","domain":"VIZ","topic":"chart-selection","q":"Monthly headcount changes include hires (positive) and leavers (negative). Which visual shows the running result?","options":["Stacked area chart","Waterfall chart","Funnel chart","Donut chart"],"answer":1,"multi":false,"explain":"Waterfall charts show how positive and negative changes build a running total.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-waterfall-charts","disputed":false}
{"id":"q2","domain":"VIZ","topic":"paginated-reports","q":"Customers need printable invoices that list every line across pages and export to PDF. What do you build?","options":["A dashboard with tiles","An interactive matrix page","A paginated report","A mobile report layout"],"answer":2,"multi":false,"explain":"Paginated reports render all rows across printed pages with precise layout.","cite":"https://learn.microsoft.com/en-us/power-bi/guidance/report-paginated-or-power-bi","disputed":false}
{"id":"q3","domain":"VIZ","topic":"kpi-gauge","q":"A KPI visual compares sales to target by quarter, but values add up across years. What should the trend axis use?","options":["A unique Year-Quarter column","The Quarter column alone","The target measure","The Date column formatted"],"answer":0,"multi":false,"explain":"The trend axis needs a unique period key; Quarter alone groups all years together.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-kpi","disputed":false}
{"id":"q4","domain":"VIZ","topic":"kpi-gauge","q":"Show today's share price against fixed low and high bounds, with no trend. Which visual fits?","options":["KPI visual","Line chart","Scatter chart","Radial gauge"],"answer":3,"multi":false,"explain":"A gauge shows one value against minimum, maximum and target values.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-radial-gauge-charts","disputed":false}
{"id":"q5","domain":"VIZ","topic":"chart-selection","q":"Revenue by month must be compared side by side for each year in identical small charts. Which feature?","options":["A play axis","Small multiples","A drillthrough page","A bookmark navigator"],"answer":1,"multi":false,"explain":"Small multiples split one visual into a grid of copies by a category such as Year.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-small-multiples","disputed":false}
```
- **Primary source:** [Visualization types](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a) · **Extra:** [KPI visual](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-kpi), [Paginated or Power BI report?](https://learn.microsoft.com/en-us/power-bi/guidance/report-paginated-or-power-bi)

### Lesson 0024 — Themes, conditional formatting and number formats
- **Slug:** `0024-format-themes-conditional-formatting` · **Domain:** VIZ · **Concepts:** C42, C43 · **Time:** 18 min
- **Objective:** Apply a reusable corporate theme and the right conditional-formatting style (rules, gradient, field value, data bars, icons) for a requirement.
- **Key points:**
  - **Report theme**: a JSON file (colours, fonts, visual defaults) imported in Desktop (View › Themes › Browse) and reusable across reports. Customising the current theme affects only that file unless you save and export it.
  - **Dashboard theme** (service only) recolours dashboard tiles. A report theme doesn't change existing dashboard tiles. When pinning, choose "keep current theme" or "use destination theme". Tiles pinned with the report theme keep it.
  - Conditional formatting (background, font colour, data bars, icons, web URL) on table/matrix cells and many visual properties (titles, card values via **fx**).
  - **Rules**: thresholds or ranges (for example, red if < 0, green ≥ 100). A rule can be based on another field and its aggregation (for example, Average of Pageviews).
  - **Gradient**: a colour scale. **Field value**: the colour comes from a column or measure that returns a colour name or hex.
  - **Data bars** show magnitude inside cells. Tick "Show bar only" to hide numbers. **Icons** add shape cues, which also help accessibility.
  - Number formats: custom format strings such as `0.00;(0.00)` give two decimals with negatives in parentheses. Colour (red) comes from conditional formatting.
- **Example:** Revenue cells must turn red below 1 M, amber 1–5 M, green above. Background colour → Format style **Rules** → three ranges.
- **Traps:**
  - Expecting a report theme to recolour pinned dashboard tiles.
  - Gradient when discrete thresholds are required.
  - Data bars with numbers still showing when the requirement says to hide them.
- **Knowledge check:**
```json
{"id":"q1","domain":"VIZ","topic":"conditional-formatting","q":"Cells must be red below 0, amber from 0 to 100, green above 100. Which format style do you choose?","options":["Gradient","Field value","Rules","Data bars"],"answer":2,"multi":false,"explain":"Rules apply colours to explicit value ranges or thresholds.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting","disputed":false}
{"id":"q2","domain":"VIZ","topic":"themes","q":"A corporate look must be applied consistently to many reports. What is the most reusable approach?","options":["Import a JSON report theme","Customise the current theme","Format each visual by hand","Apply a dashboard theme"],"answer":0,"multi":false,"explain":"A JSON theme file can be imported into any report in Desktop.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-report-themes","disputed":false}
{"id":"q3","domain":"VIZ","topic":"themes","q":"Pinned tiles on one dashboard need new colours without changing the reports. What do you change?","options":["The report theme","The visual formatting","The tenant settings","The dashboard theme"],"answer":3,"multi":false,"explain":"Dashboard themes recolour tiles on that dashboard only.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-themes","disputed":false}
{"id":"q4","domain":"VIZ","topic":"conditional-formatting","q":"Values 1–20 must be compared visually inside a table with the numbers hidden. What do you configure?","options":["Icons with show icon only","Data bars with show bar only","Gradient font colour","Background by field value"],"answer":1,"multi":false,"explain":"Data bars encode magnitude; the 'Show bar only' option hides the numbers.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting","disputed":false}
{"id":"q5","domain":"VIZ","topic":"number-formatting","q":"Which custom format string shows two decimals and negatives in parentheses?","options":["#,##0","0%;-0%","0.00;(0.00)","$0;$0"],"answer":2,"multi":false,"explain":"The section after the semicolon formats negative values; parentheses wrap them.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting","disputed":false}
```
- **Primary source:** [Conditional table formatting](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting) · **Extra:** [Report themes](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-report-themes), [Dashboard themes](https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-themes)

### Lesson 0025 — Filters, slicers and sync slicers
- **Slug:** `0025-filters-slicers-sync` · **Domain:** VIZ · **Concepts:** C44, C45 · **Time:** 18 min
- **Objective:** Pick the filter scope (visual, page, report, slicer, synced slicer) that applies a selection to exactly the visuals and pages required.
- **Key points:**
  - Filter pane scopes: **visual-level** (one visual; **Top N** lives here, for example top 20 customers), **page-level** (all visuals on a page), **report-level** (all pages). Drillthrough filters are set on target pages.
  - **Slicers** are on-canvas filters that affect their page by default. Report consumers can see and change them.
  - **Sync slicers** pane (View › Sync slicers): tick **Sync** per page to share the selection, and **Visible** per page to show or hide the slicer. A selection on page 1 can then filter pages 2–3 but not 4. Hide it on pages where it shouldn't appear.
  - **Sync groups** (Advanced options): give slicers that use different fields, or that were copied, the **same group name**. "Sync field changes" propagates a field swap. "Sync filter changes" propagates selections.
  - Copying a slicer to another page prompts you to sync it. A second, unsynced copy filters independently.
  - Page or report filters can't exclude one visual. Use a slicer plus **Edit interactions → None** (0026).
  - Slicers and filters do **not** secure data. Use RLS (0036).
- **Example:** The Country slicer on page 1 must also filter pages 2 and 3, show only on page 1, and leave page 4 alone. Sync pane: Sync ✓ on 1–3, Visible ✓ only on 1, nothing on 4.
- **Traps:**
  - A page-level filter when the selection must carry across pages.
  - A bookmark per slicer value to "persist" selections.
  - A report-level filter when one page must be excluded.
- **Knowledge check:**
```json
{"id":"q1","domain":"VIZ","topic":"slicers","q":"A Country slicer on page 1 must filter pages 2 and 3 but not page 4. What do you configure?","options":["A report-level filter on Country","Sync the slicer to pages 1, 2 and 3","A page-level filter on pages 1 to 3","One bookmark for each country"],"answer":1,"multi":false,"explain":"Sync slicers lets you choose exactly which pages share the selection.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers","disputed":false}
{"id":"q2","domain":"VIZ","topic":"visual-filters","q":"Only one table visual must show the top 20 customers by sales. Where do you set the Top N filter?","options":["Report-level filters","Page-level filters","Drillthrough filters","Visual-level filters"],"answer":3,"multi":false,"explain":"A visual-level Top N filter affects only that visual.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-report-add-filter","disputed":false}
{"id":"q3","domain":"VIZ","topic":"slicers","q":"Two slicers on different pages use different fields and must react to each other's selections. What is required?","options":["Put them in the same sync group","Group them in the Selection pane","Create a bookmark for both","Set both to dropdown style"],"answer":0,"multi":false,"explain":"Slicers sync across fields only when they share a sync group name in advanced options.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers","disputed":false}
{"id":"q4","domain":"VIZ","topic":"slicers","q":"A synced slicer must filter page 2 but should not be visible there. What do you set?","options":["Sync off, Visible on for page 2","Sync off, Visible off for page 2","Sync on, Visible off for page 2","Sync on, Visible on for page 2"],"answer":2,"multi":false,"explain":"Sync applies the selection; Visible controls whether the slicer appears on that page.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers","disputed":false}
{"id":"q5","domain":"VIZ","topic":"slicers","q":"Selections should persist across all report pages with minimal effort. Which two options work? (Choose two.)","options":["A report-level filter","A bookmark per value","Sync slicers on all pages","A page-level filter"],"answer":[0,2],"multi":true,"explain":"Report-level filters and synced slicers both apply across pages; bookmarks and page filters do not persist selections.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-report-add-filter","disputed":false}
```
- **Primary source:** [Slicers in Power BI](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers) · **Extra:** [Add filters to a report](https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-report-add-filter)

### Lesson 0026 — Interactions, drill down vs drillthrough, tooltips
- **Slug:** `0026-interactions-drill-tooltips` · **Domain:** VIZ · **Concepts:** C46, C47, C48 · **Time:** 20 min
- **Objective:** Configure how a selection affects other visuals, choose drill down or drillthrough, and build a report-page tooltip.
- **Key points:**
  - **Edit interactions** (Format › Edit interactions, select the source visual): for each target choose **Filter** (removes unrelated data), **Highlight** (dims unrelated data and keeps context, so you see the share of the total), or **None**.
  - Some visuals can't highlight. Maps support cross-filter only.
  - Drilling in a matrix filters other visuals only if "Drilling filters other visuals" is on. Visual options let drill filters apply to the **Entire page** or the **Selected visual**.
  - **Drill down** moves down a **hierarchy** inside the same visual (Year → Quarter → Month).
  - **Drillthrough** opens a **target page** filtered to the clicked item: add the field to the target page's Drillthrough well. "Keep all filters" carries slicer context. Buttons with action **Drill through** pass both the slicer and the selected data point. Page navigation and bookmarks don't.
  - **Tooltips**: drop fields into the Tooltips well for extra values on hover. **Report page tooltip**: create a page → Page information › **Allow use as tooltip** → canvas type Tooltip → add visuals → on the source visual set Tooltip type = Report page → choose the page.
- **Example:** Clicking a product in the bar chart should filter the line chart, dim the column chart and leave the KPI card alone. Select the bar chart → Edit interactions → line: Filter, column: Highlight, card: None.
- **Traps:**
  - Drill down with no hierarchy, or drillthrough when the same visual is meant.
  - Turning on "Allow use as tooltip" on the **source** page instead of the tooltip page.
  - Expecting a page-navigation button to carry the clicked data point.
- **Knowledge check:**
```json
{"id":"q1","domain":"VIZ","topic":"visual-interactions","q":"Selecting a bar should keep all columns in another chart visible but dim the unrelated ones. Which interaction?","options":["Filter","None","Drill down","Highlight"],"answer":3,"multi":false,"explain":"Highlight dims unrelated data while keeping the whole picture, showing the selection's share.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions","disputed":false}
{"id":"q2","domain":"VIZ","topic":"drillthrough","q":"Clicking a customer must open a details page filtered to that customer. What do you configure?","options":["A drillthrough field on the target page","A hierarchy with drill down","A tooltip page for customers","A bookmark for each customer"],"answer":0,"multi":false,"explain":"Drillthrough opens a target page filtered by the drillthrough field value.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-drillthrough","disputed":false}
{"id":"q3","domain":"VIZ","topic":"tooltips","q":"Hovering a column must show a mini chart of products for that category. What do you build?","options":["A drillthrough page","A report page tooltip","A sync slicer group","A bookmark navigator"],"answer":1,"multi":false,"explain":"A page set to 'Allow use as tooltip' renders on hover over the source visual.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-tooltips","disputed":false}
{"id":"q4","domain":"VIZ","topic":"drillthrough","q":"A button must pass both the slicer year and the selected chart point to a detail page. Which action type?","options":["Page navigation","Bookmark","Drill through","Q&A"],"answer":2,"multi":false,"explain":"The Drill through button action carries the selected data point and filters to the target page.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-buttons","disputed":false}
{"id":"q5","domain":"VIZ","topic":"visual-interactions","q":"Which interaction type does a map visual support when another visual is selected?","options":["Cross-highlight only","Cross-filter only","Both filter and highlight","Neither filter nor highlight"],"answer":1,"multi":false,"explain":"Maps can be cross-filtered but do not support cross-highlighting.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions","disputed":false}
```
- **Primary source:** [Change how visuals interact](https://learn.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions) · **Extra:** [Drillthrough](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-drillthrough), [Tooltips](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-tooltips)

### Lesson 0027 — Bookmarks, buttons, navigation and the Selection pane
- **Slug:** `0027-bookmarks-navigation-selection` · **Domain:** VIZ · **Concepts:** C49, C50 · **Time:** 18 min
- **Objective:** Build view switching and page navigation with the fewest bookmarks and objects, and control layering with the Selection pane.
- **Key points:**
  - A **bookmark** captures page state: filters and slicers (**Data**), visibility and spotlight (**Display**), and the active page (**Current page**). It applies to all visuals or only the selected visuals.
  - Toggling two views while keeping the user's slicer choice: two bookmarks with **Data unchecked** and Display checked. The visibility of each view is set in the Selection pane.
  - Buttons: actions Back, Bookmark, Drill through, Page navigation, Q&A, Web URL, Apply/Clear all slicers.
  - **Page navigator** (Insert › Buttons › Navigator) creates one button per visible page and updates itself as pages are added or hidden: low maintenance. **Bookmark navigator** shows the bookmarks of a bookmark **group**.
  - **Selection pane**: **layer order** (which object sits on top, for example a card above a shape), show/hide, **group** visuals. The **Tab order** tab sets keyboard and screen-reader order. That is different from layer order.
  - **Position** (Format › General › Properties) sets an exact x/y location and size.
- **Example:** A Chart/Table toggle: put both visuals in place → bookmark "Chart" (table hidden), bookmark "Table" (chart hidden). Untick Data on both → group them → add a Bookmark navigator.
- **Traps:**
  - Leaving Data ticked, which resets the user's slicers when they switch views.
  - Building one bookmark button per page instead of a page navigator.
  - Confusing layer order (stacking) with tab order (reading order).
- **Knowledge check:**
```json
{"id":"q1","domain":"VIZ","topic":"bookmarks","q":"Two bookmarks toggle a chart and a table, but switching resets the user's slicer choice. What do you change?","options":["Untick Current page","Untick Display","Tick All visuals","Untick Data"],"answer":3,"multi":false,"explain":"The Data property stores filter and slicer state; unticking it keeps the user's current selections.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-bookmarks","disputed":false}
{"id":"q2","domain":"VIZ","topic":"page-navigation","q":"Users need buttons for every visible page that update automatically when pages are added. What do you insert?","options":["A page navigator","A bookmark per page","A drillthrough button","A Q&A button"],"answer":0,"multi":false,"explain":"The page navigator generates and maintains a button for each visible page.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-buttons","disputed":false}
{"id":"q3","domain":"VIZ","topic":"layer-order","q":"A card is hidden behind a rectangle shape. Where do you fix it?","options":["Tab order in Selection pane","Layer order in Selection pane","Page size in Canvas settings","Edit interactions on the card"],"answer":1,"multi":false,"explain":"Layer order in the Selection pane controls which object renders on top.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-bookmarks","disputed":false}
{"id":"q4","domain":"VIZ","topic":"bookmarks","q":"One object must switch between three bookmarks. What is the least-effort design?","options":["Three buttons with bookmark actions","Three pages with page navigation","A bookmark group and a bookmark navigator","A slicer with three values"],"answer":2,"multi":false,"explain":"A bookmark navigator displays all bookmarks in a group as one object.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-buttons","disputed":false}
{"id":"q5","domain":"VIZ","topic":"bookmarks","q":"Which bookmark property captures slicer and filter selections?","options":["Data","Display","Current page","Selected visuals"],"answer":0,"multi":false,"explain":"Data stores filters, slicers and sort state; Display stores visibility.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-bookmarks","disputed":false}
```
- **Primary source:** [Bookmarks](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-bookmarks) · **Extra:** [Buttons and navigators](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-buttons)

### Lesson 0028 — Design for accessibility and mobile
- **Slug:** `0028-mobile-and-accessibility` · **Domain:** VIZ · **Concepts:** C51, C52 · **Time:** 18 min
- **Objective:** Make a report usable by screen-reader, keyboard and colour-vision-deficient users, and build report and dashboard mobile layouts.
- **Key points:**
  - **Alt text** on every visual. Static alt text never changes, so for a value that changes with refresh, drive the alt text from a DAX measure through conditional formatting (fx).
  - **Tab order** (Selection pane) = logical reading order for keyboard and screen readers. Hide decorative shapes from tab order.
  - Never use **colour alone**. Add icons with different **shapes**, data labels or markers. Use accessible theme colours and divergent palettes, and enough contrast. Swapping red for orange doesn't fix it.
  - Clear titles and labels, a reasonable font size, and the Show as table (Alt+Shift+F11) option help users.
  - **Report mobile layout** (portrait): Desktop View › Mobile layout, or the service in edit mode. Drag visuals onto the phone canvas. It is optimised for the Power BI mobile app.
  - **Dashboard mobile layout**: service › dashboard › Edit › **Mobile layout**. Unpin, resize or reorder tiles. It is separate from the report mobile layout. Keep single-value tiles (cards) to reduce scrolling.
  - Canvas settings (custom page size, for example portrait 1080×1920) suit vertical displays.
- **Example:** A status table uses red/green fill. Fix: add icon conditional formatting (✔ circle, ✖ diamond) and a status text column, and set alt text for the visual.
- **Traps:**
  - Static alt text for a live KPI.
  - Using layer order to set reading order.
  - Editing the report mobile view when the requirement is the **dashboard** phone view.
- **Knowledge check:**
```json
{"id":"q1","domain":"VIZ","topic":"accessibility","q":"A screen reader must announce a card's current value after every refresh. What do you configure?","options":["Static alt text on the card","A text box beside the card","Conditional alt text from a measure","A tooltip page for the card"],"answer":2,"multi":false,"explain":"Alt text can be conditionally formatted with a DAX measure, so it updates with the data.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-accessibility-creating-reports","disputed":false}
{"id":"q2","domain":"VIZ","topic":"accessibility","q":"Keyboard users must move through visuals in a logical sequence. What do you set?","options":["Layer order","Tab order","Sort order","Page order"],"answer":1,"multi":false,"explain":"Tab order in the Selection pane sets keyboard and screen-reader navigation order.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-accessibility-creating-reports","disputed":false}
{"id":"q3","domain":"VIZ","topic":"accessibility","q":"Status cells use red and green only. Which change helps colour-blind users most?","options":["Change red to orange","Increase the font size","Add a gradient scale","Add icons of different shapes"],"answer":3,"multi":false,"explain":"Shape-based icons add a non-colour cue; changing hues still relies on colour.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-accessibility-overview","disputed":false}
{"id":"q4","domain":"VIZ","topic":"mobile-layout","q":"A dashboard must show only two cards on phones. Where do you make the change?","options":["Dashboard Edit, Mobile layout","Report View, Mobile layout","Canvas settings in Desktop","Bookmarks pane in Desktop"],"answer":0,"multi":false,"explain":"The dashboard mobile layout is edited in the service, separate from report mobile layouts.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/service-create-dashboard-mobile-phone-view","disputed":false}
{"id":"q5","domain":"VIZ","topic":"mobile-layout","q":"Where can a portrait mobile layout for a report be created?","options":["Only in Power BI Desktop","Only in the Power BI service","In Desktop and in the service","Only in the mobile app"],"answer":2,"multi":false,"explain":"Report mobile layouts can be authored in Desktop and in the service's edit mode.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-create-mobile-optimized-report-about","disputed":false}
```
- **Primary source:** [Accessibility overview](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-accessibility-overview) · **Extra:** [Creating accessible reports](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-accessibility-creating-reports), [Mobile-optimised reports](https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-create-mobile-optimized-report-about), [Dashboard phone view](https://learn.microsoft.com/en-us/power-bi/create-reports/service-create-dashboard-mobile-phone-view)

### Lesson 0029 — Personalisation, export settings and automatic page refresh
- **Slug:** `0029-personalize-export-page-refresh` · **Domain:** VIZ · **Concepts:** C53, C54 · **Time:** 15 min
- **Objective:** Configure report settings that let consumers adapt visuals, control data export, and refresh a page automatically.
- **Key points:**
  - **Personalize visuals**: turn it on in report settings (Desktop: File › Options › Current file › Report settings; or in the service). Consumers can then change visual type, swap measures and dimensions, and change the legend for themselves without editing. They can save the result as a personal bookmark. You can turn it on for the whole report or per visual.
  - **Export data** options (report setting, limited by the tenant setting): **None**, **Summarized data only**, **Summarized and underlying data**. Set it in Desktop and/or the service. Underlying data also needs Build permission on the model.
  - Blocking export for one report while leaving others unchanged → that report's setting. Blocking it org-wide → tenant admin setting. RLS and model permissions do not stop export of what users can see.
  - **Automatic page refresh** (Format page › Page refresh): **DirectQuery** (and some push/Direct Lake) sources only. **Fixed interval**: the minimum in shared capacity is **30 minutes**. Premium/Fabric capacity allows shorter intervals, set by the admin. **Change detection** (a measure checked for changes) needs Premium/Fabric capacity.
  - Comments on reports and dashboards (and on tiles or visuals) let consumers discuss content with @mentions.
- **Example:** Ops needs a dashboard-like page updated every 5 minutes from Azure SQL: DirectQuery model in a Fabric/Premium workspace → Page refresh **On**, fixed interval **5 min** (allowed by the capacity admin minimum).
- **Traps:**
  - Expecting automatic page refresh on an Import model.
  - Expecting a 1-minute interval in shared capacity.
  - Trying to block export with RLS or model permissions.
- **Knowledge check:**
```json
{"id":"q1","domain":"VIZ","topic":"personalize-visuals","q":"Readers want to change a chart's type and measure for themselves without affecting others. What do you enable?","options":["Edit interactions","Personalize visuals","Bookmarks pane","Focus mode"],"answer":1,"multi":false,"explain":"Personalize visuals lets consumers modify visuals in their own view without edit rights.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-personalize-visuals","disputed":false}
{"id":"q2","domain":"VIZ","topic":"export-settings","q":"Users may export aggregated visual data but never the underlying rows. Which export option fits?","options":["None","Summarized and underlying data","Summarized data only","Underlying data only"],"answer":2,"multi":false,"explain":"'Summarized data only' allows exporting visual aggregates while blocking underlying rows.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-export-data","disputed":false}
{"id":"q3","domain":"VIZ","topic":"automatic-page-refresh","q":"Which source type is required for fixed-interval automatic page refresh?","options":["DirectQuery","Import","Excel workbook","CSV folder"],"answer":0,"multi":false,"explain":"Automatic page refresh works with DirectQuery sources, not Import.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-automatic-page-refresh","disputed":false}
{"id":"q4","domain":"VIZ","topic":"automatic-page-refresh","q":"In shared capacity, what is the minimum fixed interval for automatic page refresh?","options":["1 second","1 minute","5 minutes","30 minutes"],"answer":3,"multi":false,"explain":"Shared capacity limits fixed-interval page refresh to a minimum of 30 minutes.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-automatic-page-refresh","disputed":false}
{"id":"q5","domain":"VIZ","topic":"export-settings","q":"One report with PII must block all exports while other reports keep exporting. What do you change?","options":["The RLS roles","The report's export setting","The model's Build permission","The tenant export setting"],"answer":1,"multi":false,"explain":"The report-level export setting restricts that report only; the tenant setting affects everything.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-export-data","disputed":false}
```
- **Primary source:** [Automatic page refresh](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-automatic-page-refresh) · **Extra:** [Personalize visuals](https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-personalize-visuals), [Export data from visuals](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-export-data)

### Lesson 0030 — Analytics pane, anomalies, grouping and clustering
- **Slug:** `0030-analytics-pane-anomalies-grouping` · **Domain:** VIZ · **Concepts:** C55, C56 · **Time:** 20 min
- **Objective:** Add the right reference line, forecast, error bars or anomaly detection, and group, bin or cluster data to reveal patterns.
- **Key points:**
  - **Analytics pane** lines: Constant (fixed value), Min, Max, Average, **Median**, **Percentile** (Median = 50th percentile), Trend, X/Y constant lines on scatter. A constant or average line is **not** a median.
  - **Forecast**: line chart with a continuous date axis. Set the forecast length, confidence interval and seasonality.
  - **Error bars** (line, bar and column charts): show uncertainty from upper and lower bound fields or measures.
  - **Anomaly detection**: line chart with a **date/time axis** (no legend). It marks unexpected values with an expected range and explanations. Raising **Sensitivity** flags more anomalies.
  - **Grouping** (Data pane or visual › New group): **List** groups categories (states → regions). **Bin** groups numbers or dates by **size of bins** (for example 7-day bins) or **number of bins**.
  - **Clustering**: scatter chart › ⋯ › **Automatically find clusters** creates a cluster field. **Play axis** animates a scatter over time. **High-density sampling** keeps scatters with many points readable.
  - Outliers: scatter plot (or a box-plot custom visual). Anomaly detection for time series.
- **Example:** A bar chart of salaries needs a line splitting employees into above and below the middle → Analytics pane → **Median line** (or a 50% percentile line), not Average.
- **Traps:**
  - Average or constant line to show a median.
  - Anomaly detection on a column chart or with a category axis.
  - Bins for text categories. Use list groups.
- **Knowledge check:**
```json
{"id":"q1","domain":"VIZ","topic":"reference-lines","q":"A bar chart must show a line that splits values into the upper and lower half. Which line fits?","options":["Average line","Constant line","Percentile line at 50%","Max line"],"answer":2,"multi":false,"explain":"The 50th percentile equals the median; average and constant lines do not split by median.","cite":"https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-analytics-pane","disputed":false}
{"id":"q2","domain":"VIZ","topic":"anomaly-detection","q":"What does anomaly detection require?","options":["A line chart with a date axis","A bar chart with a legend","A scatter chart with clusters","A table with conditional icons"],"answer":0,"multi":false,"explain":"Anomaly detection runs on line charts with a date/time field on the axis.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-anomaly-detection","disputed":false}
{"id":"q3","domain":"VIZ","topic":"anomaly-detection","q":"Too few anomalies are flagged. Which setting makes detection flag more?","options":["Lower the confidence interval","Increase the sensitivity","Raise the range transparency","Add a trend line"],"answer":1,"multi":false,"explain":"Higher sensitivity narrows the expected range so more points are flagged.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-anomaly-detection","disputed":false}
{"id":"q4","domain":"VIZ","topic":"grouping-binning","q":"Individual dates must be bucketed into exact 7-day groups. Which grouping do you create?","options":["List group on Date","Bin by number of bins","Hierarchy on Date","Bin by size of 7 days"],"answer":3,"multi":false,"explain":"Binning by size sets a fixed bin width; number of bins cannot guarantee 7-day buckets.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-grouping-and-binning","disputed":false}
{"id":"q5","domain":"VIZ","topic":"scatter","q":"Find groups of products with similar price and quantity automatically. What do you use?","options":["Scatter with automatic clusters","Line chart with forecast","Treemap with drill down","Waterfall with breakdown"],"answer":0,"multi":false,"explain":"Scatter charts can automatically find clusters and add a cluster field.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-scatter","disputed":false}
```
- **Primary source:** [Analytics pane](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-analytics-pane) · **Extra:** [Anomaly detection](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-anomaly-detection), [Grouping and binning](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-grouping-and-binning), [Scatter charts](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-scatter)

### Lesson 0031 — AI visuals and Copilot: key influencers, decomposition tree, Q&A, narratives
- **Slug:** `0031-ai-visuals-copilot` · **Domain:** VIZ · **Concepts:** C57, C58, C59 · **Time:** 20 min
- **Objective:** Pick the AI feature that answers a question (what drives a metric, ad hoc root cause, natural-language question, text summary), configure key influencers' wells, and read its output.
- **Key points:**
  - **Key influencers**: **Analyze** = the metric (categorical, or numeric/measure). **Explain by** = candidate factors. **Expand by** = the grain fields used **only** when Analyze is a measure or summarised field (for example Customer Key). It ranks factors ("x times more likely" for categorical, "+N on average" for continuous) and has a **Top segments** tab.
  - For a numeric metric with many values, set Analysis type to **Continuous**. A category is flagged only if it has enough data points, so a high-average country with few rows may not appear. The dotted line is the average of all other values. Continuous factors show change per **one standard deviation** where noted.
  - **Decomposition tree**: **ad hoc** drill across dimensions in any order. AI splits jump to the highest or lowest value. Use it for root-cause exploration (for example bounce rate by channel → device → country).
  - **Q&A**: natural-language questions (Q&A visual, the dashboard Q&A box). Improve it with synonyms and linguistic setup. You can pin answers to dashboards.
  - **Smart narrative / Copilot narrative visual**: an auto-generated text summary that updates with filters. Copilot can also create a report page, suggest content and summarise the semantic model. Copilot needs a paid Fabric capacity (F2 or higher) or Premium (P1+), and the tenant must enable it.
  - The **Analyze** feature ("Explain the increase/decrease", "Find where the distribution is different") from a data point's context menu.
- **Example:** HR asks which employee attributes make a "Leaver = Yes" outcome more likely → key influencers: Analyze `Leaver`, Explain by `Department, Tenure band, Manager, Overtime`.
- **Traps:**
  - Decomposition tree to *rank* drivers. That is key influencers.
  - Putting the factors in Expand by. They belong in Explain by.
  - Reading a numeric influencer as a ratio. It is an average difference.
- **Knowledge check:**
```json
{"id":"q1","domain":"VIZ","topic":"key-influencers","q":"Management asks which customer attributes most increase the chance of a low rating. Which visual?","options":["Decomposition tree","Smart narrative","Key influencers","Q&A visual"],"answer":2,"multi":false,"explain":"Key influencers ranks the factors that drive a chosen outcome.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-influencers","disputed":false}
{"id":"q2","domain":"VIZ","topic":"decomposition-tree","q":"Analysts must drill a metric across dimensions in any order they choose. Which visual?","options":["Decomposition tree","Key influencers","Funnel chart","Ribbon chart"],"answer":0,"multi":false,"explain":"The decomposition tree supports ad hoc drill-down across dimensions in any order.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-decomposition-tree","disputed":false}
{"id":"q3","domain":"VIZ","topic":"key-influencers","q":"Analyze holds a measure and the visual shows no influencers. Which well should hold Customer Key?","options":["Explain by","Analyze","Tooltips","Expand by"],"answer":3,"multi":false,"explain":"Expand by sets the grain at which a measure is analysed without making it a factor.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-influencers","disputed":false}
{"id":"q4","domain":"VIZ","topic":"key-influencers","q":"Analyzing Yearly Income warns that there are too few observations per value. What do you change?","options":["Change the column to text","Set analysis type to Continuous","Move Income to Explain by","Remove the Expand by field"],"answer":1,"multi":false,"explain":"Numeric targets with many distinct values should be analysed as Continuous.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-influencers","disputed":false}
{"id":"q5","domain":"VIZ","topic":"smart-narrative","q":"A page needs an automatic text summary that updates when slicers change. What do you add?","options":["A key influencers visual","A narrative visual","A paginated subreport","A tooltip page"],"answer":1,"multi":false,"explain":"The (Copilot) narrative / smart narrative visual generates dynamic text summaries.","cite":"https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-smart-narrative","disputed":false}
```
- **Primary source:** [Key influencers](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-influencers) · **Extra:** [Decomposition tree](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-decomposition-tree), [Smart narrative](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-smart-narrative), [Copilot introduction](https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction)

### Lesson 0032 — Workspace roles, sharing and Build permission
- **Slug:** `0032-workspace-roles-item-access` · **Domain:** MANAGE · **Concepts:** C60, C61 · **Time:** 20 min
- **Objective:** Grant the least-privilege role or item permission for a stated need (view, edit, publish an app, add users, build on a model).
- **Key points:**
  - **Admin**: everything, including updating or deleting the workspace and adding or removing other Admins.
  - **Member**: add members or lower roles, **publish, unpublish and change permissions of the app**, allow resharing, plus everything Contributor can do.
  - **Contributor**: create, edit and delete content (reports, dashboards, models), publish from Desktop, schedule refresh. Can update the app only if Admins/Members allow it. **Cannot** add users, publish a new app or change app permissions.
  - **Viewer**: view and interact only. **RLS applies only to Viewers** (and to app/shared-item consumers). Admin, Member and Contributor bypass RLS.
  - Roles can be assigned to users, security groups, Microsoft 365 groups and distribution lists. Someone in several groups gets the **highest** role.
  - **Item-level access** (share a report/dashboard, or manage permissions on a model): the **Read**, **Reshare** and **Build** permissions. **Build** lets a user create new reports on the model (in other workspaces too), use **Analyze in Excel**, and query it over XMLA. Reshare only lets them pass on sharing.
  - Least privilege for "build reports on model X in their own workspace" = **Build on X**, not a role in X's workspace.
  - Read-only access for many users: an **app**, or share to a group. Not Member or Contributor.
- **Example:** Finance analysts must explore the HR model in Excel without seeing other workspace content → grant **Build** on the HR semantic model only. RLS still applies to them.
- **Traps:**
  - Contributor for someone who must publish the app or add users. That needs Member.
  - Admin when Member is enough, which over-privileges.
  - Viewer role "for selected items". Viewer sees **all** workspace content.
- **Knowledge check:**
```json
{"id":"q1","domain":"MANAGE","topic":"workspace-roles","q":"A user must publish and update the workspace app and add colleagues, with least privilege. Which role?","options":["Viewer","Contributor","Member","Admin"],"answer":2,"multi":false,"explain":"Members can publish apps, change app permissions and add users with lower roles; Contributors cannot.","cite":"https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces","disputed":false}
{"id":"q2","domain":"MANAGE","topic":"build-permission","q":"Analysts in another workspace must build reports on semantic model DS1 with minimal access. What do you grant?","options":["Build permission on DS1","Member role on the workspace","Viewer role on the workspace","Reshare permission on DS1"],"answer":0,"multi":false,"explain":"Build permission allows creating content on a model without workspace membership.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-build-permissions","disputed":false}
{"id":"q3","domain":"MANAGE","topic":"workspace-roles","q":"For which workspace role does row-level security filter the data?","options":["Admin","Member","Contributor","Viewer"],"answer":3,"multi":false,"explain":"RLS applies only to Viewers; Admins, Members and Contributors can edit the model and bypass it.","cite":"https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security","disputed":false}
{"id":"q4","domain":"MANAGE","topic":"workspace-roles","q":"A designer must create and edit reports and dashboards but must not manage users. Which role?","options":["Admin","Contributor","Member","Viewer"],"answer":1,"multi":false,"explain":"Contributors create and edit content but cannot add users or publish the app.","cite":"https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces","disputed":false}
{"id":"q5","domain":"MANAGE","topic":"build-permission","q":"Which permission enables Analyze in Excel on a shared semantic model?","options":["Reshare","Read only","Build","Write"],"answer":2,"multi":false,"explain":"Build permission is required to create content such as Analyze in Excel PivotTables over the model.","cite":"https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-analyze-in-excel","disputed":false}
```
- **Primary source:** [Roles in workspaces](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces) · **Extra:** [Build permission](https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-build-permissions), [Fabric workspace roles](https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces), [Analyze in Excel](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-analyze-in-excel)

### Lesson 0033 — Distribute and govern content: apps, endorsement, sensitivity labels
- **Slug:** `0033-apps-endorsement-labels` · **Domain:** MANAGE · **Concepts:** C62, C63, C64 · **Time:** 20 min
- **Objective:** Pick a distribution method, publish or update an app with the right audience, endorse content, and protect it with sensitivity labels.
- **Key points:**
  - Ways to distribute: **workspace** roles (collaborators), **sharing** individual items, an **app** (curated, read-only, many consumers), embedding (Teams, SharePoint), **subscriptions** (email), Analyze in Excel/Build (self-service).
  - An **app** includes only the items you select. **Audiences** let different groups see different content in one app. After changing content, **Update app** to publish the changes. Don't create a new app. App users can't edit layouts. RLS still applies.
  - Share apps with users, security groups, mail-enabled security groups, distribution lists or Microsoft 365 groups. For large audiences use groups, or the entire organisation.
  - **Endorsement**: **Promoted** (any contributor can promote) and **Certified** (only reviewers the admin authorises). Certified items rank first in search and discovery. Endorsement is a quality signal, not access control.
  - **Sensitivity labels** (Microsoft Purview Information Protection): applied in Desktop or the service. They show on items, **flow downstream** (model → report → dashboard, and on new content created from labelled items), and **persist with encryption on export** to Excel, PowerPoint and PDF. RLS and OLS don't protect exported files. Labels do.
  - **Lineage view** shows dependencies (source → model → report → dashboard) across workspaces. A dashboard has no refresh of its own; it shows the refreshed models.
  - **Deployment pipelines** move content across Development → Test → Production stages.
- **Example:** Board members need a curated set (1 dashboard + 3 reports) read-only on powerbi.com → create an app with only those 4 items, audience = Board security group. Label the content "Confidential". Exported PDFs stay encrypted.
- **Traps:**
  - Creating a new app or changing the audience to show a new page. Just **Update app**.
  - Using RLS to stop exported PDFs from leaking. Use sensitivity labels with encryption.
  - Confusing "Promoted" with "Certified" when "listed first / verified by authorised reviewers" is the requirement.
- **Knowledge check:**
```json
{"id":"q1","domain":"MANAGE","topic":"apps","q":"A new report page must appear for existing app users with the least effort. What do you do?","options":["Create a second app","Change the app audience","Share the report directly","Update the app"],"answer":3,"multi":false,"explain":"Workspace changes reach app users only after the app is updated.","cite":"https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-distribute-apps","disputed":false}
{"id":"q2","domain":"MANAGE","topic":"sensitivity-labels","q":"Reports exported to PDF and PowerPoint must stay encrypted outside Power BI. What do you apply?","options":["Row-level security","Sensitivity labels","Object-level security","Certification"],"answer":1,"multi":false,"explain":"Sensitivity labels with protection settings persist on supported exports; RLS and OLS only restrict in-service access.","cite":"https://learn.microsoft.com/en-us/power-bi/enterprise/service-security-sensitivity-label-overview","disputed":false}
{"id":"q3","domain":"MANAGE","topic":"endorsement","q":"Verified semantic models must be listed first when users search for data. What do you do?","options":["Certify the models","Promote the models","Pin them to a dashboard","Add them to an app"],"answer":0,"multi":false,"explain":"Certified content is the highest endorsement level and is surfaced first; promotion is lower.","cite":"https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorsement-overview","disputed":false}
{"id":"q4","domain":"MANAGE","topic":"sensitivity-labels","q":"A label is applied to a report. What happens to a dashboard that gets tiles from it?","options":["Nothing; labels never propagate","The label must be set manually","The dashboard inherits the label","The report label is removed"],"answer":2,"multi":false,"explain":"Sensitivity labels inherit downstream to dependent content such as dashboards.","cite":"https://learn.microsoft.com/en-us/power-bi/enterprise/service-security-sensitivity-label-overview","disputed":false}
{"id":"q5","domain":"MANAGE","topic":"apps","q":"An app must give the whole company read access to one dashboard and three reports only. What do you include?","options":["Exactly those four items","Every item in the workspace","The semantic model with Build","A Viewer role for everyone"],"answer":0,"multi":false,"explain":"App consumers see only included items; the Viewer role would expose the whole workspace.","cite":"https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-distribute-apps","disputed":false}
```
- **Primary source:** [Publish an app](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-distribute-apps) · **Extra:** [Sensitivity labels](https://learn.microsoft.com/en-us/power-bi/enterprise/service-security-sensitivity-label-overview), [Endorsement](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorsement-overview), [Lineage](https://learn.microsoft.com/en-us/fabric/governance/lineage), [Deployment pipelines](https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines)

### Lesson 0034 — Dashboards, data alerts and subscriptions
- **Slug:** `0034-dashboards-alerts-subscriptions` · **Domain:** MANAGE · **Concepts:** C65, C66 · **Time:** 18 min
- **Objective:** Build a dashboard by pinning the right way, and choose a data alert or a subscription for a notification need.
- **Key points:**
  - **Pin visual**: one tile per visual. Clicking it opens the report. A tile is a snapshot of the visual's **definition**. If the report visual changes, pin it again. Tile data refreshes with the model and tile cache.
  - **Pin live page** pins a whole report page as one **live tile**. It stays interactive and reflects changes to that page, including visuals added later.
  - Other tiles: Q&A answers (ask a question, then pin), **video** (YouTube/Vimeo), web content, image, text box. Dashboard themes in 0024. Dashboard mobile layout in 0028.
  - **Data alerts**: set in the **service** on dashboard tiles of type **card, KPI or gauge** (single value). They fire when a threshold is crossed, at most about once per hour or per refresh. An alert is **private** to its creator. You can't set one on a report visual directly, so pin the visual first.
  - Alerts track one value against a fixed threshold. "Price crosses its moving average" can't be expressed directly, unless you build a measure that yields a single value with a fixed threshold.
  - **Subscriptions**: scheduled emails with a snapshot of a report page or dashboard (daily, weekly, after refresh). They are about **time**, not thresholds. You can subscribe others if you have permission.
  - "Insights" (quick insights) can auto-generate visuals that you review in focus mode and pin.
- **Example:** Facilities want an email when freezer temperature > 4 °C → put a card with the latest temperature in the report → pin it to a dashboard → tile ⋯ › Manage alerts › Above 4.
- **Traps:**
  - A subscription for a threshold condition.
  - An alert on a line or bar chart tile. Only card, KPI or gauge tiles support alerts.
  - Pinning visuals one by one when the page must stay interactive and in sync. Pin the live page.
- **Knowledge check:**
```json
{"id":"q1","domain":"MANAGE","topic":"alerts","q":"Operations must be emailed when the late-order percentage rises above 5%. What do you configure?","options":["A daily subscription","A data alert on a card tile","A report-level filter","A bookmark with a filter"],"answer":1,"multi":false,"explain":"Data alerts on single-value dashboard tiles fire when a threshold is crossed.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts","disputed":false}
{"id":"q2","domain":"MANAGE","topic":"subscriptions","q":"A manager wants a daily email snapshot of a report page regardless of values. What do you set up?","options":["A subscription","A data alert","A comment","A lineage view"],"answer":0,"multi":false,"explain":"Subscriptions email snapshots on a schedule; alerts depend on thresholds.","cite":"https://learn.microsoft.com/en-us/power-bi/collaborate-share/end-user-subscribe","disputed":false}
{"id":"q3","domain":"MANAGE","topic":"dashboards-tiles","q":"A whole report page must appear on a dashboard, stay interactive and show visuals added later. What do you do?","options":["Pin each visual separately","Pin a Q&A answer tile","Add a web content tile","Pin the page as a live tile"],"answer":3,"multi":false,"explain":"Pin live page keeps the page interactive and in sync with its current layout.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-pin-live-tile-from-report","disputed":false}
{"id":"q4","domain":"MANAGE","topic":"alerts","q":"On which tile types can data alerts be set?","options":["Line and bar charts","Tables and matrices","Cards, KPIs and gauges","Maps and scatter charts"],"answer":2,"multi":false,"explain":"Alerts are supported on single-value tiles: cards, KPIs and gauges.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts","disputed":false}
{"id":"q5","domain":"MANAGE","topic":"dashboards-tiles","q":"A report bar chart was changed to a column chart, but the dashboard tile still shows bars. What fixes it?","options":["Refresh the semantic model","Change the dashboard theme","Clear the browser cache","Pin the updated visual again"],"answer":3,"multi":false,"explain":"Pinned visual tiles keep the visual definition from pin time; re-pin to pick up design changes.","cite":"https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-pin-tile-from-report","disputed":false}
```
- **Primary source:** [Data alerts](https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts) · **Extra:** [Pin a tile](https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-pin-tile-from-report), [Pin a live page](https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-pin-live-tile-from-report), [Subscriptions](https://learn.microsoft.com/en-us/power-bi/collaborate-share/end-user-subscribe)

### Lesson 0035 — Gateways, scheduled refresh and incremental refresh
- **Slug:** `0035-gateways-and-refresh` · **Domain:** MANAGE · **Concepts:** C67, C68 · **Time:** 20 min
- **Objective:** Decide whether a gateway is needed, order the steps to schedule refresh, and use incremental refresh to cut refresh volume.
- **Key points:**
  - **On-premises data gateway** is needed when the service must reach data it can't access directly: on-premises SQL Server, on-prem files and shares, **SSAS live connections**, sources in a private VNet (or use a VNet data gateway). **Not** needed for cloud sources reachable over the internet (Azure SQL with public access, SharePoint Online, OneDrive for work, web).
  - **Standard mode** gateway: shared, multi-user, supports DirectQuery and live connections. **Personal mode**: one user, Import only.
  - Steps: install and register the gateway → add a **data source** (connection) in the gateway with credentials → publish the model → map the model to the gateway connection → configure **scheduled refresh**. The server and database names in the PBIX must **match** the gateway data source, or the gateway can't be selected.
  - **Scheduled refresh**: up to **8/day** on shared capacity (Pro), **48/day** on Premium/Fabric capacity. Refresh is **paused after two months of inactivity**. Opening a report or dashboard on the model resumes it. DirectQuery and live models need no scheduled data refresh. Dashboard tiles have their own cache refresh.
  - **Incremental refresh**: define the DateTime parameters **RangeStart** and **RangeEnd**, filter the table on them (the filter must fold), then set a policy (archive N years, refresh the last N days) in Desktop. It applies after publishing. It cuts refresh time and **gateway transfer**. Aggregations and automatic page refresh don't.
  - Refresh failures notify the owner. Credentials are set in the model settings in the service.
- **Example:** An on-prem SQL model must refresh at 7 AM: gateway (standard) on a server → add the SQL data source (same server/db names as the PBIX) → publish → model settings › Gateway connection → Scheduled refresh 07:00.
- **Traps:**
  - A gateway for Azure SQL or SharePoint Online.
  - Scheduling refresh for a DirectQuery or live SSAS model and expecting it to "keep data current".
  - Using aggregations to cut gateway transfer for an Import model.
- **Knowledge check:**
```json
{"id":"q1","domain":"MANAGE","topic":"gateway","q":"Which source needs an on-premises data gateway for scheduled refresh?","options":["Azure SQL Database (public)","SharePoint Online list","Excel on OneDrive for work","SQL Server in the office"],"answer":3,"multi":false,"explain":"On-premises sources need a gateway; internet-reachable cloud sources do not.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem","disputed":false}
{"id":"q2","domain":"MANAGE","topic":"gateway","q":"A published model can't select the gateway, although the gateway is online. What is the most likely cause?","options":["The report has too many pages","Server names don't match the gateway","The model uses a date table","The workspace has no app"],"answer":1,"multi":false,"explain":"The model's data source details must match a data source defined on the gateway.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-data-sources","disputed":false}
{"id":"q3","domain":"MANAGE","topic":"incremental-refresh","q":"Which change reduces data sent through the gateway at each refresh of a large Import model?","options":["Incremental refresh","Automatic page refresh","Aggregation tables","Visual-level filters"],"answer":0,"multi":false,"explain":"Incremental refresh reloads only recent partitions; the others do not reduce transfer.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/incremental-refresh-overview","disputed":false}
{"id":"q4","domain":"MANAGE","topic":"incremental-refresh","q":"Which parameters must exist to configure incremental refresh?","options":["StartDate and EndDate","FromDate and ToDate","RangeStart and RangeEnd","MinDate and MaxDate"],"answer":2,"multi":false,"explain":"Incremental refresh requires DateTime parameters named exactly RangeStart and RangeEnd.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/incremental-refresh-overview","disputed":false}
{"id":"q5","domain":"MANAGE","topic":"refresh","q":"Scheduled refresh stopped after nobody opened the reports for months. What resumes it?","options":["Reinstalling the gateway","Opening a report on the model","Creating a new subscription","Switching to DirectQuery"],"answer":1,"multi":false,"explain":"Refresh pauses after two months of inactivity; viewing content built on the model reactivates it.","cite":"https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh","disputed":false}
```
- **Primary source:** [On-premises data gateway](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem) · **Extra:** [Scheduled refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh), [Incremental refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/incremental-refresh-overview), [Manage gateway data sources](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-data-sources)

### Lesson 0036 — Row-level and object-level security
- **Slug:** `0036-rls-ols` · **Domain:** MANAGE · **Concepts:** C69 · **Time:** 20 min
- **Objective:** Implement static and dynamic RLS, assign members (preferably groups), test it, and predict what a user in several roles sees.
- **Key points:**
  - Workflow: **Desktop** › Modeling › **Manage roles** → define role(s) with DAX table filters → **publish** → **service** › model › **Security** → add members → **Test as role**. You can't assign members in Desktop.
  - **Static**: `[Region] = "West"`. **Dynamic**: `[Email] = USERPRINCIPALNAME()`, one role for everyone, driven by a user/email column. In Desktop USERNAME() returns DOMAIN\user, while in the service both return the UPN. Prefer USERPRINCIPALNAME().
  - **Within one role**, filters on several tables combine with **AND** (intersection). **Several roles** for one user are **additive** (union: see rows allowed by either).
  - Members: users, **security groups**, **mail-enabled security groups**, distribution groups. **Not** Microsoft 365 groups. Managing membership in Entra groups lets another team (for example IT security) control access without content rights. Moving a manager to another region = change their group, not the DAX.
  - RLS applies to **Viewers**, app consumers and shared-item recipients, even with Build (for example Analyze in Excel). Not to Admin, Member or Contributor.
  - Filters propagate along relationships one way by default. To filter through to the one side (for example, Employee filters Territory via a bridge), tick **Apply security filter in both directions** on that relationship. Only one per table with several bidirectional relationships.
  - **Test as role** / "Now viewing as" checks roles or a specific person. For dynamic RLS, test as the **person**. A role alone uses your own identity.
  - Live connection to Analysis Services: define RLS in the AS model, not Power BI. DirectQuery can use the source's own security with SSO.
  - **OLS** hides tables or columns (metadata too) for a role. Define it with external tools (for example Tabular Editor). RLS can't hide columns. To show only your own name but everyone's grades, mask names in the data and use a measure; RLS would drop the peers' rows.
- **Example:**
```dax
-- Role "Sales Managers" on table Region
[ManagerEmail] = USERPRINCIPALNAME()
-- Role "Germany Management" (intersection inside one role)
DimSalesTerritory: [Region] = "Germany"
DimCustomer:       [Occupation] = "Management"
```
- **Traps:**
  - Two roles to get an intersection. You get a union. Put both filters in **one** role.
  - Expecting RLS to restrict workspace Members or Contributors.
  - Adding a Microsoft 365 group to a role, or assigning roles in Desktop.
- **Knowledge check:**
```json
{"id":"q1","domain":"MANAGE","topic":"RLS","q":"A user belongs to role A (State = Kentucky) and role B (Year = 2020). Which rows does the user see?","options":["Only Kentucky rows from 2020","Kentucky rows or rows from 2020","No rows, because roles conflict","All rows, because roles cancel"],"answer":1,"multi":false,"explain":"Multiple roles are additive: the user sees the union of rows allowed by each role.","cite":"https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security","disputed":false}
{"id":"q2","domain":"MANAGE","topic":"RLS","q":"Which DAX filter returns each user's rows in both Desktop and the service, matching an email column?","options":["[Email] = USERNAME()","[Email] = USEROBJECTID()","[Email] = USERPRINCIPALNAME()","[Email] = CUSTOMDATA()"],"answer":2,"multi":false,"explain":"USERPRINCIPALNAME returns the UPN in both; USERNAME returns DOMAIN\\user in Desktop.","cite":"https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security","disputed":false}
{"id":"q3","domain":"MANAGE","topic":"RLS","q":"Where are members assigned to RLS roles?","options":["In the Power BI service","In Power Query editor","In Desktop Manage roles","In the gateway settings"],"answer":0,"multi":false,"explain":"Roles are defined in Desktop but members are added in the service under the model's Security.","cite":"https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security","disputed":false}
{"id":"q4","domain":"MANAGE","topic":"RLS","q":"The security team must control who sees which region without getting rights to Power BI content. What do you do?","options":["Make them workspace Admins","Grant them Build on the model","Add them as members of each role","Use security groups in the roles"],"answer":3,"multi":false,"explain":"Assigning Entra security groups to roles lets group owners manage membership outside Power BI.","cite":"https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security","disputed":false}
{"id":"q5","domain":"MANAGE","topic":"RLS","q":"An Employee filter must reach the Territory table through a bridge relationship for RLS. What do you enable?","options":["Assume referential integrity","Apply security filter in both directions","Make the relationship inactive","Mark Territory as a date table"],"answer":1,"multi":false,"explain":"RLS filters propagate one way by default; this setting lets them flow both ways on that relationship.","cite":"https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security","disputed":false}
```
- **Primary source:** [Row-level security with Power BI](https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security) · **Extra:** [Object-level security](https://learn.microsoft.com/en-us/fabric/security/service-admin-object-level-security), [Workspace roles](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces)

---

## d. Master list of common mistakes and traps (48)

"Seen" = roughly how many analysed questions hinge on the trap. Citation IDs refer to §i.

| # | Wrong belief | Correct rule | Domain | Lesson | Cite | Seen |
|---|---|---|---|---|---|---|
| T01 | Two RLS roles give an intersection | Roles are additive (union). Put both filters in one role for AND | MANAGE | 0036 | U-RLS | 4 |
| T02 | RLS restricts everyone in the workspace | RLS applies only to Viewers and consumers, not Admin, Member or Contributor | MANAGE | 0036 | U-RLS | 3 |
| T03 | USERNAME() matches email in Desktop | USERNAME() is DOMAIN\user in Desktop. Use USERPRINCIPALNAME() | MANAGE | 0036 | U-RLS | 3 |
| T04 | RLS follows bidirectional relationships automatically | RLS filters go one way unless "Apply security filter in both directions" is ticked | MANAGE | 0036 | U-RLS | 3 |
| T05 | Change the role DAX when a user changes region | Change their Entra group membership. Groups are role members | MANAGE | 0036 | U-RLS | 3 |
| T06 | Members are assigned to roles in Desktop | Define roles in Desktop and assign members in the service | MANAGE | 0036 | U-RLS | 2 |
| T07 | Contributor can publish the app and add users | That needs Member. Contributor edits content only | MANAGE | 0032 | U-ROLES | 4 |
| T08 | Viewer role = access to selected items | Viewer sees all workspace content. Use an app or item sharing | MANAGE | 0032/0033 | U-APPS | 3 |
| T09 | Reshare enables Analyze in Excel | Build permission does | MANAGE | 0032 | U-BUILD | 3 |
| T10 | Changed app content reaches users automatically | You must **Update app** | MANAGE | 0033 | U-APPS | 2 |
| T11 | RLS/OLS protect exported files | Sensitivity labels with encryption protect exports | MANAGE | 0033 | U-LABELS | 3 |
| T12 | Cloud sources need a gateway | Only on-prem or private-network sources need one | MANAGE | 0035 | U-GW | 4 |
| T13 | Scheduled refresh keeps SSAS live / DirectQuery data current | Live and DQ query the source. On-prem SSAS needs a gateway, not refresh | MANAGE | 0035 | U-GW | 3 |
| T14 | Aggregations cut gateway transfer | Incremental refresh does | MANAGE | 0035 | U-INCR | 3 |
| T15 | Subscriptions fire on thresholds | Alerts fire on thresholds (card/KPI/gauge tiles). Subscriptions run on a schedule | MANAGE | 0034 | U-ALERT | 4 |
| T16 | Pinned tiles follow visual design changes | Re-pin, or pin the live page | MANAGE | 0034 | U-PIN | 3 |
| T17 | Import can show data within minutes | Use DirectQuery for near-real-time | PREP | 0003 | U-SM | 3 |
| T18 | Excel can be a DirectQuery source | Files are Import-only | PREP | 0003 | U-SM | 1 |
| T19 | Shared dimensions in a composite model stay Import | Set them to Dual | PREP | 0003 | U-SM | 1 |
| T20 | Include in report refresh off = smaller model | Turn off **Enable load** | PREP | 0011 | U-RED | 2 |
| T21 | Report or DAX filters reduce imported rows | Filter in Power Query (folding) or a SQL WHERE | PREP | 0011 | U-FOLD | 4 |
| T22 | Greyed-out View Native Query = no folding | Check with Query Diagnostics or folding indicators | PREP | 0011 | U-FOLD | 2 |
| T23 | Append adds columns | Append stacks rows. Merge adds columns | PREP | 0008 | U-MERGE | 6 |
| T24 | Inner join keeps all customers | Left outer keeps all left rows. Left anti finds the unmatched | PREP | 0008 | U-ANTI | 4 |
| T25 | Remove Errors keeps rows | Replace Errors keeps rows. Remove deletes them | PREP | 0006 | U-ERR | 2 |
| T26 | A text timestamp converts straight to Date | Split, extract or use Column From Examples first | PREP | 0007 | U-SPLIT | 6 |
| T27 | Unpivot the key columns | Select the keys, then **Unpivot Other Columns** | PREP | 0009 | U-UNPIV | 4 |
| T28 | Distinct = unique | Distinct = different values. Unique = values appearing once | PREP | 0005 | U-PROF | 3 |
| T29 | Profiling covers all rows | The default is the top 1,000 rows | PREP | 0005 | U-PROF | 2 |
| T30 | Basic Group By takes several columns | Advanced is needed for several grouping columns | PREP | 0010 | U-GROUP | 3 |
| T31 | Hiding a column shrinks the model | Remove it in Power Query | MODEL | 0022 | U-RED | 5 |
| T32 | DateTime→Date saves space with no loss | It loses the time. Split into Date + Time instead | MODEL | 0022 | U-RED | 3 |
| T33 | Calculated column for ratios | Use a measure: DIVIDE(SUM, SUM) | MODEL | 0016 | U-CC | 2 |
| T34 | Row context filters related tables | It doesn't. You need context transition (CALCULATE / a measure ref) or RELATEDTABLE | MODEL | 0018 | U-CALC | 5 |
| T35 | CALCULATE(…, Year=2023) blanks other years | It replaces the filter, so 2023 repeats on every row. KEEPFILTERS intersects | MODEL | 0017 | U-KEEP | 3 |
| T36 | ALL respects slicers | ALLSELECTED keeps outer filters. ALL removes them | MODEL | 0017 | U-ALLSEL | 2 |
| T37 | PREVIOUSYEAR = same month last year | Use SAMEPERIODLASTYEAR / DATEADD(-1, YEAR) | MODEL | 0019 | U-SPLY | 4 |
| T38 | DATEADD gives a rolling window | DATEADD shifts. Use DATESINPERIOD / DATESBETWEEN | MODEL | 0019 | U-DIP | 3 |
| T39 | USERELATIONSHIP works on any relationship | Only an existing inactive one. One active path per table pair | MODEL | 0014 | U-UREL | 4 |
| T40 | Bidirectional is the safe default | Single is the default. Both adds ambiguity and cost | MODEL | 0013 | U-BIDI | 4 |
| T41 | Average or constant line = median | Use a median line or a 50% percentile line | VIZ | 0030 | U-ANALYTICS | 7 |
| T42 | Decomposition tree ranks drivers | Key influencers ranks drivers. Decomposition tree is for ad hoc drill | VIZ | 0031 | U-KI | 4 |
| T43 | Page or report filter can skip one visual | Use Edit interactions → None, or sync slicers | VIZ | 0025/0026 | U-INTER | 3 |
| T44 | Report theme recolours dashboard tiles | Use a dashboard theme | VIZ | 0024 | U-DTHEME | 4 |
| T45 | Colour change fixes colour-blind issues | Add shapes, icons or labels. Never rely on colour alone | VIZ | 0028 | U-A11Y | 3 |
| T46 | Bookmark with Data ticked keeps user slicers | Untick Data to keep the current selections | VIZ | 0027 | U-BOOK | 2 |
| T47 | Performance "Other" = slow own DAX | Other = waiting on other visuals. Reduce visuals or fix neighbours | MODEL | 0022 | U-PA | 3 |
| T48 | Report mobile view = dashboard phone view | They are separate layouts. The dashboard one is in service › Edit › Mobile layout | VIZ | 0028 | U-DMOB | 3 |

---

## e. Disputed answers register

Verdicts follow Microsoft Learn. Lessons and the bank must use the **Verdict** column. Questions built from these items set `"disputed": true` only when the trap itself is the point being tested; otherwise use the verdict as the plain answer.

| Source item | Dump says | Docs say | Verdict |
|---|---|---|---|
| EX1 Q5 (RLS through Employee→Territory) | "Yes" without enabling the setting | RLS uses single-direction filters unless "Apply security filter in both directions" is ticked (U-RLS) | Needs the setting. The keyed solution is incomplete. **Disputed, docs win** |
| EX1 Q14 (key influencers dotted line) | Option B wording | The dotted line is the average for all other values except the selected influencer (U-KI) | Teach the docs meaning. Don't reuse the item |
| EX3 Q26 (slicer interaction) | Label "Sync both slicers (Incorrect)" contradicts its explanation | Edit interactions None excludes the visual. Syncing a copied slicer adds an independent slicer (U-SLICERS) | Answer = Edit interactions → None on the existing synced slicer |
| EX4-3 (PREVIOUSQUARTER blank guard) | Both NOT ISEMPTY and ISBLANK forms keyed | Both are valid DAX. ISBLANK([Total Sales]) returns blank when the current period is empty | Accept both. Don't build a single-answer item on it |
| EX4-27 (remove columns with Test_ prefix) | FindText-based list | Text.StartsWith is the precise prefix test. FindText matches anywhere (U-M) | Correct answer = Table.RemoveColumns(t, List.Select(Table.ColumnNames(t), each Text.StartsWith(_, "Test_"))) |
| Dump Q7 (flatten header into lines) | Merge Orders + Order Lines | Star schema guidance: integrate header attributes into the line-level fact (U-STAR) | **Dump right** |
| Dump Q28 (OneDrive Excel modes) | Dataset DirectQuery | Excel workbooks are not DirectQuery sources; they are Import (U-SM) | **Import.** Dump wrong |
| Dump Q44 (HR managers, no layout edits) | Publish app | Apps are read-only for consumers; RLS still applies (U-APPS) | **Dump right** (app + RLS) |
| Dump Q71 (prior-year YTD) | DATESBETWEEN pattern; muddled text | SAMEPERIODLASTYEAR takes one date column; CALCULATE([YTD], SAMEPERIODLASTYEAR) is simplest (U-SPLY) | Teach SAMEPERIODLASTYEAR over YTD. Don't reuse the item |
| Dump Q86 (size bands) | FILTER/AND/CALCULATE, incoherent | A calculated column with SWITCH(TRUE(), …) or IF is the standard band pattern (U-CC) | Use SWITCH(TRUE()). The dump rationale is unreliable |
| Dump Q110 (HR vs country RLS) | Garbled | One dynamic role on the manager email; HR in a separate role; roles are additive (U-RLS) | Rebuild from docs only |
| Dump Q122 (one quarter before) | DATEADD -1 QUARTER, but says PARALLELPERIOD returns a month | PARALLELPERIOD returns the full parallel period; DATEADD shifts the selection (U-DATEADD) | DATEADD -1 QUARTER right; the explanation is wrong |
| Dump Q128 (null freight average) | Replace null with 0 | AVERAGE ignores blanks; zeros lower the mean (U-REPL) | Depends on meaning: replace only if null = no freight charged. Otherwise keep nulls. **Disputed** |
| Dump Q139 (rolling 31 days) | DATEADD(-30, DAY) | DATEADD shifts dates; DATESINPERIOD/DATESBETWEEN return windows (U-DIP) | **DATESINPERIOD(…, MAX, -31, DAY).** Dump wrong |
| Dump Q171 / Q200 (personalize visuals) | Enable Personalize visuals | Consumers can change visual type and fields when it is on (U-PERS) | **Dump right** |
| Dump Q172 (dark dashboard theme) | Dark dashboard theme + pin choice | Dashboard themes apply to tiles; pin choice decides theme (U-DTHEME) | **Dump right** |
| Dump Q180 (two bookmarks keep slicer) | 2 bookmarks, Display only | The Data property captures slicers; untick it to keep them (U-BOOK) | **Dump right** |
| Dump Q199 (reusable theme) | JSON theme import | JSON report themes are reusable across reports (U-THEME) | **Dump right** |
| Dump Q216 (two decimals, red negatives) | Custom format + conditional colour | A format string handles decimals and parentheses; colour needs conditional formatting (U-CF) | **Dump right** |
| Dump Q244 (build dashboard from report visuals, least privilege) | Member | Contributor can create and edit content, including dashboards and pins (U-ROLES) | **Contributor.** Dump over-privileges |
| Dump Q247 / Q266 (export summarized only) | Report setting; wording conflicts | Export options are None / Summarized / Summarized + underlying; underlying needs Build (U-EXPORT) | Use the report export setting "Summarized data only" |
| Dump Q287 (Customer Details ↔ Orders) | No/Yes/No | Keys need matching types; billing address belongs to the customer dimension | Not rebuildable without the exhibit. Exclude |
| Dump Q297 (sales count column) | IF(ISBLANK) calculated column | Transaction counts are a COUNTROWS measure; the column keeps negatives | **COUNTROWS measure.** Dump wrong |
| Dump Q299 (app to group) | Mail-enabled security group | Apps can be shared with security groups, mail-enabled groups, distribution lists and M365 groups (U-APPS) | Either group type is valid. Teach "use a group" |
| EX3 Q1 (auto page refresh) | DirectQuery + Premium | DirectQuery required. Shared capacity allows a 30-min minimum; shorter intervals need Premium/Fabric (U-APR) | Right when the interval is under 30 min |
| EX1 Q22 (alert on moving average crossing) | "Not possible" | Alerts compare one tile value with a fixed threshold (U-ALERT) | Right for the classic alerts covered by the exam |

Count: **26 items resolved** (25 extractor flags + EX3 Q1, plus EX1 Q22 checked). Dump wrong in 5 (Q28, Q139, Q244, Q297, EX4-27). Explanation wrong but keyed answer right in 3 (Q122, Q71, EX3 Q26). Answer depends on context in 2 (Q128, EX4-3). Too broken to reuse in 3 (Q110, Q287, EX1 Q14).

---

## f. Weekly study plan (6 weeks × 6–8 h)

Daily pattern (about 60–70 min, 6 days a week): 1–2 lessons (≤ 20 min each) → write 3 recall bullets from memory → 10–15 min of spaced review (topics from 1, 3, 7 and 14 days ago) → mixed practice. Day 7 is the checkpoint.

| Week | Lessons | Hours | Spaced review topics (1/3/7/14 days back) | Mixed practice (PREP/MODEL/VIZ/MANAGE) | Gate (checkpoint) |
|---|---|---|---|---|---|
| 1 | 0001–0007 (landscape, connectors, storage modes, settings and parameters, profiling, cleaning, split) | 6 | Daily: the previous lesson's quiz. Day 7: storage modes, connectors | 20 / 0 / 0 / 5 | ≥ 80% on a 25-question PREP+storage set; can state when to use Import/DQ/Dual/Direct Lake |
| 2 | 0008–0014 (merge/append, unpivot/JSON, group by, folding and load, star schema, relationships, date table) | 7 | Week 1 lessons at 7 days (0001–0004), 3-day and 1-day items daily | 20 / 15 / 0 / 5 | ≥ 80% on 40 questions; can sketch a star schema with a role-playing date |
| 3 | 0015–0021 (properties, column vs measure, CALCULATE, iterators, time intelligence, semi-additive, calc groups) | 8 | 14-day: 0001–0007. 7-day: 0008–0014 | 10 / 25 / 0 / 5 | Write 5 measures from memory (YTD, PY, % of total, closing balance, distinct count); ≥ 75% on 40 DAX questions |
| 4 | 0022–0029 (performance, visuals, formatting, filters and slicers, interactions/drill, bookmarks, accessibility/mobile, report settings) | 8 | 14-day: 0008–0014. 7-day: 0015–0021 (DAX again) | 10 / 10 / 20 / 5 | ≥ 80% on 45 mixed; fix every DAX miss by re-doing the lesson quiz |
| 5 | 0030–0036 (analytics, AI visuals, roles, apps/labels, dashboards/alerts, gateways/refresh, RLS) + **Mock exam 1** (day 6) | 8 | 14-day: 0015–0021. 7-day: 0022–0029. Day 7: remediation of mock 1 weak topics | 10 / 10 / 10 / 15 | Mock 1 (50 questions / 100 min, weighted 14/14/14/8). Target ≥ 70%. List the weak topics |
| 6 | Remediation + **Mock exam 2** (day 4) + final review (§g) | 6–7 | 14-day: 0022–0036 by weakness. Final 7-day list (§g) | 30 targeted on weak domains, then 50 interleaved | Mock 2 ≥ 80%. Readiness = two consecutive mocks ≥ 80% (SC-005); if not, run mock 1 again with reshuffled questions after 2–3 days |

- **Compress to 4 weeks (about 12 h/week):** W1 = 0001–0011, W2 = 0012–0022, W3 = 0023–0036, W4 = mocks 1 and 2 plus remediation. Keep the 1/3/7-day reviews; drop the 14-day ones.
- **Extend to 8 weeks (about 5 h/week):** use the 6-week lesson split over weeks 1–6 at 5–6 lessons/week, week 7 = mock 1 + remediation, week 8 = mock 2 + final review. Add a DAX-only practice block in week 4.
- `practice/mixed.html` should offer the per-week domain filters above. The progress tracker (assets/progress.js) schedules missed topics at +1, +3, +7 and +14 days.

---

## g. Review topics schedule

**Final 7 days (highest yield, one block per day):**
1. Storage modes and gateways: Import/DQ/Dual/Direct Lake, when a gateway is needed, scheduled vs incremental refresh, auto page refresh (0003, 0035, 0029).
2. RLS and roles: additive roles, AND within a role, USERPRINCIPALNAME, Viewer-only, groups, test as person; Admin/Member/Contributor/Viewer matrix; Build vs Reshare (0036, 0032).
3. DAX core: CALCULATE replace vs KEEPFILTERS, ALL vs ALLSELECTED, context transition, DISTINCTCOUNT vs COUNTROWS (0017, 0018).
4. Time intelligence: SAMEPERIODLASTYEAR vs PREVIOUSYEAR vs PARALLELPERIOD, DATESINPERIOD windows, closing balances, date table marking, USERELATIONSHIP (0019, 0020, 0014).
5. Power Query shaping: merge kinds (left anti), append + dedupe, unpivot other columns, split "at", replace vs remove errors, Enable load vs Include in refresh, folding (0006–0011).
6. Model size and performance: remove columns/rows, cardinality (split DateTime), Performance Analyzer "Other", DAX query view (0022).
7. Visuals and analysis: key influencers wells, decomposition tree, median line, anomaly detection, sync slicers, Edit interactions, bookmarks Data property, alerts vs subscriptions, dashboard vs report theme (0023–0034).

**Final 24 hours (read-only, about 45 min):** the `reference/review-topics.html` one-pager: roles matrix · gateway yes/no list · storage-mode chooser · the 10 DAX patterns (P01, P03, P05, P07, P09, P12, P14, P16, P18, P22) · the top 15 traps (T01, T07, T12, T15, T17, T21, T23, T26, T31, T34, T35, T37, T41, T42, T44). No new questions in the last 12 hours.

---

## h. Reference sheets spec

All sheets: `reference/<slug>.html`, link `../assets/course.css`, print cleanly on A4/Letter (`@media print`, no cut-off tables, avoid page breaks inside rows). Each has a header with the date, a "Back to home" link, links to the relevant lessons, and citations.

### Sheet: glossary
**Purpose:** the canonical words. Every lesson uses these terms. Alphabetical, with a one-line definition and the lesson number. Layout: a two-column definition list with a letter index.

1. **Admin (workspace)** — Role with full control, including deleting the workspace and managing all roles. (0032)
2. **Aggregation table** — A pre-summarised table that answers high-level queries instead of a large detail table. (0022)
3. **ALL** — DAX function that removes filters from a table or columns, ignoring slicers. (0017)
4. **ALLSELECTED** — Removes filters inside the visual but keeps outer slicer, page and report filters. (0017)
5. **Alt text** — Text description of a visual read by screen readers; can be driven by a measure. (0028)
6. **Analytics pane** — Pane that adds reference lines, forecast, error bars and trend lines to visuals. (0030)
7. **Analyze in Excel** — Explore a semantic model in Excel PivotTables; needs Build permission. (0032)
8. **Anomaly detection** — Line-chart feature that flags unexpected values on a date axis. (0030)
9. **App** — Read-only package of selected workspace items published to audiences. (0033)
10. **Append** — Power Query operation that stacks rows of tables with the same columns. (0008)
11. **Apply security filter in both directions** — Relationship option letting RLS filters flow both ways. (0036)
12. **Assume referential integrity** — DirectQuery relationship option that allows inner joins. (0013)
13. **Audience (app)** — A group of app users who see a chosen subset of app content. (0033)
14. **Auto date/time** — Setting that creates a hidden date table per date column. (0014)
15. **Automatic page refresh** — Report-page refresh on a fixed interval or change detection for DirectQuery. (0029)
16. **Bidirectional filter (Both)** — Cross-filter direction where both related tables filter each other. (0013)
17. **Bin** — Grouping of numbers or dates into equal-sized ranges. (0030)
18. **Bookmark** — Saved page state: filters (Data), visibility (Display), current page. (0027)
19. **Build permission** — Item permission to create content on a semantic model, use Analyze in Excel and XMLA. (0032)
20. **Calculated column** — DAX column computed row by row at refresh and stored. (0016)
21. **Calculated table** — Table created with a DAX expression at refresh. (0016)
22. **CALCULATE** — DAX function that evaluates an expression in a modified filter context. (0017)
23. **Calculation group** — Set of calculation items that rewrite any measure using SELECTEDMEASURE(). (0021)
24. **Card** — Visual showing a single value. (0023)
25. **Cardinality (relationship)** — One-to-one, one-to-many or many-to-many matching of keys. (0013)
26. **Cardinality (column)** — Number of distinct values in a column; high cardinality compresses poorly. (0022)
27. **Certified** — Highest endorsement, granted by admin-authorised reviewers. (0033)
28. **Column distribution** — Profiling view showing distinct and unique counts with a histogram. (0005)
29. **Column From Examples** — Power Query feature that creates a column from sample outputs. (0007)
30. **Column profile** — Profiling view with full column statistics and value distribution. (0005)
31. **Column quality** — Profiling view showing % valid, error and empty. (0005)
32. **Composite model** — Model mixing storage modes or sources. (0003)
33. **Conditional formatting** — Formatting driven by values via rules, gradient, field value, data bars or icons. (0024)
34. **Context transition** — Conversion of row context into filter context by CALCULATE or a measure reference. (0018)
35. **Contributor** — Workspace role that creates and edits content but cannot manage users or publish apps. (0032)
36. **Copilot** — Generative AI assistant for report pages, narratives and model summaries; needs paid capacity. (0031)
37. **Cross-filter direction** — Direction in which a relationship propagates filters (Single or Both). (0013)
38. **Dashboard** — Single-page canvas of pinned tiles, created in the service. (0034)
39. **Data alert** — Notification when a card, KPI or gauge tile crosses a threshold. (0034)
40. **Data category** — Column property such as City, Country or Image URL that changes how values are used. (0015)
41. **Dataflow** — Power Query in the service that produces reusable tables for many models. (0011)
42. **Data source settings** — Dialog to change source paths, credentials and privacy levels. (0004)
43. **DAX** — Data Analysis Expressions, the formula language for measures, columns and tables. (0016)
44. **DAX query view** — Desktop view for running and tuning DAX EVALUATE queries. (0022)
45. **Decomposition tree** — AI visual for ad hoc drill-down of a measure across dimensions. (0031)
46. **Deployment pipeline** — Tool that moves content across development, test and production stages. (0033)
47. **Dimension table** — Table of descriptive attributes with a unique key used to filter facts. (0012)
48. **Direct Lake** — Fabric storage mode reading Delta tables in OneLake into memory without import refresh. (0003)
49. **DirectQuery** — Storage mode that queries the source at view time without storing data. (0003)
50. **DISTINCTCOUNT** — Counts distinct values in a column. (0018)
51. **DIVIDE** — Safe division that returns BLANK or an alternate result on divide-by-zero. (0017)
52. **Drill down** — Moving to a lower hierarchy level within the same visual. (0026)
53. **Drillthrough** — Navigating to a target page filtered by the selected value. (0026)
54. **Dual** — Storage mode where a table acts as Import or DirectQuery per query. (0003)
55. **Dynamic RLS** — RLS whose filter depends on the signed-in user, e.g. USERPRINCIPALNAME(). (0036)
56. **Enable load** — Query option that controls whether a query loads into the model. (0011)
57. **Endorsement** — Promoted or Certified label signalling trusted content. (0033)
58. **Error bars** — Analytics feature showing upper and lower bounds around values. (0030)
59. **Explain by / Expand by** — Key influencers wells for candidate factors / analysis grain. (0031)
60. **Explicit measure** — Measure written in DAX, as opposed to an implicit one. (0016)
61. **Export data setting** — Report/tenant setting: none, summarized, or summarized and underlying. (0029)
62. **Fact table** — Table of events with numeric values and foreign keys. (0012)
63. **Featured table** — Table exposed as an Excel organisational data type. (0015)
64. **Filter context** — The set of filters active when a measure is evaluated. (0017)
65. **Forecast** — Analytics feature projecting a line chart's future values. (0030)
66. **Gateway (on-premises data gateway)** — Bridge letting the service reach on-premises or private data. (0035)
67. **Gauge** — Visual showing a value against minimum, maximum and target. (0023)
68. **Group By** — Power Query operation that aggregates rows by one or more columns. (0010)
69. **Hierarchy** — Ordered set of columns enabling drill down. (0015)
70. **Implicit measure** — Aggregation created by dragging a numeric column into a visual. (0016)
71. **Import** — Storage mode that copies data into the in-memory engine. (0003)
72. **Incremental refresh** — Policy that refreshes only recent partitions using RangeStart/RangeEnd. (0035)
73. **Inactive relationship** — Relationship not used by default; activated with USERELATIONSHIP. (0014)
74. **Iterator** — X function (SUMX, AVERAGEX…) evaluating an expression per row. (0018)
75. **KEEPFILTERS** — Makes a CALCULATE filter intersect with existing filters instead of replacing them. (0017)
76. **Key influencers** — AI visual ranking factors that drive a metric. (0031)
77. **KPI visual** — Visual comparing an indicator to a target over a trend axis. (0023)
78. **Left anti join** — Merge returning left rows with no match on the right. (0008)
79. **Lineage view** — Diagram of dependencies between sources, models, reports and dashboards. (0033)
80. **Live connection** — Connection to an Analysis Services or published model without local modelling. (0003)
81. **Mark as date table** — Setting that designates the model's date table and date column. (0014)
82. **Measure** — DAX calculation evaluated at query time in filter context. (0016)
83. **Member (workspace)** — Role that can add users, publish apps and edit content. (0032)
84. **Merge** — Power Query join adding columns from a related query. (0008)
85. **Mobile layout** — Portrait layout of a report page or dashboard for phones. (0028)
86. **Object-level security (OLS)** — Hides tables or columns from specified roles. (0036)
87. **Paginated report** — Pixel-perfect, printable report (.rdl) built with Report Builder. (0023)
88. **Parameter (Power Query)** — Named value referenced by queries, e.g. server name. (0004)
89. **Performance Analyzer** — Tool that times each visual's DAX query, display and other work. (0022)
90. **Personalize visuals** — Setting letting consumers change visuals for themselves. (0029)
91. **Pin live page** — Pins a whole report page as one interactive dashboard tile. (0034)
92. **Privacy level** — Private, Organizational or Public setting governing data combination. (0004)
93. **Promoted** — Endorsement any contributor can apply to signal useful content. (0033)
94. **Q&A** — Natural-language question feature producing visuals. (0031)
95. **Query folding** — Translating Power Query steps into a native source query. (0011)
96. **Quick measure** — Wizard that generates DAX for common calculations. (0020)
97. **RangeStart / RangeEnd** — Reserved DateTime parameters for incremental refresh. (0035)
98. **Reference query** — Query that starts from another query's output. (0011)
99. **Report** — Multi-page interactive set of visuals on one semantic model. (0001)
100. **Report page tooltip** — Page shown on hover, enabled by "Allow use as tooltip". (0026)
101. **Role-playing dimension** — One dimension used in several roles, e.g. order and ship date. (0014)
102. **Row context** — The current row during column calculation or iteration. (0018)
103. **Row-level security (RLS)** — Role-based DAX filters limiting which rows users see. (0036)
104. **Scheduled refresh** — Timed Import refresh in the service (8/day Pro, 48/day capacity). (0035)
105. **Selection pane** — Pane controlling layer order, visibility, grouping and tab order. (0027)
106. **Semantic model** — The published model (formerly dataset): data, relationships, measures. (0001)
107. **Semi-additive measure** — Measure that cannot be summed over time, e.g. balance. (0020)
108. **Sensitivity label** — Purview label classifying and protecting content, including exports. (0033)
109. **Slicer** — On-canvas visual filter. (0025)
110. **Small multiples** — Grid of identical charts split by a category. (0023)
111. **Smart narrative** — Visual generating dynamic text summaries. (0031)
112. **Sort by column** — Property sorting one column by another, e.g. month name by number. (0015)
113. **Star schema** — Facts surrounded by dimension tables. (0012)
114. **Storage mode** — How a table's data is held: Import, DirectQuery, Dual, Direct Lake. (0003)
115. **Subscription** — Scheduled email snapshot of a report page or dashboard. (0034)
116. **Surrogate key** — System-generated integer key for a dimension. (0012)
117. **Sync slicers** — Sharing a slicer selection and visibility across pages. (0025)
118. **Tab order** — Keyboard and screen-reader navigation order of visuals. (0028)
119. **Theme** — JSON definition of report colours and styles; dashboards have their own themes. (0024)
120. **Time intelligence** — DAX functions that shift or accumulate over dates. (0019)
121. **Unpivot** — Turning columns into attribute-value rows. (0009)
122. **USERELATIONSHIP** — Activates an inactive relationship within CALCULATE. (0014)
123. **USERPRINCIPALNAME** — Returns the signed-in user's UPN. (0036)
124. **Viewer** — Read-only workspace role; RLS applies. (0032)
125. **Visual calculation** — DAX calculation defined on and stored in a single visual. (0021)
126. **Workspace** — Container in the service for collaboration on items. (0001)

(126 terms; developers may trim to 120 for layout, but must keep all P1 concepts.)

### Sheet: concept-map
**Purpose:** let the learner find any concept's domain, priority, prerequisites and lesson. **Content:** the §b table rendered as a filterable table (domain and priority filter buttons in vanilla JS, working with no JS too), plus a simple vertical "learning path" list grouped by phase (Platform · Power Query · Modelling · DAX · Performance · Visuals · Analysis · Service & security). Each concept links to its lesson. Print: the table only.

### Sheet: dax-patterns
**Purpose:** a copyable library of exam-level patterns. Each pattern has an ID, a name, code, a one-line "use when", and the lesson.

| ID | Pattern | Code | Lesson |
|---|---|---|---|
| P01 | Base sum | `Total Sales = SUM(Sales[Amount])` | 0016 |
| P02 | Ratio | `Margin % = DIVIDE([Profit], [Total Sales])` | 0017 |
| P03 | Fixed filter | `Sales West = CALCULATE([Total Sales], Region[Name] = "West")` | 0017 |
| P04 | Intersecting filter | `CALCULATE([Total Sales], KEEPFILTERS(Region[Name] = "West"))` | 0017 |
| P05 | % of grand total | `DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Product[Category])))` | 0017 |
| P06 | % of visible total | `DIVIDE([Total Sales], CALCULATE([Total Sales], ALLSELECTED(Product[Category])))` | 0017 |
| P07 | Column-vs-column filter | `CALCULATE(COUNTROWS(Orders), FILTER(Orders, Orders[Shipped] > Orders[Required]))` | 0017 |
| P08 | Variables | `VAR PY = [Sales PY] RETURN DIVIDE([Total Sales] - PY, PY)` | 0017 |
| P09 | Distinct count | `Orders = DISTINCTCOUNT(Sales[OrderID])` | 0018 |
| P10 | Row count | `Transactions = COUNTROWS(Sales)` | 0018 |
| P11 | Row-level sum | `Revenue = SUMX(Sales, Sales[Qty] * Sales[Price])` | 0018 |
| P12 | Max over members (context transition) | `MAXX(VALUES(Product[Name]), [Total Sales])` | 0018 |
| P13 | Average per day | `AVERAGEX(VALUES('Date'[Date]), [Total Sales])` | 0018 |
| P14 | Rank | `RANKX(ALL(Product[Name]), [Total Sales], , DESC, Dense)` | 0018 |
| P15 | Top N inside CALCULATE | `CALCULATE([Total Sales], TOPN(3, VALUES(Product[Name]), [Total Sales], DESC))` | 0018 |
| P16 | Filter on positive values | `SUMX(FILTER(Sales, Sales[Amount] > 0), Sales[Amount])` | 0018 |
| P17 | Related lookup (column) | `Category = RELATED(Product[Category])` | 0018 |
| P18 | YTD | `TOTALYTD([Total Sales], 'Date'[Date])` | 0019 |
| P19 | Prior year | `CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))` | 0019 |
| P20 | Prior-year YTD | `CALCULATE([Sales YTD], SAMEPERIODLASTYEAR('Date'[Date]))` | 0019 |
| P21 | Previous quarter (shift) | `CALCULATE([Total Sales], DATEADD('Date'[Date], -1, QUARTER))` | 0019 |
| P22 | YoY % | `DIVIDE([Total Sales] - [Sales PY], [Sales PY])` | 0019 |
| P23 | Rolling 30 days | `CALCULATE([Total Sales], DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -30, DAY))` | 0019 |
| P24 | Rolling 3 months average | `CALCULATE(AVERAGEX(VALUES('Date'[Month]), [Total Sales]), DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -3, MONTH))` | 0019 |
| P25 | Closing balance | `CALCULATE(SUM(Bal[Amount]), LASTDATE('Date'[Date]))` | 0020 |
| P26 | Last non-blank balance | `CALCULATE(SUM(Inv[Units]), LASTNONBLANK('Date'[Date], CALCULATE(SUM(Inv[Units]))))` | 0020 |
| P27 | Inactive relationship | `CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], 'Date'[Date]))` | 0014 |
| P28 | Date table | `CALENDAR(DATE(YEAR(TODAY())-9,1,1), DATE(YEAR(TODAY()),12,31))` | 0014 |
| P29 | Band column | `SWITCH(TRUE(), Sales[Amount] < 100, "Small", Sales[Amount] < 1000, "Medium", "Large")` | 0016 |
| P30 | Text label column | `Month Label = FORMAT('Date'[Date], "MMM YYYY")` | 0014 |
| P31 | Number series table | `GENERATESERIES(-100, 100, 1)` | 0016 |
| P32 | Grouped table | `SUMMARIZE('Date', 'Date'[Year], 'Date'[Quarter])` | 0016 |
| P33 | Hierarchy depth | `PATHLENGTH(PATH(Emp[EmployeeID], Emp[ManagerID]))` | 0016 |
| P34 | Calculation item | `CALCULATE(SELECTEDMEASURE(), DATESYTD('Date'[Date]))` | 0021 |
| P35 | Dynamic RLS rule | `[Email] = USERPRINCIPALNAME()` | 0036 |

Plus a short "anti-patterns" box: `DATEADD(…,-30,DAY)` as a window; `LASTDATE()-365`; a bare column in a measure; `MAXX(Dim, SUMX(Fact,…))` without CALCULATE; ratio as a calculated column.

### Sheet: storage-modes-connectivity
**Purpose:** decide the mode and connectivity in under a minute. **Outline:** (1) comparison table Import / DirectQuery / Dual / Direct Lake / Live connection: where data lives, freshness, speed, Power Query/DAX limits, refresh, typical use. (2) Decision flow: real time? → DQ (or Direct Lake if in Fabric); existing model? → live connection; mixed → composite with Dual dimensions. (3) Gateway yes/no list (on-prem SQL ✔, on-prem files ✔, SSAS live ✔, VNet ✔/VNet gateway; Azure SQL public ✘, SharePoint/OneDrive ✘, web ✘). (4) Refresh facts: 8/48 per day, paused after 2 months of inactivity, incremental refresh (RangeStart/RangeEnd, folding), automatic page refresh (DQ only, 30-min minimum in shared). (5) Connector chooser (Folder, SharePoint folder, Web, Dataverse, ODBC, semantic model). Lessons 0002, 0003, 0029, 0035.

### Sheet: security-and-sharing
**Purpose:** roles, permissions and RLS in one page. **Outline:** (1) workspace role matrix (Admin/Member/Contributor/Viewer × add users, publish/update app, change app permissions, edit content, schedule refresh, view, RLS applies?). (2) Item permissions: Read, Reshare, Build (what each enables: Analyze in Excel, new reports, XMLA). (3) Distribution chooser: workspace vs share vs app vs subscription vs embed. (4) RLS steps (Desktop roles → publish → service members → test), static vs dynamic, additive roles, AND within a role, supported group types, both-directions setting, Viewer-only. (5) OLS vs RLS vs data masking. (6) Sensitivity labels (downstream inheritance, protected exports) and endorsement (promoted vs certified). (7) Export settings. Lessons 0029, 0032–0036.

### Sheet: common-mistakes
**Purpose:** the §d table (T01–T48), grouped by domain, with "wrong → right" in two columns plus a lesson link. A filter by domain (vanilla JS, optional). Print: grouped tables.

### Sheet: study-plan
**Purpose:** §f as a printable checklist: weeks × days with checkboxes (state saved with progress.js when available), the spaced-review rule, mock-exam gates, and notes on compressing or extending.

### Sheet: review-topics
**Purpose:** §g, final 7 days + final 24 hours, as a one-page cram sheet. It includes the roles matrix mini, the gateway list, the storage-mode chooser, the 10 DAX patterns and the 15 top traps named in §g.

### Sheet: power-query-m
**Purpose:** Power Query UI actions and the M functions they generate. **Outline:** (1) Transform chooser table: need → UI action → M function (split → Table.SplitColumn; unpivot → Table.UnpivotOtherColumns; merge → Table.NestedJoin + JoinKind.LeftAnti etc.; append → Table.Combine; group → Table.Group; replace → Table.ReplaceValue; replace errors → Table.ReplaceErrorValues; remove columns → Table.RemoveColumns; promote headers → Table.PromoteHeaders; types → Table.TransformColumnTypes; profile → Table.Profile; top row → Table.Max; buffer → Table.Buffer). (2) Join kinds diagram (6 kinds). (3) Snippets: parameterised Sql.Database source; prefix-based column removal with Text.StartsWith; null replacement; group with All Rows + Table.Max; JSON parse and expand. (4) Load and reuse settings (Enable load vs Include in refresh; reference vs duplicate). (5) Folding checklist. (6) Profiling cheat lines (1,000 rows; distinct vs unique). Lessons 0004–0011.

### Sheet: visuals-chooser
**Purpose:** need → visual (and the feature to use). **Content:**

| Need | Visual / feature | Avoid |
|---|---|---|
| Compare values across categories | Clustered bar/column | Pie with many slices |
| Trend over time | Line chart | Stacked area for exact comparison |
| Compare two series over time | Line (two series) or combo | Donut |
| Part-to-whole, few parts | Pie/donut, treemap | Line |
| Part-to-whole as % over time | 100% stacked area/column | Plain stacked area |
| Running total from + and − changes | Waterfall | Gantt, stacked area |
| Correlation, outliers of two measures | Scatter (play axis for time; automatic clusters) | Pie, area |
| Many points (≫10k) on scatter | Scatter with high-density sampling | Filtering source rows |
| Single number | Card / multi-row card | Table |
| Actual vs target over time | KPI visual (unique period on trend axis) | Gauge (no trend) |
| Value vs min/max/target now | Gauge | KPI |
| Stage drop-off | Funnel | Line |
| Geography | Map / filled map / Azure Maps (set data categories) | Table |
| Detail rows, printing all rows | Paginated report (tablix) | Interactive table |
| Same chart per category | Small multiples | Bookmarks |
| What drives an outcome | Key influencers | Decomposition tree |
| Ad hoc root-cause drill | Decomposition tree | Key influencers |
| Natural-language exploration | Q&A visual | Static visual |
| Auto text summary | Narrative (Copilot) / smart narrative | Text box |
| Median / percentile reference | Analytics pane median or percentile line | Average/constant line |
| Future projection | Line chart + forecast | Trend line |
| Unexpected spikes | Line chart + anomaly detection | Column chart |
| Extra info on hover | Tooltips well / report page tooltip | Drillthrough |
| Detail page for a clicked item | Drillthrough | Drill down |
| Lower hierarchy level in place | Drill down (hierarchy) | Drillthrough |
| Word frequency | Word cloud (AppSource) | Custom-built visual |

---

## i. Verified URL list (HTTP 200 on 2026-11-11)

Alias → URL (aliases used in §d/§e):
- U-GUIDE https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-300
- U-CERT https://learn.microsoft.com/en-us/credentials/certifications/power-bi-data-analyst-associate/
- U-EXAM https://learn.microsoft.com/en-us/credentials/certifications/exams/pl-300/
- U-COURSE https://learn.microsoft.com/en-us/training/courses/pl-300t00
- U-PATHPREP https://learn.microsoft.com/en-us/training/paths/prepare-data-power-bi/
- U-PA-NEW https://aka.ms/PL300-PA · U-PA-LEGACY https://aka.ms/PL300-LearnPA
- U-SM https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-storage-mode
- U-COMPOSITE https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-composite-models
- U-DL https://learn.microsoft.com/en-us/fabric/fundamentals/direct-lake-overview
- U-DQ https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-about
- U-MODES https://learn.microsoft.com/en-us/power-bi/connect-data/service-dataset-modes-understand
- U-SOURCES https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources
- U-LIFECYCLE https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-report-lifecycle-datasets
- U-FOLDER https://learn.microsoft.com/en-us/power-query/connectors/folder · U-SPFOLDER https://learn.microsoft.com/en-us/power-query/connectors/sharepoint-folder · U-JSON https://learn.microsoft.com/en-us/power-query/connectors/json
- U-PARAM https://learn.microsoft.com/en-us/power-query/power-query-query-parameters · U-PRIV https://learn.microsoft.com/en-us/power-query/data-privacy-firewall
- U-PROF https://learn.microsoft.com/en-us/power-query/data-profiling-tools · U-ERR https://learn.microsoft.com/en-us/power-query/dealing-with-errors · U-TYPES https://learn.microsoft.com/en-us/power-query/data-types · U-REPL https://learn.microsoft.com/en-us/power-query/replace-values
- U-SPLIT https://learn.microsoft.com/en-us/power-query/split-columns-delimiter · U-CFE https://learn.microsoft.com/en-us/power-query/column-from-example
- U-MERGE https://learn.microsoft.com/en-us/power-query/merge-queries-overview · U-ANTI https://learn.microsoft.com/en-us/power-query/merge-queries-left-anti · U-APPEND https://learn.microsoft.com/en-us/power-query/append-queries
- U-UNPIV https://learn.microsoft.com/en-us/power-query/unpivot-column · U-PIVOT https://learn.microsoft.com/en-us/power-query/pivot-columns · U-GROUP https://learn.microsoft.com/en-us/power-query/group-by
- U-FOLD https://learn.microsoft.com/en-us/power-query/query-folding-basics · U-M https://learn.microsoft.com/en-us/powerquery-m/ · U-BUFFER https://learn.microsoft.com/en-us/powerquery-m/table-buffer
- U-DATAFLOW https://learn.microsoft.com/en-us/power-bi/transform-model/dataflows/dataflows-introduction-self-service
- U-STAR https://learn.microsoft.com/en-us/power-bi/guidance/star-schema · U-REL https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand · U-RELMANAGE https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-create-and-manage-relationships · U-BIDI https://learn.microsoft.com/en-us/power-bi/guidance/relationships-bidirectional-filtering · U-ACTIVE https://learn.microsoft.com/en-us/power-bi/guidance/relationships-active-inactive · U-M2M https://learn.microsoft.com/en-us/power-bi/guidance/relationships-many-to-many
- U-DATETBL https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-date-tables · U-DATEGUIDE https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables · U-AUTODATE https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-auto-date-time
- U-SORT https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-sort-by-column · U-DATACAT https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-data-categorization · U-MODELVIEW https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-modeling-view
- U-CC https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculated-columns · U-CT https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculated-tables · U-QM https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-quick-measures
- U-DAX https://learn.microsoft.com/en-us/dax/dax-overview · U-CALC https://learn.microsoft.com/en-us/dax/calculate-function-dax · U-KEEP https://learn.microsoft.com/en-us/dax/keepfilters-function-dax · U-ALLSEL https://learn.microsoft.com/en-us/dax/allselected-function-dax · U-REMOVEF https://learn.microsoft.com/en-us/dax/removefilters-function-dax · U-DIVIDE https://learn.microsoft.com/en-us/power-bi/guidance/dax-divide-function-operator · U-VARS https://learn.microsoft.com/en-us/power-bi/guidance/dax-variables
- U-RELATED https://learn.microsoft.com/en-us/dax/related-function-dax · U-TOPN https://learn.microsoft.com/en-us/dax/topn-function-dax · U-RANKX https://learn.microsoft.com/en-us/dax/rankx-function-dax · U-PATH https://learn.microsoft.com/en-us/dax/path-function-dax · U-GENSERIES https://learn.microsoft.com/en-us/dax/generateseries-function-dax · U-SUMMARIZE https://learn.microsoft.com/en-us/dax/summarize-function-dax · U-CALENDAR https://learn.microsoft.com/en-us/dax/calendar-function-dax
- U-TI https://learn.microsoft.com/en-us/dax/time-intelligence-functions-dax · U-SPLY https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax · U-DATEADD https://learn.microsoft.com/en-us/dax/dateadd-function-dax · U-DIP https://learn.microsoft.com/en-us/dax/datesinperiod-function-dax · U-DB https://learn.microsoft.com/en-us/dax/datesbetween-function-dax · U-YTD https://learn.microsoft.com/en-us/dax/totalytd-function-dax · U-LASTDATE https://learn.microsoft.com/en-us/dax/lastdate-function-dax · U-UREL https://learn.microsoft.com/en-us/dax/userelationship-function-dax
- U-CALCGRP https://learn.microsoft.com/en-us/power-bi/transform-model/calculation-groups · U-VISCALC https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-visual-calculations-overview
- U-RED https://learn.microsoft.com/en-us/power-bi/guidance/import-modeling-data-reduction · U-PA https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-performance-analyzer · U-DAXQV https://learn.microsoft.com/en-us/power-bi/transform-model/dax-query-view · U-AGG https://learn.microsoft.com/en-us/power-bi/transform-model/aggregations-advanced
- U-VISTYPES https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a · U-KPI https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-kpi · U-GAUGE https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-radial-gauge-charts · U-CARD https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-card · U-WATERFALL https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-waterfall-charts · U-COMBO https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-combo-chart · U-SCATTER https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-scatter · U-SMALLMULT https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-small-multiples
- U-PAGINATED https://learn.microsoft.com/en-us/power-bi/guidance/report-paginated-or-power-bi · U-RB https://learn.microsoft.com/en-us/power-bi/paginated-reports/report-builder-power-bi
- U-THEME https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-report-themes · U-DTHEME https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-themes · U-CF https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting
- U-SLICERS https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers · U-FILTERS https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-report-add-filter · U-INTER https://learn.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions · U-DRILLT https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-drillthrough · U-TOOLTIP https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-tooltips
- U-BOOK https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-bookmarks · U-BUTTONS https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-buttons
- U-A11Y https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-accessibility-overview · U-A11YCREATE https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-accessibility-creating-reports · U-MOBILE https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-create-mobile-optimized-report-about · U-DMOB https://learn.microsoft.com/en-us/power-bi/create-reports/service-create-dashboard-mobile-phone-view
- U-PERS https://learn.microsoft.com/en-us/power-bi/create-reports/power-bi-personalize-visuals · U-EXPORT https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-export-data · U-APR https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-automatic-page-refresh
- U-ANALYTICS https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-analytics-pane · U-ANOM https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-anomaly-detection · U-GROUPBIN https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-grouping-and-binning · U-INSIGHTS https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-insights
- U-KI https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-influencers · U-DECOMP https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-decomposition-tree · U-QNA https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-q-and-a · U-NARR https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-smart-narrative · U-COPILOT https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction
- U-ROLES https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces · U-FABROLES https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces · U-BUILD https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-build-permissions · U-XWS https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-across-workspaces · U-AIE https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-analyze-in-excel · U-SHARE https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-share-dashboards · U-DISTRIB https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-how-to-collaborate-distribute-dashboards-reports
- U-APPS https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-distribute-apps · U-ENDORSE https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-endorsement-overview · U-LABELS https://learn.microsoft.com/en-us/power-bi/enterprise/service-security-sensitivity-label-overview · U-LINEAGE https://learn.microsoft.com/en-us/fabric/governance/lineage · U-PIPE https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines
- U-DASH https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-create · U-PIN https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-pin-tile-from-report · U-PINLIVE https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-pin-live-tile-from-report · U-ALERT https://learn.microsoft.com/en-us/power-bi/create-reports/service-set-data-alerts · U-SUBS https://learn.microsoft.com/en-us/power-bi/collaborate-share/end-user-subscribe
- U-GW https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem · U-GWDS https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-data-sources · U-SCHED https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh · U-REFRESH https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data · U-INCR https://learn.microsoft.com/en-us/power-bi/connect-data/incremental-refresh-overview
- U-RLS https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security · U-OLS https://learn.microsoft.com/en-us/fabric/security/service-admin-object-level-security
- U-OVERVIEW https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview · U-BASICS https://learn.microsoft.com/en-us/power-bi/fundamentals/service-basic-concepts
- External: https://dax.guide/ · https://www.sqlbi.com/ · https://guyinacube.com/ · https://www.reddit.com/r/PowerBI/ · https://community.fabric.microsoft.com/ (blocks automated checks with 403; the forum is live)

**Known 404s, do not use:** desktop-sync-slicers, desktop-slicers, mobile-apps-create-layout, power-bi-visualization-error-bars, desktop-error-bars*, desktop-button-navigators, service-export-data, desktop-selection-pane, desktop-report-tooltip-pages, desktop-paginated-reports, power-query/table-buffer, power-query/reference-duplicate-queries, desktop-format-tab-order. For error bars and the Selection pane, cite the analytics pane / bookmarks pages until a verified URL exists (listed under Gaps in RESOURCES.md).
