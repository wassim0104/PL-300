# PL-300 extraction: dump.txt lines 1700-3270 (Q76-Q150)

Mapping note: labels follow stems inconsistently in this dump. Questions were mapped by stem order against the label sequence. Q75 and Q85 are label-only in places (Q75 has no stem; the answer block after it is attributed to Q74). Q84 is the unlabelled USERELATIONSHIP stem, and Q85 is TOTALYTD. Q131 and Q136 are exhibit-only stems and are unclassifiable.

### 1. Question table

| Q | Domain | Topic | Concept tested | Correct answer gist | Trap / common mistake |
|---|---|---|---|---|---|
| 76 | PREP | unpivot | Promote headers, unpivot value columns, rename generic columns | Use First Row as Headers; Unpivot Other Columns; rename to YEAR/REVENUE | Unpivoting Department/Product instead of year columns; keeping Attribute/Value names |
| 77 | MODEL | data-reduction | Model statements for sales-over-time and customer counts (exhibit missing) | No, No, Yes (exhibit missing) | Dropping Date or Customer keys breaks time and customer-count analysis |
| 78 | MODEL | time-intelligence | Relative change versus previous quarter measure | CALCULATE(sum), DATEADD(-1 QUARTER), DIVIDE | Source wrongly says DATEADD -1 QUARTER gives previous month |
| 79 | MODEL | TOPN | Calculated table of top 8 products by measure | TOPN(8, table, Total Sales, DESC) | Omitting DESC returns lowest values, not highest |
| 80 | PREP | data-reduction | Reduce refresh and query time for regional sales view | Remove TaxAmt and Freight columns; filter to NorthWest | Removing CustomerKey breaks distinct customer count |
| 81 | MODEL | data-category | Geographic drill-down map Country to State to City | Set Data Category on City, State/Province, Country | Hierarchy alone does not geocode; data category is needed |
| 82 | PREP | split-column | Clustered bar from combined Machine-User text | Split Machine-User column by delimiter in Power Query | Using DAX SUBSTITUTE instead of a Power Query delimiter split |
| 83 | MODEL | calendar-table | Date table of 10 years including current year | YEAR(TODAY()) bounds with CALENDAR(start, end) | TODAY alone gives one date; CALENDAR needs explicit start and end |
| 84 | MODEL | role-playing-dimension | Sales over several date keys using USERELATIONSHIP | No: USERELATIONSHIP only activates inactive relationships | Assuming USERELATIONSHIP can filter the already-active relationship |
| 85 | MODEL | time-intelligence | Year-to-date sum up to a selected date | TOTALYTD([measure], 'Date'[Date]) | Passing a measure instead of the date column as second argument |
| 86 | MODEL | calculated-column | Classify transactions small/medium/large by amount ⚠disputed | FILTER, AND, CALCULATE (source explanation incoherent) ⚠disputed | Source rationale is muddled; verify band logic before relying on it |
| 87 | MODEL | data-reduction | Minimise dataset size without changing visuals | Remove LineItems[Description] column | Merging tables or grouping does not shrink the dataset |
| 88 | PREP | data-reduction | Cut refresh time for blog traffic report | Filter Traffic to blog URLs; remove Full Text and Summary | Filtering out historical rows breaks visuals needing history |
| 89 | MODEL | time-intelligence | Monthly rolling average quick measure | Quick measure with Total Sales, Date, Months | Rolling window needs the date field and month granularity |
| 90 | MODEL | time-intelligence | Same period last year for selected month | CALCULATE(SUM, SAMEPERIODLASTYEAR(dimDate[Date])) | PREVIOUSYEAR returns the whole prior year, not one month |
| 91 | PREP | query-performance | Slow load of long-running SQL queries | Reduce rows/columns; split into column subsets then merge | Disabling query folding slows loads; it is not a fix |
| 92 | PREP | column-cardinality | Analyze IoT events by hour and day; split DateTime | Yes: split DateTime into separate Date and Time columns | Extra column looks costly but lowers cardinality and improves compression |
| 93 | MODEL | column-cardinality | Improve IoT dataset by removing a unique column | Yes: remove IoT GUID, keep integer IoT ID | Keeping both unique text keys bloats the model |
| 94 | MODEL | column-cardinality | Changing DateTime to Date type for hourly analysis | No: Date type drops the time needed for hours | Date type removes the hour part; hour analysis needs time |
| 95 | MODEL | data-reduction | Slow report with 12M-row fact table | Remove unused columns from tables in model | Iterators, AppSource visuals, or refresh frequency do not shrink size |
| 96 | MODEL | ALLSELECTED | Percent of total that respects report-level filter | CALCULATE with ALLSELECTED | ALL ignores external report filters; ALLSELECTED keeps them |
| 97 | MODEL | date-table | Smaller model keeping month and quarter analysis | Relate Date to Sales and mark as date table | Disabling auto date/time is unnecessary once a marked date table exists |
| 98 | MODEL | data-reduction | Slow report with 12M rows and AppSource visuals | Remove unused columns from tables | RLS and visual interactions do not reduce model size |
| 99 | MODEL | calculated-column | Conditional "Inactive - " prefix on store name | IF(Status="A", name, "Inactive - " & name) | Forgetting the & concatenation or the IF return value |
| 100 | PREP | date-parsing | Parse "2018-12-31 at 08:59" into a date for hierarchy | Column by example starting 2018-12-31, type Date | Extracting only the year or using Whole Number breaks date hierarchy |
| 101 | MODEL | column-cardinality | Concatenate two unique IDs into one key | No: concatenated text key is larger and slower | Concatenated text key is large; keep one integer key |
| 102 | MODEL | PATH | Count levels from each employee to CEO | PATHLENGTH(PATH(EmployeeID, ParentEmployeeID)) | PATHLENGTH counts CEO as 1; subtract 1 for zero-based levels |
| 103 | MODEL | data-reduction | Reduce 550MB PBIX performance | Remove unused columns from tables | Visual-level changes and RLS do not shrink the dataset |
| 104 | PREP | split-column | Parse "2018-12-31 at 08:59" text | Split Logged column using "at" as delimiter | Whole-number year cannot provide a date hierarchy |
| 105 | MODEL | DISTINCTCOUNT | Count product categories with sales in period | DISTINCTCOUNT(category) filtered by Sales (answer partial) | COUNT on the product table counts categories with no sales |
| 106 | MODEL | data-reduction | Reduce 550MB PBIX performance (variant) | Remove unused columns from tables | Enabling visual interactions or RLS does not reduce size |
| 107 | MODEL | date-table | Model supports month, day, quarter analysis (exhibit missing) | Yes, No, Yes (exhibit missing) | Analysis by day/month/quarter needs a related date table at that grain |
| 108 | PREP | date-parsing | Date from logged timestamp for date hierarchy | Column by example starting 2018-12-31, type Date | Parsing only the year or using Whole Number breaks the hierarchy |
| 109 | MANAGE | RLS | Dynamic RLS working in Desktop and service | [Email Address] = USERPRINCIPALNAME() | USERNAME() returns DOMAIN\user, not the UPN |
| 110 | MANAGE | RLS | Manager sees own country; CFO blocked from HR ⚠disputed | HR: [Email]=USERPRINCIPALNAME(); Country: manager filter ⚠disputed | Source explanation garbled; CFO must not get a sales filter |
| 111 | PREP | query-refresh-errors | Reload fails with column not found | Column removed from source and renamed in source | A changed data type does not cause a missing-column error |
| 112 | MODEL | DISTINCTCOUNT | Count orders where order lines repeat order ID | DISTINCTCOUNT(Sales[Order ID]) | COUNT/COUNTROWS counts order lines, not orders |
| 113 | MODEL | calculated-table | Calculated table of integers -100 to 100 | GENERATESERIES(-100, 100, 1) | Use GENERATESERIES (start, end, step), not DATATABLE |
| 114 | MANAGE | RLS | Dynamic RLS, same scenario as Q109 (variant) | [Email Address] = USERPRINCIPALNAME() | USERNAME or Employee Name does not match a UPN |
| 115 | MODEL | calculated-table | Table of unique year/quarter/month combinations | SUMMARIZE over calendar columns | ADDCOLUMNS adds columns to all rows; it does not group |
| 116 | MODEL | calculated-table | One row per year with total sales | SUMMARIZE grouped by Date[Year] | Table without year grouping gives no per-year totals |
| 117 | PREP | unpivot | Reshape 2020 and 2021 columns into Month/Sales/Year | Unpivot the year columns | Pivot or Transpose do not turn year columns into rows |
| 118 | MODEL | semi-additive | Inventory: last recorded value in month | CALCULATE with LASTDATE | Summing daily inventory across the month overstates the value |
| 119 | MODEL | role-playing-dimension | Analyze sales over three dates at once | Yes: rename date table, calc copies, active relationships | Only one active relationship per table pair; use separate copies |
| 120 | MODEL | semi-additive | Count current employees at last date in period | COUNTROWS(Headcount) with LASTDATE | Plain COUNTROWS sums employees across all months |
| 121 | PREP | reference-queries | Create Sales Fact from All Sales; clear load on source | Answer not stated in source | Duplicating queries multiplies maintenance; reference instead |
| 122 | MODEL | time-intelligence | Sales one quarter before selected period ⚠disputed | CALCULATE with DATEADD(-1 QUARTER) ⚠disputed | Source says PARALLELPERIOD gives one month; it returns full prior quarter |
| 123 | VIZ | report-performance | Slow page with 25 visuals (15 AppSource) | Split visuals onto multiple pages | Iterators, RLS, or visual swaps do not reduce visuals per page |
| 124 | MODEL | set-functions | Result of INTERSECT on two tables | Rows of ProductsGroupA that match ProductsGroupB | INTERSECT returns rows from the first table, not the second |
| 125 | VIZ | fields-well | Where to place measures in a visual | Values | Measures go in Values, not Columns or Rows |
| 126 | MODEL | implicit-measures | Explicit vs implicit measures in a visual (exhibit) | Two explicit measures; summarization setting (exhibit) | Dragging a numeric column creates an implicit measure |
| 127 | MODEL | CALCULATE | Average salary of Sales department only | CALCULATE(AVERAGE(Salary), Department = "Sales") | Plain AVERAGE ignores the department filter |
| 128 | PREP | null-handling | Average freight per order with null freight ⚠disputed | Replace null Freight Amount with 0 ⚠disputed | Zero-filling nulls biases the average freight per order downward |
| 129 | PREP | merge-join-types | Merge Customers, Address, Country | Answer not stated in source | Inner join drops customers without addresses; left outer keeps them |
| 130 | PREP | query-performance | Slow refresh of shared Query1 referenced by three queries | Run Table.Buffer in Query1 | Duplicating Query1 repeats source reads; capacity increase costs more |
| 132 | MODEL | calculated-column | Score Qualification 0-1 as low/medium/high | Answer not stated in source (IF/SWITCH bands) | Band boundary values must fall into exactly one band |
| 133 | MODEL | storage-modes | Real-time data, minimal source load, no refresh | DirectQuery mode | Import needs refresh; push mode is not a fit here |
| 134 | MODEL | ranking | Rank items by Quantity, no skipped ranks, blank total | Answer not stated in source (RANKX, DENSE ties) | Standard RANK skips ranks after ties; DENSE does not |
| 135 | PREP | power-query-M | Expand Location column and hide CountryOrRegion (M) | Answer not stated in source | Expand the record column before dropping the hidden column |
| 137 | VIZ | performance-analyzer | Metrics showing execution duration | DAX query; Visual display | Server requests and Top Operations are not duration metrics |
| 138 | MANAGE | RLS | Assign Consultants RLS role to a resource (exhibit missing) | Group2 (exhibit missing) | RLS roles are assigned to users or security groups, not Teams |
| 139 | MODEL | time-intelligence | Rolling 31-day sales total ⚠disputed | CALCULATE with DATEADD(-30, DAY) ⚠disputed | DATEADD shifts dates; it is not a window; DATESBETWEEN fits |
| 140 | MANAGE | gateway | Which sources need an on-premises gateway | Source2 only (Azure SQL on VNet) | OneDrive Excel and public websites need no gateway |
| 141 | MODEL | column-cardinality | Reduce model size with text columns | Answer not stated in source | High-cardinality text (OrderID, ShippingAddress) inflates model size |
| 142 | PREP | data-reduction | Reduce data loaded to model | Group by/summarize; remove unnecessary columns and rows | Append or Merge does not reduce loaded data |
| 143 | MANAGE | gateway | Reduce gateway transfer for Import models | No: aggregations summarize after data already transferred | Aggregations speed queries; they do not cut refresh transfer |
| 144 | MANAGE | gateway | Reduce gateway transfer for Import models | No: automatic page refresh is DirectQuery-only | Page refresh is unrelated to Import-mode transfer |
| 145 | MANAGE | incremental-refresh | Reduce gateway transfer for Import models | Yes: incremental refresh loads only changed partitions | Incremental refresh is the Import fix for transfer volume |
| 146 | PREP | unpivot | Department/Stage/School matrix to flat rows | Unpivot School columns; rename to School and Score; group | Unpivoting Department and Stage instead of school columns |
| 147 | VIZ | visual-interactions | Bar selection shows share of monthly sales | Set column chart interaction to highlight | Filter removes unrelated data; highlight keeps context |
| 148 | VIZ | themes | Dashboard uses a custom report theme with minimal effort | Save ReportA theme; upload JSON theme to DashboardA | Creating a theme from DashboardA is not the route |
| 149 | VIZ | line-chart | Compare revenue and cost over time | Line chart | Donut or stacked area hides the two-series comparison |
| 150 | VIZ | key-influencers | Effect of Explain By vs Expand By fields | Add fields to Explain By; factor of 3 (0.30 vs 0.10) | Expand By fields do not add influencer factors |

### 2. Topic frequency

| Topic | Domain | Count |
|---|---|---|
| data-reduction | MODEL | 6 |
| time-intelligence | MODEL | 6 |
| column-cardinality | MODEL | 4 |
| RLS | MANAGE | 4 |
| data-reduction | PREP | 3 |
| unpivot | PREP | 3 |
| calculated-table | MODEL | 3 |
| calculated-column | MODEL | 3 |
| gateway | MANAGE | 3 |
| column-cardinality | PREP | 1 |
| role-playing-dimension | MODEL | 2 |
| semi-additive | MODEL | 2 |
| date-table | MODEL | 2 |
| date-parsing | PREP | 2 |
| split-column | PREP | 2 |
| query-performance | PREP | 2 |
| DISTINCTCOUNT | MODEL | 2 |
| TOPN | MODEL | 1 |
| data-category | MODEL | 1 |
| calendar-table | MODEL | 1 |
| ALLSELECTED | MODEL | 1 |
| PATH | MODEL | 1 |
| set-functions | MODEL | 1 |
| implicit-measures | MODEL | 1 |
| CALCULATE | MODEL | 1 |
| storage-modes | MODEL | 1 |
| ranking | MODEL | 1 |
| incremental-refresh | MANAGE | 1 |
| query-refresh-errors | PREP | 1 |
| reference-queries | PREP | 1 |
| null-handling | PREP | 1 |
| merge-join-types | PREP | 1 |
| power-query-M | PREP | 1 |
| report-performance | VIZ | 1 |
| fields-well | VIZ | 1 |
| performance-analyzer | VIZ | 1 |
| visual-interactions | VIZ | 1 |
| themes | VIZ | 1 |
| line-chart | VIZ | 1 |
| key-influencers | VIZ | 1 |

### 3. Top 10 recurring traps

- **Multiple date keys**: one active relationship per table pair. Use role-playing copies of the date table, or USERELATIONSHIP for inactive relationships only (Q84, Q119).
- **RLS identity**: USERNAME() returns DOMAIN\user; USERPRINCIPALNAME() returns the UPN. Match the UPN or email column so the filter works in Desktop and the service (Q109, Q114).
- **Data reduction**: remove unused columns and unneeded rows in Power Query. Never remove columns used by visuals or by distinct counts (Q80, Q87, Q88, Q95, Q98, Q103, Q106, Q142).
- **Cardinality**: unique or high-cardinality columns inflate the model. Split DateTime into Date and Time, and keep one integer key rather than concatenated text keys (Q92, Q93, Q101, Q141).
- **Count vs distinct**: COUNT and COUNTROWS count rows (order lines); DISTINCTCOUNT counts orders (Q105, Q112).
- **Semi-additive**: for inventory and headcount snapshots, use the last date in the period (LASTDATE or LASTNONBLANK), not a SUM or COUNTROWS across all dates (Q118, Q120).
- **Prior periods**: SAMEPERIODLASTYEAR returns the same period last year; PREVIOUSYEAR returns the whole prior year; DATEADD shifts the selected dates; PARALLELPERIOD returns the full prior period (Q90, Q122).
- **Gateway**: only on-premises sources need a gateway. Aggregations and automatic page refresh do not reduce gateway transfer; incremental refresh does (Q140, Q143, Q144, Q145).
- **Unpivot direction**: unpivot the value columns (years, schools), not the key or attribute columns. Pivot and Transpose do not reshape years into rows (Q76, Q117, Q146).
- **Date text parsing**: changing type on raw text does not parse it. Use delimiter split or column by example, and a whole-number year cannot drive a date hierarchy (Q82, Q100, Q104, Q108).

### 4. Notable DAX / M snippets

```dax
-- Q79: top N by measure, DESC returns highest values
TOPN(8, Product, [Total Sales], DESC)
```
Syntax in source: TOPN(n, table, orderBy, [order]); DESC for highest first.

```dax
-- Q85: year-to-date up to selected date
TOTALYTD([Total Sales], 'Date'[Date])
```
Second argument must be the date column, not a measure.

```dax
-- Q90: same period last year (March 2022 selected returns March 2021)
CALCULATE(SUM(Sales[Sales]), SAMEPERIODLASTYEAR(dimDate[Date]))
```
PREVIOUSYEAR would return all of 2021.

```dax
-- Q112: count orders, not order lines
DISTINCTCOUNT('Sales'[Order ID])
```
COUNT or COUNTROWS would count order lines.

```dax
-- Q113: integers -100 to 100 as a calculated table
Numbers = GENERATESERIES(-100, 100, 1)
```

```dax
-- Q109: dynamic RLS filter on Employees
[Email Address] = USERPRINCIPALNAME()
```
USERNAME() returns DOMAIN\user, which does not match an email.

```dax
-- Q118 / Q120: semi-additive pattern (last date in period)
CALCULATE(COUNTROWS(Headcount), LASTDATE('Date'[Date]))
```
Shape taken from source answer (Count Rows + LastDate); the CALCULATE wrapper is the standard form.

```dax
-- Q99: conditional prefix on store name (constructed from the stated IF and & answer)
Active Store Name = IF(Stores[Status] = "A", Stores[Store Name], "Inactive - " & Stores[Store Name])
```

```dax
-- Q78: prior-quarter relative change (constructed from the stated CALCULATE, DATEADD, DIVIDE answer)
Rel Change = DIVIDE([Sales] - [Prev Q Sales], [Prev Q Sales])
-- where Prev Q Sales = CALCULATE([Sales], DATEADD('Date'[Date], -1, QUARTER))
```

```dax
-- Q139 correction (not the source answer): true 31-day window
CALCULATE(SUM(Sales[SalesAmount]), DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -31, DAY))
```
Source answer DATEADD(-30 DAY) returns shifted dates, not a 31-day window. DATESBETWEEN(Max-30, Max) is also valid.

### 5. Stats

- Total questions seen (Q76-Q150): 75. Out-of-scope labels in the slice (Q74, Q75, Q151) were not counted.
- Classified: 73.
- Unclassifiable: 2 (Q131, Q136; exhibit-only stems with no question text).
- Disputed (⚠): 5 (Q86, Q110, Q122, Q128, Q139).
- Answer not stated in source (blank answer block): Q121, Q129, Q132, Q134, Q135, Q141.
