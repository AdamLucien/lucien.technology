# Lucien2026 — Complete System Flow (Single Source of Truth)

**STATUS: This document was updated on Jan 22, 2026, to reflect the actual implementation state of the repository. It serves as the canonical map between the system's architecture and its codebase.**

This document provides a complete, end-to-end view of the Lucien2026 system. It uses a single, layered Mermaid diagram to represent the entire value flow and maps each conceptual component to its corresponding implementation in the code.

The core principle is **ONE SYSTEM, ONE FLOW**. There are no separate "modules"; there is a single value stream viewed through different lenses (UI, roles, data).

---

## The Complete System Map

This diagram is the definitive map of the system. It is organized into layers that represent different, parallel perspectives on the same unified flow.

- **L0 - L9**: Logical layers of the system, from the root value flow to feedback loops.
- **UI (Touchpoints)**: The user-facing web pages in the `app/` directory.
- **Actors**: The roles defined in `prisma/schema.prisma` (`UserRole`, `TalentProfile`).
- **Data Objects**: The models defined in `prisma/schema.prisma`.
- **Logic**: Key business logic components, primarily in the `lib/` and `app/api/` directories.

```mermaid
flowchart TD

%% =============================================================================
%% L0 — ROOT VALUE FLOW (ONE SYSTEM / ONE FLOW)
%% =============================================================================
subgraph L0["L0: ROOT FLOW (canonical)"]
direction LR
R0["Problem appears"] --&gt; R1["Marketplace surface"]
R1 --&gt; R2["Intake assist (optional)"]
R2 --&gt; R3["Recommendation + Confidence"]
R3 --&gt; R4["Request Scope"]
R4 --&gt; R5["Inquiry"]
R5 --&gt; R6["Internal Triage"]
R6 --&gt; R7["ScopeProposal"]
R7 --&gt;|Paid + accepted| R8["Engagement"]
R8 --&gt; R9["Delivery"]
R9 --&gt; R10["Outcome"]
R10 --&gt; R11["Feedback"]
R11 --&gt; R1
end

%% =============================================================================
%% L1 — UI/TOUCHPOINTS (views on the same flow)
%% =============================================================================
subgraph L1["L1: UI / TOUCHPOINTS (Implemented)"]
direction TB
U1["/marketplace"]:::ui
U2["/marketplace (AI intake)"]:::ui
U3["Results Layer: Concierge"]:::ui
U4["Results Layer: Control Room"]:::ui
U5["/request-scope"]:::ui
U6["/portal (client view)"]:::ui
U7["/portal/hr (internal)"]:::ui
U8["/portal/engagements (internal)"]:::ui
end

R1 --&gt; U1
R2 --&gt; U2
R3 --&gt; U3
R3 --&gt; U4
R4 --&gt; U5
R5 --&gt; U6
R6 --&gt; U6
R8 --&gt; U8
R6 --&gt; U7

%% =============================================================================
%% L2 — ACTORS & PERMISSIONS (who can do what where)
%% =============================================================================
subgraph L2["L2: ACTORS / ROLES (Implemented)"]
direction TB
A0["Visitor (anonymous)"]:::role
A1["Client user (authenticated)"]:::role
A2["Lucien operator (delivery/ops)"]:::role
A3["Lucien admin (triage/HR/governance)"]:::role
A4["Talent/Partner (expert)"]:::role
end

A0 --&gt;|"browse + optional intake"| U1
A0 --&gt;|"submit request-scope"| U5
A1 --&gt;|"view own inquiries, scopes, engagements"| U6
A2 --&gt;|"manage delivery, tasks"| U8
A3 --&gt;|"triage + HR talent pool"| U7
A4 --&gt;|"onboarded via /partners"| U7

%% =============================================================================
%% L3 — DATA OBJECTS (what exists, when it is created/updated)
%% =============================================================================
subgraph L3["L3: DATA OBJECTS (Implementation Status)"]
direction TB
D0["Service<br>(Implemented)"]:::data
D1["InquiryDraft<br>(TBD/Planned)"]:::data_missing
D2["Inquiry<br>(Implemented)"]:::data
D3["ScopeProposal<br>(Implemented)"]:::data
D4["Engagement<br>(Implemented)"]:::data
D5["Delivery artifacts<br>(Implemented)"]:::data
D6["TalentProfile<br>(Implemented)"]:::data
D7["TalentAssignment<br>(Implemented)"]:::data
D8["Invoice<br>(Implemented)"]:::data
D9["Payment<br>(Implemented)"]:::data
D10["AuditEvent<br>(Implemented)<br>TelemetryEvent<br>(TBD/Planned)"]:::data_partial
D11["EmailJob<br>(TBD/Planned)"]:::data_missing
end

R1 --&gt;|"reads"| D0
R2 --&gt;|"may create"| D1
R4 --&gt;|"creates/updates"| D2
R7 --&gt;|"creates/updates"| D3
R8 --&gt;|"creates/updates"| D4
R9 --&gt;|"creates/updates"| D5
R6 --&gt;|"uses"| D6
R8 --&gt;|"uses"| D7
R8 --&gt;|"creates"| D8
D8 --&gt;|"paid via"| D9
R2 --&gt;|"records"| D10
R4 --&gt;|"records"| D10
R5 --&gt;|"records"| D10
R6 --&gt;|"records"| D10
R7 --&gt;|"records"| D10
R8 --&gt;|"records"| D10
R9 --&gt;|"records"| D10
D2 --&gt;|"may enqueue"| D11
D3 --&gt;|"may enqueue"| D11
D6 --&gt;|"may enqueue"| D11


%% =============================================================================
%% L4 — INTAKE LOGIC (deterministic now, LLM-ready later)
%% =============================================================================
subgraph L4["L4: AI-ASSISTED INTAKE LOGIC (Partially Implemented)"]
direction TB
I0["Input brief"]:::logic
I1["Extract signals"]:::logic
I2["Score packages"]:::logic
I3["Build recommendations"]:::logic
I4["Render results"]:::logic
I5["Shortlist"]:::logic
I6["Generate scope draft"]:::logic
I7["Continue to Request Scope"]:::logic
end

R2 --&gt; I0 --&gt; I1 --&gt; I2 --&gt; I3 --&gt; I4
I4 --&gt; I5 --&gt; I6 --&gt; I7 --&gt; R4
I3 --&gt;|"optional persist"| D1
I1 --&gt;|"telemetry"| D10
I2 --&gt;|"telemetry"| D10
I5 --&gt;|"telemetry"| D10
I7 --&gt;|"telemetry"| D10

%% =============================================================================
%% L5 — TRIAGE & DECISIONS (internal governance)
%% =============================================================================
subgraph L5["L5: INTERNAL TRIAGE & DECISIONS (Partially Implemented)"]
direction TB
T0["Validate inquiry"]:::logic
T1["Confirm fit + risk"]:::logic
T2["Pick scope approach"]:::logic
T3["Staffing preview"]:::logic
T4["Draft ScopeProposal"]:::logic
T5["Client alignment + payment"]:::logic
end

R6 --&gt; T0 --&gt; T1 --&gt; T2 --&gt; T3 --&gt; T4 --&gt; T5 --&gt; R7
T3 --&gt;|"uses talent pool"| D6
T3 --&gt;|"plans assignments"| D7

%% =============================================================================
%% L6 — HR/TALENT LIFECYCLE (supply-side loop)
%% =============================================================================
subgraph L6["L6: HR / TALENT LIFECYCLE (Implemented)"]
direction TB
H0["Source experts"]:::logic
H1["Talent intake"]:::logic
H2["Review → approve"]:::logic
H3["Match to needs"]:::logic
H4["Assign to engagement"]:::logic
H5["Operate + learn"]:::logic
end

H0 --&gt; H1 --&gt;|"creates/updates"| D6
H1 --&gt;|"telemetry via"| D10
H2 --&gt; D6
D6 --&gt; H3 --&gt; H4 --&gt;|"creates"| D7
R8 --&gt; H4
R9 --&gt; H5 --&gt; R11
H5 --&gt;|"improves"| H3

%% =============================================================================
%% L7 — DELIVERY (execution + artifacts)
%% =============================================================================
subgraph L7["L7: DELIVERY EXECUTION (Implemented)"]
direction TB
E0["Plan milestones + tasks"]:::logic
E1["Execute work"]:::logic
E2["Track time + changes"]:::logic
E3["Deliver outputs"]:::logic
E4["Closeout + retro"]:::logic
end

R8 --&gt; E0 --&gt; E1 --&gt; E2 --&gt; E3 --&gt; E4 --&gt; R10
E0 --&gt;|"creates"| D5
E2 --&gt;|"records"| D10
E3 --&gt;|"creates evidence in"| D5

%% =============================================================================
%% L8 — FINANCE (monetization gates)
%% =============================================================================
subgraph L8["L8: FINANCE & GATES (Implemented)"]
direction TB
F0["Scope payment gate"]:::logic
F1["Invoice for engagement"]:::logic
F2["Payment reconciliation"]:::logic
F3["Revenue tracking"]:::logic
end

R7 --&gt; F0 --&gt;|"if paid"| R8
R8 --&gt; F1 --&gt; D8 --&gt; F2 --&gt; D9 --&gt; F3 --&gt; R11

%% =============================================================================
%% L9 — FEEDBACK LOOPS (learning system)
%% =============================================================================
subgraph L9["L9: FEEDBACK LOOPS (Conceptual)"]
direction TB
L10["Outcome → package improvements"]:::logic_conceptual
L12["Outcome → intake heuristics tuning"]:::logic_conceptual
L13["Outcome → staffing/talent pool tuning"]:::logic_conceptual
L14["Outcome → pricing/revenue model tuning"]:::logic_conceptual
end

R10 --&gt; L10 --&gt; R1
R10 --&gt; L12 --&gt; R2
R10 --&gt; L13 --&gt; L6
R10 --&gt; L14 --&gt; L8

%% =============================================================================
%% STYLES
%% =============================================================================
classDef ui fill:#0b1220,stroke:#334155,color:#e5e7eb,stroke-width:1px;
classDef role fill:#111827,stroke:#475569,color:#e5e7eb,stroke-width:1px;
classDef data fill:#0f172a,stroke:#22c55e,color:#e5e7eb,stroke-width:1px;
classDef data_partial fill:#0f172a,stroke:#f59e0b,color:#e5e7eb,stroke-width:1px;
classDef data_missing fill:#0f172a,stroke:#ef4444,color:#e5e7eb,stroke-width:1px;
classDef logic fill:#0b1220,stroke:#60a5fa,color:#e5e7eb,stroke-width:1px;
classDef logic_conceptual fill:#0b1220,stroke:#60a5fa,color:#9ca3af,stroke-width:1px,stroke-dasharray: 5 5;
```

---

## Implementation Status & Code Mapping

This section details the implementation status of each component shown in the diagram.

### L1: UI / TOUCHPOINTS (Status: Implemented)
The core UI surfaces are created as pages in the Next.js App Router.

- **U1: `/marketplace`**: **Implemented.**
  - **File:** `app/marketplace/page.tsx`
  - **Component:** `components/marketplace/ServiceCard.tsx`
- **U2: `AI Intake Panel`**: **Implemented.**
  - **File:** `app/marketplace/page.tsx`
  - **Component:** `components/marketplace/MarketplaceClient.tsx`
- **U3/U4: `Results Layers`**: **Partially Implemented.** The client-side component exists, but the logic for "Concierge" vs "Control Room" is TBD.
  - **Component:** `components/MarketplaceClient.tsx`
- **U5: `/request-scope`**: **Implemented.**
  - **File:** `app/request-scope/page.tsx`
  - **Component:** `components/InquiryForm.tsx`
- **U6: `/portal`**: **Implemented.** This is the main layout for authenticated users.
  - **File:** `app/portal/layout.tsx`, `app/portal/page.tsx`
- **U7: `/portal/hr`**: **Implemented.**
  - **File:** `app/portal/hr/`
- **U8: `/portal/engagements`**: **Implemented.**
  - **File:** `app/portal/engagements/`

### L2: ACTORS / ROLES (Status: Implemented)
Roles are defined in the database schema and used in the application's auth logic.

- **A0: `Visitor`**: Any unauthenticated user.
- **A1: `Client User`**: Authenticated `User` with role `org_admin` or `org_user`.
  - **Model:** `User` in `prisma/schema.prisma`
  - **Enum:** `UserRole`
- **A2: `Lucien Operator`**: Authenticated `User` with role `lucien_operator`.
- **A3: `Lucien Admin`**: Authenticated `User` with role `lucien_admin`.
- **A4: `Talent/Partner`**: Represents an external expert, captured in the `TalentProfile` model.
  - **Model:** `TalentProfile` in `prisma/schema.prisma`

### L3: DATA OBJECTS (Status: Mostly Implemented)
The data layer is defined in `prisma/schema.prisma`. Green items are fully implemented, yellow are partial, and red are planned.

- **D0: `Service`**: **Implemented.** (`model Service`)
- **D1: `InquiryDraft`**: **TBD/Planned.** This model is not in `prisma.schema`. The feature should be built to fail-soft if the table doesn't exist.
- **D2: `Inquiry`**: **Implemented.** (`model Inquiry`)
- **D3: `ScopeProposal`**: **Implemented.** (`model ScopeProposal`)
- **D4: `Engagement`**: **Implemented.** (`model Engagement`)
- **D5: `Delivery artifacts`**: **Implemented.**
  - **Models:** `DeliveryTask`, `Milestone`, `Deliverable`, `TimeEntry`.
- **D6: `TalentProfile`**: **Implemented.** (`model TalentProfile`)
- **D7: `TalentAssignment`**: **Implemented.** (`model TalentAssignment`)
- **D8: `Invoice`**: **Implemented.** (`model Invoice`)
- **D9: `Payment`**: **Implemented.** (`model Payment`, linked to `Order` and Stripe).
- **D10: `AuditEvent / TelemetryEvent`**: **Partially Implemented.**
  - `AuditEvent`: **Implemented.** (`model AuditEvent`).
  - `TelemetryEvent`: **TBD/Planned.** A generic model for capturing user interaction telemetry (e.g., from the Intake panel) is missing.
- **D11: `EmailJob`**: **TBD/Planned.** No `EmailJob` model exists for an outbox pattern. Email sending, if any, is likely direct. This feature needs to be built.

### L4-L9: LOGIC & FLOWS

- **L4: `AI-Assisted Intake`**: **Partially Implemented.**
  - **Location:** `app/api/marketplace/`. The API route exists, but the deterministic scoring and recommendation logic is foundational and requires further development. LLM integration is a future step.
- **L5: `Internal Triage`**: **Partially Implemented.**
  - **Location:** `app/portal/inquiries/`, `app/portal/scopes/`. The UI surfaces and data models exist, but the specific workflows and business rules for triage are evolving.
- **L6: `HR/Talent Lifecycle`**: **Implemented.**
  - **Location:** `app/portal/hr/`. The flow from sourcing (`TalentSignal`) to profile (`TalentProfile`) to assignment (`TalentAssignment`) is well-defined by the data models and supported by the UI.
- **L7: `Delivery Execution`**: **Implemented.**
  - **Location:** `app/portal/engagements/`, `app/portal/delivery/`. The data models for tracking delivery are robust.
- **L8: `Finance & Gates`**: **Implemented.**
  - **Location:** `lib/stripe.ts`, `app/api/checkout/`, `app/api/webhooks/`. The integration with Stripe for payments is functional. Models for `Invoice` and `Payment` exist.
- **L9: `Feedback Loops`**: **Conceptual.**
  - This layer represents the system's ability to learn. It is not implemented in code but is the goal of collecting data via `AuditEvent` and future `TelemetryEvent` models.