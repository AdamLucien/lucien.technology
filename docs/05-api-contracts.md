# API Contracts

Source: `app/api/*`.

## Auth
### GET/POST `/api/auth/[...nextauth]`
- Auth: public, but rate-limited in production by IP.
- Request: NextAuth handlers (email + dev credentials). 
- Response: NextAuth standard responses.
- Errors: 429 if rate limit hit.
- Models: `User`, `Account`, `Session`, `VerificationToken` via PrismaAdapter; `AuditEvent` on signIn/signOut (via `lib/auth.ts`).

## Marketplace
### POST `/api/marketplace/intake`
- Auth: public.
- Request: `{ brief: string, signals?: { urgency?: "low"|"medium"|"high", constraints?: string[], context?: string[] } }`.
- Response: `{ summary, recommendations, shortlistHint }`.
- Errors: 400 for invalid JSON, missing brief, or >777 words; returns `{ errorKey, messageKey }`.
- Models: none (uses `content/services.ts`).

## Partners
### POST `/api/partners/signal`
- Auth: public.
- Request: partner signal payload matching `payloadSchema` in `app/api/partners/signal/route.ts`.
- Response: `{ ok: true, profileId }` on success.
- Errors: 400 invalid payload/consent, 429 rate limit, 503 missing tables, 500 generic.
- Models: `TalentProfile`, `TalentSignal`.

## Inquiry
### POST `/api/inquiry`
- Auth: public.
- Request: `{ organization, role, serviceSlug, timeframe, email, note?, mode?, website?, consent }`.
- Response: `{ ok: true, id, received }` with status 202 on success.
- Errors: 400 with zod field errors, 429 rate limit (production only), 500 generic.
- Models: `Org`, `Inquiry`, `AuditEvent`, `Notification`.

## Checkout + Webhooks
### POST `/api/checkout`
- Auth: public.
- Request: `{ serviceSlug }`.
- Response: `{ ok: true, redirectUrl }` or `{ ok: false }`.
- Errors: 400 invalid payload, 404 unknown service, 500 generic.
- Models: `Service` (lookup), `Order` (create/update).

### POST `/api/webhooks/stripe`
- Auth: Stripe webhook signature required.
- Request: raw Stripe event (expects `checkout.session.completed`).
- Response: `{ ok: true }` or `{ ok: false }`.
- Errors: 400 if signature missing/invalid.
- Models: `Order`, `Payment`, `Customer`.

## Portal Onboarding
### POST `/api/portal/onboarding`
- Auth: required; org roles only (`org_admin`/`org_user`).
- Request: onboarding payload (`preferredChannel`, `primaryEngagementId`, `ndaStatus`, `accessPreference`, `dataConstraints`, `acceptedTerms`).
- Response: `{ ok: true }`.
- Errors: 401 unauthorized, 403 forbidden, 400 invalid payload.
- Models: `User`, `AuditEvent`, `Notification`.

## Billing
### PATCH `/api/portal/billing/engagement`
- Auth: staff only.
- Request: `{ engagementId, procurementRef?, purchaseOrderRef?, costCenter? }`.
- Response: `{ ok: true, item }`.
- Errors: 401/403/400.
- Models: `Engagement`, `AuditEvent`, `Notification`.

### GET `/api/portal/billing/invoices`
- Auth: required; org-scoped for clients.
- Response: `{ ok: true, items }`.
- Errors: 401.
- Models: `Invoice`.

### POST `/api/portal/billing/invoices`
- Auth: staff only.
- Request: `{ engagementId, invoiceNumber?, issueDate?, dueDate?, referencePO?, currency?, amountEUR? }`.
- Response: `{ ok: true, item }`.
- Errors: 401/403/400/404.
- Models: `Invoice`, `Engagement`, `AuditEvent`, `Notification`.

### PATCH `/api/portal/billing/invoices/[id]`
- Auth: staff only.
- Request: update invoice fields.
- Response: `{ ok: true, item }`.
- Errors: 401/403/400.
- Models: `Invoice`, `AuditEvent`, `Notification`.

## Change Requests
### GET `/api/portal/change-requests`
- Auth: required; org-scoped for clients.
- Response: `{ ok: true, items }`.
- Errors: 401.
- Models: `ChangeRequest`.

### POST `/api/portal/change-requests`
- Auth: required; clients limited to their org.
- Request: `{ engagementId, title, description, impact, severity }`.
- Response: `{ ok: true, item }`.
- Errors: 401/400/403/404.
- Models: `ChangeRequest`, `Engagement`, `AuditEvent`, `Notification`.

### PATCH `/api/portal/change-requests/[id]`
- Auth: required; staff can update more fields, clients limited.
- Request: update fields including `status`, `assignedToUserId`, deltas.
- Response: `{ ok: true, item }`.
- Errors: 401/403/400/404.
- Models: `ChangeRequest`, `AuditEvent`, `Notification`.

### POST `/api/portal/change-requests/[id]/decide`
- Auth: staff only.
- Request: `{ status, decisionNote, costDeltaEUR?, scheduleDeltaDays? }`.
- Response: `{ ok: true, item }`.
- Errors: 401/403/400/404.
- Models: `ChangeRequest`, `AuditEvent`, `Notification`.

### POST `/api/portal/change-requests/[id]/implement`
- Auth: staff only.
- Request: none.
- Response: `{ ok: true, item }`.
- Errors: 401/403/404.
- Models: `ChangeRequest`, `AuditEvent`, `Notification`.

## Documents
### POST `/api/portal/documents`
- Auth: required. Clients limited to `client_input`/`evidence` with size/type constraints.
- Request: `multipart/form-data` with `file`, `engagementId` or `inquiryId`, `category`.
- Response: `{ ok: true, id }`.
- Errors: 401/403/400/404/413/415.
- Models: `Document`, `Engagement`, `Inquiry`, `AuditEvent`, `Notification`.

### GET `/api/portal/documents/[id]/download`
- Auth: required; org-scoped for clients.
- Response: file buffer with content headers.
- Errors: 401/404.
- Models: `Document`, `AuditEvent`.

### POST `/api/portal/documents/[id]/archive`
- Auth: `lucien_admin` only.
- Request: `{ reason }`.
- Response: `{ ok: true }`.
- Errors: 401/403/400/404.
- Models: `Document`, `EditEvent`, `AuditEvent`, `Notification`.

## Edit events (controlled edits)
### POST `/api/portal/edits`
- Auth: required.
- Request: `{ entityType, entityId, reason, diff, linkedChangeRequestId? }`.
- Response: `{ ok: true, status, editEventId }`.
- Errors: 401/400.
- Models: `EditEvent` + target entity (engagement/scope/change_request/invoice/document/deliverable/milestone), `AuditEvent`, `Notification`.

### POST `/api/portal/edits/[id]/apply`
- Auth: staff only.
- Request: none.
- Response: `{ ok: true }`.
- Errors: 401/400.
- Models: `EditEvent` + target entity, `AuditEvent`, `Notification`.

### POST `/api/portal/edits/[id]/reject`
- Auth: staff only.
- Request: `{ rejectionNote }`.
- Response: `{ ok: true }`.
- Errors: 401/400.
- Models: `EditEvent`, `AuditEvent`, `Notification`.

## Engagement export
### GET `/api/portal/export/engagement/[id]`
- Auth: `lucien_admin` only and `ENABLE_DOSSIER_EXPORT=true`.
- Request: none.
- Response: ZIP file containing engagement dossier JSON.
- Errors: 401/403/404.
- Models: `Engagement`, `ScopeProposal`, `Deliverable`, `Milestone`, `ChangeRequest`, `EditEvent`, `Invoice`, `Document`, `AuditEvent`.

## Notifications
### GET `/api/portal/notifications`
- Auth: required.
- Request: query params `limit` (1-20), `status=unread` optional.
- Response: `{ items, unreadCount }`.
- Errors: 401.
- Models: `Notification`.

### POST `/api/portal/notifications`
- Auth: required.
- Request: `{ ids?: string[], markAll?: boolean }`.
- Response: `{ ok: true, unreadCount }`.
- Errors: 401/400.
- Models: `Notification`.

## Admin delete
### POST `/api/portal/admin/delete`
- Auth: `lucien_admin` only.
- Request: `{ entityType, entityId, reason, confirm: "DELETE FOREVER" }`.
- Response: `{ ok: true }`.
- Errors: 401/403/400/404.
- Models: multiple (engagement, scope, change request, invoice, document, deliverable, milestone, edit event, notification, audit event, inquiry).
