# Deployment

## Build and runtime
- Build: `npm run build` (Next.js build).
- Start: `npm run start` (Next.js server).
- Prisma migrations: `npx prisma migrate deploy` for production.

## Required environment variables
From `.env.example`, `lib/prisma.ts`, `lib/auth.ts`, and Stripe/receipt modules:
- `DATABASE_URL` (PostgreSQL connection string).
- `NEXTAUTH_URL`, `NEXTAUTH_SECRET`.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (required for production magic-link login).
- `EMAIL_FROM` (required; used for outbound auth email).
- `EMAIL_SERVER` (SMTP connection string for outreach emails).
- `ADMIN_EMAIL` (dev/seed only).
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` (for checkout/webhooks).
- `RECEIPT_SECRET` (used by `lib/receipt.ts`).
- `ENABLE_DOSSIER_EXPORT` (enable `/api/portal/export/engagement/[id]`).
- `REQUIRE_SCOPE_APPROVAL` (require approved scope before inquiry conversion).
- `VERCEL=1` (enables Vercel Analytics/Speed Insights).

## Storage
- File storage is local-only in `lib/storage.ts` and throws in production. No production storage provider is configured in this repo.

## Cloudflare
- No Cloudflare configuration found (no worker config, wrangler files, or Cloudflare SDK usage). If Cloudflare is intended, configuration is missing.
