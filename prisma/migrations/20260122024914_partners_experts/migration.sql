-- CreateEnum
CREATE TYPE "TalentStatus" AS ENUM ('NEW', 'REVIEWED', 'APPROVED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "TalentSource" AS ENUM ('PARTNERS_FORM', 'PORTAL');

-- CreateEnum
CREATE TYPE "TalentContactStatus" AS ENUM ('NOT_CONTACTED', 'CONTACTED', 'RESPONDED', 'ONBOARDED');

-- CreateTable
CREATE TABLE "TalentProfile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "locationTimezone" TEXT,
    "linkedInUrl" TEXT,
    "primaryRole" TEXT NOT NULL,
    "secondaryRoles" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "domains" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "seniority" TEXT NOT NULL,
    "availabilityWindow" TEXT NOT NULL,
    "engagementModes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "rateBand" TEXT,
    "languages" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" "TalentStatus" NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "createdByUserId" TEXT,
    "contactStatus" "TalentContactStatus" NOT NULL DEFAULT 'NOT_CONTACTED',
    "lastContactedAt" TIMESTAMP(3),

    CONSTRAINT "TalentProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalentSignal" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "payloadJson" JSONB NOT NULL,
    "source" "TalentSource" NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TalentSignal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalentAssignment" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "engagementId" TEXT,
    "roleLabel" TEXT NOT NULL,
    "allocationPct" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "sharedWithClient" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TalentAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TalentProfile_email_key" ON "TalentProfile"("email");

-- CreateIndex
CREATE INDEX "TalentProfile_status_idx" ON "TalentProfile"("status");

-- CreateIndex
CREATE INDEX "TalentSignal_profileId_createdAt_idx" ON "TalentSignal"("profileId", "createdAt");

-- CreateIndex
CREATE INDEX "TalentAssignment_profileId_idx" ON "TalentAssignment"("profileId");

-- CreateIndex
CREATE INDEX "TalentAssignment_engagementId_idx" ON "TalentAssignment"("engagementId");

-- AddForeignKey
ALTER TABLE "TalentProfile" ADD CONSTRAINT "TalentProfile_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalentSignal" ADD CONSTRAINT "TalentSignal_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "TalentProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalentAssignment" ADD CONSTRAINT "TalentAssignment_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "TalentProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalentAssignment" ADD CONSTRAINT "TalentAssignment_engagementId_fkey" FOREIGN KEY ("engagementId") REFERENCES "Engagement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
