-- CreateEnum
CREATE TYPE "StaffingIntentState" AS ENUM ('DRAFT', 'ACTIVE', 'FULFILLED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TalentMatchStatus" AS ENUM ('SUGGESTED', 'SHORTLISTED', 'CONTACTED', 'RESPONDED', 'DECLINED', 'HIRED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "OutreachChannel" AS ENUM ('EMAIL', 'LINKEDIN', 'XING', 'OTHER');

-- CreateEnum
CREATE TYPE "OutreachStatus" AS ENUM ('QUEUED', 'SENT', 'FAILED', 'REPLIED');

-- CreateEnum
CREATE TYPE "EmailJobStatus" AS ENUM ('QUEUED', 'SENT', 'FAILED');

-- CreateEnum
CREATE TYPE "ScoutSource" AS ENUM ('WEB', 'LINKEDIN', 'XING', 'DIRECTORY', 'IMPORT_CSV', 'REFERRAL', 'PARTNER');

-- CreateEnum
CREATE TYPE "ScoutRunStatus" AS ENUM ('OK', 'FAILED');

-- AlterTable
ALTER TABLE "TalentAssignment" ADD COLUMN     "roleId" TEXT;

-- AlterTable
ALTER TABLE "TalentProfile" ADD COLUMN     "geo" TEXT,
ADD COLUMN     "optOutAt" TIMESTAMP(3),
ADD COLUMN     "optOutReason" TEXT,
ADD COLUMN     "xingUrl" TEXT;

-- AlterTable
ALTER TABLE "TalentSignal" ADD COLUMN     "capturedAt" TIMESTAMP(3),
ADD COLUMN     "dedupeKey" TEXT,
ADD COLUMN     "externalId" TEXT,
ADD COLUMN     "externalProfileUrl" TEXT,
ADD COLUMN     "sourceQuery" TEXT;

-- CreateTable
CREATE TABLE "StaffingIntent" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "inquiryId" TEXT,
    "scopeProposalId" TEXT,
    "engagementId" TEXT,
    "state" "StaffingIntentState" NOT NULL DEFAULT 'DRAFT',
    "rolesJson" JSONB NOT NULL,
    "requirementsJson" JSONB NOT NULL,
    "metaJson" JSONB,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaffingIntent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalentMatch" (
    "id" TEXT NOT NULL,
    "staffingIntentId" TEXT NOT NULL,
    "talentProfileId" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "reasonsJson" JSONB NOT NULL,
    "status" "TalentMatchStatus" NOT NULL DEFAULT 'SUGGESTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TalentMatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutreachLog" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "staffingIntentId" TEXT NOT NULL,
    "talentProfileId" TEXT NOT NULL,
    "channel" "OutreachChannel" NOT NULL,
    "status" "OutreachStatus" NOT NULL DEFAULT 'QUEUED',
    "templateKey" TEXT NOT NULL,
    "payloadJson" JSONB NOT NULL,
    "createdByUserId" TEXT,
    "sentAt" TIMESTAMP(3),
    "repliedAt" TIMESTAMP(3),
    "error" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OutreachLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailJob" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "toEmail" TEXT NOT NULL,
    "templateKey" TEXT NOT NULL,
    "payloadJson" JSONB NOT NULL,
    "status" "EmailJobStatus" NOT NULL DEFAULT 'QUEUED',
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "idempotencyKey" TEXT NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "sentAt" TIMESTAMP(3),
    "error" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScoutJobRun" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "source" "ScoutSource" NOT NULL,
    "searchIntentId" TEXT,
    "staffingIntentId" TEXT,
    "status" "ScoutRunStatus" NOT NULL DEFAULT 'OK',
    "foundCount" INTEGER NOT NULL DEFAULT 0,
    "createdCount" INTEGER NOT NULL DEFAULT 0,
    "updatedCount" INTEGER NOT NULL DEFAULT 0,
    "dedupedCount" INTEGER NOT NULL DEFAULT 0,
    "error" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMP(3),

    CONSTRAINT "ScoutJobRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchIntent" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "targetSources" JSONB NOT NULL,
    "quotasJson" JSONB NOT NULL,
    "roleIds" JSONB NOT NULL,
    "domainIds" JSONB NOT NULL,
    "geo" TEXT,
    "seniorityId" TEXT,
    "modeIds" JSONB NOT NULL,
    "availabilityWindowId" TEXT,
    "keywords" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SearchIntent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StaffingIntent_orgId_idx" ON "StaffingIntent"("orgId");

-- CreateIndex
CREATE INDEX "StaffingIntent_inquiryId_idx" ON "StaffingIntent"("inquiryId");

-- CreateIndex
CREATE INDEX "StaffingIntent_scopeProposalId_idx" ON "StaffingIntent"("scopeProposalId");

-- CreateIndex
CREATE INDEX "StaffingIntent_engagementId_idx" ON "StaffingIntent"("engagementId");

-- CreateIndex
CREATE INDEX "StaffingIntent_state_idx" ON "StaffingIntent"("state");

-- CreateIndex
CREATE INDEX "TalentMatch_staffingIntentId_idx" ON "TalentMatch"("staffingIntentId");

-- CreateIndex
CREATE INDEX "TalentMatch_talentProfileId_idx" ON "TalentMatch"("talentProfileId");

-- CreateIndex
CREATE INDEX "TalentMatch_status_idx" ON "TalentMatch"("status");

-- CreateIndex
CREATE UNIQUE INDEX "TalentMatch_staffingIntentId_talentProfileId_key" ON "TalentMatch"("staffingIntentId", "talentProfileId");

-- CreateIndex
CREATE INDEX "OutreachLog_orgId_idx" ON "OutreachLog"("orgId");

-- CreateIndex
CREATE INDEX "OutreachLog_staffingIntentId_idx" ON "OutreachLog"("staffingIntentId");

-- CreateIndex
CREATE INDEX "OutreachLog_talentProfileId_idx" ON "OutreachLog"("talentProfileId");

-- CreateIndex
CREATE INDEX "OutreachLog_status_idx" ON "OutreachLog"("status");

-- CreateIndex
CREATE UNIQUE INDEX "EmailJob_idempotencyKey_key" ON "EmailJob"("idempotencyKey");

-- CreateIndex
CREATE INDEX "EmailJob_orgId_idx" ON "EmailJob"("orgId");

-- CreateIndex
CREATE INDEX "EmailJob_status_idx" ON "EmailJob"("status");

-- CreateIndex
CREATE INDEX "EmailJob_scheduledAt_idx" ON "EmailJob"("scheduledAt");

-- CreateIndex
CREATE INDEX "ScoutJobRun_orgId_idx" ON "ScoutJobRun"("orgId");

-- CreateIndex
CREATE INDEX "ScoutJobRun_searchIntentId_idx" ON "ScoutJobRun"("searchIntentId");

-- CreateIndex
CREATE INDEX "ScoutJobRun_staffingIntentId_idx" ON "ScoutJobRun"("staffingIntentId");

-- CreateIndex
CREATE INDEX "ScoutJobRun_source_idx" ON "ScoutJobRun"("source");

-- CreateIndex
CREATE INDEX "ScoutJobRun_status_idx" ON "ScoutJobRun"("status");

-- CreateIndex
CREATE INDEX "SearchIntent_orgId_idx" ON "SearchIntent"("orgId");

-- CreateIndex
CREATE INDEX "SearchIntent_enabled_idx" ON "SearchIntent"("enabled");

-- CreateIndex
CREATE INDEX "SearchIntent_priority_idx" ON "SearchIntent"("priority");

-- AddForeignKey
ALTER TABLE "StaffingIntent" ADD CONSTRAINT "StaffingIntent_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffingIntent" ADD CONSTRAINT "StaffingIntent_inquiryId_fkey" FOREIGN KEY ("inquiryId") REFERENCES "Inquiry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffingIntent" ADD CONSTRAINT "StaffingIntent_scopeProposalId_fkey" FOREIGN KEY ("scopeProposalId") REFERENCES "ScopeProposal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffingIntent" ADD CONSTRAINT "StaffingIntent_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalentMatch" ADD CONSTRAINT "TalentMatch_staffingIntentId_fkey" FOREIGN KEY ("staffingIntentId") REFERENCES "StaffingIntent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalentMatch" ADD CONSTRAINT "TalentMatch_talentProfileId_fkey" FOREIGN KEY ("talentProfileId") REFERENCES "TalentProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutreachLog" ADD CONSTRAINT "OutreachLog_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutreachLog" ADD CONSTRAINT "OutreachLog_staffingIntentId_fkey" FOREIGN KEY ("staffingIntentId") REFERENCES "StaffingIntent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutreachLog" ADD CONSTRAINT "OutreachLog_talentProfileId_fkey" FOREIGN KEY ("talentProfileId") REFERENCES "TalentProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutreachLog" ADD CONSTRAINT "OutreachLog_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailJob" ADD CONSTRAINT "EmailJob_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScoutJobRun" ADD CONSTRAINT "ScoutJobRun_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScoutJobRun" ADD CONSTRAINT "ScoutJobRun_searchIntentId_fkey" FOREIGN KEY ("searchIntentId") REFERENCES "SearchIntent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScoutJobRun" ADD CONSTRAINT "ScoutJobRun_staffingIntentId_fkey" FOREIGN KEY ("staffingIntentId") REFERENCES "StaffingIntent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchIntent" ADD CONSTRAINT "SearchIntent_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
