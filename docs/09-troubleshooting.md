# Troubleshooting

| Symptom | Likely cause | Files involved | Fix steps |
| --- | --- | --- | --- |
| Prisma throws `DATABASE_URL is not set` | Missing env var | `lib/prisma.ts`, `.env.local` | Set `DATABASE_URL` and restart dev server. |
| `prisma migrate dev` fails due to missing migration.sql | Broken migration directory | `prisma/migrations/*` | Ensure each migration folder contains `migration.sql`. |
| Docker Postgres port conflict | Port 5432/5433 already in use | `docker-compose.yml`, `.env.local` | Change `LUCien_PG_PORT` and restart `docker compose`. |
| Marketplace intake returns 400 | Brief missing or >777 words | `app/api/marketplace/intake/route.ts` | Provide a non-empty brief under 777 words. |
| Marketplace intake returns no recommendations | No tag/score matches | `app/api/marketplace/intake/route.ts`, `content/services.ts` | Adjust brief keywords or review service tags in `content/services.ts`. |
| Partner signal submission returns 503 | Talent tables missing | `app/api/partners/signal/route.ts`, `prisma/schema.prisma` | Run `npm run db:migrate` and retry. |
| HR page shows migration banner | HR tables missing | `app/portal/hr/page.tsx` | Run `npm run db:migrate` and `npm run db:seed`. |
| Portal shows blank due to onboarding | Onboarding required | `app/portal/onboarding/page.tsx`, `components/portal/OnboardingFlow.tsx` | Complete onboarding or set `onboardedAt` in DB. |
| Document uploads fail in production | Storage provider not configured | `lib/storage.ts`, `/api/portal/documents` | Implement production storage; local only is supported. |
| Auth email login fails in prod | Missing SMTP config | `lib/auth.ts` | Set `EMAIL_SERVER` and `EMAIL_FROM`. |
| Stripe checkout not available | Stripe env vars missing | `lib/stripe.ts`, `/api/checkout` | Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`. |
| Dossier export returns 404 | Feature flag disabled | `/api/portal/export/engagement/[id]` | Set `ENABLE_DOSSIER_EXPORT=true`. |
