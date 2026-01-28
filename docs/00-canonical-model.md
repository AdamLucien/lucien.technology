METODA: VERTIKÁLNÍ VALUE FLOW × HORIZONTÁLNÍ VIEWS

Jedna osa = ČAS / TOK HODNOTY

Druhá osa = POHLED (UI / API / DATA / ROLE)

Ne „Marketplace / HR / Delivery“, ale:

STEJNÝ TOK, RŮZNÉ ŘEZY

⸻

JEDEN KANONICKÝ MAPOVACÍ MODEL

Níže je JEDEN diagram + JEDEN popis, který současně umožňuje:
	•	orientaci podle UI
	•	orientaci podle dat
	•	orientaci podle role
	•	orientaci podle fáze projektu

⸻

1️⃣ KANONICKÝ FLOW – OS X (čas / hodnota)

Toto je jediná správná časová osa systému:PROBLEM
  ↓
MARKETPLACE
  ↓
INTAKE (optional)
  ↓
RECOMMENDATION
  ↓
REQUEST SCOPE
  ↓
INQUIRY
  ↓
TRIAGE
  ↓
SCOPE PROPOSAL
  ↓
ENGAGEMENT
  ↓
DELIVERY
  ↓
OUTCOME
  ↓
FEEDBACK
  ↺ (zpět do Marketplace / Intake / Talent)Nic jiného v systému neexistuje mimo tuto osu.

⸻

2️⃣ KANONICKÁ MAPA – OS Y (současné pohledy)

Teď ten SAMÝ TOK, ale rozřezaný do vrstev, které běží PARALELNĚ.

⸻

3️⃣ KOMPLETNÍ MAPA UI × DATA × FLOW (JEDEN DIAGRAM)flowchart TB

%% =================================================
%% LAYER 1 — USER INTERFACE (WHAT USER SEES)
%% =================================================
subgraph UI["UI SURFACES (WHAT USER SEES)"]
  U1[Marketplace UI]
  U2[Intake Panel]
  U3[Concierge View]
  U4[Control Room View]
  U5[Request Scope Form]
  U6[Client Portal]
  U7[HR Portal]
  U8[Engagement Portal]
end

%% =================================================
%% LAYER 2 — DOMAIN FLOW (WHAT IS HAPPENING)
%% =================================================
subgraph FLOW["DOMAIN VALUE FLOW (WHAT IS HAPPENING)"]
  F1[Problem Exists]
  F2[Browse Services]
  F3[Intake Analysis]
  F4[Recommendation]
  F5[Scope Request]
  F6[Inquiry]
  F7[Triage]
  F8[Scope Proposal]
  F9[Engagement]
  F10[Delivery]
  F11[Outcome]
  F12[Feedback]
end

%% =================================================
%% LAYER 3 — DATA OBJECTS (WHAT IS STORED)
%% =================================================
subgraph DATA["DATA / DB OBJECTS (WHAT EXISTS IN DB)"]
  D1[Service]
  D2[InquiryDraft?]
  D3[Inquiry]
  D4[ScopeProposal]
  D5[Engagement]
  D6[DeliveryTask / Milestone]
  D7[TalentProfile]
  D8[TalentAssignment]
  D9[Invoice / Payment]
  D10[AuditEvent / Notification]
end

%% =================================================
%% UI ↔ FLOW
%% =================================================
U1 --&gt; F2
U2 --&gt; F3
U3 --&gt; F4
U4 --&gt; F4
U5 --&gt; F5
U6 --&gt; F6
U7 --&gt; F7
U8 --&gt; F9

%% =================================================
%% FLOW ↔ DATA
%% =================================================
F2 --&gt; D1
F3 --&gt; D2
F5 --&gt; D3
F7 --&gt; D4
F9 --&gt; D5
F10 --&gt; D6
F7 --&gt; D7
F9 --&gt; D8
F9 --&gt; D9
F3 --&gt; D10
F7 --&gt; D10
F10 --&gt; D10

%% =================================================
%% FLOW CONTINUITY
%% =================================================
F1 --&gt; F2 --&gt; F3 --&gt; F4 --&gt; F5 --&gt; F6 --&gt; F7 --&gt; F8 --&gt; F9 --&gt; F10 --&gt; F11 --&gt; F12 --&gt; F24️⃣ JAK SE V TOM ORIENTOVAT (VELMI DŮLEŽITÉ)

🔹 Když přemýšlíš podle UI

Ptáš se:

„Na jaké stránce to je?“

→ najdeš UI node
→ podíváš se dolů → vidíš co se děje
→ podíváš se ještě níž → víš jaká data to mění

⸻

🔹 Když přemýšlíš podle dat

Ptáš se:

„Odkud se bere Inquiry / Engagement / TalentAssignment?“

→ najdeš DATA node
→ podíváš se nahoru → vidíš který krok flow
→ podíváš se nahoru ještě → víš kde v UI se to ovládá

⸻

🔹 Když přemýšlíš podle role
	•	Visitor / Client → pohybuje se hlavně v U1–U6
	•	Lucien Admin → má přístup k U7
	•	Delivery / Ops → pracuje hlavně v U8

Ale všichni jsou na stejném flow.

⸻

5️⃣ PROČ JE TOHLE SPRÁVNĚ (A PROČ TI TO DOTEĎ NESOUHLASILO)

Ty jsi správně cítil, že:
	•	Marketplace ≠ modul
	•	HR ≠ modul
	•	Delivery ≠ modul

Protože:

Jsou to jen různé UI vstupy do různých míst téhož toku

Tenhle model:
	•	❌ nerozděluje systém uměle
	•	✅ respektuje realitu byznysu
	•	✅ je pochopitelný pro Codex
	•	✅ dovoluje rozšiřování bez chaosu

⸻

6️⃣ JEDNA VĚTA, KTERÁ TO UZAVÍRÁ

Lucien2026 je jeden tok hodnoty, který je zobrazován různými UI podle role a fáze, a jeho stav je reprezentován konzistentními datovými objekty.

⸻

Pokud chceš, další krok může být:
	•	barevná legenda (UI vs Data vs Flow)
	•	nebo „kde přesně se láme odpovědnost člověk ↔ systém ↔ AI“
	•	nebo kapacitní / revenue overlay nad tímto flow

Teď už ale mluvíme stejným jazykem.
