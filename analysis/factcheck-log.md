# Fact-check log (2026-11-11)

No questions had `"disputed": true`.

| id | verdict | change | source |
|---|---|---|---|
| L0017-q2 | Correct: KEEPFILTERS intersects with the row's District filter | none | https://learn.microsoft.com/en-us/dax/keepfilters-function-dax |
| L0026-q5 | Correct: "You can only cross-filter line charts, scatter charts, and maps. You can't cross-highlight them." | explanation now quotes the doc | https://learn.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions |
| L0019-q3 | Distractor "It returns a table" was also true (LASTDATE returns a one-row, one-column table) | replaced all 4 options (lengths 32-33, key still C); explanation rewritten | https://learn.microsoft.com/en-us/dax/lastdate-function-dax |
| L0029-q4 | Correct: shared capacity minimum is 30 minutes | none | https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-automatic-page-refresh |
| L0032-q1 | Correct: Member can publish/update the app and add users with lower permissions; Contributor can only update the app if an Admin allows it | none | https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces |
| L0033-q4 | Key correct (report labels pass down to dashboards); explanation overstated it | explanation adds the limits: never overwrites manual labels, never applies a less restrictive one; cite moved to the downstream-inheritance page | https://learn.microsoft.com/en-us/fabric/governance/service-security-sensitivity-label-downstream-inheritance |
| L0036-q2 | Correct: USERPRINCIPALNAME returns the UPN | none | https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security |
| L0014-q5 | Correct: EOMONTH gives the end of the month, not 31 Dec; DATE(+1,1,1) runs one day too far | none | https://learn.microsoft.com/en-us/dax/calendar-function-dax |
| L0019-q2 | Correct: DATESINPERIOD(MAX, -31, DAY) | none | https://learn.microsoft.com/en-us/dax/datesinperiod-function-dax |
| L0018-q5 | Correct: AVERAGEX over VALUES('Date'[Date]) | none | https://learn.microsoft.com/en-us/dax/dax-overview |

bank.js regenerated from bank.json (180 questions).
