# State Machines

This document defines authoritative state transitions.

---

## 1. InquiryDraft

DRAFT → SUBMITTED → CONVERTED

No reverse transitions.

---

## 2. ScopeProposal

DRAFT → SENT → ACCEPTED → EXPIRED

---

## 3. Engagement

PLANNED → ACTIVE → PAUSED → CLOSED

---

## 4. TalentProfile

NEW → REVIEWED → APPROVED → ARCHIVED

---

## 5. Invariants

- Revenue only on ACCEPTED scope.
- Assignments only on ACTIVE engagements.
- Archived entities are immutable.

State machines are enforced at API level.