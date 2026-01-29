# Architecture Map

## Repository layout
- `app/`: Next.js App Router pages, layouts, and route handlers. Public pages and `/portal` live here.
- `components/`: Shared UI components (marketplace UI, portal widgets, icons, forms).
- `lib/`: Server utilities (auth, Prisma client, audit, notifications, i18n, storage, helpers).
- `prisma/`: Prisma schema, migrations, and seed script.
- `content/`: Static content used by the marketplace and marketing pages.
- `scripts/`: Local tooling (SQLite import, test setup).
- `public/`: Static assets (icons, og image, legal assets).
- `tests/`: Playwright e2e tests.
- `docs/`: Operational documentation (this folder).

## Directory responsibilities
- `app/`
  - Public pages: `app/page.tsx`, `app/marketplace/page.tsx`, `app/marketplace/[slug]/page.tsx`, `app/request-scope/page.tsx`, `app/partners/page.tsx`, `app/legal/*`.
  - Portal pages: `app/portal/*` with layout in `app/portal/layout.tsx` and HR at `app/portal/hr/page.tsx`.
  - API routes: `app/api/*` for intake, inquiry, portal operations, billing, documents, webhooks, and auth.
- `components/`
  - Marketplace: `components/MarketplaceClientLoader.tsx`, `components/ServiceFilters.tsx`, `components/ServiceCard.tsx`.
  - Portal: `components/portal/*` for onboarding, document upload, edit actions, etc.
  - Partners: `components/partners/PartnersForm.tsx`.
  - Icons: `components/icons/*` with `Icon`/`IconStatic` and `iconMap`.
- `lib/`
  - Auth/session: `lib/auth.ts`, `lib/portal.ts`.
  - Prisma: `lib/prisma.ts`.
  - Audit/notifications: `lib/audit.ts`, `lib/notifications.ts`.
  - i18n: `lib/i18n.ts`.
  - Storage: `lib/storage.ts` (local-only, throws in production).
  - Stripe: `lib/stripe.ts`, `lib/receipt.ts`.
  - Talent: `lib/talent/taxonomy.ts`, `lib/talent/notify.ts`.
- `prisma/`
  - Data model: `prisma/schema.prisma`.
  - Migrations: `prisma/migrations/*`.
  - Seed: `prisma/seed.js`.

## Where is what (key mappings)
- Marketplace intake UI: `app/marketplace/MarketplaceClient.tsx` (client state machine) + `components/MarketplaceClientLoader.tsx`.
- Marketplace intake API: `app/api/marketplace/intake/route.ts` (deterministic scoring on `content/services.ts`).
- HR module: `app/portal/hr/page.tsx` with server actions for assignments/time/tasks/terms; talent view for admins.
- Talent taxonomy: `lib/talent/taxonomy.ts` and partner form `components/partners/PartnersForm.tsx`.
- Prisma client: `lib/prisma.ts` (global singleton).
- Auth/session: `lib/auth.ts` + `app/api/auth/[...nextauth]/route.ts` and login page `app/login/page.tsx`.
- Document storage: `lib/storage.ts` (local FS for non-production).
- Notifications: `lib/notifications.ts` + portal bell in `components/portal/PortalShell.tsx`.
- Audit logging: `lib/audit.ts` invoked from API routes and server actions.

## Notes on data sources
- Marketplace services: static list from `content/services.ts` used by UI and intake engine. Prisma `Service` exists but is not the source for marketplace UI.
- Portal data: Prisma models in `prisma/schema.prisma`, queried via `lib/prisma.ts`.
