# HR Supply Engine

## Mental model
Demand → Supply → Match → Outreach → Assign → Fulfill

1) **Demand** starts with an Inquiry, then Scope, then Engagement.
2) **Supply** comes from scouting + imports + partners.
3) **Match** scores talent vs staffing intents.
4) **Outreach** contacts candidates (email or manual tasks).
5) **Assign** creates TalentAssignment / EngagementMember.
6) **Fulfill** updates intent state when roles are filled.

## Quickstart for operators
1) **Demand → StaffingIntent**  
   - Create inquiry → scope → convert to engagement.  
   - Staffing intent is auto-created (DRAFT → ACTIVE).
2) **Radar imports**  
   - Import via CSV/Excel/Paste/JSON or add manual profiles.  
   - Signals are created for traceability.
3) **Run matching**  
   - Go to `/portal/hr/staffing` and click **Run matching**.
4) **Run outreach**  
   - Email jobs (if SMTP configured) or manual LinkedIn/Xing tasks.
5) **Assign + fulfill**  
   - Assign the best match → intent becomes **FULFILLED**.  
   - Badges show staffing/outreach status on inquiry/scope/engagement pages.

## Operator workflow (checklist)
1) **Create demand**  
   - Submit an inquiry → finalize scope → convert to engagement.
2) **Review staffing intents**  
   - Go to `/portal/hr/staffing` and confirm roles/requirements.
3) **Run matching**  
   - Click **Run matching** for the intent.
4) **Run outreach**  
   - Go to `/portal/hr/outreach` and run outreach.
5) **Complete manual tasks**  
   - Use LinkedIn/Xing deep links and copy templates.
6) **Assign talent**  
   - Assign matches to the engagement and confirm fulfillment.

## Supported sources
- **Partners intake** (API): `/api/partners/signal`
- **CSV / Excel / Paste / JSON** imports
- **WEB search provider** (configured via env)
- **Manual LinkedIn/Xing tasks** only (no scraping)

## Import guide
Imports support:
- CSV upload
- Excel `.xlsx` upload
- Paste table (CSV or TSV)
- JSON upload (array of objects)
- Manual add (quick entry)

See `docs/hr-imports.md` for templates and field mappings.

### Required fields
At least one of the following per row:
- `email` OR `linkedInUrl` OR `xingUrl` OR `dedupeKey`

### Canonical IDs
These must match taxonomy IDs:
- `primaryRole`, `secondaryRoles`
- `domains`
- `seniority`
- `availabilityWindow`
- `engagementModes`

### CSV templates
**LinkedIn export-ish**
```
fullName,email,linkedInUrl,primaryRoleId,secondaryRoleIds,domainIds,seniorityId,geo,languages,notes
Avery Lee,avery@example.com,https://linkedin.com/in/avery-lee,systems_architect,solution_architect|data_architect,ai_architecture|observability,ic_senior,Berlin,en|de,Open to hybrid roles
```

**Universal minimal**
```
fullName,email,profileUrl,notes
Avery Lee,avery@example.com,https://linkedin.com/in/avery-lee,Prefers remote delivery
```

**Partner directory**
```
fullName,email,company,roleText,skillsText,profileUrl
Avery Lee,avery@example.com,SignalWorks GmbH,Platform architect,System architecture|Observability,https://linkedin.com/in/avery-lee
```

## Outreach templates
**linkedin_intro_v1**
```
Hi {firstName}, we are staffing a {roleLabel} role with {orgName}. Would you be open to a quick intro call? {callToAction}
```

**linkedin_followup_v1**
```
Hi {firstName}, just following up on the {roleLabel} opportunity with {orgName}. {callToAction}
```

**email_intro_v1**
```
Subject: Opportunity: {role} for {engagement}

Hi {name},

We are staffing a {role} role on {engagement}. Reply if you are open to a quick conversation.

Lucien
```

## Compliance note
LinkedIn/Xing are **manual-task channels only**.  
No scraping or automated messaging without a legal API integration.

## Troubleshooting
**Import validation errors**
- Invalid `primaryRole` / `domains`: ensure IDs exist in taxonomy.
- Missing contact field: add `email` or `linkedInUrl` or `xingUrl`.

**SMTP missing**
- Set `EMAIL_SERVER` and `EMAIL_FROM` in `.env`.
- Without SMTP, email jobs will queue but not send.

**Quota reached**
- Scout or outreach jobs may skip runs due to `SCOUT_*` / `OUTREACH_*` quotas.

**Duplicates**
- Imports dedupe by email or LinkedIn/Xing URL (and dedupeKey when provided).
