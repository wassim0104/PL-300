# PL-300 Practice Test 1 (EX_1-1): Extraction

Source: `/workspace/jamel/pl300/md/Test_pl_300_-_EX_1-1.txt` (lines 1-2046, whole file). Questions Q1-Q30. Exhibits are missing; classification uses stems and explanations.

## 1. Question table

| Q | Domain | Topic | Concept tested | Correct answer gist | Trap / common mistake |
|---|---|---|---|---|---|
| Q1 | VIZ | performance-analyzer | Slow report where "Other" task time dominates | Remove some visuals from the report page | Shrinking model or tuning DAX does not reduce waiting time |
| Q2 | MANAGE | workspace-roles | Role for deployment manager publishing apps | Member | Admin over-privileges; Contributor cannot publish apps |
| Q3 | MANAGE | RLS | Two separate RLS roles to intersect two filters | No | Separate RLS roles combine as union, not intersection |
| Q4 | MANAGE | RLS | One role with two table filters for intersection | Yes | Filters inside one role AND together, giving intersection |
| Q5 | MANAGE | RLS | Propagating employee-table RLS through relationship to territory | Yes ⚠disputed | RLS is one-way by default; needs "Apply security filter in both directions" |
| Q6 | MODEL | CALCULATE | Measure totaling last three transactions per product | CALCULATE(SUM, TOPN(3, Sales, Order Date Key)) | CALCULATETABLE and FILTER return tables, not scalar measures |
| Q7 | VIZ | Q&A | Q&A recognizing "Calendar" for a date hierarchy | Add synonym "Calendar" to the hierarchy | Descriptions do not affect Q&A; synonyms work on hierarchies directly |
| Q8 | PREP | grouping-binning | Group individual dates into weekly buckets | Bin group, Bin type = Size of bins (7 days) | List grouping is for text; Number of bins cannot guarantee 7-day weeks |
| Q9 | VIZ | R-visuals | Why R map shows only some locations | More records sent; R visual uses top 150,000 rows | Timeouts and script errors give errors, not partial plots |
| Q10 | VIZ | small-multiples | Side-by-side comparison of chart split by year | Small multiples with Year in the small multiples well | Bookmarks and sparklines do not split a chart by a dimension |
| Q11 | PREP | query-folding | Tool that cannot confirm folding (NOT question) | Performance Analyzer | View Native Query is least reliable; Profiler and Diagnostics confirm folding |
| Q12 | PREP | parameters | Test one report across Dev, Test, UAT, Prod servers | Power Query parameter for server name | What-if parameters and DAX variables do not change the data source |
| Q13 | PREP | split-column | Split comma-delimited cell into one product per row | Split column by delimiter, into rows | Pivot, unpivot and transpose reshape rows/columns, not delimited values |
| Q14 | VIZ | key-influencers | Meaning of dotted average line in key influencers | Share of Administrators and Publishers with low ratings ⚠disputed | Average line is non-influencers' rate; options B and D are easily confused |
| Q15 | PREP | query-folding | Most efficient method to sample fact-table import | Native SQL with WHERE, and Power Query filter (both correct) | Report-level filters and DAX FILTER filter only after full import |
| Q16 | PREP | dataflows | Reuse standardized Product transformations across reports | Build a dataflow for Product and endorse it | Copying M duplicates logic; datasets are modeling layer; datamarts are self-service |
| Q17 | MODEL | quick-measures | Quick-measure weekly rolling average parameters | Days, 6, 0 | Rolling averages include current day, so previous periods = 6 not 7 |
| Q18 | VIZ | kpi-visual | Meaning of the KPI value 19462 | Sales value for the current year | KPI value is the actual/current figure, not the target or average |
| Q19 | VIZ | waterfall-chart | Running headcount from positive and negative monthly changes | Waterfall chart | Gantt shows task schedules; stacked area shows part-to-whole |
| Q20 | MODEL | time-intelligence | Last year's revenue shown for each month | CALCULATE with DATEADD(-1, YEAR) or SAMEPERIODLASTYEAR | PARALLELPERIOD and PREVIOUSYEAR return the full prior year for each month |
| Q21 | VIZ | conditional-formatting | Color bands showing magnitude and direction of change | Data bars, with Show bar only | Field-value color formats do not show magnitude of change |
| Q22 | VIZ | alerts | Notify when price crosses 200-day moving average | Not possible with listed options | Alerts track one variable on card/KPI/gauge; subscriptions send snapshots |
| Q23 | MODEL | row-context | Why MAXX over Product with SUMX gives total sales | No (formula wrong) | Row context does not propagate relationship filters into Sales |
| Q24 | MODEL | RELATED | Fixing the MAXX/SUMX formula with a related table | Yes | RELATEDTABLE filters Sales to the current product's rows |
| Q25 | MODEL | context-transition | CALCULATE wrapping SUMX inside MAXX | Yes | CALCULATE in row context converts row values into column filters |
| Q26 | MODEL | context-transition | MAXX over Product calling [Total Sales] measure | Yes | Measure reference in row context gets implicit CALCULATE |
| Q27 | MODEL | context-transition | MAXX with bare measure, no explicit CALCULATE | Yes | Assuming the implicit CALCULATE is absent; it still applies |
| Q28 | VIZ | visual-interactions | Pie selection should filter two visuals and dim one | Cross-filter column and line; cross-highlight clustered column | Cross-filter removes unrelated data; cross-highlight only dims it |
| Q29 | MODEL | calculated-column-vs-measure | Correct object for EBITDA margin on a card | A measure | Calculated column averages row ratios; custom column has same flaw |
| Q30 | MODEL | model-size-optimization | Cut DateTime storage while keeping all information | Split into Date and Time in Power Query, delete original | Format changes keep storage; type change to Date or 15-min floor loses data |

## 2. Topic frequency

| Topic | Domain | Count |
|---|---|---|
| RLS | MANAGE | 3 |
| context-transition | MODEL | 3 |
| query-folding | PREP | 2 |
| CALCULATE | MODEL | 1 |
| Q&A | VIZ | 1 |
| alerts | VIZ | 1 |
| calculated-column-vs-measure | MODEL | 1 |
| conditional-formatting | VIZ | 1 |
| dataflows | PREP | 1 |
| grouping-binning | PREP | 1 |
| key-influencers | VIZ | 1 |
| kpi-visual | VIZ | 1 |
| model-size-optimization | MODEL | 1 |
| parameters | PREP | 1 |
| performance-analyzer | VIZ | 1 |
| quick-measures | MODEL | 1 |
| R-visuals | VIZ | 1 |
| RELATED | MODEL | 1 |
| row-context | MODEL | 1 |
| small-multiples | VIZ | 1 |
| split-column | PREP | 1 |
| time-intelligence | MODEL | 1 |
| visual-interactions | VIZ | 1 |
| waterfall-chart | VIZ | 1 |
| workspace-roles | MANAGE | 1 |

## 3. Top 10 recurring traps

- **Relationships do not propagate in row context.** Iterators like MAXX/SUMX over the dimension do not filter the fact table; use RELATEDTABLE or CALCULATE (context transition).
- **Multiple RLS roles are additive (union).** To get an intersection of filters, put both filters in one role.
- **RLS propagates one way by default.** For a dimension-driven filter to reach a related table, enable "Apply security filter in both directions."
- **Measure refs in row context get implicit CALCULATE.** Referencing [Measure] inside an iterator performs context transition automatically.
- **Calculated columns average row ratios.** For margins and percentages, use a measure that divides SUM by SUM.
- **DATEADD honors filter context; PARALLELPERIOD and PREVIOUSYEAR do not at month level.** For a per-month prior-year value, use DATEADD or SAMEPERIODLASTYEAR.
- **Disabled View Native Query does not prove no folding.** Confirm with SQL Server Profiler or Query Diagnostics.
- **Performance Analyzer "Other" time is waiting on other visuals.** Fix by splitting visuals across pages, not by tuning DAX or the model.
- **Cross-filter removes data; cross-highlight dims it.** Choose per visual via Format > Edit interactions.
- **Formatting does not change storage; type changes and rounding lose data.** Split DateTime in Power Query and delete the original to save storage without losing information.

## 4. Notable DAX / M snippets

Snippets Q6, Q12 (partial), Q29 are reconstructed from explanations (exhibits missing); noted below.

1. **Q26 (correct), measure in iterator:** `Highest sales value for any Product = MAXX ( 'Product', CALCULATE ( [Total Sales] ) )`. Context transition gives per-product totals.
2. **Q24 (correct), RELATEDTABLE:** `Highest sales value for any Product = MAXX ( 'Product', SUMX ( RELATEDTABLE ( Sales ), Sales[Quantity] * Sales[Unit Price] ) )`. Relationship filter is applied per row.
3. **Q25 (correct), CALCULATE over SUMX:** `MAXX ( 'Product', CALCULATE ( SUMX ( Sales, Sales[Quantity] * Sales[Unit Price] ) ) )`. Explicit CALCULATE forces context transition.
4. **Q23 (wrong), for contrast:** `MAXX ( 'Product', SUMX ( Sales, Sales[Quantity] * Sales[Unit Price] ) )`. No context transition, so every product returns the same total.
5. **Q20, DATEADD:** `CALCULATE ( [Revenue], DATEADD ( 'Date'[Date], -1, YEAR ) )`. Honors month filter context.
6. **Q20, SAMEPERIODLASTYEAR:** `CALCULATE ( [Revenue], SAMEPERIODLASTYEAR ( 'Date'[Date] ) )`. Equivalent to DATEADD with -1 YEAR.
7. **Q6, last three transactions (reconstructed; exhibit layout garbled):** `Last 3 Sales = CALCULATE ( SUM ( Sales[Sales Amount] ), TOPN ( 3, Sales, Sales[Order Date Key] ) )`. TOPN default order is descending, so it picks the latest three.
8. **Q12, DAX variable for growth (from explanation):** `VAR SalesPreviousYear = CALCULATE ( [Sales Amount], SAMEPERIODLASTYEAR ( 'Date'[Date] ) ) RETURN DIVIDE ( [Sales Amount] - SalesPreviousYear, SalesPreviousYear )`. Prior-year calculated once.
9. **Q29, EBITDA margin measure (reconstructed; table and column names are placeholders):** `EBITDA Margin = DIVIDE ( SUM ( T[EBITDA] ), SUM ( T[Revenue] ) )`. Aggregates first, then divides.
10. **Q4, RLS role with two filters (intersection):** role `Management & Germany` with `DimSalesTerritory[Sales Territory Region] = "Germany"` and `DimCustomer[Occupation] = "Management"`. Filters inside one role AND together.

Also in source (not DAX): Q5 RLS filter `DimEmployee[Email Address] = USERNAME ()` (correct; USERPRINCIPALNAME() also valid).

## 5. Stats

- Total questions seen: 30 (Q1-Q30)
- Classified: 30
- Unclassifiable: 0
- Disputed: 2 (Q5 RLS bidirectional-setting omission in solution; Q14 key-influencers average line / option B vs D)
- Notes: Q12 is marked "Ignoré" in the source but has full text, so it is classified. Domain counts: PREP 6, MODEL 10, VIZ 10, MANAGE 4.
