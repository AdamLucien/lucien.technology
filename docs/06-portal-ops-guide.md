# Portal Ops Guide

This is an internal operator manual for Lucien staff and admins.

## Access overview
- Login: `/login` (magic link).
- Portal entry: `/portal` (requires auth). `app/portal/layout.tsx` enforces session.
- Roles: `lucien_admin` (full), `lucien_operator` (staff), `org_admin`/`org_user` (clients). See `lib/portal.ts`.

## HR (people, time, tasks, terms)
Route: `/portal/hr`.
- Staff-only forms:
  - Assign team member → creates `EngagementMember` (server action in `app/portal/hr/page.tsx`).
  - Log time entry → creates `TimeEntry`.
  - Add work item → creates `DeliveryTask`.
  - Add contract terms → creates `EngagementTerm`.
- Client visibility: `clientVisible` controls member visibility for client users.
- Fail-soft behavior: if HR tables are missing, Lucien staff see a migration banner with commands; clients see a neutral message.

## Talent (partner signals)
Route: `/portal/hr` (Talent section, admin only).
- Filters: status + domain query params (`talentStatus`, `talentDomain`).
- Detail panel: select a profile (query param `talent`) to view signal history and assignments.
- Update status/contact status/notes with the admin-only form.
- Source data: `/api/partners/signal` upserts profiles and logs `TalentSignal`.

## Engagement operations
Routes: `/portal/engagements`, `/portal/engagements/[id]`.
- List engagements and open detail pages.
- Staff can update stage/status/owner dates and procurement refs (server action).
- Milestones and deliverables can be created/updated by staff.
- Documents:
  - Upload via `DocumentUploader` (staff) or client restricted categories (client_input/evidence).
  - Download via `/api/portal/documents/[id]/download`.
  - Archive via admin-only action (creates `EditEvent`).

## Change control
Routes: `/portal/change-requests`, `/portal/change-requests/[id]`.
- Submit change requests for engagement scope, schedule, cost, or risk.
- Staff can decide/implement; clients can respond to info requests.
- Controlled edits (procurement refs, etc.) create `EditEvent` records and may require an approved change request.

## Scope proposals
Routes: `/portal/scopes`, `/portal/scopes/[id]`.
- Staff can edit scope proposals and mark status to `sent`.
- Clients can approve/reject scope proposals; decisions notify Lucien staff.
- `REQUIRE_SCOPE_APPROVAL=true` can enforce approval before inquiry conversion (see `/portal/inquiries/[id]`).

## Inquiries
Routes: `/portal/inquiries`, `/portal/inquiries/[id]` (Lucien admin only).
- Review incoming inquiries.
- Create draft scope proposals and convert inquiries to engagements.

## Documents
Route: `/portal/documents`.
- Filter by category and archived state.
- Download or archive (admin only) documents.

## Notifications
Routes: `/portal/notifications` and portal bell in header.
- Mark individual or all as read.
- Unread count is displayed in portal header.

## Billing and finance
- Client billing view: `/portal/billing` (org roles only).
- Lucien finance view: `/portal/finance` (staff only).
- Invoice creation and updates are staff-only via `/portal/finance` or API.

## Admin tools
Routes: `/portal/admin/orgs`, `/portal/admin/users`, `/portal/admin/danger-zone`.
- Create orgs and users.
- Danger Zone performs hard deletes via `/api/portal/admin/delete` using the confirmation phrase `DELETE FOREVER`.

## Data visibility
- Client users: scoped to their org via `getOrgScope` in `lib/portal.ts`.
- Lucien staff: global scope.
- Talent profiles: visible only to `lucien_admin`.
