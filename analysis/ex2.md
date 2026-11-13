# PL-300 Practice Test-2 (source: Test_pl_300_-_EX_2-1.txt, Q1-Q34)

## 1. Question table

| Q | Domain | Topic | Concept tested | Correct answer gist | Trap / common mistake |
|---|---|---|---|---|---|
| 1 | VIZ | reference-lines | Median reference line on sorted column values | No: constant line at 300 ignores distribution | Fixed 300 is range midpoint, not median (280) |
| 2 | VIZ | reference-lines | Average line is not a median line | No: average (336) differs from median (280) | Mean and median are different; average line won't split above/below median |
| 3 | VIZ | reference-lines | Percentile line at 50% equals the median | Yes: 50th percentile line passes through median | Assuming percentile lines cannot represent the median |
| 4 | VIZ | reference-lines | Median line built from a measure | Yes: median line on Total Marks works | Not a trap; constant and average lines are the wrong types |
| 5 | PREP | split-column | Keep date and time when splitting a text timestamp | Split by first 11 characters | Extract drops time; Date/Time conversion fails on the "at" token |
| 6 | MODEL | TOPN | Sum of top three transactions per product | CALCULATE(SUM) with TOPN(3) sorted on Sales Amount | Plain SUM ignores the top-N restriction; TOPN needs descending sort |
| 7 | MODEL | cross-filter-direction | Territory-to-Geo filtering through a single-direction relationship | Area 1 Many-to-one, Area 2 Single | Bidirectional unnecessary; Territory key is unique, so not many-to-many |
| 8 | PREP | replace-values | M Table.ReplaceValue with null, replacer and column list | Table.ReplaceValue(Orders,null,0,Replacer.ReplaceValue,{"Order Value"}) | Wrong argument order or missing replacer and column list breaks the step |
| 9 | VIZ | chart-types | Part-to-whole composition as percentages over time | 100% stacked area chart | Stacked area shows raw values, not percentages |
| 10 | MANAGE | sensitivity-labels | Protect exported PDF/PowerPoint content for vendors | Sensitivity labels with encryption settings | RLS and OLS only restrict in-service access; DLP cannot block exports |
| 11 | MODEL | row-context | Lowest per-month order quantity with MINX | MINX over measure, or MINX with CALCULATE(MAX(column)) | SUM inside MINX lacks context transition; MIN cannot take a measure |
| 12 | VIZ | mobile-layout | Where a portrait mobile report view can be created | Both Power BI Desktop and service | Assuming only one environment supports portrait mobile layout |
| 13 | VIZ | dashboards-tiles | Surface an unlisted YouTube video for dashboard viewers | Video tile in the Power BI dashboard | Video tile does not exist on reports; web content tile works but is inferior |
| 14 | MODEL | time-intelligence | YoY YTD using TOTALYTD and SAMEPERIODLASTYEAR | Yes: solution meets goal | None; standard pattern works |
| 15 | MODEL | time-intelligence | Prior-year shift using DATEADD by -4 quarters | Yes: four quarters back equals one year | Assuming only year-based functions can shift to prior year |
| 16 | MODEL | time-intelligence | Prior-year YTD end date using LASTDATE minus 365 | No: -365 breaks in leap year 2012 | Fixed day offsets fail on leap years; use SAMEPERIODLASTYEAR |
| 17 | MODEL | time-intelligence | Prior-year YTD using DATESINPERIOD from MAX date | No: DATESINPERIOD window misaligns with TOTALYTD | DATESINPERIOD window (rolling year) does not match YTD period |
| 18 | PREP | data-profiling | Percentage of unique vs non-unique values in a column | Column distribution (tooltip shows percent unique) | Column profile gives counts, not percentages; Column quality shows Valid/Error |
| 19 | PREP | json-import | Flatten a list of records containing a nested list | Convert to Table, Expand Column, Expand Lists to New Rows, Expand Records to New Columns | Expanding records before lists, or skipping Convert to Table, breaks flattening |
| 20 | VIZ | mobile-layout | Steps to build a mobile dashboard layout (choose three, ordered) | Edit to mobile, hide sales/profit tiles, move tiles | "Add mobile layout" and "save layout" are not real steps; hide before move |
| 21 | VIZ | KPI-visual | Why KPI goal value is blank | Trend axis quarterly but goal measure yearly: granularity mismatch | Blank goal comes from granularity mismatch, not a DAX syntax error |
| 22 | VIZ | tooltips | Show extra aggregates on column hover | Add fields to the Tooltips well | Drill down and drillthrough need a click; drill down needs a hierarchy |
| 23 | PREP | unpivot | Reshape matrix to Branch Office and Product rows | Promote headers, transpose, promote, unpivot others, rename | Pivot, unpivot and transpose drop headers; demote headers first |
| 24 | MANAGE | alerts | Valid data-alert statements (choose two) | PPU alerts work on any workspace; alerts are private to creator | Dashboard owner cannot see colleague's alerts; push-dataset tiles can alert |
| 25 | MODEL | model-size | Hide card PIN while reducing model size | Remove the column in Power Query | Hiding, masking or OLS keep the column loaded in the model |
| 26 | MODEL | auto-date-time | Show two date-based amounts in one table without a Date table | No: auto date tables are per column, no shared date slicer | Auto date/time cannot share one date table across two date columns |
| 27 | PREP | group-by | Keep product and units of biggest order per category | Group by All rows, add record of max order, expand Product and Units | Max operation loses product; All rows yields a table, not a record |
| 28 | MODEL | time-intelligence | QTD with marked Date table and Order Date relationship | Yes: date-type relationship plus marked date table works | Filters are overridden only when relationship is date-typed or table marked |
| 29 | MODEL | time-intelligence | QTD with date-type relationship, Date table not marked | Yes: date-type relationship alone is sufficient | Assuming marking is always required for DATESQTD |
| 30 | MODEL | time-intelligence | QTD with integer key and marked Date table | Yes: marked date table makes integer key work | Assuming integer keys disable time intelligence once marked |
| 31 | MODEL | time-intelligence | QTD with integer key, Date table not marked | No: Year, Quarter and Month filters persist, showing one month | Unmarked integer-key relationship does not override date filters |
| 32 | MODEL | time-intelligence | QTD with REMOVEFILTERS on Date table, no marking | Yes: REMOVEFILTERS clears context before DATESQTD | Assuming an unmarked model cannot do QTD; REMOVEFILTERS fixes it |
| 33 | PREP | dataflows | Reusable standard dimension tables across reports | Dataflows | CDM, shared datasets and certification do not create reusable standard tables |
| 34 | VIZ | key-influencers | Meaning of 2.57x in a key influencers visual | Ratio: % consumers giving low rating vs % other roles | Comparing against all roles instead of other roles |

## 2. Topic frequency

| Topic | Domain | Count |
|---|---|---|
| time-intelligence | MODEL | 9 |
| reference-lines | VIZ | 4 |
| mobile-layout | VIZ | 2 |
| TOPN | MODEL | 1 |
| alerts | MANAGE | 1 |
| auto-date-time | MODEL | 1 |
| chart-types | VIZ | 1 |
| cross-filter-direction | MODEL | 1 |
| dashboards-tiles | VIZ | 1 |
| data-profiling | PREP | 1 |
| dataflows | PREP | 1 |
| group-by | PREP | 1 |
| json-import | PREP | 1 |
| KPI-visual | VIZ | 1 |
| key-influencers | VIZ | 1 |
| model-size | MODEL | 1 |
| replace-values | PREP | 1 |
| row-context | MODEL | 1 |
| sensitivity-labels | MANAGE | 1 |
| split-column | PREP | 1 |
| tooltips | VIZ | 1 |
| unpivot | PREP | 1 |

## 3. Top 10 recurring traps

1. **Constant or average line for a median** - Median needs a median or 50th-percentile line; constant (fixed value) and average lines do not split by median.
2. **Fixed day offsets for prior year** - `LASTDATE(...)-365` breaks in leap years; use SAMEPERIODLASTYEAR, DATEADD or PREVIOUSYEAR.
3. **Relying on an unmarked date relationship for QTD/YTD** - Filter override needs a date-typed relationship or a marked Date table; otherwise add REMOVEFILTERS.
4. **Bidirectional cross-filter by default** - Use single direction from the one-side unless a specific case needs both.
5. **Auto date/time for multiple date roles** - Auto tables are per column; use one Date table with inactive relationships for role-playing dates.
6. **Hiding columns to shrink model** - Hide, mask and OLS keep data loaded; remove columns in Power Query to reduce size.
7. **Tooltip vs drill vs drillthrough** - Tooltips show extra values on hover without click; drill down needs a hierarchy and a click; drillthrough navigates to another page.
8. **Pivot/unpivot/transpose losing headers** - Demote headers to the first row first, then restore them after the operations.
9. **Granularity mismatch in KPI** - Trend axis and goal measure must share granularity or the goal shows blank.
10. **RLS/OLS for exported content** - RLS and OLS only restrict in-service access; sensitivity labels with encryption protect exported PDF/PowerPoint.

## 4. Notable DAX / M snippets

1. `Revenue Last Year YTD = CALCULATE ( [Revenue YTD], SAMEPERIODLASTYEAR ( 'Date'[Date] ) )` - Leap-year-safe prior-year shift (Q14).
2. `Revenue Last Year YTD = CALCULATE ( [Revenue YTD], DATEADD ( 'Date'[Date], -4, QUARTER ) )` - Four quarters back equals one year (Q15).
3. `Revenue YTD = TOTALYTD ( [Revenue], 'Date'[Date] )` - YTD base measure used by the YoY pattern (Q14).
4. `Revenue Last Year YTD = CALCULATE ( [Revenue YTD], DATESBETWEEN ( 'Date'[Date], STARTOFYEAR ( PREVIOUSYEAR ( 'Date'[Date] ) ), LASTDATE ( SAMEPERIODLASTYEAR ( 'Date'[Date] ) ) ) )` - Correct but complex leap-year-safe fix (Q16).
5. `YOY YTD Total Revenue = DIVIDE ( [Revenue YTD] - [Revenue Last Year YTD], [Revenue Last Year YTD] )` - YoY percentage pattern (Q14, Q15).
6. `Sales QTD = CALCULATE ( [Sales Amount], DATESQTD ( 'Date'[Date] ) )` - QTD works only with date relationship or marked Date table (Q28, Q30).
7. `Sales QTD = CALCULATE ( [Sales Amount], DATESQTD ( 'Date'[Date] ), REMOVEFILTERS ( 'Date' ) )` - Works on an unmarked model (Q32).
8. `Lowest Order Quantity value = MINX ( 'Purchase', [Total Order Quantity] )` - Measure in iterator gets context transition (Q11).
9. `Lowest Order Quantity value = MINX ( 'Purchase', CALCULATE ( MAX ( 'Purchase'[Ordered Quantity] ) ) )` - Explicit CALCULATE forces row-level evaluation (Q11).
10. `=Table.ReplaceValue(Orders,null,0,Replacer.ReplaceValue,{"Order Value"})` - M null replacement with column list (Q8).

Note: Q16 `LASTDATE('Date'[Date])-365` and Q17 `DATESINPERIOD(...)` appear in the source as incorrect patterns and are deliberately omitted above.

## 5. Stats

- Total questions seen: 34 (Q1-Q34)
- Classified: 34
- Unclassifiable: 0
- Disputed: 0
- Source note (not flagged as disputed): Q34 explanation computes 14.929 / 5.776 = 2.58, while the stated figure is 2.57. The correct option stands. Q7 explanation gives two filter directions (Geo to Reseller vs Territory to Geo); the answer is unaffected.
