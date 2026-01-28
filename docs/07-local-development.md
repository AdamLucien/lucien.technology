# Local Development

## Prerequisites
- Node.js (see `package.json` engines implied by dependencies).
- Docker (for Postgres via docker-compose).

## Environment setup
1. Copy `.env.example` to `.env.local`.
2. Ensure `DATABASE_URL` points to Postgres:
   `postgresql://lucien:lucien_dev@localhost:${LUCien_PG_PORT}/lucien_dev?schema=public`
3. Optional: set `SQLITE_DB_PATH` if importing from a non-default `dev.db`.

## Database (PostgreSQL)
- Start: `npm run db:up` (uses `docker-compose.yml`).
- Stop: `npm run db:down`.
- Migrate: `npm run db:migrate` (runs `prisma migrate dev --name hr_module`).
- Seed: `npm run db:seed` (uses `prisma/seed.js`).
- Import SQLite: `npm run db:import` (uses `scripts/migrate-sqlite-to-postgres.js`).

## Prisma commands
- Validate: `npx prisma validate`.
- Generate: `npx prisma generate`.
- Migrate (dev): `npx prisma migrate dev`.
- Migrate (deploy): `npx prisma migrate deploy`.

## Recommended local command chain
```
cp .env.example .env.local && \
npm run db:up && \
npm run db:migrate && \
npm run db:seed && \
npm run db:import && \
npm run dev
```

## Known local failure modes
- `DATABASE_URL is not set`: `lib/prisma.ts` throws at import time; verify `.env.local`.
- Port conflict on Postgres: adjust `LUCien_PG_PORT` in `.env.local` and restart `docker compose`.
- Missing migration files: Prisma requires `migration.sql` in `prisma/migrations/*`.
- Document uploads fail in production mode: `lib/storage.ts` throws unless a production storage provider is implemented.
- Auth emails not sending in production: set `EMAIL_SERVER` and `EMAIL_FROM` (see `lib/auth.ts`).

## Running checks
- Lint: `npm run lint`.
- Build: `npm run build`.
- E2E: `npm run test:e2e` (uses Playwright; see `tests/`).
