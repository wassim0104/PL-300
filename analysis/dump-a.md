# PL-300 dump.txt, lines 1-1800: questions 1-75

Source: /workspace/jamel/pl300/md/dump.txt (lines 1-1800). Questions 76-77 (beyond the cap) were not classified.
Numbering note: the "Question: N" labels in the source are misplaced in places (sometimes mid-explanation or mid-stem). Numbers were assigned by sequential stem order, which matches all labels 1-75.

## 1. Question table

| Q | Domain | Topic | Concept tested | Correct answer gist | Trap / common mistake |
|---|---|---|---|---|---|
| 1 | MODEL | storage-modes | Storage mode per table from refresh and performance needs | Customer and Date Dual; Sales DirectQuery; SalesAggregate Import | Import for Sales ignores near-real-time need; dimensions need Dual for mixed-mode joins |
| 2 | PREP | data-sources | Connector for Power Apps data hosted in Teams | Dataverse | Teams Personal Analytics is beta; SQL Server is not the Power Apps store |
| 3 | PREP | data-sources | Reuse published dataset with measures, minimal effort | Power BI dataset (live connection) | Rebuilding from SharePoint Excel files loses the existing measures |
| 4 | PREP | power-query-merge | One row per customer with address columns | Merge Customer and Address | Append, group or transpose do not bring address columns onto customers |
| 5 | PREP | append-queries | Combine two Azure SQL tables, minimize model size | Append Queries as New; disable load on intermediate query | Merging instead of appending; leaving intermediates loaded |
| 6 | PREP | power-query-merge | Merge three product tables, keep all products | Inner (Product to SubCategory); Left outer (SubCategory to Category) | Left outer on every join; the always-present link needs inner |
| 7 | MODEL | star-schema | Flatten header into detail for faster visuals ⚠disputed | Merge Orders and Order Line Items | Adding DAX calculated columns instead of flattening the header-detail pair |
| 8 | PREP | data-sources | Load only manufacturing Excel files from a SharePoint library | SharePoint folder connector; Transform; filter folder path | SharePoint list connector cannot read Excel file contents |
| 9 | PREP | append-queries | Combine product lists from two tables, no duplicates | Import Excel; Append Table2 to Table1; Remove Duplicates | Removing duplicates before appending leaves duplicates from the second table |
| 10 | PREP | split-column | Make "2018-12-31 at 08:59" usable with date hierarchy | Split Logged by delimiter "at" | Changing type to Date fails on the non-standard text |
| 11 | PREP | data-sources | Refreshable OneDrive Excel in powerbi.com without gateway | Web and SharePoint folder connectors | Excel Workbook or Folder connectors need a gateway for cloud refresh |
| 12 | PREP | data-profiling | Read distinct count from column profile | 69 distinct values (Box 2 unexplained) | Distinct counts all values; unique counts only values appearing once |
| 13 | PREP | power-query-merge | Combine Products and Categories into one table | Merge queries; disable load on Categories | Appending adds rows; leaving the helper query loaded |
| 14 | MODEL | storage-modes | Data visible within five minutes of each update | DirectQuery connectivity | Import relies on scheduled refresh and cannot show five-minute-fresh data |
| 15 | PREP | folder-connector | Expose CSV file metadata without storing data | Folder connector; remove Content; expand Attributes | Combining the files loads their data into the model |
| 16 | MANAGE | refresh | Daily dataflow refresh with minimal processing and fast visuals | Import mode with daily scheduled refresh | DirectQuery dataflow connection pushes load onto every visual query |
| 17 | MANAGE | gateway | Sequence to refresh an on-premises SQL dataset | Configure gateway; add data source; add owner; schedule refresh | Skipping the gateway; refresh fails for on-premises sources |
| 18 | PREP | odbc | Connect to a source with no dedicated connector | ODBC (DSN or connection string) | OLE DB and OData do not cover arbitrary third-party drivers |
| 19 | PREP | unpivot | Turn month columns into rows for year and month slicing | Select month columns; Unpivot Other Columns; rename Attribute and Value | Unpivoting the selected month columns instead of the other columns |
| 20 | PREP | data-sources | Azure SQL connection setting (exhibit missing) | 10 minutes; only tables containing data | Assuming the default without the exhibit; explanation is terse |
| 21 | MODEL | parameters | One PBIX for dev, staging and prod without pipelines | Single text parameter selects the database | Separate PBIX per stage, or deployment pipelines, are excluded |
| 22 | MODEL | star-schema | Unique country list for a dimension | Delete City column; remove duplicates on Country | Removing duplicates on City instead of Country |
| 23 | PREP | error-handling | Keep all rows; replace discount errors with 0.05 (drag order) | Select discount; Replace Errors 0.05; change type to Decimal | Remove Errors deletes rows instead of replacing values |
| 24 | PREP | data-types | Custom column error from mismatched data types | Convert operands to matching data types | Custom column arithmetic needs compatible operand types |
| 25 | PREP | data-sources | Causes of "Datasource.Error: Could not find file" | No permission to the file; file was moved | Privacy level and file locks are not the listed causes |
| 26 | PREP | error-handling | Replace discount errors, keep rows, minimal effort | Select Replace Errors | Remove or Keep Errors drop rows; Query Errors edit works but costs effort |
| 27 | PREP | split-column | Split Logged by "at" for a date hierarchy | Split by delimiter "at" | Changing Logged straight to Date fails on the non-standard format |
| 28 | MODEL | storage-modes | Storage modes for report file and dataset built on OneDrive Excel ⚠disputed | Report Import; dataset DirectQuery | Excel workbooks are not DirectQuery sources; the dataset should be Import |
| 29 | PREP | power-query-merge | Combine related Order Header and Order Details, unique columns | Merge queries | Append stacks rows; merge joins columns from related tables |
| 30 | PREP | split-column | Split Logged by "at" (CSV variant of Q10) | Split by delimiter "at" | Changing type to Date fails on the "at" text |
| 31 | PREP | folder-connector | Metadata of 50 JSON files without data | Folder connector; delete Content column | Keeping Content loads the file data |
| 32 | PREP | data-sources | Update Excel source path after the file moved | Data source settings; formula bar; Advanced Editor | Dataset credentials in the service do not change the file path |
| 33 | PREP | privacy-levels | Set privacy levels per data source (exhibit missing) | Answer not stated in source | Privacy levels are per data source and affect combining data |
| 34 | PREP | data-sources | Azure DevOps Analytics views, cloud data | Azure DevOps (Boards only) | Azure DevOps Server connector is for on-premises servers |
| 35 | PREP | data-transformation | Table with headers on row 3 (exhibit missing) | Answer not stated in source | Promote headers only after removing the rows above them |
| 36 | PREP | data-cleaning | Fix errors in case-sensitive DirectQuery column by implicit conversion | No | Implicit type conversion does not normalize casing |
| 37 | PREP | data-cleaning | Fix errors by changing the semantic model mode | No | Changing storage mode does not alter source values |
| 38 | PREP | data-cleaning | Fix case-sensitive errors by normalizing casing | Yes | Normalize casing in the source or Power Query, not in the mode |
| 39 | PREP | data-cleaning | Add index key and normalize casing in source | Yes | An index key alone does not fix the casing mismatch |
| 40 | PREP | data-sources | Refreshable OneDrive Excel in powerbi.com (repeat of Q11) | Web and SharePoint folder connectors | Excel Workbook or Folder connectors need a gateway |
| 41 | PREP | date-transform | Keep only the year of a Date column, minimal effort | Transform column to year | Splitting by delimiter or number of characters adds steps |
| 42 | MODEL | star-schema | Fact table and surrogate key in a star schema (exhibit missing) | Answer not stated in source | Fact holds measures and foreign keys; surrogate key sits on the dimension |
| 43 | PREP | data-profiling | Frequency of string lengths without growing the model | Column profile: group by text length | DAX or Power Query calculated columns increase model size |
| 44 | MANAGE | apps | HR managers see own region, cannot change layouts ⚠disputed | Publish as app and grant access | Workspace members can edit layouts; RLS restricts rows, not layout |
| 45 | MANAGE | workspace-roles | Let a user add workspace members, least privilege | Member | Admin is broader; Contributor cannot add members |
| 46 | PREP | query-load | Reduce query load time without changing analysis | Remove Canceled rows; split Sales_Date into date and time | Changing a numeric type does not reduce load; drop rows instead |
| 47 | MODEL | relationships-cardinality | Link Customer and Transaction tables | One-to-many from Customer to Transaction | Customer is the primary-key side, so it is the one side |
| 48 | PREP | query-load | Hide email content from readers and minimize model | Remove Subject and Body columns during import | Hiding columns still loads the data into the model |
| 49 | VIZ | analyze-in-excel | Make a dataset table an Excel organizational data type | Row label Name; Key ID; featured table Yes | Key must be a unique row identifier, not the label |
| 50 | MANAGE | RLS | Managers see own country, minimal RLS roles | One USERNAME-based role on Manager_Email; security filter both directions | One role per country multiplies roles unnecessarily |
| 51 | MODEL | relationships-cardinality | Cross filter direction and star schema classification (exhibit missing) | Cross filter direction; star schema | Assume referential integrity applies only to DirectQuery |
| 52 | MODEL | time-intelligence | Same-month prior-year total sales | CALCULATE with SAMEPERIODLASTYEAR on Date[Date] | Time intelligence needs a true date column |
| 53 | MANAGE | RLS | Sequence to restrict region rows with roles | Import; create role; publish; assign users in service | Role members are assigned in the service, not in Desktop |
| 54 | MODEL | denormalization | Flatten region and manager tables, only managers with regions | Three inner merges | Left merges keep managers who have no sales region |
| 55 | VIZ | report-performance | Slow report with 25 visuals on one page | Split visuals across multiple pages | AppSource visuals or iterator measures are not the fix |
| 56 | MODEL | model-size | Basket analysis: columns to remove (exhibit missing) | Yes / No / No per explanation | Keeping columns the basket analysis does not use |
| 57 | MANAGE | RLS | User in two RLS roles, what rows are visible | Union: Kentucky OR 2020 | Multiple roles are additive, not an intersection |
| 58 | PREP | query-folding | Sample 100M-row table by a filter step after loading | No | A filter step after import still loads the full table first |
| 59 | PREP | native-query | Sample by a DAX FILTER expression | No | DAX runs on the imported model; filter in SQL |
| 60 | PREP | native-query | Sample by a WHERE clause in the SQL statement | Yes | Native SQL filters rows at the source before import |
| 61 | PREP | unpivot | Measures over time and year-over-year from Excel | Use first row as header; unpivot other columns; rename Attribute to Year; type Date | Unpivoting before promoting headers gives wrong column names |
| 62 | MODEL | model-size | Optimize employee_id and employee_photo, relationship exists | Hide employee_id; delete employee_photo | Deleting employee_id breaks the required relationship |
| 63 | MODEL | star-schema | Teacher name and period number placement in star schema | Teacher dimension; Class dimension | Static attributes on the attendance fact repeat per student |
| 64 | MANAGE | RLS | Users see only their own department | RLS role per department with membership | Slicers filter visuals but do not secure the data |
| 65 | MANAGE | RLS | Bidirectional cross-filtering that honors RLS | Active relationship; Apply security filter in both directions | Inactive relationships do not carry the RLS setting |
| 66 | PREP | data-profiling | Row count of nullable column and Summarize result (exhibit) | 75 rows (nullable); reduce (one summed row) | Summarize collapses rows; repeats do not show in simple tables |
| 67 | MODEL | time-intelligence | DISTINCTCOUNT measure with LASTDATE | No / No / Yes (last day of filter context only) | LASTDATE returns only the last date in context |
| 68 | MODEL | aggregations | Daily impressions by campaign and site, minimal size | One-to-many relationships; group Impressions in Power Query | Calculated tables and extra measures add model size |
| 69 | MODEL | relationships-cardinality | ProductCategory to Products relationship | One-to-many, single direction | Bidirectional filtering hurts performance and causes ambiguity |
| 70 | MODEL | model-size | Shrink 25M-row inventory model without losing information | Remove redundant MovementDate | Changing types (e.g. to Integer) loses precision |
| 71 | MODEL | time-intelligence | YTD sales for same date previous year ⚠disputed | CALCULATE, SUM, DATESBETWEEN (per exhibit) | Explanation says SAMEPERIODLASTYEAR takes one argument; reasoning contradictory |
| 72 | PREP | native-query | Sample 100M-row Order table with a report-level filter | No | Report filters affect visuals, not the imported rows |
| 73 | MODEL | role-playing-dimension | Three date keys with inactive relationships only | No | Inactive relationships need USERELATIONSHIP or role copies |
| 74 | MODEL | role-playing-dimension | Rename date query; reference it for Order and Delivery dates | Yes | Referenced copies work but perform worse than calculated tables |
| 75 | MODEL | role-playing-dimension | Rename date table; DAX calculated tables for other roles | Yes | Refactor per methodology: calculated-table copy per role |

## 2. Topic frequency

| Topic | Domain | Count |
|---|---|---|
| data-sources | PREP | 9 |
| RLS | MANAGE | 5 |
| power-query-merge | PREP | 4 |
| star-schema | MODEL | 4 |
| data-cleaning | PREP | 4 |
| split-column | PREP | 3 |
| storage-modes | MODEL | 3 |
| data-profiling | PREP | 3 |
| relationships-cardinality | MODEL | 3 |
| time-intelligence | MODEL | 3 |
| model-size | MODEL | 3 |
| native-query | PREP | 3 |
| role-playing-dimension | MODEL | 3 |
| append-queries | PREP | 2 |
| folder-connector | PREP | 2 |
| unpivot | PREP | 2 |
| error-handling | PREP | 2 |
| query-load | PREP | 2 |
| refresh | MANAGE | 1 |
| gateway | MANAGE | 1 |
| odbc | PREP | 1 |
| parameters | MODEL | 1 |
| data-types | PREP | 1 |
| privacy-levels | PREP | 1 |
| data-transformation | PREP | 1 |
| date-transform | PREP | 1 |
| apps | MANAGE | 1 |
| workspace-roles | MANAGE | 1 |
| analyze-in-excel | VIZ | 1 |
| denormalization | MODEL | 1 |
| report-performance | VIZ | 1 |
| query-folding | PREP | 1 |
| aggregations | MODEL | 1 |

## 3. Top 10 recurring traps

- **Merge vs append**: merge joins columns from related tables; append stacks rows from same-shaped tables (Q4, Q5, Q9, Q29).
- **Excel from OneDrive or SharePoint in the service**: use Web or SharePoint folder connectors; Excel Workbook and Folder need a gateway (Q11, Q40).
- **Replace vs Remove Errors**: Remove Errors deletes rows; Replace Errors keeps them with a substitute value (Q23, Q26).
- **Inactive relationships**: they are not used automatically; use USERELATIONSHIP or a role-playing table copy (Q73, Q74, Q75).
- **RLS roles are additive**: a user in several roles sees the union of their filters (Q57).
- **RLS does not control layout**: restricting layout needs an app; workspace members can edit reports (Q44).
- **Sampling large sources**: filter in the native SQL WHERE clause; a Power Query filter step, DAX FILTER or report filter still loads or affects the full data (Q58, Q59, Q72).
- **Intermediate queries and unused columns**: disable load on helper queries and drop unneeded columns to shrink the model (Q5, Q13, Q48, Q70).
- **Text datetimes**: split the text before changing type to Date; "2018-12-31 at 08:59" cannot convert directly (Q10, Q27, Q30).
- **Calculated columns and tables increase model size**: do the transformation in Power Query or the source instead (Q43, Q68).

## 4. Notable DAX / M snippets

- `CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))`: same month, prior year; the argument must be a date column (Q52).
- `Accounts := CALCULATE(DISTINCTCOUNT(Balances[AccountID]), LASTDATE('Date'[Date]))`: counts accounts on the last date of the filter context (Q67).
- `CALCULATE(SUM(Sales[Sales Amount]), 'Sales'[OrderDateKey] = MAX('Sales'[OrderDateKey]))`: total on the last selected date (Q71 example).
- `Country[Manager_Email] = USERNAME()`: RLS filter on a manager's email; `USERPRINCIPALNAME()` is also valid (Q50).
- `City[State Province] = "Kentucky"` and `Date[Calendar Year] = 2020`: two RLS roles; a user in both sees the OR of the rows (Q57).
- `FALSE()` / `TRUE()` as rule expressions: FALSE returns no rows, TRUE returns all rows; both are additive across roles (Q57, Microsoft example).
- `Departure Airport = 'Arrival Airport'`: calculated-table copy of a role-playing dimension (Q75).

## 5. Stats

- Total questions seen (1-75 in range): 75
- Classified: 75
- Unclassifiable: 0
- Disputed (marked ⚠): 4 (Q7, Q28, Q44, Q71)
- Questions with no stated answer in source (exhibit missing or blank): Q20 (partial), Q33, Q35, Q42
