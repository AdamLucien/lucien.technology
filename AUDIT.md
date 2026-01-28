# AUDIT

## Executive Summary
- What works: App Router pages render with H1s; internal navigation uses `next/link` across primary UI; JSON-LD is inline SSR via `components/JsonLd.tsx`; sitemap and robots are present; security.txt exists.
- What is broken: I did not reproduce the “click requires reload” issue in the current codebase using automated navigation tests (see Evidence). If you are still seeing it, it is likely intermittent or environment-specific.
- Highest-risk items: mobile overlay persistence if menu state is not cleared (fixed by route-change + link click cleanup), `window.location.href` in `components/CheckoutButton.tsx` can trigger full page navigation if it points to an internal route, heavy use of `framer-motion` via `MotionIn` across pages may increase client JS cost.

## Inventory — Routes & Pages
Note: No `error.tsx` or `not-found.tsx` files exist under `app/` (Next default is used). All `page.tsx` files shown below are server components (no `"use client"` directive in the page files).

| Route | File | Server/Client | Main Components Used | Has H1 | Has CTA | Has JSON-LD |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | `app/page.tsx` | Server | `MotionIn`, `SystemMapClient`, `JsonLd`, `Link` | Yes | Yes | Yes (Organization, WebSite, WebPage) |
| `/marketplace` | `app/marketplace/page.tsx` | Server | `MarketplaceClientLoader`, `JsonLd`, `MotionIn`, `Breadcrumbs` | Yes | Yes | Yes (BreadcrumbList, ItemList, WebPage) |
| `/marketplace/[slug]` | `app/marketplace/[slug]/page.tsx` | Server | `CheckoutButton`, `JsonLd`, `MotionIn`, `Breadcrumbs` | Yes | Yes | Yes (BreadcrumbList, WebPage, Service, FAQPage) |
| `/how-we-work` | `app/how-we-work/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `Link` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/security` | `app/security/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `Link` | Yes | Yes | Yes (BreadcrumbList, WebPage, FAQPage) |
| `/about` | `app/about/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `Link` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/contact` | `app/contact/page.tsx` | Server | `InquiryForm`, `JsonLd`, `MotionIn`, `Breadcrumbs` | Yes | Yes (form submit) | Yes (BreadcrumbList, WebPage) |
| `/insights` | `app/insights/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `Link` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/insights/[slug]` | `app/insights/[slug]/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `Link` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/legal` | `app/legal/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `LegalCta` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/legal/terms` | `app/legal/terms/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `LegalCta` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/legal/privacy` | `app/legal/privacy/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `LegalCta` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/legal/cookies` | `app/legal/cookies/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `LegalCta` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/legal/responsible-use` | `app/legal/responsible-use/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `LegalCta` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/legal/security-disclosure` | `app/legal/security-disclosure/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `LegalCta` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/legal/export-controls` | `app/legal/export-controls/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `LegalCta` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/procurement` | `app/procurement/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `Link` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/capabilities` | `app/capabilities/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `Link` | Yes | Yes | Yes (BreadcrumbList, WebPage) |
| `/success` | `app/success/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs`, `Link` | Yes | Conditional (receipt link if order) | Yes (BreadcrumbList, WebPage) |
| `/receipt/[id]` | `app/receipt/[id]/page.tsx` | Server | `JsonLd`, `MotionIn`, `Breadcrumbs` | Yes | No | Yes (BreadcrumbList, WebPage) |
| Root layout | `app/layout.tsx` | Server | `Header`, `Footer`, `Analytics`, `SpeedInsights` | N/A | N/A | N/A |
| `/marketplace` loading | `app/marketplace/loading.tsx` | Server | n/a (loading UI) | No | No | No |
| `/insights` loading | `app/insights/loading.tsx` | Server | n/a (loading UI) | No | No | No |

## Evidence
- `npm run dev` (background) — server ready on port 3000:
  ```
  - Local:         http://localhost:3000
  ✓ Ready in 456ms
  ```
- `npm run lint` — pass:
  ```
  > lucien2026-app@0.1.0 lint
  > eslint
  ```
- `npm run build` — pass:
  ```
  ✓ Compiled successfully
  ✓ Generating static pages using 9 workers (40/40)
  ```
- `npm run test:e2e` — Navigation test passed:
  ```
  Running 2 tests using 1 worker
  ✓ tests/navigation.spec.ts:3:5 › desktop navigation routes without reload
  ✓ tests/navigation.spec.ts:47:5 › mobile menu closes after navigation
  2 passed
  ```
- `rg "<a\s+href=|next/link|router\.(push|replace)|window\.location|location\.href|preventDefault\(" -n app components lib` — Used for link audit; findings below.
- `rg "useState\(|useEffect\(|useRouter\(|usePathname\(" -n app components` — Used for client boundary audit; findings below.
- `rg "next/script|afterInteractive|application/ld\+json|dangerouslySetInnerHTML" -n app components lib` — Confirms JSON-LD inline script only in `components/JsonLd.tsx`.
- `python3 - <<'PY' ...` on `public/og.png` reported `(1200, 630)` dimensions.

Evidence (selected):
- `components/Header.tsx:221-248` — Mobile overlay/backdrop uses `pointer-events-none` when closing; `data-overlay`/`data-menu-panel` markers added for tests.
- `components/Header.tsx:58-94` — Body scroll lock and focus trap while menu open — If not cleaned up, could trap focus or block scroll after navigation.
- `components/Header.tsx:128-138` — Route-change cleanup with `usePathname` — Prevents stale overlay state after navigation.
- `components/CheckoutButton.tsx:54-63` — Internal redirects use `router.push`, external checkout URLs use `window.location`.
- `app/layout.tsx:84-89` — Skip link uses `<a href="#content">` — Safe in-page navigation (not a router link).

### Navigation & Link Audit
SAFE
- `next/link` is used for internal navigation in all pages and shared components (e.g., `components/Header.tsx`, `components/Footer.tsx`, `components/ServiceCard.tsx`, `components/Breadcrumbs.tsx`, `app/*/page.tsx`).
- `router.replace` is used only in client-side filter/search updates (e.g., `components/ServiceFilters.tsx:49,62,78`, `app/marketplace/MarketplaceClient.tsx:76,148`).
- Skip link uses plain anchor for in-page jump: `app/layout.tsx:84-89` (`href="#content"`) — safe for accessibility and not routing.

RESOLVED (post-fix)
- `components/CheckoutButton.tsx` — internal redirects now use `router.push` for in-app paths; external Stripe URLs still use `window.location.href`.

### Overlay / Menu / Pointer-Events Audit
Overlay components found:
- `components/Header.tsx:170-231` — `motion.div` overlay (`fixed inset-0 z-50 bg-ink/90`) and menu panel.
- Overlay unmount is conditional on `menuOpen` (AnimatePresence) and closes on click (`onClick={() => setMenuOpen(false)}` at `components/Header.tsx:176`).
- Body scroll lock is applied only while menu is open (`components/Header.tsx:58-94`).
- Route-change cleanup uses `usePathname` effect to reset `menuOpen` and `hidden` (`components/Header.tsx:96-102`).

Potential stale overlay risk:
- If `menuOpen` remains true after navigation, overlay intercepts clicks. The effect at `components/Header.tsx:96-102` mitigates this. Any regression would likely reintroduce this risk.
- Exit animation means overlay persists briefly after click (`transition duration: 0.2s` at `components/Header.tsx:172-175`). This is short but can look like a pause if navigation is instantaneous.

### App Router / Client Boundary Audit
Command: `rg "useState\(|useEffect\(|useRouter\(|usePathname\(" -n app components`
- Hook-using components are client components and include `"use client"`:
  - `components/Header.tsx:1`
  - `components/InquiryForm.tsx:1`
  - `components/ServiceFilters.tsx:1`
  - `app/marketplace/MarketplaceClient.tsx:1`
- No missing `"use client"` directives found for hook-using files in the scan results.

### JSON-LD / SEO Audit
- JSON-LD is SSR inline via `components/JsonLd.tsx:6-12` (no `next/script` usage).
- Metadata: `buildPageMetadata` in `lib/seo.ts` includes canonical via `alternates.canonical` and OG/Twitter card definitions. Dynamic routes (services/insights) call `generateMetadata` and `buildPageMetadata`.
- JSON-LD types by route:
  - `/`: Organization, WebSite, WebPage
  - `/marketplace`: BreadcrumbList, ItemList, WebPage
  - `/marketplace/[slug]`: BreadcrumbList, WebPage, Service, FAQPage
  - `/security`: BreadcrumbList, WebPage, FAQPage
  - Other content pages: BreadcrumbList + WebPage
- Sitemap/robots:
  - `app/sitemap.ts` includes static pages + services + insights + procurement + legal.
  - `app/robots.ts` allows all and points to sitemap.
- `public/.well-known/security.txt` exists and includes contact/policy.

### Legal / License Audit
- LICENSE content summary: proprietary, “All rights reserved,” explicit prohibition on use/copy/modify/distribute without written consent. No open-source grants found. (File: `LICENSE`)
- No README claims about MIT/open-source were found (`rg -n "MIT|license|open source|opensource" -g "README*"` returned no matches).

### Performance / Bundle Audit
Likely CWV risks (based on code inspection):
1) `components/MotionIn.tsx` (client) is used across most pages; each usage adds client-side hydration and Framer Motion runtime. This can increase JS cost (INP) and main-thread work.
2) `app/marketplace/MarketplaceClient.tsx` and `components/ServiceFilters.tsx` import the full `services` dataset into client bundles (small now but scales with catalog size).
3) `components/SystemMap.tsx` is a client SVG with motion and interaction; it is dynamically imported (`components/SystemMapClient.tsx`) but still contributes to client JS on Home.
4) `components/Header.tsx` attaches scroll listeners (`useEffect` + `requestAnimationFrame`), which is fine but should be monitored for performance on low-end devices.
5) `app/receipt/[id]/page.tsx` and `app/success/page.tsx` query Prisma at request time; if DB is slow or missing, these routes can fail or delay response.

## Navigation Root Cause Candidates (Ranked)
1) **Mobile overlay persists after navigation** — `components/Header.tsx:170-231` uses a fixed overlay that intercepts clicks. If state does not reset, it can make new pages appear “stuck.” Current code resets `menuOpen` on route change (`components/Header.tsx:96-102`).
2) **Full-page navigation triggered by `window.location`** — `components/CheckoutButton.tsx:53` uses `window.location.href`, which can cause reloads if internal routes are returned by `/api/checkout`.
3) **Exit animation overlap** — `AnimatePresence` keeps overlay for ~200ms after click; may feel like delayed render if the new page is quick.
4) **Hydration errors** — No console errors found in automated tests, but any runtime error in a client boundary can prevent updates. (No direct evidence in current code.)

## Action Plan (Minimal Fixes Only)
1) If the nav bug is still observed, instrument Header: log `menuOpen`, `pathname`, and overlay mount state on navigation to confirm stale overlay behavior (no UI changes required).
2) If reload feel persists around checkout CTAs, route internally with `router.push` for internal URLs instead of `window.location.href`.
3) If CWV regressions appear, reduce `MotionIn` usage on non-critical sections or group animations to reduce client boundaries.

## Fix Applied (Post-audit)
- `components/CheckoutButton.tsx`: internal `redirectUrl` now uses `router.push`; missing/invalid URLs set error state; external checkout URLs still use `window.location`.
- `components/Header.tsx`: menu close now applies pointer-events none during exit via `isClosing`; ESC uses `closeMenu`; dev-only logs added; overlay has `data-overlay`/`data-menu-panel` markers.
- `tests/navigation.spec.ts`: mobile test asserts overlay hidden and clicks a filter chip to confirm pointer events after navigation.
- Verified: `npm run lint`, `npm run build`, `npm run test:e2e` (results below).
