# PL-300 dump slice D: lines 4800-5600, questions 226-260

Source: /workspace/jamel/pl300/md/dump.txt lines 4800-5600. Q numbers follow the "Question: N" label order. Where a label pair sits between stem and options, the numbering is sequential (see Stats).

## 1. Question table

| Q | Domain | Topic | Concept tested | Correct answer gist | Trap / common mistake |
|---|---|---|---|---|---|
| 226 | VIZ | accessibility | Theme and divergent colours for colour-vision deficiency | Theme colors and Divergent colors (BC) | Sentiment or first-level element colours only partly fix the palette |
| 227 | MANAGE | report-settings | Report settings statements (Viewer role, exhibits) | Not stated in source (exhibit missing) | Judge each Yes/No statement separately; exhibits not visible |
| 228 | VIZ | chart-selection | Compare five regions' sales for current month | Stacked bar chart | 100% stacked shows shares; waterfall shows variance, not comparison |
| 229 | VIZ | paginated-reports | Print/email-scheduled report vs interactive report | Not stated; inferred paginated for Report1, Power BI report for Report2 | Power BI reports print poorly; paginated suits scheduled email |
| 230 | VIZ | accessibility | Conditional-format icons readable for colour-blind users | Change icons to a different shape per colour | Tooltips, alt text or colour swaps leave colour as the only cue |
| 231 | VIZ | personalize-visuals | Let consumers change visual type without affecting others | Report settings, Personalize visuals | Bookmarks or focus mode do not give per-user visual type changes |
| 232 | VIZ | table-visual-formatting | Configure table to display as shown in exhibit | Not stated in source (HOTSPOT, exhibit missing) | Exhibit missing; check value vs column formatting options |
| 233 | VIZ | alt-text | Screen reader reads live card value after refresh | Alt text via conditional formatting using a DAX measure | Static alt text never updates on refresh; text box loses the visual |
| 234 | VIZ | conditional-formatting | Visual comparison of 1-20 values, hide numbers, minimal effort | Data bars (C) | Data bars still show numbers unless "show bar only" is enabled |
| 235 | PREP | data-profiling | Read column statistics and value distribution in Power Query | 0 and US East (per explanation; exhibit missing) | Column profile uses first 1,000 rows unless full profiling is enabled |
| 236 | VIZ | accessibility | Sales-status table readable for colour-blind users | Add status icons per product (D) | Recolouring red to orange still relies on colour alone |
| 237 | MANAGE | apps | Show new page to app users with least admin effort | Update the app | Changing audience or creating a new app is unnecessary effort |
| 238 | MANAGE | export-restriction | Block PII report exports; approve financial datasets | Yes / No / Yes as listed (statements not shown) | Certification is approval, not export control; verify each statement |
| 239 | MANAGE | sensitivity-labels | Encrypt exported financial PDF reports | Sensitivity labels (C) | RLS filters rows only; it does not encrypt exported files |
| 240 | MANAGE | gateway | Refresh on-prem Excel file every four hours | Deploy an on-premises data gateway (C) | Uploading the file to the workspace does not refresh an on-prem file |
| 241 | MANAGE | scheduled-refresh | Resume refresh paused after inactivity | Open a dashboard or report built on the dataset (CD) | Query caching, Excel import, PowerShell cmdlets do not resume refresh |
| 242 | VIZ | comments | External users flag issues to workspace admins, visible to others | Comments (A) | Teams chat and alerts do not give shared visible threads to viewers |
| 243 | PREP | data-source-settings | Repoint PBIX imports to new Azure SQL database, least effort | File > Options > Data source settings > Change source (D) | PBIT is a template; editing every query costs more effort |
| 244 | MANAGE | workspace-roles | Let user build dashboard from report visuals | Add as workspace Member (D) ⚠disputed | Viewer cannot pin; Contributor may meet least-privilege need |
| 245 | VIZ | dashboards-tiles | Pin whole report page so new visuals sync automatically | Open in editing view, Pin to dashboard, select Pin live | Pinning individual visuals does not auto-add new visuals |
| 246 | MANAGE | export-restriction | Minimise data exfiltration without affecting other reports | Do not allow end users to export any data (D) | RLS and dataset-permission changes do not stop report exports |
| 247 | MANAGE | export-restriction | Allow summarized export but block underlying data | Report settings export-data option in Desktop (D) ⚠disputed | Dataset permissions do not limit export; correct option missing from list |
| 248 | MANAGE | RLS | Azure security team maintains RLS membership, no content rights | Use mail-enabled or security groups in RLS role (C) | Adding them as role members or granting Build gives content access |
| 249 | MANAGE | RLS | Sales manager must see new region's data after move | Get added to the correct AAD group (D) | Licence type or editing RLS in Desktop does not change membership |
| 250 | MANAGE | certification | Verified datasets listed first in search | Certify the datasets (B) | Promotion only highlights; certification ranks above promoted |
| 251 | MANAGE | workspace-roles | Least-privilege roles: publish app; edit content | Box 1 Member; Box 2 Contributor | Contributors cannot publish apps or change app permissions |
| 252 | VIZ | subscriptions | Daily emailed snapshot of a card value | Create a subscription (A) | Data alerts fire only on thresholds and carry no snapshot |
| 253 | MANAGE | build-permission | Build reports on DS1 for another workspace, minimal access | Grant Build permission on DS1 (B) | Membership or Viewer grants wider access than needed |
| 254 | MANAGE | apps | Read access to one dashboard and three reports org-wide | Yes: publish app to entire org with those items (A) | App access covers only included items, not the whole workspace |
| 255 | MANAGE | apps | "Included in app for all assets" meets the read-access goal? | No (B) | Must select exactly the dashboard and the three reports |
| 256 | MANAGE | workspace-roles | Viewer role for all users to get read access to selected items | No (B) | Viewer role exposes all workspace content, not selected items |
| 257 | MANAGE | RLS | HR team gets RLS applied when viewing published reports | Add users to HR role in the service (A) | Sharing dataset or importing HR table does not assign RLS role |
| 258 | VIZ | alerts | Notify when daily defective percentage exceeds 3% | Alert on the KPI tile (B) | Subscriptions send on schedule, not on threshold breach |
| 259 | MANAGE | gateway | Live SSAS cube data for published report | On-premises data gateway (B) | Scheduled refresh does not apply to a live SSAS connection |
| 260 | MANAGE | RLS | Verify what dynamic RLS shows one salesperson | Test as role on the user account (A) | Test as role uses role logic without the user's identity |

Unlabelled extra chunk (see Stats): PII dashboards question (options: sensitivity labels, tiles, comments, AD groups). Answer not in source. Not counted in the 35 rows.

## 2. Topic frequency

| Topic | Domain | Count |
|---|---|---|
| RLS | MANAGE | 4 |
| accessibility | VIZ | 3 |
| apps | MANAGE | 3 |
| export-restriction | MANAGE | 3 |
| workspace-roles | MANAGE | 3 |
| gateway | MANAGE | 2 |
| alt-text | VIZ | 1 |
| alerts | VIZ | 1 |
| build-permission | MANAGE | 1 |
| certification | MANAGE | 1 |
| chart-selection | VIZ | 1 |
| comments | VIZ | 1 |
| conditional-formatting | VIZ | 1 |
| dashboards-tiles | VIZ | 1 |
| data-profiling | PREP | 1 |
| data-source-settings | PREP | 1 |
| paginated-reports | VIZ | 1 |
| personalize-visuals | VIZ | 1 |
| report-settings | MANAGE | 1 |
| scheduled-refresh | MANAGE | 1 |
| sensitivity-labels | MANAGE | 1 |
| subscriptions | VIZ | 1 |
| table-visual-formatting | VIZ | 1 |

## 3. Top 10 recurring traps

- Colour-only encodings fail colour-vision checks; add shapes, icons or labels, not another hue (Q230, Q236).
- Static alt text never updates; drive alt text from a DAX measure via conditional formatting (Q233).
- Alerts fire only on a threshold and carry no snapshot; subscriptions send scheduled snapshots (Q252 vs Q258).
- Workspace Viewer sees all content; use apps or Build permission for least privilege (Q253, Q254, Q256).
- Contributors cannot publish apps or change app permissions; Members can (Q251).
- RLS membership is best managed through mail-enabled or security groups, outside Power BI role editing (Q248, Q249).
- Dynamic RLS must be tested as the user, not as the role (Q260).
- Export restriction is a report or tenant setting, not dataset permissions or RLS (Q246, Q247).
- On-premises files and SSAS live connections need a gateway; scheduled refresh alone is not enough (Q240, Q259).
- Sensitivity labels encrypt files; RLS only restricts rows (Q239).

## 4. Notable DAX / M snippets

None. The slice contains no DAX or M code; answers are conceptual or UI paths only.

## 5. Stats

- Labelled questions seen in range: 35 (Q226-Q260). Chunks in range: 36 (one extra, see below).
- Classified: 35. Unclassifiable: 0 (the extra chunk is listed separately, not counted).
- Disputed (⚠disputed): 2 (Q244, Q247).
- Answer not stated in source: 3 (Q227, Q229, Q232). Q235 and Q238 answers are partial (taken from explanation text or a bare Yes/No/Yes list).
- Numbering caveat: the source places label pairs (e.g., "Question: 224 / 225", "231 / 232", "243 / 244") between stems and options, and one chunk (PII dashboards question, options A-D) sits right before the label "Question: 260". Numbers here are assigned sequentially, so Q260 is the RLS test-as-role question; the PII question is the extra chunk and may belong to 260 or fall outside the range. Verify against the source before relying on individual numbers.
