# HR Supply Engine

## Mental model
Demand → Supply → Match → Outreach → Assign → Fulfill

1) **Demand** starts with an Inquiry, then Scope, then Engagement.
2) **Supply** comes from scouting + imports + partners.
3) **Match** scores talent vs staffing intents.
4) **Outreach** contacts candidates (email or manual tasks).
5) **Assign** creates TalentAssignment / EngagementMember.
6) **Fulfill** updates intent state when roles are filled.

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
**LinkedIn minimal**
```
firstName,lastName,email,linkedInUrl,primaryRole,domains
Avery,Lee,avery@example.com,https://linkedin.com/in/avery-lee,systems_architect,ai_architecture
```

**Universal extended**
```
fullName,email,linkedInUrl,xingUrl,primaryRole,secondaryRoles,domains,seniority,availabilityWindow,engagementModes,languages,rateBand,externalId,dedupeKey
Avery Lee,avery@example.com,https://linkedin.com/in/avery-lee,,systems_architect,solution_architect|data_architect,ai_architecture|observability,ic_senior,two_four_weeks,remote|hybrid,en|de,200-250,crm-123,
```

**URL-only signals**
```
fullName,linkedInUrl,externalId,dedupeKey
Avery Lee,https://linkedin.com/in/avery-lee,crm-123,
```

## Outreach templates
**linkedin_intro_v1**
```
Hi {{name}}, we are staffing a role that matches your background. Would you be open to a quick intro call this week?
```

**linkedin_followup_v1**
```
Hi {{name}}, just following up on the opportunity I shared earlier. Happy to send details if you are interested.
```

**email_intro_v1**
```
Subject: Opportunity: {{role}} for {{engagement}}

Hi {{name}},

We are staffing a {{role}} role on {{engagement}}. Reply if you are open to a quick conversation.

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
