# Implementation Status (TBD)

Tento dokument mapuje skutečný stav implementace systému Lucien2026 oproti koncepční dokumentaci (`18-flow-complete-system.md`).

**Datum analýzy:** 22. ledna 2026

---

## Celkový přehled

| Komponenta | Stav | Poznámky |
| :--- | :--- | :--- |
| **Marketplace & Intake Engine** | 🔴 **Z velké části chybí** | Implementována pouze jednoduchá heuristika, chybí AI, persistence a klíčové UI. |
| **Databázový model (Prisma)** | 🟢 **Téměř kompletní** | Robustní základ, chybí jen modely pro perzistenci Intake procesu. |
| **Portál: Backend & API** | 🟡 **Z větší části hotovo** | Většina API pro správu portálu existuje a je funkční. |
| **Portál: Delivery System** | 🟢 **Vysoce implementováno** | Detail zakázky je funkční a bohatý na funkce. |
| **Portál: HR & Talent System** | 🟢 **Vysoce implementováno** | Stránka pro HR je funkční, včetně správy talentů. |
| **Portál: Ostatní UI** | 🟡 **Základy a kostry** | Existují stránky pro většinu sekcí, ale pravděpodobně nejsou plně funkční. |
| **Autentizace & Oprávnění** | 🟢 **Hotovo** | Používá NextAuth s rolemi definovanými ve schématu. |
| **Platby (Stripe)** | 🟡 **Základy implementovány** | Existuje API pro checkout a webhook, ale plný finanční tok není ověřen. |

---

## 1. Marketplace & AI-Assisted Intake

Toto je oblast s největším rozdílem mezi dokumentací a skutečností. Systém popsaný jako "AI-Assisted" je ve skutečnosti jednoduchý heuristický engine.

### Co je hotovo:
- **Heuristický skórovací engine (`app/api/marketplace/intake/route.ts`):**
  - Funkce je založena na **vyhledávání klíčových slov** v textu zadaném uživatelem.
  - Skóruje existujících 24 služeb proti sadě předdefinovaných `keywordSignals` a `urgencySignals`.
  - **Nepoužívá žádné AI/LLM.** Je to čistě deterministická logika.
- **Základní UI pro "Concierge" (`app/marketplace/MarketplaceClient.tsx`):**
  - Komponenta umožňuje uživateli zadat text, spustit analýzu a zobrazit doporučení (primární a sekundární).
  - Implementuje funkci "shortlist" pro uložení vybraných služeb.
  - Zobrazuje modální okno pro úpravu shrnutí před přesměrováním na `/request-scope`.
- **Formulář pro poptávku (`app/request-scope/page.tsx` a `components/InquiryForm.tsx`):**
  - Standardní formulář pro odeslání poptávky, který ukládá data do modelu `Inquiry`.

### Co chybí (TBD):
- **[TBD] Umělá inteligence (AI/LLM):**
  - V kódu neexistuje **žádné volání** na externí AI služby. Celá vize AI-asistovaného procesu není implementována.
- **[TBD] Persistence stavu Intake procesu:**
  - V databázovém schématu (`prisma.schema`) **chybí modely `InquiryDraft` a `IntakeEvent`**.
  - API neukládá rozpracované poptávky ani telemetrické události o interakci uživatele. Funkce je bezstavová.
- **[TBD] UI pro "Control Room":**
  - V komponentě `MarketplaceClient.tsx` ani jinde v kódu **neexistuje UI** pro transparentní zobrazení skóre, telemetrie nebo "triage signálů", jak je popsáno v dokumentaci.
- **[TBD] UI Stepper:**
  - Animace "analyzing" je pouze vizuální efekt, nikoli skutečný vícekrokový proces (stepper), jak naznačuje dokumentace.

---

## 2. Portál a jeho moduly

Na rozdíl od Intake procesu je interní portál ve velmi pokročilé fázi vývoje.

### Co je hotovo:
- **Kompletní datový model pro portál (`prisma/schema.prisma`):**
  - Všechny klíčové modely jako `Engagement`, `DeliveryTask`, `TimeEntry`, `TalentProfile`, `TalentAssignment`, `Milestone`, `ChangeRequest` atd. jsou plně definovány včetně relací a stavových `enumů`.
- **Systém doručování (`app/portal/engagements/[id]/page.tsx`):**
  - Toto je **plně funkční pracovní prostor** pro správu zakázky.
  - Umožňuje (podle role uživatele) měnit stav zakázky, spravovat milníky, výstupy, dokumenty a změnové požadavky.
  - Intenzivně využívá serverové akce pro modifikaci dat.
- **HR a Talent Management (`app/portal/hr/page.tsx`):**
  - Toto je **plně funkční modul**.
  - Umožňuje administrátorům spravovat personální obsazení projektů, logovat čas, definovat úkoly a spravovat smluvní podmínky.
  - Zahrnuje **kompletní rozhraní pro správu talentů**: seznam, filtrování podle stavu a domény, zobrazení detailu talentu a aktualizaci jeho stavu.
- **Struktura stránek a API portálu (`app/portal/` a `app/api/portal/`):**
  - Většina stránek a API endpointů definovaných v dokumentaci existuje. API je bohaté a podporuje CRUD operace pro většinu entit.
- **Základní komponenty portálu (`components/portal/`):**
  - Existují klíčové komponenty jako `PortalShell` (hlavní layout), `DocumentUploader`, `StatusBadge`, `OnboardingFlow` a `EngagementEditPanel`.

### Co chybí nebo je nejasné (TBD):
- **[TBD] Plná funkčnost všech stránek portálu:**
  - Zatímco stránky pro HR a detail zakázky jsou velmi pokročilé, ostatní stránky jako `Billing`, `Finance`, `Scopes` nebo `Inquiries` mohou být jen kostry (`page.tsx` soubory existují, ale jejich plná funkčnost není ověřena).
- **[TBD] Heuristiky pro `Intake -> Staffing`:**
  - V `lib/talent/taxonomy.ts` existují základy, ale logika pro automatické doporučení personálního obsazení na základě výsledků z Intake procesu pravděpodobně není implementována.
- **[TBD] Finanční modelování (`Revenue & capacity model`):**
  - Funkce pro simulaci a finanční plánování zmíněné v backlogu dokumentace nejsou implementovány.

---

## 3. Ostatní systémy

### Co je hotovo:
- **Autentizace a autorizace (`lib/auth.ts`, `app/api/auth`):**
  - Systém je postaven na `NextAuth.js` s `PrismaAdapter`.
  - Role (`UserRole` enum) jsou definovány a používají se pro řízení přístupu v klíčových částech aplikace (např. `requireLucienStaff`).
- **Nábor partnerů (`app/partners/page.tsx`, `api/partners/signal`):**
  - Formulář pro partnery (`PartnersForm.tsx`) existuje.
  - API endpoint pro příjem signálu a vytvoření `TalentProfile` (`NEW`) je implementován.

### Co chybí nebo je nejasné (TBD):
- **[TBD] Emaily (`lib/notifications.ts`, `nodemailer`):**
  - Existuje základ pro posílání notifikací, ale není jasné, do jaké míry je implementován celý systém (šablony, fronta, doručování). Model `EmailJob` v databázi chybí.
- **[TBD] End-to-end testy (`tests/`):**
  - Existují soubory pro Playwright testy, ale jejich pokrytí a aktuálnost nejsou známy.
