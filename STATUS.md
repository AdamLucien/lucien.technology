# STATUS

## DONE
- Implemented Prisma schema for PostgreSQL with seed data (10 services, 2 customers, 4 orders, inquiries).
- Added Stripe Checkout flow, webhook handler, success + receipt pages with signed token validation.
- Expanded marketplace monetization (pricing labels, deposit vs quote CTAs, compare list, procurement-ready block, fallback to inquiry).
- Built legal/compliance hub + pages and wired legal links in header/footer with compliance footer line.
- Applied UI/UX fixes, animations, mobile header behavior, and navigation/link hygiene; added favicon + security.txt.
- Added SEO metadata + JSON-LD, sitemap/robots, CSP/security headers, and CWV optimizations (lazy-load SystemMap/filters, loading routes).
- Added procurement guidance page and legal CTAs across compliance docs.
- Added Playwright navigation smoke tests; build + lint pass.
- Replaced marketplace data with problem-driven engagements and pricing transparency.
- Implemented full engagement detail template with fit validation, deliverables, inputs, pricing, and scope CTA.
- Added request-scope flow (/request-scope + confirmation) with prefilled context and short form.
- Updated procurement page to align with pricing, inclusions, on-site policy, and security posture.
- Updated SEO/JSON-LD for new routes and service data.
- Finalized services model with procurement-ready deliverables, realistic pricing/time ranges, and clear A/B/C structure.
- Expanded services catalog to 20+ procurement-ready engagements with consistent filters and scope-first CTAs.
- Portal expansion: RBAC portal shell with admin/user navigation, notifications bell, and noindex metadata for all portal routes.
- Engagement workflow: staff-only editing for stage/status/owner/dates/procurement ref plus milestones + deliverables with client approvals.
- Scope proposals: /portal/scopes list + detail, inquiry → scope proposal creation, client approve/reject with audit + notifications.
- Document workflow: admin uploads + client-limited uploads (client_input/evidence) with MIME/size guards and audit logging.
- Admin management: /portal/admin/orgs and /portal/admin/users for org/user creation and role assignment.
- Notifications: DB-first notifications on inquiry creation, scope events, document upload, deliverable approval; /portal/notifications list + mark read.
- Seed/demo: internal + client orgs/users, inquiries, engagement, milestones, deliverables, documents, and scope proposal.
- Tests: Playwright login flows for admin + client, inquiry conversion, and marketplace/detail navigation.
- Change Requests: model + API + portal UI (list, detail, approvals, implemented status) with audit + notifications.
- Billing metadata + invoices: engagement PO/cost-center fields, invoice model + API, client billing view, Lucien finance view.
- Client onboarding: first-login redirect, 3-step onboarding flow, onboarding API + notification, dashboard next actions.
- Portal hardening: notifications dialog + filters/mark read, locked badges on critical records, admin danger zone hard delete, dossier export (flagged), and stricter edit enforcement.
- Unified icon system (curated lucide map + shared animation) applied across header, home, marketplace, and portal with deterministic marketplace sorting and keyword suggestions.

## Repro + Root Cause (Nav)
- Baseline check: ran `npm run dev` and navigated via headless Playwright on desktop + mobile. URLs changed and H1s rendered for all target routes; no console errors detected.
- Observed: mobile menu overlay closes after navigation (after exit animation), allowing content interaction.
- Root cause (likely original report): menu overlay/state not being cleared across route changes, leaving a fixed layer over new content.
- Fix: close menu + clear hidden header state on link click and on pathname change, ensuring overlay unmounts.

## Fix Applied (Post-audit)
- Checkout redirects: internal `redirectUrl` now uses `router.push`; external Stripe URLs still use `window.location`.
- Overlay interaction: mobile backdrop uses `pointer-events-none` during exit via `isClosing`; ESC uses `closeMenu`; added dev-only overlay state logs and data attributes for test assertions.
- Tests: mobile Playwright step now asserts overlay hidden and clicks a filter chip to confirm pointer events after navigation.
- Verified: `npm run lint`, `npm run build`, `npm run test:e2e` passed.
- Not verified: manual browser repro of the reported “reload feel” on your machine.

## Marketplace 440 / Detail Route
- Root cause: `params` is a Promise in Next 16 and was accessed synchronously in `/marketplace/[slug]`, which resulted in `slug` being `undefined` and triggering `notFound()` for every detail page.
- Fix: await `params` in `app/marketplace/[slug]/page.tsx` (and aligned `app/insights/[slug]/page.tsx`, `app/receipt/[id]/page.tsx`), plus `normalizeSlug` for defensive matching.
- Verification: `curl http://localhost:3000/marketplace/system-architecture-assessment` returns 200 and renders the correct H1; Playwright e2e test clicks a marketplace card and asserts detail page loads.

## TODO
- (Optional) Run `npx playwright install` on fresh machines before `npm run test:e2e`.
- Stripe deposit checkout for scope flow (not implemented in this iteration).
- Refine service copy once real portfolio/case studies are available.
- Portal enhancements: SSO/SAML, notifications email delivery, approvals/workflows, billing, and fine-grained document permissions.

## Performance report
- Changes: lazy-loaded heavy client widgets (SystemMap, marketplace filters), fixed aspect placeholders to reduce CLS, swapped to `next/font` with `display: swap`, added route-level loading UIs, tightened caching headers for static assets, and trimmed client-only usage to interactive components.
- Measured: build output only. No Lighthouse/CrUX measurements were run.
- Verify locally: run Lighthouse in Chrome for `/` and `/marketplace`, check CLS/LCP/INP, and run `ANALYZE=true npm run build` to review bundle size.

## Dependencies added (why)
- `@prisma/client` / `prisma`: database access and migrations.
- `stripe`: payment checkout + webhook handling.
- `@next/bundle-analyzer`: bundle size inspection for CWV work.
- `@vercel/analytics` + `@vercel/speed-insights`: optional production analytics when `VERCEL=1`.
- `@playwright/test`: e2e smoke test for navigation regressions.
- `jszip`: engagement dossier export packaging.
- `better-sqlite3`: one-time SQLite → Postgres data import for local migration.

## Run instructions
- `npm install`
- `npm run db:up`
- `npm run db:migrate`
- `npm run db:seed`
- `npm run db:import` (optional, imports `dev.db` into Postgres)
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run test:e2e`
- `npm run test`

## Where to edit offerings
- `content/services.ts`

## Verification steps
- Click `/marketplace` → select a service → click “Request scope” → confirm page loads.
- Verify the service and mode are prefilled in `/request-scope`.
- Confirm the form stays short (max 6 required fields) and submission redirects to confirmation.
- View page source and confirm JSON-LD script tags are present.
- Open the portal bell menu, mark all read, and confirm unread count clears.
- In `/portal/admin/danger-zone`, submit a hard delete with `DELETE FOREVER` + reason (admin only).
- If `ENABLE_DOSSIER_EXPORT=true`, export a dossier from an engagement detail page.

## Env vars
- `DATABASE_URL` (local: Postgres URL)
- `SQLITE_DB_PATH` (optional path to `dev.db` for import)
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `EMAIL_FROM`
- `EMAIL_SERVER` (SMTP connection string for outreach)
- `ADMIN_EMAIL`
- `REQUIRE_SCOPE_APPROVAL` (`true` to require an approved scope before conversion)
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `RECEIPT_SECRET`
- `ENABLE_DOSSIER_EXPORT` (`true` to enable engagement dossier export)
- `ANALYZE` (`true` to enable bundle analyzer)
- `VERCEL` (`1` to enable Vercel Analytics + Speed Insights)

## Deploy notes
- Vercel: set `DATABASE_URL`, Stripe env vars, `RECEIPT_SECRET`; run `npm run prisma:migrate:deploy` during deploy.
- Self-host: ensure HTTPS for HSTS; set CSP-compatible origins; run migrations and seed as needed.

## Files changed
- AUDIT.md
- .gitignore
- LICENSE
- NOTICE
- STATUS.md
- app/layout.tsx
- app/globals.css
- app/page.tsx
- app/reportWebVitals.ts
- app/sitemap.ts
- app/robots.ts
- app/marketplace/page.tsx
- app/marketplace/MarketplaceClient.tsx
- app/marketplace/loading.tsx
- app/marketplace/[slug]/page.tsx
- app/insights/page.tsx
- app/insights/loading.tsx
- app/insights/[slug]/page.tsx
- app/how-we-work/page.tsx
- app/security/page.tsx
- app/about/page.tsx
- app/contact/page.tsx
- app/capabilities/page.tsx
- app/procurement/page.tsx
- app/request-scope/page.tsx
- app/request-scope/confirm/page.tsx
- app/legal/page.tsx
- app/legal/terms/page.tsx
- app/legal/privacy/page.tsx
- app/legal/cookies/page.tsx
- app/legal/responsible-use/page.tsx
- app/legal/security-disclosure/page.tsx
- app/legal/export-controls/page.tsx
- app/success/page.tsx
- app/receipt/[id]/page.tsx
- app/api/inquiry/route.ts
- app/api/checkout/route.ts
- app/api/webhooks/stripe/route.ts
- components/Header.tsx
- components/Footer.tsx
- components/InquiryForm.tsx
- components/MotionIn.tsx
- components/SystemMap.tsx
- components/SystemMapClient.tsx
- components/MarketplaceClientLoader.tsx
- components/ServiceCard.tsx
- components/ServiceFilters.tsx
- components/CheckoutButton.tsx
- components/LegalCta.tsx
- components/JsonLd.tsx
- components/Breadcrumbs.tsx
- content/services.ts
- content/insights.ts
- lib/brand.ts
- lib/seo.ts
- lib/commerce.ts
- lib/stripe.ts
- lib/prisma.ts
- lib/receipt.ts
- prisma/schema.prisma
- prisma/seed.js
- prisma/migrations/migration_lock.toml
- prisma/migrations/20260114221000_init/migration.sql
- public/og.png
- public/manifest.webmanifest
- public/.well-known/security.txt
- public/app/favicon.svg
- public/app/favicon-96x96.png
- public/app/favicon.ico
- public/app/apple-touch-icon.png
- public/app/web-app-manifest-192x192.png
- public/app/web-app-manifest-512x512.png
- public/app/site.webmanifest
- public/app/Lucien_Symbol.png
- next.config.ts
- package.json
- package-lock.json
- playwright.config.ts
- tests/navigation.spec.ts
- eslint.config.mjs
- postcss.config.mjs
- tsconfig.json

## Current state summary
- Documentation regenerated under `docs/` with architecture, routes, data model, API contracts, ops guide, and troubleshooting references.
- Postgres-only Prisma schema in `prisma/schema.prisma` with migrations present under `prisma/migrations`.
- Marketplace intake, partner signal intake, and portal operations are implemented as per `app/` and `app/api/`.
- Latest checks: `npm run build` succeeded; `npm run lint` failed (see below).

## Verified working features
- `npm run build` completes and emits all routes (see build output in this run).
- No runtime verification performed in this run beyond build.

## Known risks / tech debt
- Lint failure: `components/icons/Icon.tsx` triggers `react-hooks/set-state-in-effect` (lint blocks CI).
- i18n is partial: only `en` dictionary populated; many UI strings are not using `t()`.
- Production storage provider is missing; `lib/storage.ts` throws in production mode.
- In-memory rate limiting does not persist across instances (`lib/rateLimit.ts`).

## Immediate next steps (1–3)
1. Fix lint error in `components/icons/Icon.tsx` to restore `npm run lint` pass.
2. Decide on production storage provider and update `lib/storage.ts`.
3. Extend i18n coverage for non-English locales and migrate hard-coded strings.

## Longer-term roadmap hints
- Automate talent contact pipeline using `lib/talent/notify.ts` (currently stubbed).
- Expand portal automation (notifications email delivery, assignment workflows).
- Decide whether marketplace should be DB-driven or remain static (`content/services.ts`).

## Latest verification
- `npm run lint`: FAILED (react-hooks/set-state-in-effect in `components/icons/Icon.tsx`).
- `npm run build`: PASSED (warning: middleware file convention deprecated; see build output).
