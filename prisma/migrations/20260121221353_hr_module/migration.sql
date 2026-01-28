-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'lucien_operator';

-- AlterEnum
ALTER TYPE "DocumentCategory" ADD VALUE IF NOT EXISTS 'client_input';
ALTER TYPE "DocumentCategory" ADD VALUE IF NOT EXISTS 'evidence';

-- CreateEnum
CREATE TYPE "DeliveryTaskStatus" AS ENUM ('todo', 'in_progress', 'blocked', 'done');

-- CreateEnum
CREATE TYPE "EngagementTermStatus" AS ENUM ('draft', 'active', 'superseded');

-- CreateEnum
CREATE TYPE "MilestoneStatus" AS ENUM ('planned', 'in_progress', 'complete');

-- CreateEnum
CREATE TYPE "DeliverableStatus" AS ENUM ('draft', 'review', 'approved');

-- CreateEnum
CREATE TYPE "ScopeStatus" AS ENUM ('draft', 'sent', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "ChangeImpact" AS ENUM ('scope', 'schedule', 'cost', 'risk');

-- CreateEnum
CREATE TYPE "ChangeSeverity" AS ENUM ('low', 'med', 'high');

-- CreateEnum
CREATE TYPE "ChangeStatus" AS ENUM ('proposed', 'needs_info', 'approved', 'rejected', 'implemented', 'cancelled');

-- CreateEnum
CREATE TYPE "EditEntityType" AS ENUM ('engagement', 'scope', 'change_request', 'invoice', 'document', 'deliverable', 'milestone');

-- CreateEnum
CREATE TYPE "EditKind" AS ENUM ('minor_edit', 'controlled_edit', 'archive', 'supersede');

-- CreateEnum
CREATE TYPE "EditStatus" AS ENUM ('applied', 'pending_approval', 'rejected');

-- AlterTable
ALTER TABLE "User" ADD COLUMN "onboardedAt" TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN "onboardingData" JSONB;

-- AlterTable
ALTER TABLE "Engagement" ADD COLUMN "purchaseOrderRef" TEXT;
ALTER TABLE "Engagement" ADD COLUMN "costCenter" TEXT;
ALTER TABLE "Engagement" ADD COLUMN "ownerId" TEXT;

-- AlterTable
ALTER TABLE "Document" ADD COLUMN "label" TEXT;
ALTER TABLE "Document" ADD COLUMN "description" TEXT;
ALTER TABLE "Document" ADD COLUMN "archivedAt" TIMESTAMP(3);
ALTER TABLE "Document" ADD COLUMN "archivedByUserId" TEXT;
ALTER TABLE "Document" ADD COLUMN "archiveReason" TEXT;

-- CreateTable
CREATE TABLE "EngagementMember" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "engagementId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "roleTitle" TEXT NOT NULL,
    "allocationHours" INTEGER,
    "rateHourly" DOUBLE PRECISION,
    "clientVisible" BOOLEAN NOT NULL DEFAULT true,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EngagementMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeEntry" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "engagementId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entryDate" TIMESTAMP(3) NOT NULL,
    "hours" DOUBLE PRECISION NOT NULL,
    "roleTitle" TEXT,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approvedAt" TIMESTAMP(3),
    "approvedByUserId" TEXT,

    CONSTRAINT "TimeEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryTask" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "engagementId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" "DeliveryTaskStatus" NOT NULL DEFAULT 'todo',
    "ownerId" TEXT,
    "dueDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeliveryTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EngagementTerm" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "engagementId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "status" "EngagementTermStatus" NOT NULL DEFAULT 'draft',
    "effectiveDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EngagementTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Milestone" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "engagementId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3),
    "status" "MilestoneStatus" NOT NULL DEFAULT 'planned',
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Milestone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deliverable" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "engagementId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" "DeliverableStatus" NOT NULL DEFAULT 'draft',
    "documentId" TEXT,
    "approvedAt" TIMESTAMP(3),
    "approvedById" TEXT,
    "approvalNote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deliverable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScopeProposal" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "inquiryId" TEXT,
    "engagementId" TEXT,
    "title" TEXT NOT NULL,
    "fixedPriceEUR" INTEGER NOT NULL,
    "scopeSummary" TEXT NOT NULL,
    "deliverablesJson" JSONB NOT NULL,
    "status" "ScopeStatus" NOT NULL DEFAULT 'draft',
    "clientNote" TEXT,
    "createdById" TEXT,
    "sentAt" TIMESTAMP(3),
    "approvedAt" TIMESTAMP(3),
    "rejectedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ScopeProposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChangeRequest" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "engagementId" TEXT NOT NULL,
    "createdByUserId" TEXT NOT NULL,
    "assignedToUserId" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "impact" "ChangeImpact" NOT NULL,
    "severity" "ChangeSeverity" NOT NULL,
    "status" "ChangeStatus" NOT NULL DEFAULT 'proposed',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decidedAt" TIMESTAMP(3),
    "implementedAt" TIMESTAMP(3),
    "decisionNote" TEXT,
    "costDeltaEUR" INTEGER,
    "scheduleDeltaDays" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChangeRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "engagementId" TEXT,
    "scopeProposalId" TEXT,
    "invoiceNumber" TEXT,
    "internalNote" TEXT,
    "issueDate" TIMESTAMP(3),
    "dueDate" TIMESTAMP(3),
    "paidAt" TIMESTAMP(3),
    "referencePO" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "amountEUR" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "recipientUserId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "entityType" TEXT,
    "entityId" TEXT,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EditEvent" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "entityType" "EditEntityType" NOT NULL,
    "entityId" TEXT NOT NULL,
    "createdByUserId" TEXT NOT NULL,
    "kind" "EditKind" NOT NULL,
    "status" "EditStatus" NOT NULL,
    "reason" TEXT NOT NULL,
    "diffJson" JSONB NOT NULL,
    "linkedChangeRequestId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EditEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EngagementMember_orgId_idx" ON "EngagementMember"("orgId");

-- CreateIndex
CREATE INDEX "EngagementMember_engagementId_idx" ON "EngagementMember"("engagementId");

-- CreateIndex
CREATE INDEX "EngagementMember_userId_idx" ON "EngagementMember"("userId");

-- CreateIndex
CREATE INDEX "TimeEntry_orgId_idx" ON "TimeEntry"("orgId");

-- CreateIndex
CREATE INDEX "TimeEntry_engagementId_idx" ON "TimeEntry"("engagementId");

-- CreateIndex
CREATE INDEX "TimeEntry_userId_idx" ON "TimeEntry"("userId");

-- CreateIndex
CREATE INDEX "DeliveryTask_orgId_idx" ON "DeliveryTask"("orgId");

-- CreateIndex
CREATE INDEX "DeliveryTask_engagementId_idx" ON "DeliveryTask"("engagementId");

-- CreateIndex
CREATE INDEX "EngagementTerm_orgId_idx" ON "EngagementTerm"("orgId");

-- CreateIndex
CREATE INDEX "EngagementTerm_engagementId_idx" ON "EngagementTerm"("engagementId");

-- CreateIndex
CREATE INDEX "Milestone_orgId_idx" ON "Milestone"("orgId");

-- CreateIndex
CREATE INDEX "Milestone_engagementId_idx" ON "Milestone"("engagementId");

-- CreateIndex
CREATE UNIQUE INDEX "Deliverable_documentId_key" ON "Deliverable"("documentId");

-- CreateIndex
CREATE INDEX "Deliverable_orgId_idx" ON "Deliverable"("orgId");

-- CreateIndex
CREATE INDEX "Deliverable_engagementId_idx" ON "Deliverable"("engagementId");

-- CreateIndex
CREATE INDEX "ScopeProposal_orgId_idx" ON "ScopeProposal"("orgId");

-- CreateIndex
CREATE INDEX "ScopeProposal_inquiryId_idx" ON "ScopeProposal"("inquiryId");

-- CreateIndex
CREATE INDEX "ScopeProposal_engagementId_idx" ON "ScopeProposal"("engagementId");

-- CreateIndex
CREATE INDEX "ChangeRequest_orgId_idx" ON "ChangeRequest"("orgId");

-- CreateIndex
CREATE INDEX "ChangeRequest_engagementId_idx" ON "ChangeRequest"("engagementId");

-- CreateIndex
CREATE INDEX "ChangeRequest_status_idx" ON "ChangeRequest"("status");

-- CreateIndex
CREATE INDEX "Invoice_orgId_idx" ON "Invoice"("orgId");

-- CreateIndex
CREATE INDEX "Invoice_engagementId_idx" ON "Invoice"("engagementId");

-- CreateIndex
CREATE INDEX "Notification_orgId_idx" ON "Notification"("orgId");

-- CreateIndex
CREATE INDEX "Notification_recipientUserId_readAt_idx" ON "Notification"("recipientUserId", "readAt");

-- CreateIndex
CREATE INDEX "EditEvent_orgId_createdAt_idx" ON "EditEvent"("orgId", "createdAt");

-- CreateIndex
CREATE INDEX "EditEvent_entityType_entityId_idx" ON "EditEvent"("entityType", "entityId");

-- AddForeignKey
ALTER TABLE "Engagement" ADD CONSTRAINT "Engagement_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_archivedByUserId_fkey" FOREIGN KEY ("archivedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EngagementMember" ADD CONSTRAINT "EngagementMember_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "EngagementMember" ADD CONSTRAINT "EngagementMember_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "EngagementMember" ADD CONSTRAINT "EngagementMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeEntry" ADD CONSTRAINT "TimeEntry_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "TimeEntry" ADD CONSTRAINT "TimeEntry_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "TimeEntry" ADD CONSTRAINT "TimeEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "TimeEntry" ADD CONSTRAINT "TimeEntry_approvedByUserId_fkey" FOREIGN KEY ("approvedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryTask" ADD CONSTRAINT "DeliveryTask_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "DeliveryTask" ADD CONSTRAINT "DeliveryTask_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "DeliveryTask" ADD CONSTRAINT "DeliveryTask_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EngagementTerm" ADD CONSTRAINT "EngagementTerm_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "EngagementTerm" ADD CONSTRAINT "EngagementTerm_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Milestone" ADD CONSTRAINT "Milestone_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Milestone" ADD CONSTRAINT "Milestone_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deliverable" ADD CONSTRAINT "Deliverable_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Deliverable" ADD CONSTRAINT "Deliverable_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Deliverable" ADD CONSTRAINT "Deliverable_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Deliverable" ADD CONSTRAINT "Deliverable_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScopeProposal" ADD CONSTRAINT "ScopeProposal_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "ScopeProposal" ADD CONSTRAINT "ScopeProposal_inquiryId_fkey" FOREIGN KEY ("inquiryId") REFERENCES "Inquiry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "ScopeProposal" ADD CONSTRAINT "ScopeProposal_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "ScopeProposal" ADD CONSTRAINT "ScopeProposal_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChangeRequest" ADD CONSTRAINT "ChangeRequest_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "ChangeRequest" ADD CONSTRAINT "ChangeRequest_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "ChangeRequest" ADD CONSTRAINT "ChangeRequest_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "ChangeRequest" ADD CONSTRAINT "ChangeRequest_assignedToUserId_fkey" FOREIGN KEY ("assignedToUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_scopeProposalId_fkey" FOREIGN KEY ("scopeProposalId") REFERENCES "ScopeProposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_recipientUserId_fkey" FOREIGN KEY ("recipientUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EditEvent" ADD CONSTRAINT "EditEvent_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "EditEvent" ADD CONSTRAINT "EditEvent_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "EditEvent" ADD CONSTRAINT "EditEvent_linkedChangeRequestId_fkey" FOREIGN KEY ("linkedChangeRequestId") REFERENCES "ChangeRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
