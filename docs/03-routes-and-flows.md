# Routes and Flows

## 1) Marketplace browsing → intake → recommendations → shortlist → request scope
1. Browse marketplace: `/marketplace` renders `app/marketplace/page.tsx` and loads `MarketplaceClient` via `components/MarketplaceClientLoader.tsx`.
2. Filter services: `components/ServiceFilters.tsx` updates query params (`domain`, `engagement`, `industry`, `urgency`, `q`) and the client filters `content/services.ts` inside `MarketplaceClient`.
3. Intake submission: `MarketplaceClient` POSTs to `/api/marketplace/intake` with `{ brief }`.
4. Intake processing (server): `app/api/marketplace/intake/route.ts` validates word count (<= 777), extracts tags/urgency/constraints, scores against `content/services.ts`, and returns top 5 recommendations.
5. Recommendations UI: `MarketplaceClient` renders a primary card + additional cards; users can add services to a shortlist (max 3).
6. Generate scope request: user opens the shortlist sheet and continues; the client builds a `/request-scope` URL with `service`, `mode`, `note`, and `timeframe` query params.
7. Failure modes: invalid payload/too many words → 400 with `messageKey`; no matches → UI shows error state; network failures set `intakeStatus=error`.

Server vs client responsibilities
- Client: input state, shortlist UI, navigation to `/request-scope` (client-side routing).
- Server: deterministic intake scoring (`/api/marketplace/intake`).

Permissions
- Public access; no auth required.

## 2) Request scope → inquiry → (future) scope proposal → engagement
1. Request scope page: `/request-scope` reads query params and passes initial values to `components/InquiryForm.tsx`.
2. Inquiry submission: `InquiryForm` POSTs to `/api/inquiry` with organization, role, service slug, timeframe, email, optional note, and consent.
3. Inquiry storage: `/api/inquiry` validates payload, finds/creates org (`lib/org.ts`), creates `Inquiry`, logs `AuditEvent`, and creates `Notification` for Lucien staff.
4. Portal review (admin only): `/portal/inquiries` lists inquiries; `/portal/inquiries/[id]` shows details.
5. Scope proposal (staff): `/portal/inquiries/[id]` can create a `ScopeProposal` draft via server action (staff only), then redirects to `/portal/scopes/[id]`.
6. Conversion to engagement (admin): `/portal/inquiries/[id]` converts inquiry to `Engagement` (status `converted`), optionally requiring an approved scope if `REQUIRE_SCOPE_APPROVAL=true`.
7. Failure modes: invalid inquiry payload → 400 errors; `REQUIRE_SCOPE_APPROVAL` without approved scope → redirect with `scope=required`.

Server vs client responsibilities
- Client: `InquiryForm` state and form submission.
- Server: create inquiry, create/approve scope, convert to engagement, audit/notify.

Permissions
- Public can submit inquiries; portal conversion requires `lucien_admin`.

## 3) HR / Talent
A) Talent intake
1. Public `/partners` renders `app/partners/page.tsx` and `components/partners/PartnersForm.tsx`.
2. Form submission POSTs to `/api/partners/signal` with role taxonomy, domain tags, availability, and consent.
3. API upserts `TalentProfile` by email and creates a `TalentSignal` payload.
4. Failure modes: rate limit (429), invalid payload (400), missing tables (503), honeypot short-circuit.

B) Talent listing + detail (Lucien admin)
1. `/portal/hr` loads talent list and optional detail panel (query param `talent`).
2. Filters: `talentStatus` and `talentDomain` query params.
3. Admin can update status/contact status/notes via server action.
4. Failure modes: missing tables → admin-only guidance with migration steps; non-admins do not see talent view.

C) HR engagement staffing
1. `/portal/hr` provides staff-only forms for assignments, time entries, work items, and contract terms.
2. Server actions create `EngagementMember`, `TimeEntry`, `DeliveryTask`, `EngagementTerm` and emit audit/notifications.
3. Client roles only see client-visible members/time summaries (scoped in query).

Permissions
- HR staffing forms: `lucien_admin` or `lucien_operator`.
- Talent view: `lucien_admin` only.

## 4) Engagement operations
1. `/portal/engagements` lists engagements for the org or all (staff).
2. `/portal/engagements/[id]` shows engagement detail, documents, milestones, deliverables, change requests, invoices.
3. Staff server actions update stage/status/owner/dates and create milestones/deliverables.
4. Document uploads use `components/portal/DocumentUploader.tsx` → `/api/portal/documents`.
5. Controlled edits: `components/portal/EngagementEditPanel.tsx` → `/api/portal/edits` (may require change request approval).

Permissions
- Staff can edit engagement metadata and create milestones/deliverables.
- Clients are scoped to their org and have limited edit capabilities via controlled edits.

## 5) Notification + audit flows
1. `lib/audit.ts` writes `AuditEvent` for key actions (inquiry created, scope updated, HR actions, etc.).
2. `lib/notifications.ts` writes `Notification` for portal updates.
3. Portal bell (`components/portal/PortalShell.tsx`) queries `/api/portal/notifications` and allows mark-all-read.
4. `/portal/notifications` provides a full list with mark-read actions.

Failure modes
- Notifications and audits are best-effort; audit writes are wrapped in try/catch (`lib/audit.ts`).
