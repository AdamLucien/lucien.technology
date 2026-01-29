# HR Imports (Radar)

This guide covers the supported import modes in HR → Radar and the required CSV templates.

## Import modes

1) CSV upload
- Upload a .csv file.
- The first row must be headers.
- Lists should be pipe-separated (e.g., "systems_architect|solution_architect").

2) Excel upload (.xlsx)
- Upload a .xlsx file.
- Select the worksheet.
- Use column mapping to align to the canonical fields.

3) Paste CSV/TSV
- Paste data into the textarea.
- Use comma or tab delimiters.

4) Paste JSON array
- Provide a JSON array of objects.
- Each object should use column-style keys.

5) Manual entry
- Add a single profile with minimal fields (name + email or profile URL).

## Mapping rules

- Profiles are upserted by: email OR linkedInUrl OR xingUrl OR dedupeKey.
- Every import row creates a TalentSignal record for traceability.
- Role/domain values should be canonical roleIds/domainIds when possible.
- If you provide role/domain labels, the importer attempts a best-effort mapping.
- Unmapped values are reported as validation errors.

## Templates

### LinkedIn export-ish (profiles)
Columns:
```
fullName,email,linkedInUrl,primaryRoleId,secondaryRoleIds,domainIds,seniorityId,geo,languages,notes
```
Example:
```
Avery Lee,avery@example.com,https://linkedin.com/in/avery-lee,systems_architect,solution_architect|data_architect,ai_architecture|observability,ic_senior,Berlin,en|de,Open to hybrid roles
```

### Universal minimal
Columns:
```
fullName,email,profileUrl,notes
```
Example:
```
Avery Lee,avery@example.com,https://linkedin.com/in/avery-lee,Prefers remote delivery
```

### Partner directory
Columns:
```
fullName,email,company,roleText,skillsText,profileUrl
```
Example:
```
Avery Lee,avery@example.com,SignalWorks GmbH,Platform architect,System architecture|Observability,https://linkedin.com/in/avery-lee
```

## Notes

- LinkedIn/Xing data must be user-provided. No scraping or automated collection.
- If SMTP is not configured, outreach emails will be queued but not sent automatically.
