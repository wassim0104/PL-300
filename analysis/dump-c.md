# PL-300 dump.txt lines 3200-4880: Questions 151-225

Source: /workspace/jamel/pl300/md/dump.txt, lines 3200-4880. Q226 begins at the end of the range and is excluded.

Numbering note: "Question: N" labels in this dump sit inconsistently relative to stems and explanations. Numbers were assigned by label sequence and checked against the block order, which ends with Q226 at line ~4877.

### 1. Question table

| Q | Domain | Topic | Concept tested | Correct answer gist | Trap / common mistake |
|---|---|---|---|---|---|
| 151 | VIZ | key-influencers | Single visual showing factors that affect a metric | Key influencers | Q&A or funnel do not rank factors driving a metric |
| 152 | VIZ | key-influencers | Measure as analyzed metric, column as Explain by | Analyze = Total Sales; Explain by = Occupation | Putting the measure in Explain by |
| 153 | VIZ | key-influencers | Reading average-value results in key influencers | Austria customers order 18.8 more units (average units) | Reading the result as a percentage |
| 154 | VIZ | slicers | Slicer selections persisting across pages | Report-level filters and sync slicers (BC) | Bookmark per value or page-level filters do not persist |
| 155 | VIZ | conditional-formatting | Card label font colour by value threshold, minimal effort | Rules format on data label font | Color scale or field value need more design work |
| 156 | VIZ | end-user-insights | Adding auto-generated insight visuals to a dashboard | View insights, review in Focus mode, pin visuals | Pinning before reviewing generated visuals |
| 157 | VIZ | dashboards-tiles | Keep interactivity when adding several report visuals | Pin entire report page as a live tile | Pinning each chart separately loses interactivity |
| 158 | VIZ | conditional-formatting | Table/indicator cell colour from thresholds | Background colour, format by Rules | Font colour or colour scale instead of background |
| 159 | VIZ | mobile-layout | Portrait mobile dashboard built from existing reports | Pin, open, edit mobile view, rearrange | Report mobile view is not the dashboard mobile layout |
| 160 | VIZ | analytics-pane | Dashed percentile line per period on a column chart | Analytics pane percentile line at 40% | DAX measure options do not draw the reference line |
| 161 | MODEL | data-category | Location-aware report using geographic data | Set Geographic data category; use geo columns in visuals (BD) | Hierarchies or synonyms do not enable geo mapping |
| 162 | VIZ | visual-interactions | Donut redraws from a column selection | Set column chart interaction to Filter on donut | None removes cross-filtering entirely |
| 163 | VIZ | visual-interactions | Which visual interactions a map supports | Map is cross-filter only, not cross-highlight | Assuming maps support cross-highlight |
| 164 | VIZ | smart-narrative | Auto-generated text summary that updates with selections | Smart narrative visual | Q&A or key influencers do not produce narratives |
| 165 | MODEL | data-category | Display images from a column of URLs in a table | Data category = Image URL | Web URL category shows a link, not the image |
| 166 | VIZ | Q&A | Q&A over Excel data with minimal development | Format as table; import to powerbi.com; add dataset tile | Building a full report when Q&A dataset tile suffices |
| 167 | VIZ | reference-lines | Constant line at 0.5 as a median reference | No | A constant line is a fixed value, not the median |
| 168 | VIZ | reference-lines | Average line as a median reference | No | Average is not the median |
| 169 | VIZ | reference-lines | Percentile line at 50% as a median reference | Yes | 50th percentile equals the median |
| 170 | PREP | data-profiling | Distinct vs unique counts in Power Query column profile | 20 distinct values; Elm, American (per exhibit) | Unique counts only values that appear once |
| 171 | VIZ | personalize-visuals | Readers switch chart type and measures with least effort | Enable Personalize visuals in report settings ⚠disputed | Building bookmarks and buttons costs more effort |
| 172 | VIZ | dashboard-themes | Dark dashboard theme while keeping original report colours | Dark dashboard theme; pin with destination or dashboard theme (CD) ⚠disputed | Browser dark mode does not change dashboard tiles |
| 173 | VIZ | anomaly-detection | Anomaly detection requirements | Line chart with date field on Axis | Non-line visuals or non-date axis unsupported |
| 174 | VIZ | tooltips | Show total salary when hovering a line chart point | Add salary to Tooltips with aggregation | Drillthrough or visual filters do not show on hover |
| 175 | VIZ | forecast | Adding forecast to a line visual | Forecast | Trendline or average line do not project forward |
| 176 | VIZ | decomposition-tree | Ad hoc drill across multiple dimensions in any order | Decomposition tree | Key influencers ranks factors, no ad hoc drilling |
| 177 | VIZ | grouping | Group states into regions to view by region quickly | Group on state with Group type = List | Bin is for numeric ranges, not categories |
| 178 | VIZ | forecast | Historical headcount plus six-month prediction | Line chart (with forecast) | Ribbon, scatter, or multi-series charts do not forecast |
| 179 | MANAGE | refresh | Meaning of a dashboard tile timestamp | Dashboard tile cache refreshed | Tiles refresh on a schedule; F5 is not the cause |
| 180 | VIZ | bookmarks | Minimum bookmarks for two switchable views keeping slicer | 2 bookmarks, one per view; Display property ⚠disputed | Keeping Data properties on resets filters |
| 181 | VIZ | play-axis | Show relationship of two measures over time in a scatter | Add a play axis | A year slicer does not animate the relationship |
| 182 | VIZ | mobile-layout | Dashboard mobile view with two cards visible | Update Dashboard Mobile Layout; resize two cards | Report mobile view gives an empty canvas |
| 183 | VIZ | decomposition-tree | Segment customers by bounce rate across dimensions | Decomposition tree | Key influencers gives no drill path |
| 184 | VIZ | scatter-plot | Identify outliers in a roughly 1,000-row table | Scatter plot | Pie, donut, or area charts do not reveal outliers |
| 185 | VIZ | slicers | Filter all visuals except the KPI | Sync slicer across pages; edit slicer interactions on KPI page (BC) | Page or report filters cannot exclude one visual |
| 186 | VIZ | anomaly-detection | Anomaly detection on an out-of-range indicator visual | Line chart with anomaly detection | Line and clustered column is not a valid anomaly chart |
| 187 | VIZ | key-influencers | Which fields have greatest impact on Spend | Key influencers | Decomposition tree is for drilling, not ranking |
| 188 | VIZ | drill-down | Average reference line and enabling drill-down | Average line from analytics pane; date field on Axis | Drillthrough is not drill-down |
| 189 | VIZ | dashboard-themes | Change colours of tiles pinned to one dashboard | Change dashboard theme | Report theme does not affect dashboard tiles |
| 190 | VIZ | anomaly-detection | Make the algorithm flag more anomalies | Increase Sensitivity | Expected range transparency only changes display |
| 191 | VIZ | mobile-layout | Mobile layout with only single-value visuals, minimal scrolling | Decrease cards; remove map and bar charts | Keeping charts in the layout adds scrolling |
| 192 | VIZ | scatter-plot | Readable scatter for 10M rows without changing other visuals | Enable high-density sampling | Row filter in Power Query changes other visuals' accuracy |
| 193 | VIZ | Q&A | Add an inventory-by-location tile with minimal report impact | Ask a Q&A question; pin visual to dashboard (AC) | Adding the visual to the report changes the report |
| 194 | VIZ | scatter-plot | Scatter showing similar price and quantity groups | Scatter plot; Automatically find clusters | Line chart or bubble does not auto-cluster |
| 195 | VIZ | slicers | Page1 filters apply only to Page1 and Page3 | Sync the slicers on Page1 and Page3 | Toggling slicer visibility does not filter pages |
| 196 | VIZ | page-navigation | Navigate to visible pages, low maintenance as pages added | Add page navigation button on page 1 | Bookmark navigator needs a bookmark per page |
| 197 | MANAGE | alerts | Notify when refrigerator temperature exceeds 4 degrees | Pin card visual to dashboard; set alert on tile | Alerts cannot be set on a report visual or page |
| 198 | VIZ | dashboard-themes | Change pinned tile colours on the dashboard | Create and apply a custom dashboard theme | Changing report visual colours does not update pinned tiles |
| 199 | VIZ | report-themes | Reusable corporate theme across multiple reports | Theme as JSON file, imported into Desktop ⚠disputed | Customizing the current theme is not reusable |
| 200 | VIZ | personalize-visuals | Switch measures, visual type, and legend on three visuals | Enable personalization for the entire report | Per-visual personalization adds effort |
| 201 | VIZ | reference-lines | Median line on salary bar chart | Yes, a median line meets the goal | Median line is valid; not only percentile lines |
| 202 | VIZ | conditional-formatting | Background colour by value ranges for Revenue 0 to 5 | Open Background colour; Rules; add rule per range | Color scale or field value instead of rules |
| 203 | VIZ | slicers | Country selection carried to pages 2 and 3, not page 4 | Sync Country slicer on pages 1 to 3 | Page-level filters apply to every visual on the page |
| 204 | VIZ | custom-visuals | Word cloud with minimal development | Get from AppSource; populate fields; format | Building a custom visual adds effort |
| 205 | VIZ | bookmarks | Navigate between three bookmarks from one object | Group the bookmarks; set button Bookmark property | One button per bookmark is not the cheapest route |
| 206 | VIZ | paginated-reports | Printable PDF invoices with all rows and columns | Paginated report containing a tablix | Interactive table or matrix does not print cleanly |
| 207 | VIZ | slicers | Country slicer filters other pages; hidden on pages 2 and 3 | Sync Country slicer across pages; hide on pages 2 and 3 | Sync without hiding leaves duplicate slicers |
| 208 | VIZ | layer-order | Card renders above a shape | Adjust layer order in Selection pane | Tab order or vertical alignment do not stack visuals |
| 209 | VIZ | dashboards-tiles | Show bar chart on dashboard after changing the report visual | Pin the bar chart visual to the dashboard | Refreshing the dataset does not update a pinned tile |
| 210 | VIZ | tooltips | Create a custom tooltip page | Tooltip page: Allow use as tooltip; add visuals; configure filters (ADE) | Setting the target page as tooltip is wrong |
| 211 | PREP | ai-insights | Text analytics: feedback topics, sentiment, language | Key phrase extraction; sentiment analysis; language detection | Sentiment is not a key phrase or language output |
| 212 | MANAGE | export-data | Stop consumers exporting data from visuals | Modify Report settings in Desktop and in the service (AD) | Dataset permissions do not block visual export |
| 213 | VIZ | canvas-settings | Maximize screen area on a vertical display | Canvas settings: custom width and height | Image fit or personalization do not resize the canvas |
| 214 | VIZ | chart-selection | Compare profit across 10 categories for a quarter | Clustered bar chart | Funnel, line, or area charts are weaker for categories |
| 215 | MANAGE | analyze-in-excel | Let Finance team analyze dataset in Excel without roles | Grant build permission on the dataset | Write permission or RLS is not needed |
| 216 | VIZ | number-formatting | Two decimals; negatives red with parentheses ⚠disputed | Custom measure format plus conditional font colour (BC) | Decimal places alone does not handle negative format |
| 217 | PREP | data-profiling | Read column statistics for Max Temp (HOTSPOT) | 45 and 24 (exhibit not in text) | Confusing distinct count with row count |
| 218 | VIZ | visual-interactions | Matrix drill changes only the matrix; card and bar update on select | Matrix: Apply drill down filters to Selected visual | Default "Entire page" filters every visual |
| 219 | MODEL | CALCULATE | Measure with fixed year filter shown by Date[Year] | Same 2023 value repeated for each year (D) | Expecting blanks for non-2023 years |
| 220 | VIZ | paginated-reports | Print-optimized output in Excel, Word, PowerPoint, PDF | Paginated report | Dashboard, template app, or interactive report |
| 221 | VIZ | layout | Modify location of each visual | Position | Layer order changes stacking, not location |
| 222 | VIZ | slicers | Filter a line chart to one selected region | Slicer visual and table visual (AC) | Card or KPI visuals cannot filter by region |
| 223 | VIZ | chart-selection | Share of total by category; margin comparison by region | Pie chart; stacked bar chart | Pie chart for margins across regions |
| 224 | PREP | unpivot | Wide month/year CSV to month, year, amount columns | Unpivot first | Pivot goes the opposite direction |
| 225 | VIZ | accessibility | Logical reading order for keyboard and screen reader users | Tab order | Layer order controls stacking, not reading order |

### 2. Topic frequency

| Topic | Domain | Count |
|---|---|---|
| slicers | VIZ | 6 |
| reference-lines | VIZ | 5 |
| key-influencers | VIZ | 4 |
| conditional-formatting | VIZ | 3 |
| mobile-layout | VIZ | 3 |
| visual-interactions | VIZ | 3 |
| dashboard-themes | VIZ | 3 |
| anomaly-detection | VIZ | 3 |
| scatter-plot | VIZ | 3 |
| data-profiling | PREP | 2 |
| data-category | MODEL | 2 |
| Q&A | VIZ | 2 |
| personalize-visuals | VIZ | 2 |
| tooltips | VIZ | 2 |
| forecast | VIZ | 2 |
| decomposition-tree | VIZ | 2 |
| bookmarks | VIZ | 2 |
| paginated-reports | VIZ | 2 |
| dashboards-tiles | VIZ | 2 |
| chart-selection | VIZ | 2 |
| end-user-insights | VIZ | 1 |
| smart-narrative | VIZ | 1 |
| grouping | VIZ | 1 |
| refresh | MANAGE | 1 |
| play-axis | VIZ | 1 |
| drill-down | VIZ | 1 |
| alerts | MANAGE | 1 |
| page-navigation | VIZ | 1 |
| report-themes | VIZ | 1 |
| custom-visuals | VIZ | 1 |
| layer-order | VIZ | 1 |
| ai-insights | PREP | 1 |
| export-data | MANAGE | 1 |
| canvas-settings | VIZ | 1 |
| analyze-in-excel | MANAGE | 1 |
| number-formatting | VIZ | 1 |
| CALCULATE | MODEL | 1 |
| layout | VIZ | 1 |
| unpivot | PREP | 1 |
| accessibility | VIZ | 1 |

### 3. Top 10 recurring traps

- **Median is the 50th percentile.** A constant line or an average line is not the median; use a percentile line at 50% (Q167-169, Q201).
- **Key influencers vs decomposition tree.** Key influencers ranks factors that drive one metric; decomposition tree supports ad hoc drill-down across dimensions (Q151, Q176, Q183, Q187).
- **Slicers do not persist across pages by default.** Sync the slicer across pages, or use report-level filters (Q154, Q195, Q203, Q207).
- **Pinned tiles are snapshots.** Pin the changed visual again; dataset refresh does not update a tile built from an old visual (Q209). Pinning each chart loses interactivity; pin the whole page live (Q157).
- **Alerts go on single-value tiles only.** Pin a card, KPI, or gauge to the dashboard and set the alert on the tile, not on a report visual or page (Q197).
- **Visual interactions have three states.** Filter, Highlight, and None. None removes cross-filtering. Maps support cross-filter only (Q162, Q163, Q218).
- **Anomaly detection needs a line chart with a date axis.** Raising Sensitivity flags more anomalies; expected range transparency is display only (Q173, Q186, Q190).
- **Dashboard theme is not report theme.** Dashboard themes recolour pinned tiles; report themes do not (Q189, Q198).
- **Dashboard mobile layout is not report mobile view.** Report mobile view gives an empty canvas; use the dashboard mobile layout and keep only single-value visuals (Q159, Q182, Q191).
- **Unpivot is not pivot.** Wide-to-long conversion uses unpivot (Q224). Also, data category Image URL shows images, while Web URL shows links (Q165).

### 4. Notable DAX / M snippets

- `2023 Population = CALCULATE([Total Population], 'Date'[Year] = 2023)`. A filter on Date[Year] replaces the year filter from the table, so every year row shows the same 2023 value (Q219).
- `Total Population = SUM('Population'[PopulationAmount])`. The base measure used by the CALCULATE above (Q219).
- `Measure1 = PERCENTILEX.INC(Sales, sales[Total Sales], 0.40)`. Valid DAX, but offered as a distractor for a dashed percentile line; the expected answer is the analytics pane percentile line (Q160).
- `Measure1 = PERCENTILEX.EXC(Sales, sales[Total Sales], 0.40)`. Same role as the distractor above, using the EXC method (Q160).

No Power Query M code appears in this slice.

### 5. Stats

- Total questions seen: 75 (Q151-Q225).
- Classified: 75.
- Unclassifiable: 0.
- Disputed (⚠): 5 (Q171, Q172, Q180, Q199, Q216).
- Out of range and not classified: Q226 (begins at end of slice).
