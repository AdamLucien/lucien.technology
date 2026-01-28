# Data Model (Prisma)

Source: `prisma/schema.prisma`.

## Enums
- `UserRole`: lucien_admin, lucien_operator, org_admin, org_user.
- `InquiryStatus`: new, triaged, converted, closed.
- `EngagementStage`: triage, scope_pack, sow, delivery, handover, ongoing, closed.
- `EngagementStatus`: on_track, at_risk, blocked, completed.
- `DocumentCategory`: nda, sow, contract, deliverable, report, invoice, client_input, evidence, other.
- `MilestoneStatus`: planned, in_progress, complete.
- `DeliverableStatus`: draft, review, approved.
- `DeliveryTaskStatus`: todo, in_progress, blocked, done.
- `EngagementTermStatus`: draft, active, superseded.
- `TalentStatus`: NEW, REVIEWED, APPROVED, ARCHIVED.
- `TalentSource`: PARTNERS_FORM, PORTAL.
- `TalentContactStatus`: NOT_CONTACTED, CONTACTED, RESPONDED, ONBOARDED.
- `ScopeStatus`: draft, sent, approved, rejected.
- `ChangeImpact`: scope, schedule, cost, risk.
- `ChangeSeverity`: low, med, high.
- `ChangeStatus`: proposed, needs_info, approved, rejected, implemented, cancelled.
- `EditEntityType`: engagement, scope, change_request, invoice, document, deliverable, milestone.
- `EditKind`: minor_edit, controlled_edit, archive, supersede.
- `EditStatus`: applied, pending_approval, rejected.

## Models
### Org
Purpose: Organization boundary for portal and data scoping.
Key fields: `id`, `name` (unique), `domain`, `createdAt`.
Relations: users, inquiries, engagements, HR records, documents, notifications, audits.
Indexes: none beyond unique `name`.

### User
Purpose: Portal identity and role.
Key fields: `id`, `email` (unique), `role`, `orgId`, `lastLoginAt`, `onboardedAt`, `onboardingData`.
Relations: org, accounts/sessions (NextAuth), documents, audit events, engagement ownership, approvals, HR memberships, talent profiles.
Indexes: `orgId`.

### Account / Session / VerificationToken
Purpose: NextAuth persistence.
Key fields: provider identifiers, `sessionToken`, `expires`.
Relations: `user`.
Indexes: unique constraints on provider account and session token.

### Service
Purpose: DB representation of services for orders/inquiries (UI uses `content/services.ts`).
Key fields: `slug` (unique), `sku` (unique), `title`, pricing fields, `deliveryWindow`.
Relations: inquiries, orders.

### Customer
Purpose: Customer entity for payments/orders.
Key fields: `email` (unique), `name`, `organization`.
Relations: inquiries, orders.

### Inquiry
Purpose: Scope request intake.
Key fields: `orgId`, `organization`, `contactEmail`, `serviceSlug`, `timeframe`, `status`, `consent`, UTM fields.
Relations: org, service, customer, engagementRecord, scopeProposals, documents.
Indexes: `orgId`, `status`.

### Engagement
Purpose: Delivery workspace tied to inquiry.
Key fields: `orgId`, `title`, `serviceSlug`, `stage`, `status`, `startDate`, `targetDate`, procurement fields, `inquiryId` (unique).
Relations: org, inquiry, owner, documents, milestones, deliverables, members, timeEntries, deliveryTasks, terms, talentAssignments, scopeProposals, changeRequests, invoices.
Indexes: `orgId`.

### EngagementMember
Purpose: HR staffing assignment.
Key fields: `orgId`, `engagementId`, `userId`, `roleTitle`, `allocationHours`, `rateHourly`, `clientVisible`.
Relations: org, engagement, user.
Indexes: `orgId`, `engagementId`, `userId`.

### TimeEntry
Purpose: HR time tracking.
Key fields: `orgId`, `engagementId`, `userId`, `entryDate`, `hours`, `approvedAt`, `approvedByUserId`.
Relations: org, engagement, user, approvedBy.
Indexes: `orgId`, `engagementId`, `userId`.

### DeliveryTask
Purpose: HR work items/tasks.
Key fields: `orgId`, `engagementId`, `title`, `status`, `ownerId`.
Relations: org, engagement, owner.
Indexes: `orgId`, `engagementId`.

### EngagementTerm
Purpose: HR contract terms per engagement.
Key fields: `orgId`, `engagementId`, `title`, `summary`, `status`, `effectiveDate`, `endDate`.
Relations: org, engagement.
Indexes: `orgId`, `engagementId`.

### Document
Purpose: Stored artifacts (contracts, deliverables, client input).
Key fields: `orgId`, `engagementId`, `inquiryId`, `category`, `name`, `mimeType`, `storageKey`, `archivedAt`.
Relations: org, engagement, inquiry, uploadedBy, archivedBy, deliverable.
Indexes: `orgId`, `engagementId`, `inquiryId`.

### AuditEvent
Purpose: Audit trail for key actions.
Key fields: `orgId`, `userId`, `action`, `resourceType`, `resourceId`, `metaJson`, `ip`, `userAgent`.
Relations: org, user.
Indexes: `orgId, createdAt`.

### ChangeRequest
Purpose: Controlled change requests for scope/schedule/cost.
Key fields: `orgId`, `engagementId`, `createdByUserId`, `assignedToUserId`, `impact`, `severity`, `status`, `decisionNote`, `costDeltaEUR`, `scheduleDeltaDays`.
Relations: org, engagement, createdBy, assignedTo, editEvents.
Indexes: `orgId`, `engagementId`, `status`.

### Invoice
Purpose: Billing records.
Key fields: `orgId`, `engagementId`, `invoiceNumber`, `issueDate`, `dueDate`, `paidAt`, `referencePO`, `currency`, `amountEUR`.
Relations: org, engagement, scopeProposal.
Indexes: `orgId`, `engagementId`.

### Milestone
Purpose: Engagement milestones.
Key fields: `orgId`, `engagementId`, `title`, `dueDate`, `status`, `order`.
Relations: org, engagement.
Indexes: `orgId`, `engagementId`.

### Deliverable
Purpose: Engagement deliverables.
Key fields: `orgId`, `engagementId`, `title`, `status`, `documentId` (unique), approval fields.
Relations: org, engagement, document, approvedBy.
Indexes: `orgId`, `engagementId`.

### ScopeProposal
Purpose: Paid scope proposal.
Key fields: `orgId`, `inquiryId`, `engagementId`, `title`, `fixedPriceEUR`, `scopeSummary`, `deliverablesJson`, `status`, `sentAt`, `approvedAt`, `rejectedAt`.
Relations: org, inquiry, engagement, createdBy, invoices.
Indexes: `orgId`, `inquiryId`, `engagementId`.

### Notification
Purpose: Portal notifications.
Key fields: `orgId`, `recipientUserId`, `type`, `title`, `body`, `readAt`.
Relations: org, recipient.
Indexes: `orgId`, `recipientUserId + readAt`.

### EditEvent
Purpose: Controlled edit workflow.
Key fields: `orgId`, `entityType`, `entityId`, `createdByUserId`, `kind`, `status`, `diffJson`, `linkedChangeRequestId`.
Relations: org, createdBy, linkedChangeRequest.
Indexes: `orgId + createdAt`, `entityType + entityId`.

### Order
Purpose: Payment order (Stripe).
Key fields: `serviceId`, `customerId`, `status`, `purchaseType`, `amountCents`, `currency`, Stripe IDs, `receiptToken`.
Relations: service, customer, payments.

### Payment
Purpose: Payment records from Stripe.
Key fields: `orderId`, `status`, `provider`, `amountCents`, Stripe IDs.
Relations: order.

### TalentProfile
Purpose: Partner/talent profile for HR pipeline.
Key fields: `email` (unique), `fullName`, `primaryRole`, `domains`, `seniority`, `availabilityWindow`, `status`, `contactStatus`, `notes`.
Relations: createdByUser, signals, assignments.
Indexes: `status`.

### TalentSignal
Purpose: Snapshot of incoming talent signal payloads.
Key fields: `profileId`, `payloadJson`, `source`, `version`, `createdAt`.
Relations: profile.
Indexes: `profileId + createdAt`.

### TalentAssignment
Purpose: Link talent profiles to engagements.
Key fields: `profileId`, `engagementId`, `roleLabel`, `allocationPct`, `sharedWithClient`.
Relations: profile, engagement.
Indexes: `profileId`, `engagementId`.

## Lifecycle notes
### Inquiry lifecycle
- Created via `/api/inquiry` with `status=new` and `consent=true`.
- Reviewed in `/portal/inquiries`; `status` can be updated (manual update not shown in UI).
- Converted in `/portal/inquiries/[id]` server action which creates `Engagement` and sets `status=converted`.

### Engagement lifecycle
- Created from inquiry conversion (`stage=triage`, `status=on_track`).
- Staff can update stage/status in `/portal/engagements/[id]`.
- Engagement can accumulate milestones, deliverables, documents, change requests, invoices, and HR records.

### Talent lifecycle
- Intake via `/api/partners/signal` creates/updates `TalentProfile` and records `TalentSignal`.
- Admin reviews in `/portal/hr` and updates `status`/`contactStatus`/`notes`.
- Optional assignments recorded in `TalentAssignment` (rendered in talent detail).

## Indexes and constraints
- Unique constraints: `Org.name`, `User.email`, `Service.slug`, `Service.sku`, `Customer.email`, `Inquiry.id`, `Engagement.inquiryId`, `Deliverable.documentId`, `Payment.stripeEventId`, `TalentProfile.email`.
- Indexed fields: see `@@index` in `prisma/schema.prisma` for org-scoped queries and status filters.

## Soft constraints (implied rules)
- `Inquiry.consent` must be true (`/api/inquiry`).
- `Document` uploads are restricted by category and size for client users (`/api/portal/documents`).
- Critical engagement edits require controlled edit workflow (`lib/editing.ts`).
- Talent updates restricted to Lucien admin (`app/portal/hr/page.tsx`).
