# Backlog and Next Steps

## What is complete (as implemented)
- Marketplace browsing and service detail pages with deterministic intake engine (`app/marketplace/*`, `app/api/marketplace/intake`).
- Request-scope inquiry flow and portal conversion (`/request-scope`, `/api/inquiry`, `/portal/inquiries/*`).
- Portal core operations: engagements, scopes, change requests, documents, notifications, billing, finance, admin tools (`app/portal/*`, `app/api/portal/*`).
- Partners intake form and talent storage (`/partners`, `/api/partners/signal`, `TalentProfile/TalentSignal`).
- HR module for staffing, time, tasks, and terms (`/portal/hr`).

## Partial or limited
- i18n coverage is partial: `lib/i18n.ts` provides English only, and many UI strings are still hard-coded (e.g., `app/marketplace/page.tsx`, `components/InquiryForm.tsx`, `components/portal/*`).
- Production file storage is not configured; `lib/storage.ts` throws in production.
- Stripe checkout flow only activates for services with `purchaseType === "deposit"`; otherwise it redirects to scope request.
- Talent assignments exist in the schema and are displayed, but there is no UI/API for creating them (no references outside `app/portal/hr/page.tsx`).

## Planned but missing (based on code hints)
- Talent contact automation: `lib/talent/notify.ts` is a stub that only logs and writes an audit entry.
- Full translation dictionaries for `cs/de/it/uk/zh` (empty in `lib/i18n.ts`).
- Cloudflare integration: no config present; any edge deployment workflow is not defined.

## Safe next milestones
1. Translation completion: fill dictionary tables for non-English locales and convert remaining hard-coded strings to `t()`.
2. Storage provider: implement production storage (S3/GCS/etc.) and update `lib/storage.ts`.
3. Talent pipeline: add admin UI/API to create `TalentAssignment` records and link to engagements.

## Guardrails (do not break existing flows)
- Keep `content/services.ts` as the source of marketplace services unless a migration plan exists.
- Preserve `prisma/migrations/*` and do not delete applied migrations.
- Maintain role checks in `lib/portal.ts` and API routes to prevent data leakage.
- Keep `/portal/delivery` redirect to `/portal/hr` (see `middleware.ts`).
