export const hrCopy = {
  navLabel: "HR Sections",
  whatNextLabel: "What should I do next?",
  overview: {
    title: "HR oversight",
    subtitle: "People, time, responsibilities, and engagement terms.",
    description:
      "Track staffing, time entries, responsibilities, and engagement terms with audit-ready clarity.",
    quickstartTitle: "Quickstart",
    quickstartSteps: [
      "Create demand: submit an inquiry, finalize scope, convert to engagement.",
      "Staffing intent appears automatically with roles and requirements.",
      "Run matching to generate candidate suggestions.",
      "Run outreach to send email or queue manual tasks.",
      "Assign talent to fulfill roles and close staffing.",
    ],
    ctas: [
      { label: "Create inquiry", href: "/request-scope", tone: "primary" },
      { label: "Go to staffing", href: "/portal/hr/staffing", tone: "ghost" },
      { label: "Go to radar", href: "/portal/hr/radar", tone: "ghost" },
      { label: "Go to outreach", href: "/portal/hr/outreach", tone: "ghost" },
    ],
    noIntents: "No staffing intents yet. They are created after an inquiry is submitted.",
  },
  staffing: {
    title: "Staffing intents",
    subtitle: "Track demand, matching, outreach, and fulfillment.",
    whatNext: [
      "Confirm roles and requirements.",
      "Run matching to generate candidates.",
      "Run outreach once matches exist.",
    ],
    empty: {
      title: "No staffing intents yet.",
      body: "Staffing intents are created automatically when a new inquiry is submitted and scoped.",
      ctas: [
        { label: "Create inquiry", href: "/request-scope", tone: "primary" },
        { label: "View inquiries", href: "/portal/inquiries", tone: "ghost" },
      ],
    },
    nextStepLabel: "Next step:",
    nextSteps: {
      draft: "Define scope and roles.",
      rolesMissing: "Add roles to the intent.",
      noMatches: "Run matching.",
      noOutreach: "Run outreach.",
      assign: "Assign talent.",
      fulfilled: "Staffing fulfilled.",
    },
  },
  talent: {
    title: "Talent profiles",
    subtitle: "Profiles captured from partners, scouting, and internal sources.",
    whatNext: [
      "Import new profiles via Radar.",
      "Review contact status and matches.",
    ],
    empty: {
      title: "No talent profiles yet.",
      body: "Talent enters via partner submissions, CSV/Excel imports, or the scout job.",
      ctas: [
        { label: "Import talent", href: "/portal/hr/radar", tone: "primary" },
        { label: "Go to radar", href: "/portal/hr/radar", tone: "ghost" },
      ],
    },
  },
  radar: {
    title: "Supply radar",
    subtitle: "Capture signals, run scout jobs, and manage search intents.",
    whatNext: [
      "Create a search intent for a role.",
      "Run the scout job to populate signals.",
      "Import CSV/Excel/paste/JSON to enrich talent.",
    ],
    howItWorksTitle: "How radar works",
    howItWorksBody:
      "Search intents define what to look for. Scout jobs execute those intents and convert results into signals and profiles.",
    searchIntentTitle: "Search intents",
    searchIntentBody: "Define roles or keywords to scout. Use scout jobs to execute now.",
    csvTitle: "Import toolkit",
    csvBody:
      "Use CSV, Excel, paste, or JSON to import talent. Arrays should be separated with |.",
    csvExample:
      "fullName,email,primaryRole,secondaryRoles,domains,seniority,availabilityWindow,engagementModes,languages,linkedInUrl,xingUrl",
  },
  outreach: {
    title: "Outreach queue",
    subtitle: "Email jobs and manual outreach tasks tied to staffing intents.",
    whatNext: [
      "Run matching from Staffing to create matches.",
      "Run outreach to queue emails and manual tasks.",
      "Mark manual outreach as sent or replied.",
    ],
    emailWarningTitle: "Email not configured",
    emailWarningBody:
      "EMAIL_SERVER is not set. Outreach will queue email jobs but will not send them automatically.",
    empty: {
      title: "No outreach activity yet.",
      body: "Run matching first, then run outreach to generate email jobs or manual tasks.",
      ctas: [
        { label: "Go to staffing", href: "/portal/hr/staffing", tone: "primary" },
        { label: "Run outreach", href: "/portal/hr/outreach", tone: "ghost" },
      ],
    },
    manualTitle: "Manual outreach tasks",
    emailTitle: "Email jobs (automated)",
    historyTitle: "Outreach history",
  },
  importPresets: {
    linkedin: {
      label: "LinkedIn export (profiles)",
      mapping: {
        "First Name": "firstName",
        "Last Name": "lastName",
        "Email Address": "email",
        "LinkedIn URL": "linkedInUrl",
        "Company": "company",
        "Title": "title",
      },
    },
    crm: {
      label: "CRM contacts",
      mapping: {
        Name: "fullName",
        Email: "email",
        "LinkedIn URL": "linkedInUrl",
        "Job Title": "title",
        Company: "company",
      },
    },
    urlOnly: {
      label: "URL-only signals",
      mapping: {
        URL: "linkedInUrl",
        Name: "fullName",
        "Source ID": "externalId",
      },
    },
  },
  importFields: [
    "fullName",
    "email",
    "linkedInUrl",
    "xingUrl",
    "primaryRole",
    "secondaryRoles",
    "domains",
    "seniority",
    "availabilityWindow",
    "engagementModes",
    "languages",
    "rateBand",
    "externalId",
    "dedupeKey",
  ],
  importExtraFields: ["firstName", "lastName", "title", "company"],
  importTemplates: {
    linkedInMinimal:
      "firstName,lastName,email,linkedInUrl,primaryRole,domains\nAvery,Lee,avery@example.com,https://linkedin.com/in/avery-lee,systems_architect,ai_architecture",
    universalExtended:
      "fullName,email,linkedInUrl,xingUrl,primaryRole,secondaryRoles,domains,seniority,availabilityWindow,engagementModes,languages,rateBand,externalId,dedupeKey\nAvery Lee,avery@example.com,https://linkedin.com/in/avery-lee,,systems_architect,solution_architect|data_architect,ai_architecture|observability,ic_senior,two_four_weeks,remote|hybrid,en|de,200-250,crm-123,\n",
    urlOnly:
      "fullName,linkedInUrl,externalId,dedupeKey\nAvery Lee,https://linkedin.com/in/avery-lee,crm-123,",
  },
  outreachTemplates: {
    linkedin_intro_v1: {
      label: "LinkedIn intro v1",
      message:
        "Hi {{name}}, we are staffing a role that matches your background. Would you be open to a quick intro call this week?",
    },
    linkedin_followup_v1: {
      label: "LinkedIn follow-up v1",
      message:
        "Hi {{name}}, just following up on the opportunity I shared earlier. Happy to send details if you are interested.",
    },
    email_intro_v1: {
      label: "Email intro v1",
      subject: "Opportunity: {{role}} for {{engagement}}",
      message:
        "Hi {{name}},\n\nWe are staffing a {{role}} role on {{engagement}}. Reply if you are open to a quick conversation.\n\nLucien",
    },
  },
  tooltips: {
    import:
      "Imports upsert profiles by email or profile URL and always create a TalentSignal record.",
    outreach:
      "Outreach sends email jobs when SMTP is configured or queues manual LinkedIn/Xing tasks.",
  },
};
