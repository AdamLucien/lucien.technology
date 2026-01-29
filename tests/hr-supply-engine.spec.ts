import { test, expect, type Page } from "@playwright/test";
import { PrismaClient } from "@prisma/client";
import { runOutreachJob } from "@/lib/outreach/jobs";

const prisma = new PrismaClient();

test.describe.configure({ mode: "serial" });

type SeededIntent = {
  orgName: string;
  orgId: string;
  inquiryId: string;
  engagementId: string;
  intentId: string;
  tag: string;
};

const loginAs = async (page: Page, email: string) => {
  await page.goto("/login");
  await page.getByRole("button", { name: email, exact: true }).click();
  await page.waitForURL(/\/portal/);
};

const ensureDatabase = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required to run HR supply engine tests.");
  }
};

const cleanupByOrgName = async (orgName: string, tag?: string) => {
  const org = await prisma.org.findFirst({ where: { name: orgName } });
  if (!org) return;

  const engagements = await prisma.engagement.findMany({
    where: { orgId: org.id },
    select: { id: true },
  });
  const engagementIds = engagements.map((engagement) => engagement.id);

  const intents = await prisma.staffingIntent.findMany({
    where: { orgId: org.id },
    select: { id: true },
  });
  const intentIds = intents.map((intent) => intent.id);

  if (intentIds.length > 0) {
    await prisma.talentMatch.deleteMany({
      where: { staffingIntentId: { in: intentIds } },
    });
    await prisma.outreachLog.deleteMany({
      where: { staffingIntentId: { in: intentIds } },
    });
  }

  await prisma.emailJob.deleteMany({ where: { orgId: org.id } });

  if (engagementIds.length > 0) {
    await prisma.talentAssignment.deleteMany({
      where: { engagementId: { in: engagementIds } },
    });
  }

  await prisma.staffingIntent.deleteMany({ where: { orgId: org.id } });
  await prisma.scopeProposal.deleteMany({ where: { orgId: org.id } });
  await prisma.engagement.deleteMany({ where: { orgId: org.id } });
  await prisma.inquiry.deleteMany({ where: { orgId: org.id } });

  if (tag) {
    const profiles = await prisma.talentProfile.findMany({
      where: {
        OR: [
          { email: { contains: tag } },
          { linkedInUrl: { contains: tag } },
          { xingUrl: { contains: tag } },
        ],
      },
      select: { id: true },
    });
    const profileIds = profiles.map((profile) => profile.id);
    if (profileIds.length > 0) {
      await prisma.outreachLog.deleteMany({
        where: { talentProfileId: { in: profileIds } },
      });
      await prisma.talentMatch.deleteMany({
        where: { talentProfileId: { in: profileIds } },
      });
      await prisma.talentSignal.deleteMany({
        where: { profileId: { in: profileIds } },
      });
      await prisma.talentProfile.deleteMany({
        where: { id: { in: profileIds } },
      });
    }
  }

  await prisma.org.delete({ where: { id: org.id } });
};

const createInquiryViaApi = async (page: Page, payload: Record<string, unknown>) => {
  const response = await page.request.post("/api/inquiry", {
    data: payload,
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(202);
};

const seedOutreachScenario = async (tag: string): Promise<SeededIntent> => {
  const orgName = `E2E Supply Idempotency ${tag}`;
  await cleanupByOrgName(orgName, tag);

  const org = await prisma.org.create({
    data: {
      name: orgName,
      domain: "lucien.ai",
    },
  });

  const inquiry = await prisma.inquiry.create({
    data: {
      orgId: org.id,
      organization: orgName,
      role: "Program Lead",
      contactEmail: `${tag}@example.com`,
      emailHash: tag,
      serviceSlug: "technical-leadership-retainer",
      timeframe: "Immediate",
      note: null,
      mode: "remote",
      status: "converted",
      consent: true,
    },
  });

  const engagement = await prisma.engagement.create({
    data: {
      orgId: org.id,
      title: `E2E Engagement ${tag}`,
      inquiryId: inquiry.id,
    },
  });

  const intent = await prisma.staffingIntent.create({
    data: {
      orgId: org.id,
      inquiryId: inquiry.id,
      engagementId: engagement.id,
      state: "ACTIVE",
      rolesJson: [{ roleId: "fractional_cto", count: 1 }],
      requirementsJson: { skills: [] },
    },
  });

  const profile = await prisma.talentProfile.create({
    data: {
      fullName: `E2E Contact ${tag}`,
      email: `${tag}@example.com`,
      primaryRole: "fractional_cto",
      secondaryRoles: [],
      domains: [],
      seniority: "director",
      availabilityWindow: "two_four_weeks",
      engagementModes: ["remote"],
      languages: ["en"],
    },
  });

  await prisma.talentMatch.create({
    data: {
      staffingIntentId: intent.id,
      talentProfileId: profile.id,
      score: 85,
      reasonsJson: {
        matchedRoleIds: ["fractional_cto"],
        requiredRoleIds: ["fractional_cto"],
        matchedSkillIds: [],
        missingMustSkillIds: [],
        profileSkills: [],
      },
      status: "SUGGESTED",
    },
  });

  return {
    orgName,
    orgId: org.id,
    inquiryId: inquiry.id,
    engagementId: engagement.id,
    intentId: intent.id,
    tag,
  };
};

test.beforeAll(() => {
  ensureDatabase();
});

test.afterAll(async () => {
  await prisma.$disconnect();
});

test("demand to HR supply flow", async ({ page }) => {
  const tag = `e2e-hr-${Date.now()}`;
  const orgName = `E2E Supply Org ${tag}`;
  await cleanupByOrgName(orgName, tag);

  await createInquiryViaApi(page, {
    organization: orgName,
    role: "Program Lead",
    serviceSlug: "technical-leadership-retainer",
    timeframe: "Immediate",
    email: `${tag}@lucien.ai`,
    note: "E2E request",
    mode: "remote",
    website: "",
    consent: true,
  });

  const inquiry = await prisma.inquiry.findFirst({
    where: { organization: orgName },
    orderBy: { createdAt: "desc" },
  });
  if (!inquiry) {
    throw new Error("Inquiry not created.");
  }

  await loginAs(page, "admin@lucien.ai");
  await page.goto(`/portal/inquiries/${inquiry.id}`);
  await expect(page.getByText(/staffing draft/i).first()).toBeVisible();

  await page.getByRole("button", { name: /create scope proposal/i }).click();
  await page.waitForURL(/\/portal\/scopes\//);
  const scopeId = page.url().split("/").pop();

  const intentAfterScope = await prisma.staffingIntent.findFirst({
    where: { inquiryId: inquiry.id },
  });
  expect(intentAfterScope?.scopeProposalId).toBe(scopeId);
  expect((intentAfterScope?.requirementsJson as { skills?: unknown[] })?.skills).toBeDefined();

  await page.goto(`/portal/inquiries/${inquiry.id}`);
  await page.getByRole("button", { name: /convert inquiry/i }).click();
  await page.waitForURL(/\/portal\/engagements\//);
  const engagementId = page.url().split("/").pop();

  const intentAfterEngagement = await prisma.staffingIntent.findFirst({
    where: { inquiryId: inquiry.id },
  });
  expect(intentAfterEngagement?.state).toBe("ACTIVE");
  expect(intentAfterEngagement?.engagementId).toBe(engagementId);
  const engagement = engagementId
    ? await prisma.engagement.findUnique({ where: { id: engagementId } })
    : null;
  const engagementTitle = engagement?.title ?? orgName;

  await page.goto("/portal/hr/radar");
  await page.getByRole("button", { name: "PASTE" }).click();
  await page
    .getByPlaceholder("Paste CSV/TSV here")
    .fill(
      [
        "fullName,email,linkedInUrl,primaryRoleId,secondaryRoleIds,domainIds,seniorityId,geo,languages,notes",
        `Avery Lee,${tag}@example.com,https://linkedin.com/in/${tag},fractional_cto,,ai_architecture,director,Berlin,en|de,Primary contact`,
        `Morgan Scout,${tag}@scout.local,https://linkedin.com/in/${tag}-manual,fractional_cto,,ai_architecture,director,Paris,en,Manual outreach`,
      ].join("\n"),
    );
  await page.getByRole("button", { name: /parse paste/i }).click();
  await page.getByRole("button", { name: /commit import/i }).click();
  await expect(page.getByText(/Created \d+/i)).toBeVisible();

  const profiles = await prisma.talentProfile.findMany({
    where: {
      OR: [
        { email: { contains: tag } },
        { linkedInUrl: { contains: tag } },
      ],
    },
  });
  expect(profiles.length).toBeGreaterThan(0);
  const manualProfile = await prisma.talentProfile.findFirst({
    where: { linkedInUrl: { contains: `${tag}-manual` } },
  });
  expect(manualProfile?.email?.endsWith("@scout.local")).toBeTruthy();

  const signals = await prisma.talentSignal.findMany({
    where: { profileId: { in: profiles.map((profile) => profile.id) } },
  });
  expect(signals.length).toBeGreaterThan(0);

  await page.goto("/portal/hr/staffing");
  const intentCard = page
    .locator("div.rounded-2xl", { hasText: engagementTitle })
    .first();
  await expect(intentCard).toBeVisible();
  await intentCard.getByRole("button", { name: /run matching/i }).click();
  await expect
    .poll(
      async () =>
        prisma.talentMatch.count({
          where: { staffingIntentId: intentAfterEngagement?.id ?? "" },
        }),
      { timeout: 15000 },
    )
    .toBeGreaterThan(0);
  await page.reload();
  const refreshedCard = page
    .locator("div.rounded-2xl", { hasText: engagementTitle })
    .first();
  await expect(refreshedCard.getByText(/top matches/i)).toBeVisible();

  const matches = await prisma.talentMatch.findMany({
    where: { staffingIntentId: intentAfterEngagement?.id ?? "" },
  });
  expect(matches.length).toBeGreaterThan(0);
  expect(matches[0]?.reasonsJson).toMatchObject({
    matchedRoleIds: expect.any(Array),
    requiredRoleIds: expect.any(Array),
    missingMustSkillIds: expect.any(Array),
  });
  if (profiles.length > 0) {
    await prisma.talentMatch.updateMany({
      where: {
        staffingIntentId: intentAfterEngagement?.id ?? "",
        talentProfileId: { in: profiles.map((profile) => profile.id) },
      },
      data: { score: 999, status: "SUGGESTED" },
    });
  }

  if (intentAfterEngagement?.orgId) {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    await prisma.outreachLog.deleteMany({
      where: {
        orgId: intentAfterEngagement.orgId,
        createdAt: { gte: startOfDay },
      },
    });
  }

  const outreachResponse = await page.request.post("/api/jobs/outreach");
  expect(outreachResponse.ok()).toBeTruthy();
  await page.goto("/portal/hr/outreach");
  await page.reload();
  await expect(
    page.getByRole("heading", { name: /manual outreach tasks/i }),
  ).toBeVisible();
  await expect
    .poll(
      async () =>
        prisma.outreachLog.count({
          where: { staffingIntentId: intentAfterEngagement?.id ?? "" },
        }),
      { timeout: 15000 },
    )
    .toBeGreaterThan(0);
  const outreachLogs = await prisma.outreachLog.findMany({
    where: { staffingIntentId: intentAfterEngagement?.id ?? "" },
  });
  const manualCount = outreachLogs.filter((log) =>
    ["LINKEDIN", "XING"].includes(log.channel),
  ).length;
  expect(manualCount).toBeGreaterThan(0);
  await expect(page.getByRole("link", { name: /open linkedin/i }).first()).toBeVisible();

  await page.goto("/portal/hr/staffing");
  const assignCard = page
    .locator("div.rounded-2xl", { hasText: engagementTitle })
    .first();
  await assignCard.getByRole("button", { name: /assign/i }).first().click();

  if (engagementId) {
    await expect
      .poll(
        async () =>
          prisma.talentAssignment.count({ where: { engagementId } }),
        { timeout: 15000 },
      )
      .toBeGreaterThan(0);
  }
  await expect
    .poll(
      async () =>
        prisma.staffingIntent.findFirst({
          where: { id: intentAfterEngagement?.id },
        }),
      { timeout: 15000 },
    )
    .toMatchObject({ state: "FULFILLED" });

  if (engagementId) {
    await page.goto(`/portal/engagements/${engagementId}`);
    await expect(page.getByText(/staffing ok/i).first()).toBeVisible();
  }

  await cleanupByOrgName(orgName, tag);
});

test("outreach idempotency", async () => {
  const tag = `e2e-outreach-${Date.now()}`;
  const seed = await seedOutreachScenario(tag);

  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  await prisma.outreachLog.deleteMany({
    where: { orgId: seed.orgId, createdAt: { gte: startOfDay } },
  });
  await runOutreachJob({ orgId: seed.orgId, triggeredByUserId: null });

  const emailJobKey = `outreach:${seed.intentId}`;
  const emailJobCount = await prisma.emailJob.count({
    where: { orgId: seed.orgId, idempotencyKey: { startsWith: emailJobKey } },
  });
  expect(emailJobCount).toBe(1);

  await prisma.outreachLog.deleteMany({
    where: { staffingIntentId: seed.intentId },
  });

  await runOutreachJob({ orgId: seed.orgId, triggeredByUserId: null });

  const emailJobCountAfter = await prisma.emailJob.count({
    where: { orgId: seed.orgId, idempotencyKey: { startsWith: emailJobKey } },
  });
  expect(emailJobCountAfter).toBe(1);

  const latestLog = await prisma.outreachLog.findFirst({
    where: { staffingIntentId: seed.intentId },
    orderBy: { createdAt: "desc" },
  });
  const existingJob = await prisma.emailJob.findFirst({
    where: { orgId: seed.orgId, idempotencyKey: { startsWith: emailJobKey } },
  });

  expect(latestLog?.status).toBe(existingJob?.status);

  await cleanupByOrgName(seed.orgName, tag);
});
