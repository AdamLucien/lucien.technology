# Portal Authentication (Magic Link)

Lucien Portal uses passwordless, email-based login links. Users enter their email address and receive a one-time link that expires after 15 minutes.

## How it works
1) User enters their email at `/login`.
2) A magic link is emailed from the configured SMTP account.
3) The link is single-use and expires after 15 minutes.
4) Successful login redirects back to `/portal/hr` (or the requested portal URL).

## Required environment variables
Set these in production:
- `NEXTAUTH_URL=https://portal.lucien.technology`
- `NEXTAUTH_SECRET`
- `DATABASE_URL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `EMAIL_FROM=company@lucien.technology`

## Email template
Subject: `Sign in to Lucien Portal`  
The email includes:
- A login button
- A fallback raw link
- Expiration notice (15 minutes)

## Security notes
- Tokens are single-use and expire after 15 minutes.
- Login requests are rate-limited by IP and email.
- Session cookies are HttpOnly, Secure (production), and SameSite=Lax.

## Local/test helpers
For Playwright tests, the app can capture magic links to disk:
- `MAGIC_LINK_CAPTURE_DIR=test-results/magic-links`

This should **not** be set in production.
