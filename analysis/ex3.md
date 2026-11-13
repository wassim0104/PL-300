# PL-300 Practice Test-3 (source: Test_pl_300_-_EX_3_(1).txt, whole file)

## 1. Question table

| Q | Domain | Topic | Concept tested | Correct answer gist | Trap / common mistake |
|---|---|---|---|---|---|
| 1 | MODEL | storage-modes | Real-time auto page refresh needs DirectQuery plus Premium capacity | DirectQuery with Premium capacity | Import modes or shared capacity: 30-min minimum refresh interval |
| 2 | VIZ | scatter-chart | Relationship between two numeric measures, with automatic clustering | Scatter chart with automatic clusters | Line chart is for trends over time; bubble needs a third measure |
| 3 | PREP | group-by | Group by two columns and count rows | Advanced Group by, operation Count Rows | Basic Group by accepts only one grouping column |
| 4 | MODEL | time-intelligence | Quick measure date field accepts primary date column of marked date table | Yes | Assuming any date-typed column works; must be the marked date table's primary column |
| 5 | MODEL | time-intelligence | Quick measure rejects many-side date column without auto date hierarchy | No (Due Date) | Assuming any date-typed column works; many-side columns get no auto hierarchy |
| 6 | MODEL | time-intelligence | Auto date/time hierarchy of Order Date usable in quick measure | Yes | Assuming Order Date is unusable because it is not the date table column |
| 7 | VIZ | KPI-visual | Track price against 50 DMA with low and high bounds | Radial gauge | KPI visual needs a trend axis; gauge shows low and high bounds |
| 8 | VIZ | dashboard-themes | Pinned tile that ignores dashboard theme changes | Tile uses a report theme | Built-in vs custom theme does not decide inheritance; pin-time choice does |
| 9 | MODEL | cross-filter-direction | Repeated supplier totals from filters not reaching Product | Set Product and Supplier_Product cross-filter to Both | Assuming no change needed; repeating totals mean filters stop before Product |
| 10 | MODEL | row-context | Calculated columns use row context at refresh; measures use filter context at query | Columns: row context at refresh; measures: filter context at query | Swapping the two contexts between columns and measures |
| 11 | PREP | parameters | Parameterize Excel source connection after import | Change Source step file path to a parameter | Converting to CSV or new query keeps the hardcoded path; editing M is error-prone |
| 12 | VIZ | performance-analyzer | Long "Other" wait caused by another visual's slow DAX | Optimize DAX queries for other visuals | Tuning the slow visual's own DAX; variables do not reduce wait time |
| 13 | VIZ | KPI-visual | Quarter on trend axis aggregates across years; KPI mismatch | Use a unique Year-Quarter column on trend axis | Quarter field on trend axis sums all years; needs a unique key |
| 14 | PREP | data-profiling | Percentage of empty values in a column | Column quality | Column profile gives counts, not percentages; distribution shows no empties |
| 15 | PREP | query-folding | Slow refresh and timeouts after merging two sources | Query folding not achieved | Blaming expired credentials or visual count; refresh slowness is transformation cost |
| 16 | MANAGE | workspace-roles | Read-only access for marketing users (select two) | Share reports to Azure AD group; publish app to marketing users | Member role grants edit; Admin, Member, Contributor all allow editing |
| 17 | MANAGE | RLS | DM moves to new vertical under group-based RLS | Update Azure AD security group membership | Editing role DAX or assigning DM to a role bypasses group-based management |
| 18 | MODEL | relationships-cardinality | Order to City relationship: unique City key, one-directional filter | City Key, Many-to-one, Single | Choosing Both direction; bidirectional filters cause ambiguity and slowness |
| 19 | MANAGE | lineage | Lineage view: dataset dependencies and cross-workspace datasets | No, No, No | Assuming dashboard refreshes independently of its underlying datasets |
| 20 | MODEL | CALCULATE | Filter one district while keeping other rows' context | CALCULATE with KEEPFILTERS, or FILTER over table without ALL (B, C) | Plain filter argument or FILTER(ALL(...)) overrides context, repeating North value |
| 21 | VIZ | conditional-formatting | Color cells by a threshold on the average of another field | Format style Rules; based on Pageviews; Average | Gradient or Field value styles cannot apply a threshold rule |
| 22 | VIZ | KPI-visual | Actual vs planned hours per sprint, lower is better | Indicator Actual; trend Week number of year; target Planned; Low is good | Planned in indicator is wrong; overrun (actual above plan) is bad |
| 23 | VIZ | slicer-sync | Affiliate slicer filters also apply on second page | Sync the slicer visuals across pages | Bookmarks, grouping, or page-level filter do not carry filters across pages |
| 24 | VIZ | slicer-sync | Remove blank-Affiliate dates from Date slicer | Group both slicers; sync filter changes | Different group names break sync; field-change sync not needed here |
| 25 | VIZ | slicer-sync | Propagate Date-to-Year field change across synced slicers | Group both slicers; sync field changes | Sync filter changes is unnecessary when the field itself changes |
| 26 | VIZ | visual-interactions | Date slicer should skip line chart on page 1 (not synced) | Edit Date slicer to Line chart interaction None; copy-paste and sync Date slicer ⚠disputed | Source labels "Sync both the slicers" Incorrect, but explanation says not incorrect |
| 27 | VIZ | visual-interactions | Exclude line chart when slicers already synced | Unhide Date slicer; set its interaction with Line chart to None | Copy-pasting a slicer adds a second, unaffected Date slicer that still filters |
| 28 | MODEL | market-basket | Basket analysis needs order grouping, not transaction date or store | Yes, No, Yes | Assuming Sales Order Number is one row per product; it groups many products |
| 29 | MODEL | context-transition | Calculated table: measure in ADDCOLUMNS and FILTER context transition | [Average Sales] in 1st box; AVERAGE(Sales[Sales Amount]) in 2nd | Measure in FILTER compares subcategory with itself; use plain AVERAGE for baseline |

Notes: Q7, Q13, Q22 all test KPI visual setup. Q23 to Q27 form one case study (affiliate marketer), so the slicer/interaction rules recur across them. Q1 is classed MODEL under storage-modes; its automatic page refresh feature is a report-level setting.

## 2. Topic frequency

| Topic | Domain | Count |
|---|---|---|
| KPI-visual | VIZ | 3 |
| slicer-sync | VIZ | 3 |
| time-intelligence | MODEL | 3 |
| visual-interactions | VIZ | 2 |
| CALCULATE | MODEL | 1 |
| conditional-formatting | VIZ | 1 |
| context-transition | MODEL | 1 |
| cross-filter-direction | MODEL | 1 |
| dashboard-themes | VIZ | 1 |
| data-profiling | PREP | 1 |
| group-by | PREP | 1 |
| lineage | MANAGE | 1 |
| market-basket | MODEL | 1 |
| parameters | PREP | 1 |
| performance-analyzer | VIZ | 1 |
| query-folding | PREP | 1 |
| RLS | MANAGE | 1 |
| relationships-cardinality | MODEL | 1 |
| row-context | MODEL | 1 |
| scatter-chart | VIZ | 1 |
| storage-modes | MODEL | 1 |
| workspace-roles | MANAGE | 1 |

## 3. Top 10 recurring traps

- **Filter propagation is one-way on many-to-one:** filters flow from the one side only, so a totals row can repeat per supplier. Fix the cross-filter direction rather than changing measures (Q9, Q18).
- **Bidirectional is not the default:** use Single unless a specific requirement needs Both, since Both causes ambiguity and slowness (Q9, Q18).
- **CALCULATE with a plain condition or FILTER(ALL(...)) overrides existing context:** use KEEPFILTERS or a FILTER over the whole table without ALL to intersect (Q20).
- **Measures in row context trigger context transition:** a measure inside an iterator filters by the current row, so compare each subcategory to the all-products baseline with plain AVERAGE (Q29).
- **Calculated columns vs measures:** columns are computed row by row at refresh; measures are computed under filter context at query time (Q10).
- **Basic Group by is single-column only:** use Advanced Group by for multiple grouping columns or aggregations (Q3).
- **Auto date/time and date tables:** only the primary date column of a marked date table (or an auto hierarchy) works for time intelligence; many-side columns do not (Q4, Q5, Q6).
- **Read-only access:** Admin, Member, and Contributor all allow editing; use Viewer, individual report sharing, or an app (Q16).
- **Slicer sync requires grouping first:** sync filter changes and sync field changes only work for slicers in the same group with the same name (Q24, Q25).
- **Copy-pasting a synced slicer:** creates a second, unaffected slicer; unhide the existing hidden synced slicer and set its interactions instead (Q26, Q27).

## 4. Notable DAX snippets

```dax
-- Q7: 50-day moving average (CALCULATE + DATESBETWEEN over trailing 50 days)
Microsoft 50 DMA =
CALCULATE ( [Average Closing Price], DATESBETWEEN ( MSFT[Date], MAX ( MSFT[Date] ) - 50, MAX ( MSFT[Date] ) ) )
```
Trailing-window moving average over the last 50 days of the date column.

```dax
-- Q7: current price on the latest date
MSFT Current Price = CALCULATE ( SUM ( MSFT[Close] ), MSFT[Date] = MAX ( MSFT[Date] ) )
```
Filter argument on the latest date isolates the current closing price.

```dax
-- Q20: correct filter, intersects with existing filter context
Sales in the North region = CALCULATE ( [Total Sales], KEEPFILTERS ( 'Work Orders'[District] = "North" ) )
```
KEEPFILTERS keeps the current district filter; only the North row returns a value.

```dax
-- Q20: correct alternative, no ALL on the table
Sales in the North region = CALCULATE ( [Total Sales], FILTER ( 'Work Orders', 'Work Orders'[District] = "North" ) )
```
Iterating the whole table without ALL intersects the outer district filter.

```dax
-- Q20: WRONG, ALL removes the district filter so every district shows North sales
Sales in the North region = CALCULATE ( [Total Sales], FILTER ( ALL ( 'Work Orders'[District] ), 'Work Orders'[District] = "North" ) )
```
Repeats the North value across all districts; do not use ALL here.

```dax
-- Q10: measure is evaluated under filter context at query time
Revenue = SUM ( Sales[Sales Amount] )
```
Same formula, different result per region, because the filter context changes.

```dax
-- Q13: previous quarter revenue, blank-safe
Revenue Last Quarter =
IF ( ISBLANK ( [Total Revenue] ), BLANK ( ), CALCULATE ( [Total Revenue], PREVIOUSQUARTER ( 'Date'[Date] ) ) )
```
Previous-quarter comparison; the trend axis must use a unique year-quarter field.

## 5. Stats

- Total questions seen: 29 (Q1 to Q29; all present with answer text)
- Classified: 29
- Unclassifiable: 0
- Disputed: 1 (Q26, answer label "Sync both the slicers (Incorrect)" conflicts with explanation "not incorrect")
- Domain split: PREP 4, MODEL 10, VIZ 12, MANAGE 3
