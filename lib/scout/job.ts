import { createHash } from "crypto";
import { Prisma, ScoutSource } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { roleIds } from "@/lib/talent/taxonomy";
import { webProvider } from "@/lib/scout/providers/web";
import { linkedinProvider } from "@/lib/scout/providers/linkedin";
import { xingProvider } from "@/lib/scout/providers/xing";
import { directoryProvider } from "@/lib/scout/providers/directory";
import type { ScoutIntentInput, ScoutProvider, ScoutResult } from "@/lib/scout/providers/types";

const providers: ScoutProvider[] = [
  webProvider,
  linkedinProvider,
  xingProvider,
  directoryProvider,
];

const getProvider = (source: string) =>
  providers.find((provider) => provider.source === source);

const normalizeList = (value: unknown): string[] =>
  Array.isArray(value) ? value.map((item) => String(item)).filter(Boolean) : [];

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const extractRoleIds = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!isRecord(item)) return null;
      return typeof item.roleId === "string" ? item.roleId : null;
    })
    .filter((roleId): roleId is string => Boolean(roleId));
};

const hashValue = (value: string) => createHash("sha256").update(value).digest("hex");

const buildPlaceholderEmail = (key: string) => `scout+${hashValue(key)}@scout.local`;

const upsertTalentProfile = async (result: ScoutResult, intent: ScoutIntentInput) => {
  const email = result.email ?? buildPlaceholderEmail(result.dedupeKey ?? result.externalProfileUrl ?? result.fullName);
  const primaryRole =
    result.primaryRole ?? intent.roleIds.find((roleId) => roleIds.includes(roleId)) ?? "systems_architect";

  const payload = {
    fullName: result.fullName,
    email,
    primaryRole,
    secondaryRoles: result.secondaryRoles ?? [],
    domains: result.domains ?? intent.domainIds ?? [],
    seniority: result.seniority ?? intent.seniorityId ?? "ic_senior",
    availabilityWindow: result.availabilityWindow ?? intent.availabilityWindowId ?? "two_four_weeks",
    engagementModes: result.engagementModes ?? intent.modeIds ?? ["remote"],
    rateBand: result.rateBand ?? null,
    languages: result.languages ?? ["en"],
    linkedInUrl: result.linkedInUrl ?? null,
    xingUrl: result.xingUrl ?? null,
    locationTimezone: null,
  };

  let profile = await prisma.talentProfile.findUnique({ where: { email } });

  if (!profile && result.linkedInUrl) {
    profile = await prisma.talentProfile.findFirst({
      where: { linkedInUrl: result.linkedInUrl },
    });
  }

  if (!profile && result.xingUrl) {
    profile = await prisma.talentProfile.findFirst({
      where: { xingUrl: result.xingUrl },
    });
  }

  if (profile) {
    return prisma.talentProfile.update({
      where: { id: profile.id },
      data: payload,
    });
  }

  return prisma.talentProfile.create({ data: payload });
};

const buildScoutIntent = (intent: {
  id: string;
  orgId: string;
  rolesJson: unknown;
  requirementsJson: unknown;
}): ScoutIntentInput => {
  const roleIds = normalizeList(extractRoleIds(intent.rolesJson));

  return {
    orgId: intent.orgId,
    intentId: intent.id,
    roleIds,
    domainIds: [],
    keywords: roleIds,
    modeIds: [],
    source: "WEB" as ScoutSource,
  };
};

export async function runScoutJob({
  orgId,
}: {
  orgId?: string;
}) {
  const searchIntents = await prisma.searchIntent.findMany({
    where: {
      enabled: true,
      ...(orgId ? { orgId } : {}),
    },
  });

  const activeIntents = await prisma.staffingIntent.findMany({
    where: { state: "ACTIVE", ...(orgId ? { orgId } : {}) },
  });

  const derivedIntents = activeIntents.map((intent) => buildScoutIntent(intent));

  const allIntents: ScoutIntentInput[] = [
    ...searchIntents.map((intent) => ({
      orgId: intent.orgId,
      searchIntentId: intent.id,
      roleIds: normalizeList(intent.roleIds),
      domainIds: normalizeList(intent.domainIds),
      keywords: normalizeList(intent.keywords),
      seniorityId: intent.seniorityId,
      availabilityWindowId: intent.availabilityWindowId,
      modeIds: normalizeList(intent.modeIds),
      source: "WEB" as ScoutSource,
      sourceQuery: null,
    })),
    ...derivedIntents,
  ];

  const results = [];

  for (const intent of allIntents) {
    const sources = normalizeList(
      intent.searchIntentId
        ? normalizeList(
            (searchIntents.find((item) => item.id === intent.searchIntentId)?.targetSources) ??
              [],
          )
        : (process.env.SCOUT_DEFAULT_SOURCES ?? "WEB").split(","),
    );

    for (const source of sources) {
      const trimmedSource = source.trim();
      const provider = getProvider(trimmedSource);
      if (!provider) continue;

      const run = await prisma.scoutJobRun.create({
        data: {
          orgId: intent.orgId,
          source: provider.source,
          searchIntentId: intent.searchIntentId ?? null,
          staffingIntentId: intent.intentId ?? null,
          status: "OK",
          startedAt: new Date(),
        },
      });

      try {
        const found = await provider.search({ ...intent, source: provider.source });
        let createdCount = 0;
        let updatedCount = 0;

        for (const result of found) {
          const profile = await upsertTalentProfile(result, intent);
          const dedupeKey =
            result.dedupeKey ??
            (result.externalProfileUrl ? hashValue(result.externalProfileUrl) : null);

          await prisma.talentSignal.create({
            data: {
              profileId: profile.id,
              source: "SCOUT",
              version: 1,
              payloadJson: (result.payload ?? {}) as Prisma.InputJsonValue,
              externalProfileUrl: result.externalProfileUrl ?? null,
              externalId: result.externalId ?? null,
              dedupeKey,
              sourceQuery: result.sourceQuery ?? intent.sourceQuery ?? null,
              capturedAt: new Date(),
            },
          });

          if (profile.createdAt.getTime() === profile.updatedAt.getTime()) {
            createdCount += 1;
          } else {
            updatedCount += 1;
          }
        }

        await prisma.scoutJobRun.update({
          where: { id: run.id },
          data: {
            foundCount: found.length,
            createdCount,
            updatedCount,
            finishedAt: new Date(),
          },
        });

        results.push({ runId: run.id, found: found.length });
      } catch (error) {
        await prisma.scoutJobRun.update({
          where: { id: run.id },
          data: {
            status: "FAILED",
            error: error instanceof Error ? error.message : "unknown_error",
            finishedAt: new Date(),
          },
        });
      }
    }
  }

  return { ok: true, runs: results.length };
}
