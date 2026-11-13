# dump-e: PL-300 questions 261-301 (dump.txt lines 5550-8776)

Numbering note: "Question: N" labels in this slice sit at page breaks and are sometimes split from their stems. Numbers were assigned by label order and stem position. Case-study questions carry the label just before their stem; standalone questions carry it just after. Q259 is an orphan label (no stem) and Q258/Q260 fall outside this range. Q261 is the PII dashboard question (its answer block follows the 261 label).

## Case study notes (one per scenario)

- **Litware-A (Q272, 273, 281, 295, 296, 297):** Online retailer on Azure SQL e-commerce data, Azure AD sign-in. Sales/Date/Weekly_Returns tables, sales-manager RLS, 5-minute latency, negative and missing sales amounts must not count.
- **Litware-B (Q282, 283, 284, 285):** Litware variant ("Power BI dashboards", SQL Server, Excel, text files). Same sales-by-region, sales-manager RLS, transaction count and negative-amount requirements.
- **Northwind Traders (Q274, 275, 276, 286-294):** Specialty food importer. Azure SQL (Orders, Order Details, Products, Sales Employees) plus SharePoint Customer Details. Top Products, Top Customers, On-Time Shipping reports; RLS on Sales Employees email; 7 AM refresh; alert at 5% late orders.
- **Contoso (Q277-280, 298-301):** Quarterly board pack from balance sheet, P&L and product catalog. Analysts restricted by business unit and balance-sheet use; board receives an app on powerbi.com; 5 AM refresh; Azure-hosted source.

## 1. Question table

| Q | Domain | Topic | Concept tested | Correct answer gist | Trap / common mistake |
|---|---|---|---|---|---|
| 261 | MANAGE | sensitivity-labels | Flag PII dashboards for browsers with minimal config | Microsoft Information Protection sensitivity labels | Choosing tiles or comments; labels are the built-in visibility mechanism |
| 262 | MANAGE | dataset-permissions | Build permission enables Analyze in Excel and XMLA | Analyze in Excel; grant Build permission | Confusing Reshare with Build; Reshare alone does not enable Excel analysis |
| 263 | MANAGE | sharing | Share reports and dashboard to one AAD group | Yes: group share meets read-access goal | Sharing to individuals is impractical above 100 users; use a group |
| 264 | MODEL | calculated-columns | Flag duplicate emails with COUNTROWS, CALCULATE, ALL | CALCULATE + COUNTROWS + ALL (order per explanation) | Forgetting ALL leaves the count scoped to the current row |
| 265 | MANAGE | gateway | Ordered steps so scheduled refresh reaches on-prem SQL | Install gateway, add SQL data source, configure refresh (order not in text) | Publishing before the gateway and data source exist breaks refresh |
| 266 | MANAGE | analyze-in-excel | Excel analysis via export-data setting with Build | Export data = Summarized data, layout and underlying data ⚠disputed | Export None blocks all exports; "only by dataset" wording conflicts with answer |
| 267 | MANAGE | workspace-roles | Let User1 build reports on HR dataset without managing workspace | Build on HR dataset; Contributor role on WorkspaceB | Member or Admin lets the user add users, violating the requirement |
| 268 | MANAGE | shared-datasets | Two ways to build reports on a dataset you do not own | Service: new report from published dataset; Desktop: connect to shared dataset | Dataflows, Dataverse and DirectQuery dataflows do not grant dataset access |
| 269 | MANAGE | gateway | Why the gateway cannot be selected for scheduled refresh | Server name in PBIX must match the gateway data source | Blaming credentials or SSO when the connection details do not match |
| 270 | MANAGE | gateway | Keep on-prem SSAS tabular data current in the service | On-premises data gateway | Scheduled refresh does not cover a live connection to on-prem SSAS |
| 271 | MANAGE | dataset-permissions | Permissions on a semantic model (exhibit missing) | Not recoverable: exhibit and answer absent from text | Verify against the source exhibit; answer not in text |
| 272 | MODEL | relationships-cardinality | Join keys need matching data types before relating | Change Sales[region_id] to Whole Number | Adding a measure or changing sales_id does not enable the relationship |
| 273 | MODEL | storage-modes | Connection for SQL data where users lack DB accounts | DirectQuery using a database credential | End-user credentials would force every user to exist in the database |
| 274 | MODEL | storage-modes | Mode for about 2 GB SQL plus small Excel, daily refresh | Import | Composite or DirectQuery is unnecessary when daily refresh suffices |
| 275 | MANAGE | workspace-roles | Least-privilege role for sales to edit and manage permissions | Add sales AAD group as workspace Member | Admin over-grants; sharing reports does not give edit rights |
| 276 | VIZ | alerts | Notify when late-order percentage exceeds 5% | Dashboard, then data alert | Subscriptions schedule delivery; they do not fire on thresholds |
| 277 | MODEL | relationships-cardinality | Cardinality of product list to revenue relationship | One-to-many from product list (one side) | Product list is unique per product; revenue repeats per date |
| 278 | MODEL | CALCULATE | Percent of total revenue by category measure | CALCULATE with ALL inside DIVIDE | Plain SUM keeps the category filter and returns 100% |
| 279 | MANAGE | RLS | Ordered steps to restrict P&L by business unit | Create roles; add DAX filters; publish; add role members | Granting Contributor lets analysts save reports to the workspace |
| 280 | MODEL | time-intelligence | DAX for period-end balance from balance sheet | CALCULATE(SUM(...), LASTDATE('Date'[Date])) | DATESQTD or summing periods wrongly adds balances together |
| 281 | MODEL | role-playing-dimension | Order date and ship date filters in one report | Second date table ShipDate with one-to-many to Sales | One Date table can hold only one active relationship to Sales |
| 282 | MANAGE | RLS | Give sales managers only their region's data | Role filtering Sales_Manager where username = USERNAME() | Filtering Region table or matching on a key instead of username |
| 283 | MODEL | hierarchies | Executives drill from region manager to sales managers | Hierarchy in Region: manager name then sales manager | Calculated column adds no drill path and pulls from the wrong table |
| 284 | MODEL | measures | Count of sales transactions for sales department | Measure COUNTROWS(Sales) | COUNTA counts non-empty cells; a calculated column is wrong too |
| 285 | MODEL | measures | Exclude negative and blank sales amounts from total | Measure SUMX(FILTER(Sales, amount > 0), amount) | Plain SUM includes negatives; ABS flips sign instead of excluding |
| 286 | MODEL | date-formatting | Month shown as "Feb 2020" in a calculated column | FORMAT('Date'[date], "MMM YYYY") | Using integer date_id or the wrong format codes |
| 287 | MODEL | relationships-cardinality | Customer Details to Orders relationship (keys, billing vs shipping) | No / Yes / No ⚠disputed | Numeric vs text keys; billing address belongs to Customer Details |
| 288 | MODEL | CALCULATE | Percent of late orders measure | CALCULATE(..., FILTER(Orders, Shipped > Required)) | COUNTX and CALCULATETABLE are distractors; filter compares two columns |
| 289 | MODEL | performance-model-size | Shrink dataset while meeting report needs | Remove unused QuantityPerUnit column | Filtering out discontinued products breaks the two-year history requirement |
| 290 | MODEL | role-playing-dimension | Model order vs ship date without Auto date/time bloat | Date table: active to OrderDate, inactive to ShippedDate | Auto date/time adds hidden tables; grouping columns does not model two dates |
| 291 | MODEL | relationships-many-to-many | Relate Sales Employees region to Customer Details for RLS | Many-to-many; relate to Customer Details | One-to-many fails when region values repeat on both sides |
| 292 | MODEL | hierarchies | Drill-down from business unit to product in a visual | Create a hierarchy | Group or calculated table gives no drill path |
| 293 | VIZ | visual-filters | Top 20 customers by sales for selected period | Top N filter applied at visual level | Page or report filter applies to every visual on the page |
| 294 | VIZ | visual-types | Visual of percentage late by country and region | Bar chart | Pie or scatterplot poor for comparing category values |
| 295 | VIZ | KPI-visual | Sales vs targets by month | Value Sales[sales_amount]; trend Date[month]; target Targets[sales_target] | Using Date[date] as trend axis or target from wrong table |
| 296 | MANAGE | gateway | Publish Azure SQL DirectQuery dataset to powerbi.com | No / No / No (statement text not in file) | Cloud source needs no gateway; DirectQuery needs no scheduled refresh |
| 297 | MODEL | calculated-columns | Sales department measure for transaction counts (stem) ⚠disputed | IF(ISBLANK) calculated column (stated answer) ⚠disputed | Stem asks transaction count; option keeps negatives, so it cannot meet 285 |
| 298 | MANAGE | workspace-roles | Give BU analysts board-level data access plus Build | Viewer workspace role; Build on dataset | Member or Contributor lets analysts save reports to the workspace |
| 299 | MANAGE | apps | Distribute board reports from powerbi.com | App shared to mail-enabled security group ⚠disputed | Stem requires an Azure AD group; explanation uses a mail-enabled group |
| 300 | MANAGE | refresh | Refresh cloud-hosted source with minimal effort | Scheduled refresh without on-premises gateway | Gateway is only for on-prem sources; refresh visuals is manual |
| 301 | MODEL | dataset-design | Minimum datasets when analysts have restricted P&L access | Two imported datasets | One dataset would expose balance sheet to restricted P&L analysts |

## 2. Topic frequency

| Topic | Domain | Count |
|---|---|---|
| gateway | MANAGE | 4 |
| workspace-roles | MANAGE | 3 |
| relationships-cardinality | MODEL | 3 |
| CALCULATE | MODEL | 2 |
| RLS | MANAGE | 2 |
| calculated-columns | MODEL | 2 |
| dataset-permissions | MANAGE | 2 |
| hierarchies | MODEL | 2 |
| measures | MODEL | 2 |
| role-playing-dimension | MODEL | 2 |
| storage-modes | MODEL | 2 |
| alerts | VIZ | 1 |
| analyze-in-excel | MANAGE | 1 |
| apps | MANAGE | 1 |
| dataset-design | MODEL | 1 |
| date-formatting | MODEL | 1 |
| KPI-visual | VIZ | 1 |
| performance-model-size | MODEL | 1 |
| refresh | MANAGE | 1 |
| relationships-many-to-many | MODEL | 1 |
| sensitivity-labels | MANAGE | 1 |
| sharing | MANAGE | 1 |
| shared-datasets | MANAGE | 1 |
| time-intelligence | MODEL | 1 |
| visual-filters | VIZ | 1 |
| visual-types | VIZ | 1 |

## 3. Top 10 recurring traps

- **On-prem sources need a gateway:** scheduled refresh alone cannot reach on-prem SQL or SSAS; install and register the gateway (265, 269, 270).
- **Cloud sources need no gateway:** Azure SQL published to powerbi.com needs no gateway; DirectQuery needs no scheduled refresh (296, 300).
- **Gateway matching:** the PBIX data source server name must match the gateway data source exactly (269).
- **Build vs Reshare:** Build enables Analyze in Excel, export and XMLA; Reshare only passes sharing on (262, 266).
- **Least privilege by role:** Member and Contributor can publish and save; Admin can manage users; use the lowest role that fits (267, 275, 298).
- **Viewer role limits:** Viewer cannot browse datasets, so dataset-level Build must be granted separately (298).
- **Matching join types:** relationship keys need compatible data types; a text key cannot join to a whole number (272, 287).
- **One active relationship per table pair:** a second date role needs its own date table or an inactive relationship with USERELATIONSHIP (281, 290).
- **Auto date/time bloat:** it adds hidden tables and a larger model; use one explicit date table when size matters (290, 289).
- **Percent of total and balances:** CALCULATE with ALL removes the category filter; for period-end balances use LASTDATE, not a sum over periods (278, 280).

## 4. Notable DAX / M snippets

1. Month label, from a real date column (not integer date_id), as in Q286:
   `Month Label = FORMAT('Date'[date], "MMM YYYY")`
2. Period-end balance for a balance sheet (Q280):
   `Ending Balance = CALCULATE(SUM(BalanceSheet[BalanceAmount]), LASTDATE('Date'[Date]))`
3. Percent of total by category (Q278 pattern, closed correctly):
   ```
   % Revenue =
   VAR AllCategoryRev = CALCULATE(SUM([Revenue]), ALL(ProductList[ProductCategory]))
   RETURN DIVIDE(SUM([Revenue]), AllCategoryRev)
   ```
4. Explanation's removal-of-filters variant of the same idea (Q278):
   `% Sales = DIVIDE([TotalSales], CALCULATE([TotalSales], REMOVEFILTERS()))`
5. Non-negative, non-blank total (Q285):
   `Valid Sales = SUMX(FILTER(Sales, Sales[sales_amount] > 0), Sales[sales_amount])`
6. Transaction count (Q284):
   `Sales Transactions = COUNTROWS(Sales)`
7. Blank-as-zero calculated column (Q297 stated answer; keeps negatives, so it does not meet the 285 requirement) ⚠disputed:
   `Sales Amount Clean = IF(ISBLANK(Sales[sales_amount]), 0, Sales[sales_amount])`
8. Late-order filter inside CALCULATE (Q288; the full measure is reconstructed from the answer boxes):
   `% Late = DIVIDE(CALCULATE(COUNTROWS(Orders), FILTER(Orders, Orders[Shipped Date] > Orders[Required Date])), COUNTROWS(Orders))`
9. Row-level security table filter on the Sales Employees table (Northwind, used in several stems):
   `[EmailAddress] = USERNAME()`
10. Sales-manager RLS filter, as worded in the Q282 answer:
    `Sales_Manager[username] = USERNAME()` (role table filter)

## 5. Stats

- Total questions seen (261-301): 41
- Classified: 41
- Unclassifiable: 0 (Q271, Q265 and Q296 lack answer text; classified from stems)
- Disputed: 4 (Q266, Q287, Q297, Q299)
