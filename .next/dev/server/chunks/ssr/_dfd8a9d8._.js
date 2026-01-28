module.exports = [
"[project]/lib/format.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatBytes",
    ()=>formatBytes,
    "formatDateShort",
    ()=>formatDateShort
]);
function formatDateShort(date) {
    return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit"
    }).format(date);
}
function formatBytes(bytes) {
    if (bytes < 1024) {
        return `${bytes} B`;
    }
    const units = [
        "KB",
        "MB",
        "GB"
    ];
    let size = bytes / 1024;
    let unitIndex = 0;
    while(size >= 1024 && unitIndex < units.length - 1){
        size /= 1024;
        unitIndex += 1;
    }
    return `${size.toFixed(size >= 10 ? 0 : 1)} ${units[unitIndex]}`;
}
}),
"[project]/lib/notifications.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNotifications",
    ()=>createNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
;
async function createNotifications({ orgId, recipientUserId, recipientRoles, recipientOrgId, type, title, body, entityType, entityId }) {
    if (recipientUserId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.create({
            data: {
                orgId,
                recipientUserId,
                type,
                title,
                body,
                entityType,
                entityId
            }
        });
        return;
    }
    if (!recipientRoles || recipientRoles.length === 0) {
        return;
    }
    const users = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
        where: {
            role: {
                in: recipientRoles
            },
            ...recipientOrgId ? {
                orgId: recipientOrgId
            } : {}
        },
        select: {
            id: true
        }
    });
    if (users.length === 0) {
        return;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.createMany({
        data: users.map((user)=>({
                orgId,
                recipientUserId: user.id,
                type,
                title,
                body,
                entityType,
                entityId
            }))
    });
}
}),
"[project]/lib/i18n.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClientLocale",
    ()=>getClientLocale,
    "getLocaleFromRequest",
    ()=>getLocaleFromRequest,
    "normalizeLocale",
    ()=>normalizeLocale,
    "supportedLocales",
    ()=>supportedLocales,
    "t",
    ()=>t
]);
const supportedLocales = [
    "en",
    "cs",
    "de",
    "it",
    "uk",
    "zh"
];
const localeAliases = {
    en: "en",
    cs: "cs",
    cz: "cs",
    de: "de",
    it: "it",
    uk: "uk",
    zh: "zh",
    "zh-cn": "zh",
    "zh-hans": "zh",
    "zh-sg": "zh",
    "zh-hant": "zh"
};
const dictionary = {
    en: {
        "marketplace.intake.title": "AI-assisted intake",
        "marketplace.intake.subtitle": "Describe the problem, constraints, and urgency",
        "marketplace.intake.description": "This is an assistive layer for scoping. We use your brief to map to the most relevant Lucien engagements.",
        "marketplace.intake.brief.label": "Problem brief",
        "marketplace.intake.brief.placeholder": "Problem, constraints, dependencies, urgency, and any required delivery mode.",
        "marketplace.intake.wordCount": "{count}/{max} words",
        "marketplace.intake.recommendationsNote": "Recommendations map to existing services only.",
        "marketplace.intake.button.recommend": "Get recommendations",
        "marketplace.intake.button.clear": "Clear",
        "marketplace.intake.error.briefRequired": "Provide a short problem brief to get recommendations.",
        "marketplace.intake.error.briefTooLong": "Please keep the brief under {max} words.",
        "marketplace.intake.error.generic": "We could not generate recommendations. Try again.",
        "marketplace.intake.error.noMatches": "No direct matches yet. Submit a scope request and we will map your problem.",
        "marketplace.intake.analyzing.title": "Analyzing brief",
        "marketplace.intake.analyzing.step.extract": "Extract",
        "marketplace.intake.analyzing.step.match": "Match",
        "marketplace.intake.analyzing.step.recommend": "Recommend",
        "marketplace.intake.results.title": "Recommended engagements",
        "marketplace.intake.results.primary": "Primary recommendation",
        "marketplace.intake.results.more": "Additional options",
        "marketplace.intake.fit.high": "High fit",
        "marketplace.intake.fit.medium": "Medium fit",
        "marketplace.intake.fit.low": "Low fit",
        "marketplace.intake.confidence": "Confidence {value}%",
        "marketplace.intake.reason.tagMatch": "Matches your stated priorities.",
        "marketplace.intake.reason.urgencyHigh": "Aligned with urgent timelines.",
        "marketplace.intake.reason.urgencyMedium": "Aligned with near-term timelines.",
        "marketplace.intake.reason.urgencyLow": "Aligned with strategic timelines.",
        "marketplace.intake.reason.deliveryMatch": "Delivery mode fits the stated constraints.",
        "marketplace.intake.reason.domainSecurity": "Addresses security and control risks.",
        "marketplace.intake.reason.domainCompliance": "Built for compliance and audit readiness.",
        "marketplace.intake.reason.domainIntegration": "Targets integration and interoperability gaps.",
        "marketplace.intake.reason.domainObservability": "Improves visibility and monitoring.",
        "marketplace.intake.reason.domainPerformance": "Focuses on performance and latency.",
        "marketplace.intake.reason.domainResilience": "Centers on resilience and response.",
        "marketplace.intake.reason.domainAI": "Supports AI and decision enablement.",
        "marketplace.intake.reason.domainGovernance": "Strengthens governance and scope control.",
        "marketplace.intake.card.view": "View details",
        "marketplace.intake.card.requestScope": "Request scope",
        "marketplace.intake.card.addShortlist": "Add to shortlist",
        "marketplace.intake.card.removeShortlist": "Remove",
        "marketplace.intake.shortlist.title": "Shortlist",
        "marketplace.intake.shortlist.helper": "Pick up to {max} services for a single scope request.",
        "marketplace.intake.shortlist.empty": "Add services to build a shortlist.",
        "marketplace.intake.shortlist.limit": "Shortlist limit reached.",
        "marketplace.intake.shortlist.open": "Open shortlist",
        "marketplace.intake.shortlist.close": "Close",
        "marketplace.intake.shortlist.cta": "Generate scope request",
        "marketplace.intake.sheet.title": "Generate scope request",
        "marketplace.intake.sheet.summary.label": "Extracted summary",
        "marketplace.intake.sheet.summary.placeholder": "Add or adjust the summary before requesting scope.",
        "marketplace.intake.sheet.selected.label": "Selected services",
        "marketplace.intake.sheet.continue": "Continue",
        "marketplace.intake.sheet.cancel": "Cancel",
        "marketplace.intake.summary.tags": "Tags: {tags}",
        "marketplace.intake.summary.urgency": "Urgency: {urgency}",
        "marketplace.intake.summary.constraints": "Constraints: {constraints}",
        "marketplace.intake.summary.context": "Context: {context}",
        "marketplace.intake.summary.general": "general",
        "marketplace.intake.summary.none": "none",
        "marketplace.intake.prefill.notice": "An intake summary was prepared from your brief. Edit the note if needed.",
        "footer.group.explore": "Explore",
        "footer.partners.title": "Partners & Experts",
        "footer.brand.tagline": "Systems thinking for mission-critical technology. Structured, measured, and aligned with enterprise realities.",
        "footer.link.marketplace": "Marketplace",
        "footer.link.how": "How We Work",
        "footer.link.procurement": "Procurement",
        "footer.link.security": "Security",
        "footer.link.insights": "Insights",
        "footer.link.about": "About",
        "footer.link.legal": "Legal",
        "footer.link.contact": "Contact",
        "footer.partners.join": "Join the network",
        "footer.partners.how": "How it works",
        "footer.partners.roles": "Roles",
        "footer.partners.companies": "Company partners",
        "footer.legal.copyright": "Copyright {year} {name}. All rights reserved.",
        "footer.legal.engagements": "Engagements are subject to lawful use and risk-managed delivery.",
        "footer.legal.domain": "Domain: {domain}",
        "partners.hero.eyebrow": "Expert network",
        "partners.hero.title": "Partners and experts for mission-critical delivery",
        "partners.hero.subtitle": "Share your signal profile and we will match you to scoped engagements with clear boundaries, governance, and auditability.",
        "partners.hero.cta.primary": "Submit signal",
        "partners.hero.cta.secondary": "How it works",
        "partners.signals.i4.title": "Industry 4.0 readiness",
        "partners.signals.i4.body": "OT/IT alignment, shopfloor telemetry, safe rollout.",
        "partners.signals.sc.title": "Supply chain clarity",
        "partners.signals.sc.body": "Constraints, risk, delivery windows, cost levers.",
        "partners.signals.mc.title": "Mission-critical delivery",
        "partners.signals.mc.body": "Scoped engagements, controlled change, audit trail.",
        "partners.how.title": "How it works",
        "partners.how.subtitle": "Three steps from signal to engagement.",
        "partners.how.step1.title": "Submit signal",
        "partners.how.step1.body": "Share role, domain focus, availability, and constraints.",
        "partners.how.step2.title": "Lucien review and match",
        "partners.how.step2.body": "We validate fit and match to scoped engagements and teams.",
        "partners.how.step3.title": "Engagement start",
        "partners.how.step3.body": "Onboarding runs through HR traceability with clear scope.",
        "partners.roles.title": "Open roles (examples)",
        "partners.roles.subtitle": "Primary role plus optional secondary specialties.",
        "partners.roles.group.leadership": "Leadership",
        "partners.roles.group.architecture": "Architecture",
        "partners.roles.group.engineering": "Engineering",
        "partners.roles.group.industry": "Industry 4.0 / OT",
        "partners.roles.group.supply_chain": "Supply Chain",
        "partners.roles.group.governance": "Governance / Risk",
        "partners.roles.group.product": "Product / Analysis",
        "partners.roles.leadership.fractional_cto": "Fractional CTO",
        "partners.roles.leadership.principal_architect": "Principal Architect",
        "partners.roles.leadership.program_director": "Program Director",
        "partners.roles.leadership.delivery_lead": "Delivery Lead",
        "partners.roles.leadership.engagement_manager": "Engagement Manager",
        "partners.roles.architecture.systems_architect": "Systems Architect",
        "partners.roles.architecture.enterprise_architect": "Enterprise Architect",
        "partners.roles.architecture.solution_architect": "Solution Architect",
        "partners.roles.architecture.integration_architect": "Integration Architect",
        "partners.roles.architecture.ot_it_architect": "OT/IT Architect",
        "partners.roles.architecture.security_architect": "Security Architect",
        "partners.roles.architecture.data_architect": "Data Architect",
        "partners.roles.architecture.platform_architect": "Platform Architect",
        "partners.roles.architecture.observability_architect": "Observability Architect",
        "partners.roles.engineering.backend_engineer": "Backend Engineer",
        "partners.roles.engineering.platform_engineer": "Platform Engineer",
        "partners.roles.engineering.sre": "SRE / Reliability Engineer",
        "partners.roles.engineering.devops_engineer": "DevOps Engineer",
        "partners.roles.engineering.data_engineer": "Data Engineer",
        "partners.roles.engineering.mlops_engineer": "MLOps Engineer",
        "partners.roles.engineering.fullstack_engineer": "Full-stack Engineer",
        "partners.roles.engineering.integration_engineer": "Integration Engineer",
        "partners.roles.industry.industry40_systems_engineer": "Industry 4.0 Systems Engineer",
        "partners.roles.industry.ot_security_engineer": "OT Security Engineer",
        "partners.roles.industry.ics_engineer": "ICS Engineer (SCADA/PLC)",
        "partners.roles.industry.mes_mom_engineer": "MES/MOM Engineer",
        "partners.roles.industry.industrial_data_engineer": "Industrial Data Engineer",
        "partners.roles.industry.manufacturing_systems_analyst": "Manufacturing Systems Analyst",
        "partners.roles.industry.automation_engineer": "Automation Engineer",
        "partners.roles.supply_chain.supply_chain_architect": "Supply Chain Architect",
        "partners.roles.supply_chain.supply_chain_analyst": "Supply Chain Analyst",
        "partners.roles.supply_chain.planning_scheduling_specialist": "Planning & Scheduling Specialist",
        "partners.roles.supply_chain.logistics_optimization_specialist": "Logistics Optimization Specialist",
        "partners.roles.supply_chain.procurement_supplier_risk_specialist": "Procurement & Supplier Risk Specialist",
        "partners.roles.supply_chain.inventory_optimization_analyst": "Inventory Optimization Analyst",
        "partners.roles.governance.grc_consultant": "GRC Consultant",
        "partners.roles.governance.compliance_lead": "Compliance Lead",
        "partners.roles.governance.risk_analyst": "Risk Analyst",
        "partners.roles.governance.control_owner_auditor": "Control Owner / Auditor",
        "partners.roles.product.product_manager_b2b": "Product Manager (B2B)",
        "partners.roles.product.business_analyst": "Business Analyst",
        "partners.roles.product.technical_writer_controlled_docs": "Technical Writer (controlled docs)",
        "partners.roles.product.ux_enterprise_systems": "UX for Enterprise Systems",
        "partners.companies.title": "Company partners",
        "partners.companies.body": "Consultancies, boutiques, and independent networks can submit a company signal to coordinate multi-role delivery. We focus on accountability, clear staffing, and scoped outcomes.",
        "partners.companies.highlight": "Company partners receive scoped briefs, talent alignment, and clear HR traceability before delivery begins.",
        "partners.join.title": "Signal profile",
        "partners.join.subtitle": "Stage 1 intake (2-3 minutes). No CV required.",
        "partners.form.fullName.label": "Full name",
        "partners.form.fullName.placeholder": "Name and surname",
        "partners.form.email.label": "Work email",
        "partners.form.email.placeholder": "name@company.com",
        "partners.form.locationTimezone.label": "Location / timezone",
        "partners.form.locationTimezone.placeholder": "City, country, or UTC offset",
        "partners.form.linkedIn.label": "LinkedIn URL",
        "partners.form.linkedIn.placeholder": "https://linkedin.com/in/...",
        "partners.form.primaryRole.label": "Primary role",
        "partners.form.primaryRole.placeholder": "Select a primary role",
        "partners.form.secondaryRoles.label": "Secondary roles (optional)",
        "partners.form.secondaryRoles.helper": "Select additional specialties to improve matching.",
        "partners.form.domains.label": "Domain focus",
        "partners.form.domains.helper": "Pick at least one domain to describe your signal.",
        "partners.form.seniority.label": "Seniority",
        "partners.form.seniority.placeholder": "Select seniority",
        "partners.form.availability.label": "Availability window",
        "partners.form.availability.placeholder": "Select availability",
        "partners.form.engagementModes.label": "Engagement modes",
        "partners.form.engagementModes.helper": "Select all that apply.",
        "partners.form.rateBand.label": "Rate band (optional)",
        "partners.form.rateBand.placeholder": "Select rate band",
        "partners.form.languages.label": "Languages",
        "partners.form.languages.helper": "Optional, to help match stakeholders.",
        "partners.form.honeypot.label": "Company website",
        "partners.form.consent.label": "I consent to Lucien storing my signal profile and contacting me for matching.",
        "partners.form.submit": "Submit signal",
        "partners.form.submitSticky": "Submit signal",
        "partners.form.submitting": "Submitting",
        "partners.form.error.generic": "We could not submit the signal. Please try again.",
        "partners.form.error.rateLimit": "Too many submissions. Please wait and try again.",
        "partners.form.error.invalid": "Check required fields and try again.",
        "partners.form.error.unavailable": "Signals are temporarily unavailable. Please try again shortly.",
        "partners.success.title": "Signal received",
        "partners.success.subtitle": "We will review and respond with next steps.",
        "partners.success.summary.title": "Your signal summary",
        "partners.success.next": "Lucien will confirm access if needed.",
        "partners.summary.fullName": "Name",
        "partners.summary.email": "Email",
        "partners.summary.locationTimezone": "Location / timezone",
        "partners.summary.linkedIn": "LinkedIn",
        "partners.summary.primaryRole": "Primary role",
        "partners.summary.secondaryRoles": "Secondary roles",
        "partners.summary.domains": "Domains",
        "partners.summary.seniority": "Seniority",
        "partners.summary.availability": "Availability",
        "partners.summary.engagementModes": "Engagement modes",
        "partners.summary.rateBand": "Rate band",
        "partners.summary.languages": "Languages",
        "partners.summary.none": "Not provided",
        "partners.domains.industry4": "Industry 4.0",
        "partners.domains.supply_chain": "Supply Chain",
        "partners.domains.ot_it": "OT/IT Integration",
        "partners.domains.ai_architecture": "AI Architecture",
        "partners.domains.security_grc": "Security & GRC",
        "partners.domains.observability": "Observability & Reliability",
        "partners.domains.governance": "Governance / Controls / Compliance",
        "partners.domains.data_realtime": "Data & Realtime Systems",
        "partners.domains.manufacturing_systems": "Manufacturing Systems",
        "partners.domains.mes_mom": "MES/MOM",
        "partners.domains.erp_integration": "ERP Integration",
        "partners.seniority.ic_senior": "IC Senior",
        "partners.seniority.staff": "Staff",
        "partners.seniority.principal": "Principal",
        "partners.seniority.lead": "Lead",
        "partners.seniority.director": "Director",
        "partners.availability.now": "Now",
        "partners.availability.two_four_weeks": "2-4 weeks",
        "partners.availability.one_two_months": "1-2 months",
        "partners.availability.three_plus_months": "3+ months",
        "partners.modes.remote": "Remote",
        "partners.modes.onsite": "On-site",
        "partners.modes.hybrid": "Hybrid",
        "partners.modes.travel": "Travel",
        "partners.rateBand.under_100": "Under 100",
        "partners.rateBand.100_150": "100-150",
        "partners.rateBand.150_200": "150-200",
        "partners.rateBand.200_plus": "200+",
        "partners.rateBand.negotiable": "Negotiable",
        "partners.languages.en": "English",
        "partners.languages.cs": "Czech",
        "partners.languages.de": "German",
        "partners.languages.it": "Italian",
        "partners.languages.uk": "Ukrainian",
        "partners.languages.zh": "Chinese (Simplified)",
        "portal.hr.talent.title": "Talent",
        "portal.hr.talent.subtitle": "Partner profiles and signal history.",
        "portal.hr.talent.filters.status": "Status",
        "portal.hr.talent.filters.domain": "Domain",
        "portal.hr.talent.filters.all": "All",
        "portal.hr.talent.filters.apply": "Apply",
        "portal.hr.talent.status.new": "New",
        "portal.hr.talent.status.reviewed": "Reviewed",
        "portal.hr.talent.status.approved": "Approved",
        "portal.hr.talent.status.archived": "Archived",
        "portal.hr.talent.contactStatus.not_contacted": "Not contacted",
        "portal.hr.talent.contactStatus.contacted": "Contacted",
        "portal.hr.talent.contactStatus.responded": "Responded",
        "portal.hr.talent.contactStatus.onboarded": "Onboarded",
        "portal.hr.talent.empty": "No talent profiles yet.",
        "portal.hr.talent.missing.title": "Talent tables are missing",
        "portal.hr.talent.missing.body": "Run the latest migrations to initialize partner tables.",
        "portal.hr.talent.missing.cta": "Run migrations",
        "portal.hr.talent.list.signals": "Signals",
        "portal.hr.talent.list.last": "Last updated",
        "portal.hr.talent.detail.title": "Profile detail",
        "portal.hr.talent.detail.signals": "Signal history",
        "portal.hr.talent.detail.assignments": "Assignments",
        "portal.hr.talent.detail.notes": "Notes",
        "portal.hr.talent.detail.update": "Update profile",
        "portal.hr.talent.detail.noSignals": "No signals yet.",
        "portal.hr.talent.detail.noAssignments": "No assignments recorded.",
        "portal.hr.talent.detail.status": "Status",
        "portal.hr.talent.detail.contactStatus": "Contact status",
        "portal.hr.talent.detail.empty": "Select a profile to view details."
    },
    cs: {},
    de: {},
    it: {},
    uk: {},
    zh: {}
};
const fallbackLocale = "en";
const dictionaryTable = dictionary;
const normalizeLocale = (value)=>{
    if (!value) return null;
    const cleaned = value.toLowerCase().trim();
    const direct = localeAliases[cleaned];
    if (direct) return direct;
    const base = cleaned.split(/[-_]/)[0];
    return localeAliases[base] ?? null;
};
const getCookieValue = (cookieHeader, name)=>{
    if (!cookieHeader) return null;
    const cookies = cookieHeader.split(";").map((entry)=>entry.trim());
    for (const cookie of cookies){
        const [key, ...rest] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(rest.join("="));
        }
    }
    return null;
};
const getLocaleFromAcceptLanguage = (header)=>{
    if (!header) return null;
    const locales = header.split(",").map((item)=>item.split(";")[0]?.trim());
    for (const locale of locales){
        const resolved = normalizeLocale(locale);
        if (resolved) return resolved;
    }
    return null;
};
async function getLocaleFromRequest(request) {
    if (request) {
        const url = new URL(request.url);
        const paramLocale = normalizeLocale(url.searchParams.get("lang"));
        if (paramLocale) return paramLocale;
        const cookieLocale = normalizeLocale(getCookieValue(request.headers.get("cookie"), "lang") ?? getCookieValue(request.headers.get("cookie"), "locale"));
        if (cookieLocale) return cookieLocale;
        const headerLocale = getLocaleFromAcceptLanguage(request.headers.get("accept-language"));
        if (headerLocale) return headerLocale;
        return fallbackLocale;
    }
    try {
        const { cookies, headers } = await __turbopack_context__.A("[project]/node_modules/next/headers.js [app-rsc] (ecmascript, async loader)");
        const cookieStore = await cookies();
        const storedLocale = cookieStore.get("lang")?.value ?? cookieStore.get("locale")?.value ?? null;
        const normalizedLocale = normalizeLocale(storedLocale);
        if (normalizedLocale) return normalizedLocale;
        const headerStore = await headers();
        const headerLocale = getLocaleFromAcceptLanguage(headerStore.get("accept-language"));
        if (headerLocale) return headerLocale;
    } catch  {
    // Fall through to fallback locale.
    }
    return fallbackLocale;
}
function getClientLocale(fallback = fallbackLocale) {
    if ("TURBOPACK compile-time truthy", 1) return fallback;
    //TURBOPACK unreachable
    ;
    const params = undefined;
    const paramLocale = undefined;
    const docLocale = undefined;
    const navLocale = undefined;
}
function t(key, arg1, arg2) {
    let params = {};
    let locale = fallbackLocale;
    if (typeof arg1 === "string") {
        locale = normalizeLocale(arg1) ?? fallbackLocale;
        if (arg2 && typeof arg2 === "object") {
            params = arg2;
        }
    } else if (arg1 && typeof arg1 === "object") {
        params = arg1;
        if (typeof arg2 === "string") {
            locale = normalizeLocale(arg2) ?? fallbackLocale;
        }
    }
    const table = dictionaryTable[locale] ?? dictionaryTable[fallbackLocale];
    const fallback = dictionaryTable[fallbackLocale];
    const template = table?.[key] ?? fallback?.[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (_, token)=>{
        const value = params[token];
        return value === undefined ? `{${token}}` : String(value);
    });
}
;
}),
"[project]/lib/talent/taxonomy.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "availabilityIds",
    ()=>availabilityIds,
    "availabilityOptions",
    ()=>availabilityOptions,
    "domainIds",
    ()=>domainIds,
    "domainOptions",
    ()=>domainOptions,
    "engagementModeIds",
    ()=>engagementModeIds,
    "engagementModeOptions",
    ()=>engagementModeOptions,
    "languageIds",
    ()=>languageIds,
    "languageOptions",
    ()=>languageOptions,
    "rateBandIds",
    ()=>rateBandIds,
    "rateBandOptions",
    ()=>rateBandOptions,
    "roleGroups",
    ()=>roleGroups,
    "roleIds",
    ()=>roleIds,
    "seniorityIds",
    ()=>seniorityIds,
    "seniorityOptions",
    ()=>seniorityOptions
]);
const roleGroups = [
    {
        id: "leadership",
        labelKey: "partners.roles.group.leadership",
        roles: [
            {
                id: "fractional_cto",
                labelKey: "partners.roles.leadership.fractional_cto"
            },
            {
                id: "principal_architect",
                labelKey: "partners.roles.leadership.principal_architect"
            },
            {
                id: "program_director",
                labelKey: "partners.roles.leadership.program_director"
            },
            {
                id: "delivery_lead",
                labelKey: "partners.roles.leadership.delivery_lead"
            },
            {
                id: "engagement_manager",
                labelKey: "partners.roles.leadership.engagement_manager"
            }
        ]
    },
    {
        id: "architecture",
        labelKey: "partners.roles.group.architecture",
        roles: [
            {
                id: "systems_architect",
                labelKey: "partners.roles.architecture.systems_architect"
            },
            {
                id: "enterprise_architect",
                labelKey: "partners.roles.architecture.enterprise_architect"
            },
            {
                id: "solution_architect",
                labelKey: "partners.roles.architecture.solution_architect"
            },
            {
                id: "integration_architect",
                labelKey: "partners.roles.architecture.integration_architect"
            },
            {
                id: "ot_it_architect",
                labelKey: "partners.roles.architecture.ot_it_architect"
            },
            {
                id: "security_architect",
                labelKey: "partners.roles.architecture.security_architect"
            },
            {
                id: "data_architect",
                labelKey: "partners.roles.architecture.data_architect"
            },
            {
                id: "platform_architect",
                labelKey: "partners.roles.architecture.platform_architect"
            },
            {
                id: "observability_architect",
                labelKey: "partners.roles.architecture.observability_architect"
            }
        ]
    },
    {
        id: "engineering",
        labelKey: "partners.roles.group.engineering",
        roles: [
            {
                id: "backend_engineer",
                labelKey: "partners.roles.engineering.backend_engineer"
            },
            {
                id: "platform_engineer",
                labelKey: "partners.roles.engineering.platform_engineer"
            },
            {
                id: "sre",
                labelKey: "partners.roles.engineering.sre"
            },
            {
                id: "devops_engineer",
                labelKey: "partners.roles.engineering.devops_engineer"
            },
            {
                id: "data_engineer",
                labelKey: "partners.roles.engineering.data_engineer"
            },
            {
                id: "mlops_engineer",
                labelKey: "partners.roles.engineering.mlops_engineer"
            },
            {
                id: "fullstack_engineer",
                labelKey: "partners.roles.engineering.fullstack_engineer"
            },
            {
                id: "integration_engineer",
                labelKey: "partners.roles.engineering.integration_engineer"
            }
        ]
    },
    {
        id: "industry",
        labelKey: "partners.roles.group.industry",
        roles: [
            {
                id: "industry40_systems_engineer",
                labelKey: "partners.roles.industry.industry40_systems_engineer"
            },
            {
                id: "ot_security_engineer",
                labelKey: "partners.roles.industry.ot_security_engineer"
            },
            {
                id: "ics_engineer",
                labelKey: "partners.roles.industry.ics_engineer"
            },
            {
                id: "mes_mom_engineer",
                labelKey: "partners.roles.industry.mes_mom_engineer"
            },
            {
                id: "industrial_data_engineer",
                labelKey: "partners.roles.industry.industrial_data_engineer"
            },
            {
                id: "manufacturing_systems_analyst",
                labelKey: "partners.roles.industry.manufacturing_systems_analyst"
            },
            {
                id: "automation_engineer",
                labelKey: "partners.roles.industry.automation_engineer"
            }
        ]
    },
    {
        id: "supply_chain",
        labelKey: "partners.roles.group.supply_chain",
        roles: [
            {
                id: "supply_chain_architect",
                labelKey: "partners.roles.supply_chain.supply_chain_architect"
            },
            {
                id: "supply_chain_analyst",
                labelKey: "partners.roles.supply_chain.supply_chain_analyst"
            },
            {
                id: "planning_scheduling_specialist",
                labelKey: "partners.roles.supply_chain.planning_scheduling_specialist"
            },
            {
                id: "logistics_optimization_specialist",
                labelKey: "partners.roles.supply_chain.logistics_optimization_specialist"
            },
            {
                id: "procurement_supplier_risk_specialist",
                labelKey: "partners.roles.supply_chain.procurement_supplier_risk_specialist"
            },
            {
                id: "inventory_optimization_analyst",
                labelKey: "partners.roles.supply_chain.inventory_optimization_analyst"
            }
        ]
    },
    {
        id: "governance",
        labelKey: "partners.roles.group.governance",
        roles: [
            {
                id: "grc_consultant",
                labelKey: "partners.roles.governance.grc_consultant"
            },
            {
                id: "compliance_lead",
                labelKey: "partners.roles.governance.compliance_lead"
            },
            {
                id: "risk_analyst",
                labelKey: "partners.roles.governance.risk_analyst"
            },
            {
                id: "control_owner_auditor",
                labelKey: "partners.roles.governance.control_owner_auditor"
            }
        ]
    },
    {
        id: "product",
        labelKey: "partners.roles.group.product",
        roles: [
            {
                id: "product_manager_b2b",
                labelKey: "partners.roles.product.product_manager_b2b"
            },
            {
                id: "business_analyst",
                labelKey: "partners.roles.product.business_analyst"
            },
            {
                id: "technical_writer_controlled_docs",
                labelKey: "partners.roles.product.technical_writer_controlled_docs"
            },
            {
                id: "ux_enterprise_systems",
                labelKey: "partners.roles.product.ux_enterprise_systems"
            }
        ]
    }
];
const domainOptions = [
    {
        id: "industry4",
        labelKey: "partners.domains.industry4"
    },
    {
        id: "supply_chain",
        labelKey: "partners.domains.supply_chain"
    },
    {
        id: "ot_it",
        labelKey: "partners.domains.ot_it"
    },
    {
        id: "ai_architecture",
        labelKey: "partners.domains.ai_architecture"
    },
    {
        id: "security_grc",
        labelKey: "partners.domains.security_grc"
    },
    {
        id: "observability",
        labelKey: "partners.domains.observability"
    },
    {
        id: "governance",
        labelKey: "partners.domains.governance"
    },
    {
        id: "data_realtime",
        labelKey: "partners.domains.data_realtime"
    },
    {
        id: "manufacturing_systems",
        labelKey: "partners.domains.manufacturing_systems"
    },
    {
        id: "mes_mom",
        labelKey: "partners.domains.mes_mom"
    },
    {
        id: "erp_integration",
        labelKey: "partners.domains.erp_integration"
    }
];
const seniorityOptions = [
    {
        id: "ic_senior",
        labelKey: "partners.seniority.ic_senior"
    },
    {
        id: "staff",
        labelKey: "partners.seniority.staff"
    },
    {
        id: "principal",
        labelKey: "partners.seniority.principal"
    },
    {
        id: "lead",
        labelKey: "partners.seniority.lead"
    },
    {
        id: "director",
        labelKey: "partners.seniority.director"
    }
];
const availabilityOptions = [
    {
        id: "now",
        labelKey: "partners.availability.now"
    },
    {
        id: "two_four_weeks",
        labelKey: "partners.availability.two_four_weeks"
    },
    {
        id: "one_two_months",
        labelKey: "partners.availability.one_two_months"
    },
    {
        id: "three_plus_months",
        labelKey: "partners.availability.three_plus_months"
    }
];
const engagementModeOptions = [
    {
        id: "remote",
        labelKey: "partners.modes.remote"
    },
    {
        id: "onsite",
        labelKey: "partners.modes.onsite"
    },
    {
        id: "hybrid",
        labelKey: "partners.modes.hybrid"
    },
    {
        id: "travel",
        labelKey: "partners.modes.travel"
    }
];
const rateBandOptions = [
    {
        id: "under_100",
        labelKey: "partners.rateBand.under_100"
    },
    {
        id: "100_150",
        labelKey: "partners.rateBand.100_150"
    },
    {
        id: "150_200",
        labelKey: "partners.rateBand.150_200"
    },
    {
        id: "200_plus",
        labelKey: "partners.rateBand.200_plus"
    },
    {
        id: "negotiable",
        labelKey: "partners.rateBand.negotiable"
    }
];
const languageOptions = [
    {
        id: "en",
        labelKey: "partners.languages.en"
    },
    {
        id: "cs",
        labelKey: "partners.languages.cs"
    },
    {
        id: "de",
        labelKey: "partners.languages.de"
    },
    {
        id: "it",
        labelKey: "partners.languages.it"
    },
    {
        id: "uk",
        labelKey: "partners.languages.uk"
    },
    {
        id: "zh",
        labelKey: "partners.languages.zh"
    }
];
const roleIds = roleGroups.flatMap((group)=>group.roles.map((role)=>role.id));
const domainIds = domainOptions.map((option)=>option.id);
const seniorityIds = seniorityOptions.map((option)=>option.id);
const availabilityIds = availabilityOptions.map((option)=>option.id);
const engagementModeIds = engagementModeOptions.map((option)=>option.id);
const rateBandIds = rateBandOptions.map((option)=>option.id);
const languageIds = languageOptions.map((option)=>option.id);
}),
"[project]/app/portal/hr/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$$RSC_SERVER_ACTION_0",
    ()=>$$RSC_SERVER_ACTION_0,
    "$$RSC_SERVER_ACTION_1",
    ()=>$$RSC_SERVER_ACTION_1,
    "$$RSC_SERVER_ACTION_2",
    ()=>$$RSC_SERVER_ACTION_2,
    "$$RSC_SERVER_ACTION_3",
    ()=>$$RSC_SERVER_ACTION_3,
    "$$RSC_SERVER_ACTION_4",
    ()=>$$RSC_SERVER_ACTION_4,
    "default",
    ()=>HrPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"408b40be600048c7adbf22a43e30c52b2edf822085":"$$RSC_SERVER_ACTION_0","408e196408bb0c1bb01ec99cc19061b199bdf415a5":"$$RSC_SERVER_ACTION_4","4092a31b5fcdb78883ef09bec08ec4be3027b10b4e":"$$RSC_SERVER_ACTION_2","40c940d09b13a923b7028f1a832815c4f273442875":"$$RSC_SERVER_ACTION_3","40e7c9cb1c9214beb812fb74c4021f81340dd73447":"$$RSC_SERVER_ACTION_1"},"",""] */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/notifications.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/audit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/talent/taxonomy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/portal.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const migrationSteps = [
    "npm run db:migrate",
    "npm run db:seed",
    "npm run db:import (optional: import dev.db)"
];
const talentStatusOptions = [
    "NEW",
    "REVIEWED",
    "APPROVED",
    "ARCHIVED"
];
const talentContactStatusOptions = [
    "NOT_CONTACTED",
    "CONTACTED",
    "RESPONDED",
    "ONBOARDED"
];
const isMissingTableError = (error)=>{
    if (error instanceof __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Prisma"].PrismaClientKnownRequestError) {
        return error.code === "P2021" || error.code === "P2022";
    }
    if (error instanceof Error) {
        return error.message.includes("does not exist") || error.message.includes("no such table");
    }
    return false;
};
const $$RSC_SERVER_ACTION_0 = async function createAssignment(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            id: session.user.id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireLucienStaff"])(user?.role);
    const engagementId = String(formData.get("engagementId") || "");
    const memberUserId = String(formData.get("userId") || "");
    const roleTitle = String(formData.get("roleTitle") || "");
    const allocationRaw = formData.get("allocationHours");
    const allocationHours = allocationRaw ? Number(allocationRaw) : null;
    const rateRaw = formData.get("rateHourly");
    const rateHourly = rateRaw ? Number(rateRaw) : null;
    const startDateRaw = String(formData.get("startDate") || "");
    const endDateRaw = String(formData.get("endDate") || "");
    const clientVisible = formData.get("clientVisible") === "on";
    if (!engagementId || !memberUserId || !roleTitle) {
        return;
    }
    const engagement = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagement.findUnique({
        where: {
            id: engagementId
        }
    });
    if (!engagement) return;
    const member = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagementMember.create({
        data: {
            orgId: engagement.orgId,
            engagementId,
            userId: memberUserId,
            roleTitle,
            allocationHours: Number.isFinite(allocationHours) ? allocationHours : null,
            rateHourly: Number.isFinite(rateHourly) ? rateHourly : null,
            startDate: startDateRaw ? new Date(startDateRaw) : null,
            endDate: endDateRaw ? new Date(endDateRaw) : null,
            clientVisible
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
        orgId: engagement.orgId,
        userId: user?.id,
        action: "hr_member_added",
        resourceType: "EngagementMember",
        resourceId: member.id,
        meta: {
            engagementId
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNotifications"])({
        orgId: engagement.orgId,
        recipientRoles: [
            "org_admin"
        ],
        recipientOrgId: engagement.orgId,
        type: "hr",
        title: "Team member added",
        body: "A new HR assignment was recorded for the engagement.",
        entityType: "EngagementMember",
        entityId: member.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/portal/hr");
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "408b40be600048c7adbf22a43e30c52b2edf822085", null);
var createAssignment = $$RSC_SERVER_ACTION_0;
const $$RSC_SERVER_ACTION_1 = async function createTimeEntry(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            id: session.user.id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireLucienStaff"])(user?.role);
    const engagementId = String(formData.get("engagementId") || "");
    const entryUserId = String(formData.get("userId") || "");
    const roleTitle = String(formData.get("roleTitle") || "");
    const hours = Number(formData.get("hours"));
    const entryDateRaw = String(formData.get("entryDate") || "");
    const approved = formData.get("approved") === "on";
    if (!engagementId || !entryUserId || !Number.isFinite(hours)) {
        return;
    }
    const engagement = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagement.findUnique({
        where: {
            id: engagementId
        }
    });
    if (!engagement) return;
    const entryDate = entryDateRaw ? new Date(entryDateRaw) : new Date();
    const entry = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].timeEntry.create({
        data: {
            orgId: engagement.orgId,
            engagementId,
            userId: entryUserId,
            entryDate,
            hours,
            roleTitle: roleTitle || null,
            note: String(formData.get("note") || "") || null,
            approvedAt: approved ? new Date() : null,
            approvedByUserId: approved ? user?.id ?? null : null
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
        orgId: engagement.orgId,
        userId: user?.id,
        action: "hr_time_logged",
        resourceType: "TimeEntry",
        resourceId: entry.id,
        meta: {
            engagementId,
            hours
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNotifications"])({
        orgId: engagement.orgId,
        recipientRoles: [
            "org_admin"
        ],
        recipientOrgId: engagement.orgId,
        type: "hr",
        title: "Time entry logged",
        body: "New HR time entry recorded.",
        entityType: "TimeEntry",
        entityId: entry.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/portal/hr");
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_1, "40e7c9cb1c9214beb812fb74c4021f81340dd73447", null);
var createTimeEntry = $$RSC_SERVER_ACTION_1;
const $$RSC_SERVER_ACTION_2 = async function createTask(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            id: session.user.id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireLucienStaff"])(user?.role);
    const engagementId = String(formData.get("engagementId") || "");
    const title = String(formData.get("title") || "");
    const statusRaw = String(formData.get("status") || "todo");
    const status = [
        "todo",
        "in_progress",
        "blocked",
        "done"
    ].includes(statusRaw) ? statusRaw : "todo";
    const ownerId = String(formData.get("ownerId") || "");
    const dueDateRaw = String(formData.get("dueDate") || "");
    if (!engagementId || !title) {
        return;
    }
    const engagement = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagement.findUnique({
        where: {
            id: engagementId
        }
    });
    if (!engagement) return;
    const task = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].deliveryTask.create({
        data: {
            orgId: engagement.orgId,
            engagementId,
            title,
            status,
            ownerId: ownerId || null,
            dueDate: dueDateRaw ? new Date(dueDateRaw) : null
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
        orgId: engagement.orgId,
        userId: user?.id,
        action: "hr_work_item_created",
        resourceType: "DeliveryTask",
        resourceId: task.id,
        meta: {
            engagementId
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNotifications"])({
        orgId: engagement.orgId,
        recipientRoles: [
            "org_admin"
        ],
        recipientOrgId: engagement.orgId,
        type: "hr",
        title: "Work item added",
        body: "A new HR work item was recorded.",
        entityType: "DeliveryTask",
        entityId: task.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/portal/hr");
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_2, "4092a31b5fcdb78883ef09bec08ec4be3027b10b4e", null);
var createTask = $$RSC_SERVER_ACTION_2;
const $$RSC_SERVER_ACTION_3 = async function createTerm(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            id: session.user.id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireLucienStaff"])(user?.role);
    const engagementId = String(formData.get("engagementId") || "");
    const title = String(formData.get("title") || "");
    const summary = String(formData.get("summary") || "");
    const statusRaw = String(formData.get("status") || "draft");
    const status = [
        "draft",
        "active",
        "superseded"
    ].includes(statusRaw) ? statusRaw : "draft";
    const effectiveDateRaw = String(formData.get("effectiveDate") || "");
    const endDateRaw = String(formData.get("endDate") || "");
    if (!engagementId || !title || !summary) {
        return;
    }
    const engagement = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagement.findUnique({
        where: {
            id: engagementId
        }
    });
    if (!engagement) return;
    const term = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagementTerm.create({
        data: {
            orgId: engagement.orgId,
            engagementId,
            title,
            summary,
            status,
            effectiveDate: effectiveDateRaw ? new Date(effectiveDateRaw) : null,
            endDate: endDateRaw ? new Date(endDateRaw) : null
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
        orgId: engagement.orgId,
        userId: user?.id,
        action: "hr_term_added",
        resourceType: "EngagementTerm",
        resourceId: term.id,
        meta: {
            engagementId
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$notifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNotifications"])({
        orgId: engagement.orgId,
        recipientRoles: [
            "org_admin"
        ],
        recipientOrgId: engagement.orgId,
        type: "hr",
        title: "Contract term added",
        body: "New HR contract terms were recorded.",
        entityType: "EngagementTerm",
        entityId: term.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/portal/hr");
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_3, "40c940d09b13a923b7028f1a832815c4f273442875", null);
var createTerm = $$RSC_SERVER_ACTION_3;
const $$RSC_SERVER_ACTION_4 = async function updateTalentProfile(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            id: session.user.id
        }
    });
    if (user?.role !== "lucien_admin") {
        return;
    }
    const profileId = String(formData.get("profileId") || "");
    const statusRaw = String(formData.get("status") || "");
    const contactStatusRaw = String(formData.get("contactStatus") || "");
    const notesRaw = String(formData.get("notes") || "");
    if (!profileId) return;
    const status = talentStatusOptions.includes(statusRaw) ? statusRaw : null;
    const contactStatus = talentContactStatusOptions.includes(contactStatusRaw) ? contactStatusRaw : null;
    const notes = notesRaw.trim() ? notesRaw.trim() : null;
    const data = {
        notes
    };
    if (status) data.status = status;
    if (contactStatus) {
        data.contactStatus = contactStatus;
        data.lastContactedAt = contactStatus === "NOT_CONTACTED" ? null : new Date();
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentProfile.update({
        where: {
            id: profileId
        },
        data
    });
    if (user.orgId) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$audit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAuditEvent"])({
            orgId: user.orgId,
            userId: user.id,
            action: "talent_profile_updated",
            resourceType: "TalentProfile",
            resourceId: profileId,
            meta: {
                status,
                contactStatus
            }
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/portal/hr");
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_4, "408e196408bb0c1bb01ec99cc19061b199bdf415a5", null);
var updateTalentProfile = $$RSC_SERVER_ACTION_4;
async function HrPage({ searchParams }) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requirePortalSession"])();
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$portal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrgScope"])(session.user.role, session.user.orgId);
    const isLucienStaff = session.user.role === "lucien_admin" || session.user.role === "lucien_operator";
    const isLucienAdmin = session.user.role === "lucien_admin";
    const getSearchParam = (value)=>typeof value === "string" ? value : Array.isArray(value) ? value[0] : undefined;
    const talentStatusParam = getSearchParam(searchParams?.talentStatus);
    const talentDomainParam = getSearchParam(searchParams?.talentDomain);
    const talentStatusFilterRaw = talentStatusOptions.includes(talentStatusParam) ? talentStatusParam : "all";
    const talentDomainFilterRaw = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainOptions"].some((option)=>option.id === talentDomainParam) ? talentDomainParam : "all";
    const talentId = getSearchParam(searchParams?.talent);
    const talentStatusLabelMap = {
        NEW: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.status.new"),
        REVIEWED: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.status.reviewed"),
        APPROVED: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.status.approved"),
        ARCHIVED: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.status.archived")
    };
    const talentContactStatusLabelMap = {
        NOT_CONTACTED: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.contactStatus.not_contacted"),
        CONTACTED: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.contactStatus.contacted"),
        RESPONDED: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.contactStatus.responded"),
        ONBOARDED: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.contactStatus.onboarded")
    };
    const roleLabelMap = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roleGroups"].flatMap((group)=>group.roles.map((role)=>[
                role.id,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(role.labelKey)
            ])));
    const domainLabelMap = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainOptions"].map((option)=>[
            option.id,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(option.labelKey)
        ]));
    const formatTalentList = (items, map)=>items.length ? items.map((item)=>map.get(item) ?? item).join(", ") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("partners.summary.none");
    let engagements = [];
    let members = [];
    let timeEntries = [];
    let tasks = [];
    let terms = [];
    let users = [];
    let talentProfiles = [];
    let talentDetail = null;
    let talentMissing = false;
    try {
        const memberScope = isLucienStaff ? scope : {
            ...scope,
            clientVisible: true
        };
        [engagements, members, timeEntries, tasks, terms, users] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagement.findMany({
                where: scope,
                orderBy: {
                    updatedAt: "desc"
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagementMember.findMany({
                where: memberScope,
                include: {
                    user: true,
                    engagement: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].timeEntry.findMany({
                where: scope,
                include: {
                    user: true,
                    engagement: true
                },
                orderBy: {
                    entryDate: "desc"
                },
                take: 50
            }),
            isLucienStaff ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].deliveryTask.findMany({
                where: scope,
                include: {
                    owner: true,
                    engagement: true
                },
                orderBy: {
                    updatedAt: "desc"
                }
            }) : Promise.resolve([]),
            isLucienStaff ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].engagementTerm.findMany({
                where: scope,
                include: {
                    engagement: true
                },
                orderBy: {
                    updatedAt: "desc"
                }
            }) : Promise.resolve([]),
            isLucienStaff ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
                where: scope,
                orderBy: {
                    name: "asc"
                }
            }) : Promise.resolve([])
        ]);
    } catch (error) {
        if (isMissingTableError(error)) {
            if (isLucienStaff) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-[0.3em] text-slate",
                                    children: "HR oversight"
                                }, void 0, false, {
                                    fileName: "[project]/app/portal/hr/page.tsx",
                                    lineNumber: 495,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-semibold text-ash",
                                    children: "HR module isn’t initialized"
                                }, void 0, false, {
                                    fileName: "[project]/app/portal/hr/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted",
                                    children: "The database schema is missing HR tables. Run the migration steps below to initialize the module."
                                }, void 0, false, {
                                    fileName: "[project]/app/portal/hr/page.tsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portal/hr/page.tsx",
                            lineNumber: 494,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "surface-card space-y-3 rounded-2xl border border-line/80 bg-soft p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                    children: "Run migration"
                                }, void 0, false, {
                                    fileName: "[project]/app/portal/hr/page.tsx",
                                    lineNumber: 507,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "whitespace-pre-wrap rounded-xl border border-line/80 bg-ink px-4 py-3 text-xs text-ash",
                                    children: migrationSteps.join("\n")
                                }, void 0, false, {
                                    fileName: "[project]/app/portal/hr/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/portal",
                                    className: "btn-animate btn-secondary inline-flex rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                    children: "Back to portal"
                                }, void 0, false, {
                                    fileName: "[project]/app/portal/hr/page.tsx",
                                    lineNumber: 513,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/portal/hr/page.tsx",
                            lineNumber: 506,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/portal/hr/page.tsx",
                    lineNumber: 493,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.3em] text-slate",
                        children: "HR overview"
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 526,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold text-ash",
                        children: "HR data unavailable"
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 529,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted",
                        children: "HR data will appear once the portal database is initialized."
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 532,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portal/hr/page.tsx",
                lineNumber: 525,
                columnNumber: 9
            }, this);
        }
        throw error;
    }
    if (isLucienAdmin) {
        const statusFilter = talentStatusOptions.includes(talentStatusFilterRaw) ? talentStatusFilterRaw : null;
        const domainFilter = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainOptions"].some((option)=>option.id === talentDomainFilterRaw) ? talentDomainFilterRaw : null;
        try {
            talentProfiles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentProfile.findMany({
                where: {
                    ...statusFilter ? {
                        status: statusFilter
                    } : {},
                    ...domainFilter ? {
                        domains: {
                            has: domainFilter
                        }
                    } : {}
                },
                include: {
                    _count: {
                        select: {
                            signals: true
                        }
                    }
                },
                orderBy: {
                    updatedAt: "desc"
                }
            });
            if (talentId) {
                talentDetail = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].talentProfile.findUnique({
                    where: {
                        id: talentId
                    },
                    include: {
                        signals: {
                            orderBy: {
                                createdAt: "desc"
                            }
                        },
                        assignments: {
                            include: {
                                engagement: true
                            },
                            orderBy: {
                                updatedAt: "desc"
                            }
                        }
                    }
                });
            }
        } catch (error) {
            if (isMissingTableError(error)) {
                talentMissing = true;
            } else {
                throw error;
            }
        }
    }
    const membersByEngagement = members.reduce((acc, item)=>{
        acc[item.engagementId] = acc[item.engagementId] ?? [];
        acc[item.engagementId].push(item);
        return acc;
    }, {});
    const tasksByEngagement = tasks.reduce((acc, item)=>{
        acc[item.engagementId] = acc[item.engagementId] ?? [];
        acc[item.engagementId].push(item);
        return acc;
    }, {});
    const entriesByEngagement = timeEntries.reduce((acc, item)=>{
        acc[item.engagementId] = acc[item.engagementId] ?? [];
        acc[item.engagementId].push(item);
        return acc;
    }, {});
    const termsByEngagement = terms.reduce((acc, item)=>{
        acc[item.engagementId] = acc[item.engagementId] ?? [];
        acc[item.engagementId].push(item);
        return acc;
    }, {});
    const engagementSummaries = engagements.map((engagement)=>{
        const engagementTasks = tasksByEngagement[engagement.id] ?? [];
        const totalTasks = engagementTasks.length;
        const completedTasks = engagementTasks.filter((task)=>task.status === "done").length;
        const engagementEntries = entriesByEngagement[engagement.id] ?? [];
        const hoursLogged = engagementEntries.reduce((total, entry)=>total + entry.hours, 0);
        return {
            engagement,
            totalTasks,
            completedTasks,
            hoursLogged,
            latestEntryDate: engagementEntries[0]?.entryDate ?? null
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.3em] text-slate",
                        children: "HR oversight"
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold text-ash",
                        children: "People, time, responsibilities, and engagement terms"
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 643,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted",
                        children: "Track staffing, time entries, responsibilities, and engagement terms with audit-ready clarity."
                    }, void 0, false, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 646,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portal/hr/page.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this),
            isLucienStaff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: createAssignment,
                        className: "surface-card space-y-4 rounded-2xl border border-line/80 bg-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm uppercase tracking-[0.2em] text-slate",
                                children: "Assign team member"
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 658,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 text-sm text-slate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Engagement",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "engagementId",
                                                required: true,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select engagement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 669,
                                                        columnNumber: 19
                                                    }, this),
                                                    engagements.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: item.id,
                                                            children: item.title
                                                        }, item.id, false, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 664,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 662,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Team member",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "userId",
                                                required: true,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select user"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 19
                                                    }, this),
                                                    users.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: item.id,
                                                            children: item.name || item.email
                                                        }, item.id, false, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 686,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 679,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 677,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Role / responsibility",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "roleTitle",
                                                required: true,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 694,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 692,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Hours per week (optional)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "allocationHours",
                                                min: 1,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 702,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 700,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Hourly rate (optional)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "rateHourly",
                                                min: 0,
                                                step: "0.01",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 711,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 709,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Start date (optional)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                name: "startDate",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 721,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 719,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "End date (optional)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                name: "endDate",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 729,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 727,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 text-xs text-slate",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                name: "clientVisible",
                                                defaultChecked: true,
                                                className: "h-4 w-4 rounded border border-line bg-ink"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 736,
                                                columnNumber: 17
                                            }, this),
                                            "Visible to client"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 735,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                children: "Add assignment"
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 745,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 654,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: createTimeEntry,
                        className: "surface-card space-y-4 rounded-2xl border border-line/80 bg-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm uppercase tracking-[0.2em] text-slate",
                                children: "Log time entry"
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 757,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 text-sm text-slate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Engagement",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "engagementId",
                                                required: true,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select engagement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 768,
                                                        columnNumber: 19
                                                    }, this),
                                                    engagements.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: item.id,
                                                            children: item.title
                                                        }, item.id, false, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 770,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 763,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 761,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Contributor",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "userId",
                                                required: true,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select user"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 783,
                                                        columnNumber: 19
                                                    }, this),
                                                    users.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: item.id,
                                                            children: item.name || item.email
                                                        }, item.id, false, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 785,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 778,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 776,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Hours",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                step: "0.25",
                                                name: "hours",
                                                required: true,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 793,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 791,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Date",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                name: "entryDate",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 803,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 801,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Role context (optional)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "roleTitle",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 811,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 809,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 text-xs text-slate",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                name: "approved",
                                                defaultChecked: true,
                                                className: "h-4 w-4 rounded border border-line bg-ink"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 817,
                                                columnNumber: 17
                                            }, this),
                                            "Approved"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 816,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 760,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                children: "Add time entry"
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 826,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 753,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: createTask,
                        className: "surface-card space-y-4 rounded-2xl border border-line/80 bg-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm uppercase tracking-[0.2em] text-slate",
                                children: "Add work item"
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 838,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 text-sm text-slate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Engagement",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "engagementId",
                                                required: true,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select engagement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 19
                                                    }, this),
                                                    engagements.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: item.id,
                                                            children: item.title
                                                        }, item.id, false, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 851,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 844,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 842,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Task title",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "title",
                                                required: true,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 859,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 857,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Owner (optional)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "ownerId",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Unassigned"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 871,
                                                        columnNumber: 19
                                                    }, this),
                                                    users.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: item.id,
                                                            children: item.name || item.email
                                                        }, item.id, false, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 873,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 867,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 865,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Status",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "status",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "todo",
                                                        children: "To do"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 885,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "in_progress",
                                                        children: "In progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 886,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "blocked",
                                                        children: "Blocked"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "done",
                                                        children: "Done"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 881,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 879,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Due date (optional)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                name: "dueDate",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 893,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 891,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 841,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                children: "Add work item"
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 900,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 834,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: createTerm,
                        className: "surface-card space-y-4 rounded-2xl border border-line/80 bg-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm uppercase tracking-[0.2em] text-slate",
                                children: "Add contract terms"
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 912,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 text-sm text-slate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Engagement",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "engagementId",
                                                required: true,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select engagement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 19
                                                    }, this),
                                                    engagements.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: item.id,
                                                            children: item.title
                                                        }, item.id, false, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 925,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 918,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 916,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Term title",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "title",
                                                required: true,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 933,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 931,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Summary",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "summary",
                                                required: true,
                                                rows: 3,
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 941,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 939,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "space-y-2",
                                        children: [
                                            "Status",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "status",
                                                className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "draft",
                                                        children: "Draft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 954,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "active",
                                                        children: "Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 955,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "superseded",
                                                        children: "Superseded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 956,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 950,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 948,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 915,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                children: "Add contract term"
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 960,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 908,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portal/hr/page.tsx",
                lineNumber: 653,
                columnNumber: 9
            }, this),
            engagementSummaries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "surface-card rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted",
                children: "No HR data yet. Engagement HR records will appear here as they are created."
            }, void 0, false, {
                fileName: "[project]/app/portal/hr/page.tsx",
                lineNumber: 971,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: engagementSummaries.map((summary)=>{
                    const engagement = summary.engagement;
                    const engagementMembers = membersByEngagement[engagement.id] ?? [];
                    const engagementTasks = tasksByEngagement[engagement.id] ?? [];
                    const engagementEntries = entriesByEngagement[engagement.id] ?? [];
                    const engagementTerms = termsByEngagement[engagement.id] ?? [];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "surface-card rounded-2xl border border-line/80 bg-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-ash",
                                                children: engagement.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 991,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate",
                                                children: engagement.serviceSlug ?? "General engagement"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 994,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 990,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate",
                                        children: [
                                            isLucienStaff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-line px-3 py-1",
                                                        children: engagement.stage.replace("_", " ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1001,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-line px-3 py-1",
                                                        children: engagement.status.replace("_", " ")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1004,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            isLucienStaff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-line px-3 py-1",
                                                children: [
                                                    summary.completedTasks,
                                                    "/",
                                                    summary.totalTasks || 0,
                                                    " tasks"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1010,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-line px-3 py-1",
                                                children: [
                                                    summary.hoursLogged.toFixed(1),
                                                    "h logged"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 998,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 989,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-6 md:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-sm text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "People assigned"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1022,
                                                columnNumber: 21
                                            }, this),
                                            engagementMembers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No assignments recorded."
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1026,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: engagementMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-ash",
                                                                children: member.user.name || member.user.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                                lineNumber: 1031,
                                                                columnNumber: 29
                                                            }, this),
                                                            " ",
                                                            "— ",
                                                            member.roleTitle,
                                                            member.allocationHours ? ` (${member.allocationHours}h/week)` : "",
                                                            isLucienStaff && member.rateHourly ? ` · €${member.rateHourly}/hr` : "",
                                                            isLucienStaff && (member.startDate || member.endDate) ? ` · ${member.startDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateShort"])(member.startDate) : "Start TBD"} → ${member.endDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateShort"])(member.endDate) : "Ongoing"}` : "",
                                                            isLucienStaff && !member.clientVisible ? " · Internal only" : ""
                                                        ]
                                                    }, member.id, true, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1030,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1028,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 1021,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-sm text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "Time tracking"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1061,
                                                columnNumber: 21
                                            }, this),
                                            isLucienStaff ? engagementEntries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No time entries yet."
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1066,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: engagementEntries.slice(0, 4).map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-ash",
                                                                children: entry.user.name || entry.user.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                                lineNumber: 1071,
                                                                columnNumber: 31
                                                            }, this),
                                                            " ",
                                                            "— ",
                                                            entry.hours,
                                                            "h on",
                                                            " ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateShort"])(entry.entryDate),
                                                            entry.roleTitle ? ` (${entry.roleTitle})` : "",
                                                            ` · ${entry.approvedAt ? "Approved" : "Pending"}`
                                                        ]
                                                    }, entry.id, true, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1070,
                                                        columnNumber: 29
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1068,
                                                columnNumber: 25
                                            }, this) : engagementEntries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No time entries yet."
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1083,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Total hours: ",
                                                            summary.hoursLogged.toFixed(1),
                                                            "h"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1086,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Latest entry:",
                                                            " ",
                                                            summary.latestEntryDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateShort"])(summary.latestEntryDate) : "—"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1089,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1085,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 1060,
                                        columnNumber: 19
                                    }, this),
                                    isLucienStaff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-sm text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "Work items"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1100,
                                                columnNumber: 23
                                            }, this),
                                            engagementTasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No work items recorded."
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1104,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: engagementTasks.slice(0, 4).map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-ash",
                                                                children: task.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                                lineNumber: 1109,
                                                                columnNumber: 31
                                                            }, this),
                                                            " ",
                                                            "— ",
                                                            task.status.replace("_", " ")
                                                        ]
                                                    }, task.id, true, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1108,
                                                        columnNumber: 29
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1106,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 21
                                    }, this),
                                    isLucienStaff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-sm text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                children: "Contract terms"
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1119,
                                                columnNumber: 23
                                            }, this),
                                            engagementTerms.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No contract terms recorded."
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1123,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: engagementTerms.slice(0, 3).map((term)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-ash",
                                                                children: term.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                                lineNumber: 1128,
                                                                columnNumber: 31
                                                            }, this),
                                                            " ",
                                                            "— ",
                                                            term.status
                                                        ]
                                                    }, term.id, true, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1127,
                                                        columnNumber: 29
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1125,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 1118,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 1020,
                                columnNumber: 17
                            }, this)
                        ]
                    }, engagement.id, true, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 985,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/portal/hr/page.tsx",
                lineNumber: 976,
                columnNumber: 9
            }, this),
            isLucienAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-6 border-t border-line/70 pt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-[0.3em] text-slate",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.title")
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 1146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.subtitle")
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 1149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 1145,
                        columnNumber: 11
                    }, this),
                    talentMissing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "surface-card space-y-3 rounded-2xl border border-line/80 bg-soft p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.missing.title")
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 1154,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.missing.body")
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 1157,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "whitespace-pre-wrap rounded-xl border border-line/80 bg-ink px-4 py-3 text-xs text-ash",
                                children: migrationSteps.join("\n")
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 1160,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/portal",
                                className: "btn-animate btn-secondary inline-flex rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.missing.cta")
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 1163,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 1153,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-[1.2fr_0.8fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        method: "get",
                                        className: "surface-card grid gap-3 rounded-2xl border border-line/80 bg-soft p-5 text-sm text-slate md:grid-cols-[1fr_1fr_auto] md:items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "space-y-2",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.filters.status"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "talentStatus",
                                                        defaultValue: talentStatusFilterRaw,
                                                        className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.filters.all")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                                lineNumber: 1184,
                                                                columnNumber: 23
                                                            }, this),
                                                            talentStatusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: status,
                                                                    children: talentStatusLabelMap[status]
                                                                }, status, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1186,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1179,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1177,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "space-y-2",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.filters.domain"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "talentDomain",
                                                        defaultValue: talentDomainFilterRaw,
                                                        className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.filters.all")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                                lineNumber: 1199,
                                                                columnNumber: 23
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$talent$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainOptions"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: option.id,
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(option.labelKey)
                                                                }, option.id, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1201,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1194,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1192,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.filters.apply")
                                            }, void 0, false, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1207,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 1173,
                                        columnNumber: 17
                                    }, this),
                                    talentProfiles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "surface-card rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.empty")
                                    }, void 0, false, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 1216,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: talentProfiles.map((profile)=>{
                                            const baseParams = new URLSearchParams();
                                            if (talentStatusFilterRaw !== "all") {
                                                baseParams.set("talentStatus", talentStatusFilterRaw);
                                            }
                                            if (talentDomainFilterRaw !== "all") {
                                                baseParams.set("talentDomain", talentDomainFilterRaw);
                                            }
                                            baseParams.set("talent", profile.id);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `?${baseParams.toString()}`,
                                                className: "card-animate block rounded-2xl border border-line/80 bg-soft p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-start justify-between gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-semibold text-ash",
                                                                        children: profile.fullName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                                        lineNumber: 1239,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate",
                                                                        children: profile.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                                        lineNumber: 1242,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-1 text-xs text-muted",
                                                                        children: roleLabelMap.get(profile.primaryRole) ?? profile.primaryRole
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                                        lineNumber: 1243,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                                lineNumber: 1238,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                                children: talentStatusLabelMap[profile.status]
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                                lineNumber: 1247,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1237,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 flex flex-wrap gap-3 text-xs text-slate",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.list.signals"),
                                                                    ":",
                                                                    " ",
                                                                    profile._count.signals
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                                lineNumber: 1252,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.list.last"),
                                                                    ":",
                                                                    " ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateShort"])(profile.updatedAt)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                                lineNumber: 1256,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/portal/hr/page.tsx",
                                                        lineNumber: 1251,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, profile.id, true, {
                                                fileName: "[project]/app/portal/hr/page.tsx",
                                                lineNumber: 1232,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/portal/hr/page.tsx",
                                        lineNumber: 1220,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 1172,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: talentDetail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "surface-card rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.detail.title")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1272,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                    className: "mt-3 grid gap-3 md:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("partners.summary.fullName")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1277,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "text-ash",
                                                                    children: talentDetail.fullName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1280,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1276,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("partners.summary.email")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1283,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "text-ash",
                                                                    children: talentDetail.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1286,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1282,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("partners.summary.primaryRole")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1289,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "text-ash",
                                                                    children: roleLabelMap.get(talentDetail.primaryRole) ?? talentDetail.primaryRole
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1292,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1288,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("partners.summary.secondaryRoles")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1298,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "text-ash",
                                                                    children: formatTalentList(talentDetail.secondaryRoles, roleLabelMap)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1301,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1297,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("partners.summary.domains")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1306,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "text-ash",
                                                                    children: formatTalentList(talentDetail.domains, domainLabelMap)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1309,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1305,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("partners.summary.availability")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1314,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "text-ash",
                                                                    children: talentDetail.availabilityWindow
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1317,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1313,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portal/hr/page.tsx",
                                            lineNumber: 1271,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            action: updateTalentProfile,
                                            className: "surface-card space-y-3 rounded-2xl border border-line/80 bg-soft p-5 text-sm text-slate",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "hidden",
                                                    name: "profileId",
                                                    value: talentDetail.id
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1326,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "space-y-2",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.detail.status"),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "status",
                                                            defaultValue: talentDetail.status,
                                                            className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                            children: talentStatusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: status,
                                                                    children: talentStatusLabelMap[status]
                                                                }, status, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1335,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1329,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1327,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "space-y-2",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.detail.contactStatus"),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "contactStatus",
                                                            defaultValue: talentDetail.contactStatus,
                                                            className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash",
                                                            children: talentContactStatusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: status,
                                                                    children: talentContactStatusLabelMap[status]
                                                                }, status, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1349,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1343,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1341,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "space-y-2",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.detail.notes"),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "notes",
                                                            rows: 4,
                                                            defaultValue: talentDetail.notes ?? "",
                                                            className: "w-full rounded-xl border border-line bg-ink px-3 py-2 text-ash"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1357,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1355,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "btn-animate btn-secondary rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em]",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.detail.update")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1364,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portal/hr/page.tsx",
                                            lineNumber: 1322,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "surface-card space-y-3 rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.detail.signals")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1373,
                                                    columnNumber: 23
                                                }, this),
                                                talentDetail.signals.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.detail.noSignals")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1377,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: talentDetail.signals.map((signal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-xl border border-line/80 bg-ink px-4 py-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center justify-between gap-2 text-xs text-slate",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateShort"])(signal.createdAt)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                                            lineNumber: 1386,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: signal.source
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                                            lineNumber: 1387,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1385,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                    className: "mt-2 whitespace-pre-wrap text-[0.65rem] text-ash",
                                                                    children: JSON.stringify(signal.payloadJson, null, 2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1389,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, signal.id, true, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1381,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1379,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portal/hr/page.tsx",
                                            lineNumber: 1372,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "surface-card space-y-3 rounded-2xl border border-line/80 bg-soft p-5 text-sm text-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs uppercase tracking-[0.2em] text-slate",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.detail.assignments")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1399,
                                                    columnNumber: 23
                                                }, this),
                                                talentDetail.assignments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.detail.noAssignments")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1403,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: talentDetail.assignments.map((assignment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-ash",
                                                                    children: assignment.roleLabel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                                    lineNumber: 1408,
                                                                    columnNumber: 31
                                                                }, this),
                                                                assignment.engagement?.title ? ` · ${assignment.engagement.title}` : "",
                                                                ` · ${assignment.allocationPct}%`
                                                            ]
                                                        }, assignment.id, true, {
                                                            fileName: "[project]/app/portal/hr/page.tsx",
                                                            lineNumber: 1407,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/portal/hr/page.tsx",
                                                    lineNumber: 1405,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/portal/hr/page.tsx",
                                            lineNumber: 1398,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "surface-card rounded-2xl border border-line/80 bg-soft p-6 text-sm text-muted",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("portal.hr.talent.detail.empty")
                                }, void 0, false, {
                                    fileName: "[project]/app/portal/hr/page.tsx",
                                    lineNumber: 1420,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/portal/hr/page.tsx",
                                lineNumber: 1268,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/portal/hr/page.tsx",
                        lineNumber: 1171,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/portal/hr/page.tsx",
                lineNumber: 1144,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/portal/hr/page.tsx",
        lineNumber: 638,
        columnNumber: 5
    }, this);
}
}),
"[project]/.next-internal/server/app/portal/hr/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/portal/hr/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portal/hr/page.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/.next-internal/server/app/portal/hr/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/portal/hr/page.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "408b40be600048c7adbf22a43e30c52b2edf822085",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"],
    "408e196408bb0c1bb01ec99cc19061b199bdf415a5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_4"],
    "4092a31b5fcdb78883ef09bec08ec4be3027b10b4e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_2"],
    "40c940d09b13a923b7028f1a832815c4f273442875",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_3"],
    "40e7c9cb1c9214beb812fb74c4021f81340dd73447",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_1"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$portal$2f$hr$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$portal$2f$hr$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/portal/hr/page/actions.js { ACTIONS_MODULE0 => "[project]/app/portal/hr/page.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$portal$2f$hr$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/portal/hr/page.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_dfd8a9d8._.js.map