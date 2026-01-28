# Conventions

## Components and routing
- App Router with server components by default; client components are explicitly marked with `"use client"`.
- Server actions are defined inside page modules (e.g., `app/portal/hr/page.tsx`, `app/portal/inquiries/[id]/page.tsx`).
- Public pages live under `app/`; portal pages under `app/portal`.

## Data access
- Prisma client singleton in `lib/prisma.ts`.
- Org scoping: `getOrgScope` in `lib/portal.ts` for client visibility.
- Audit logging: `lib/audit.ts` used for important state transitions.
- Notifications: `lib/notifications.ts` writes `Notification` records.

## Validation and API patterns
- API routes use `zod` for validation (`app/api/*`).
- Rate limiting is in-memory (`lib/rateLimit.ts`) for auth and inquiry routes.

## UI and styling
- Interactive surfaces use `card-animate` and `btn-animate` classes.
- Non-clickable informational surfaces use `surface-card`.
- Icons: use `Icon` for animated and `IconStatic` for static render (`components/icons/Icon.tsx`).

## i18n
- Helper: `lib/i18n.ts` with `t(key, params?, locale?)`.
- Keys are dot-separated strings (e.g., `partners.form.fullName.label`).
- Only `en` dictionary is populated; other locales are empty (fallback to `en`).
- Adding translations: extend `dictionary.<locale>` with the same keys used in `dictionary.en`.
- Missing i18n coverage: multiple UI strings remain hard-coded (examples in `app/marketplace/page.tsx`, `components/InquiryForm.tsx`, `components/portal/*`).

## Adding new services
- Marketplace services are defined in `content/services.ts` (used by UI and intake).
- If DB records are needed, update `prisma/seed.js` to upsert `Service` rows.

## Migrations
- Use `prisma migrate dev` to generate migrations and `prisma migrate deploy` in production.
- Do not delete existing migrations once applied.
- Each migration folder must contain `migration.sql`.
