# Lucien2026 Overview

## What Lucien2026 is
Lucien2026 is a Next.js application that combines a public website, a service marketplace, and an authenticated client portal. The public surface handles service discovery and intake; the portal handles inquiry conversion, engagement operations, HR/talent tracking, documents, change control, and billing. Source: `app/`, `components/`, `content/`, `lib/`, `prisma/`.

## High-level modules
- Public site: marketing pages, legal pages, and service detail pages. Routes under `app/` (e.g., `app/page.tsx`, `app/legal/*`, `app/marketplace/[slug]/page.tsx`).
- Marketplace: filters + deterministic intake engine + shortlist UI. UI in `app/marketplace/MarketplaceClient.tsx`; rules API in `app/api/marketplace/intake/route.ts`.
- Portal (HR / Engagement / Ops): authenticated workspace under `/portal` with engagements, scopes, documents, HR, change requests, notifications, billing/finance, and admin tools. Layout in `app/portal/layout.tsx`, UI in `app/portal/*`, actions in `app/api/portal/*`.

## User roles
Defined in `prisma/schema.prisma` and enforced in `lib/portal.ts` + API routes.
- Anonymous visitor: can access public pages and submit marketplace/intake and partner signals.
- Client (org_admin/org_user): can access portal content scoped to their org (`getOrgScope` in `lib/portal.ts`).
- Lucien operator (lucien_operator): staff access to portal operational features.
- Lucien admin (lucien_admin): full portal access including admin tools and talent view.

## Public vs authenticated boundaries
- Public: routes outside `/portal` and `/login` (e.g., `/marketplace`, `/request-scope`, `/partners`).
- Authenticated: `/portal/*` enforced by `requirePortalSession` in `lib/portal.ts` and `app/portal/layout.tsx`. `/login` is the entrypoint for NextAuth.

## Core business logic
- Inquiry intake and conversion: `/api/inquiry` creates `Inquiry`; `/portal/inquiries/[id]` converts to `Engagement` and manages `ScopeProposal`.
- Engagement operations: engagement status/stage, milestones, deliverables, documents, change requests, and controlled edits. See `app/portal/engagements/*`, `app/portal/change-requests/*`, and `lib/editing.ts`.
- HR + talent: engagement staffing, time entries, tasks, terms, and partner talent profiles/signals. See `app/portal/hr/page.tsx`, `lib/talent/*`, and `app/api/partners/signal/route.ts`.
- Notifications + audit logging: `lib/notifications.ts` and `lib/audit.ts` with display under `/portal/notifications` and the portal bell.
