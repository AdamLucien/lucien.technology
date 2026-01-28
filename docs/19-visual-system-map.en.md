# Visual System Map (EN)

This document provides a visual map of the Lucien2026 system, focusing on the main value flow and the key systems that support it.

```mermaid
flowchart TD
    %% ============================================================
    %% L0: SINGLE VALUE FLOW (one system, four views)
    %% ============================================================

    subgraph Z0[" "]
        direction TB

        %% ---------------------------
        %% PUBLIC EXPERIENCE
        %% ---------------------------
        subgraph Z1["Public Experience"]
            direction LR
            A["Visitor"] --> B("/marketplace<br>Browses 24 packages (services).")
            B --> B1["AI-assisted intake<br>Optional — never blocks browsing."]
            B1 --> B2["Result<br>Concierge (default) + Control Room (expand)."]
            B2 --> C{"/request-scope<br>Submits a scope request."}
        end

        %% ---------------------------
        %% INTERNAL WORKSPACE
        %% ---------------------------
        subgraph Z2["Internal Workspace"]
            direction LR
            C --> D["Inquiry<br>Validation, triage, risk qualification."]
            D --> D1["Staffing preview<br>Roles/domains (heuristics / talent pool)."]
            D --> E["Scope Proposal<br>Definition of paid scope, boundaries, deliverables."]
            E --> GATE{"Gate<br>Approval + scope payment"}
        end

        %% ---------------------------
        %% CORE DELIVERY
        %% ---------------------------
        subgraph Z3["Core Delivery"]
            direction LR
            GATE -- "Paid / accepted" --> F("Engagement<br>Container for paid work.")
            GATE -- "Rejected / no payment" --> X["Closed<br>Stop / archive / follow-up."]
        end
    end

    %% ============================================================
    %% KEY SYSTEMS (supporting capabilities)
    %% ============================================================
    subgraph Z4[" "]
        direction LR

        subgraph Z5["Key Systems"]
            direction TB

            SYS1["Delivery System<br>(Tasks, milestones, deliverables, time)"]
            SYS2["Finance System<br>(Invoice, Payment, revenue)"]
            SYS3["Talent & HR System<br>(TalentProfile, review, assignments, visibility)"]
            SYS4["Audit & Telemetry<br>(AuditEvent, intake events, ops evidence)"]
            SYS5["i18n layer<br>(t(keys), ready for cs/en/de/it/uk/zh)"]
            SYS6["Email automation (stub)<br>(EmailJob queue, provider-agnostic)"]
        end

        subgraph Z6["Feedback Loop"]
           J["Outcome & Learning<br>(Improves packages, heuristics, staffing, pricing)"]
        end
    end

    %% ============================================================
    %% CONNECTIONS: Engagement uses systems
    %% ============================================================
    F --> SYS1
    F --> SYS2
    F --> SYS3
    F --> SYS4

    %% ============================================================
    %% CONNECTIONS: Earlier stages also use systems
    %% ============================================================
    B1 --> SYS4
    B2 --> SYS5
    C --> SYS4
    D --> SYS4
    E --> SYS4

    D1 --> SYS3
    E --> SYS6
    D --> SYS6

    %% ============================================================
    %% FEEDBACK LOOP
    %% ============================================================
    F --> J
    J -- "Improves offering" --> B
    J -- "Improves intake heuristics" --> B1
    J -- "Improves staffing" --> SYS3
    J -- "Improves pricing & margin model" --> SYS2

    %% ============================================================
    %% STYLING
    %% ============================================================
    classDef public fill:#2563eb,color:#fff,stroke:#1e3a8a,stroke-width:2px
    classDef internal fill:#16a34a,color:#fff,stroke:#14532d,stroke-width:2px
    classDef delivery fill:#f97316,color:#fff,stroke:#b45309,stroke-width:2px
    classDef systems fill:#4b5563,color:#fff,stroke:#1f2937,stroke-width:2px
    classDef feedback fill:#9333ea,color:#fff,stroke:#581c87,stroke-width:2px
    classDef gate fill:#0f172a,color:#fff,stroke:#94a3b8,stroke-width:2px

    class A,B,B1,B2,C public
    class D,D1,E internal
    class F,X delivery
    class SYS1,SYS2,SYS3,SYS4,SYS5,SYS6 systems
    class J feedback
    class GATE gate
```
