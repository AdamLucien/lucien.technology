# Marketplace Intake Engine

The Intake Engine is an assistive decision layer, not an autonomous agent.

---

## 1. Purpose

- Reduce friction in scoping.
- Map ambiguous problems to concrete services.
- Prepare data for staffing and delivery.

---

## 2. Inputs

- Free-text problem brief (≤777 words).
- Optional context (urgency, constraints inferred).

---

## 3. Processing Stages

1. Text normalization
2. Signal extraction:
   - Domains (security, OT, AI, supply chain, etc.)
   - Constraints (onsite, remote, regulatory)
   - Urgency
3. Service scoring:
   - Tag overlap
   - Context match
   - Heuristic confidence

---

## 4. Outputs

- Distilled summary
- Ranked service recommendations
- Shortlist hint
- (Optional) staffing heuristics

---

## 5. Modes

### Consulting Concierge
- User-facing
- Calm, directive
- Focused on next steps

### Control Room
- Transparent
- Shows scoring, signals, telemetry
- Designed for advanced users and admins

---

## 6. Persistence

- Intake can exist as:
  - Ephemeral (Phase 1)
  - InquiryDraft (Phase 3+)

Intake never bypasses paid scoping.