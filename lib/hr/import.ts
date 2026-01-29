import { createHash } from "crypto";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  availabilityOptions,
  domainIds,
  engagementModeOptions,
  roleIds,
  seniorityOptions,
} from "@/lib/talent/taxonomy";

export type ImportRow = Record<string, string>;
export type ImportMapping = Record<string, string>;

export type ImportError = {
  row: number;
  message: string;
};

export type ImportPreview = {
  total: number;
  valid: number;
  invalid: number;
  newCount: number;
  updateCount: number;
  errors: ImportError[];
};

export type ImportCommit = ImportPreview & {
  created: number;
  updated: number;
  skipped: number;
};

type NormalizedRow = {
  rowIndex: number;
  fullName: string | null;
  email: string | null;
  linkedInUrl: string | null;
  xingUrl: string | null;
  primaryRole: string | null;
  secondaryRoles: string[];
  domains: string[];
  seniority: string | null;
  availabilityWindow: string | null;
  engagementModes: string[];
  languages: string[];
  rateBand: string | null;
  externalId: string | null;
  dedupeKey: string | null;
  raw: ImportRow;
  errors: string[];
};

const availabilityIds = availabilityOptions.map((option) => option.id);
const engagementModeIds = engagementModeOptions.map((option) => option.id);
const seniorityIds = seniorityOptions.map((option) => option.id);

const clean = (value: unknown) =>
  typeof value === "string" ? value.trim() : value == null ? "" : String(value);

const splitList = (value: string) => {
  if (!value) return [];
  const parts = value.includes("|")
    ? value.split("|")
    : value.includes(";")
      ? value.split(";")
      : value.split(",");
  return parts.map((item) => item.trim()).filter(Boolean);
};

const hashValue = (value: string) => createHash("sha256").update(value).digest("hex");

const buildPlaceholderEmail = (key: string) => `import+${hashValue(key)}@import.local`;

const getFieldValue = (row: ImportRow, mapping: ImportMapping, field: string) => {
  const column = mapping[field];
  if (!column) return "";
  return clean(row[column]);
};

const deriveName = (row: ImportRow, mapping: ImportMapping) => {
  const fullName = getFieldValue(row, mapping, "fullName");
  if (fullName) return fullName;
  const first = getFieldValue(row, mapping, "firstName");
  const last = getFieldValue(row, mapping, "lastName");
  const combined = `${first} ${last}`.trim();
  return combined || null;
};

const deriveDedupeKey = (row: NormalizedRow) => {
  if (row.dedupeKey) return row.dedupeKey;
  if (row.email) return hashValue(row.email);
  if (row.linkedInUrl) return hashValue(row.linkedInUrl);
  if (row.xingUrl) return hashValue(row.xingUrl);
  if (row.externalId) return hashValue(row.externalId);
  return null;
};

const normalizeRow = (row: ImportRow, mapping: ImportMapping, index: number): NormalizedRow => {
  const errors: string[] = [];
  const fullName = deriveName(row, mapping);
  const email = getFieldValue(row, mapping, "email") || null;
  const linkedInUrl = getFieldValue(row, mapping, "linkedInUrl") || null;
  const xingUrl = getFieldValue(row, mapping, "xingUrl") || null;
  const primaryRole = getFieldValue(row, mapping, "primaryRole") || null;
  const secondaryRoles = splitList(getFieldValue(row, mapping, "secondaryRoles"));
  const domains = splitList(getFieldValue(row, mapping, "domains"));
  const seniority = getFieldValue(row, mapping, "seniority") || null;
  const availabilityWindow = getFieldValue(row, mapping, "availabilityWindow") || null;
  const engagementModes = splitList(getFieldValue(row, mapping, "engagementModes"));
  const languages = splitList(getFieldValue(row, mapping, "languages"));
  const rateBand = getFieldValue(row, mapping, "rateBand") || null;
  const externalId = getFieldValue(row, mapping, "externalId") || null;
  const dedupeKey = getFieldValue(row, mapping, "dedupeKey") || null;

  if (!email && !linkedInUrl && !xingUrl && !dedupeKey) {
    errors.push("Missing a contact: email, LinkedIn URL, Xing URL, or dedupeKey.");
  }
  if (primaryRole && !roleIds.includes(primaryRole)) {
    errors.push(`Invalid primaryRole: ${primaryRole}`);
  }
  const invalidSecondaryRoles = secondaryRoles.filter((role) => !roleIds.includes(role));
  if (invalidSecondaryRoles.length > 0) {
    errors.push(`Invalid secondaryRoles: ${invalidSecondaryRoles.join(", ")}`);
  }
  const invalidDomains = domains.filter((domain) => !domainIds.includes(domain));
  if (invalidDomains.length > 0) {
    errors.push(`Invalid domains: ${invalidDomains.join(", ")}`);
  }
  if (seniority && !seniorityIds.includes(seniority)) {
    errors.push(`Invalid seniority: ${seniority}`);
  }
  if (availabilityWindow && !availabilityIds.includes(availabilityWindow)) {
    errors.push(`Invalid availabilityWindow: ${availabilityWindow}`);
  }
  const invalidModes = engagementModes.filter((mode) => !engagementModeIds.includes(mode));
  if (invalidModes.length > 0) {
    errors.push(`Invalid engagementModes: ${invalidModes.join(", ")}`);
  }

  return {
    rowIndex: index,
    fullName,
    email,
    linkedInUrl,
    xingUrl,
    primaryRole,
    secondaryRoles,
    domains,
    seniority,
    availabilityWindow,
    engagementModes,
    languages,
    rateBand,
    externalId,
    dedupeKey,
    raw: row,
    errors,
  };
};

const findExistingProfile = async (row: NormalizedRow) => {
  if (row.email) {
    const byEmail = await prisma.talentProfile.findUnique({ where: { email: row.email } });
    if (byEmail) return byEmail;
  }
  if (row.linkedInUrl) {
    const byLinkedIn = await prisma.talentProfile.findFirst({
      where: { linkedInUrl: row.linkedInUrl },
    });
    if (byLinkedIn) return byLinkedIn;
  }
  if (row.xingUrl) {
    const byXing = await prisma.talentProfile.findFirst({
      where: { xingUrl: row.xingUrl },
    });
    if (byXing) return byXing;
  }
  const key = deriveDedupeKey(row);
  if (key) {
    const signal = await prisma.talentSignal.findFirst({
      where: { dedupeKey: key },
      include: { profile: true },
    });
    if (signal?.profile) return signal.profile;
  }
  return null;
};

export const previewTalentImport = async ({
  rows,
  mapping,
}: {
  rows: ImportRow[];
  mapping: ImportMapping;
}): Promise<ImportPreview> => {
  const errors: ImportError[] = [];
  let valid = 0;
  let newCount = 0;
  let updateCount = 0;

  for (let i = 0; i < rows.length; i += 1) {
    const normalized = normalizeRow(rows[i], mapping, i + 1);
    if (normalized.errors.length > 0) {
      normalized.errors.forEach((message) => errors.push({ row: normalized.rowIndex, message }));
      continue;
    }
    valid += 1;
    const existing = await findExistingProfile(normalized);
    if (existing) {
      updateCount += 1;
    } else {
      newCount += 1;
    }
  }

  return {
    total: rows.length,
    valid,
    invalid: errors.length > 0 ? rows.length - valid : 0,
    newCount,
    updateCount,
    errors,
  };
};

export const commitTalentImport = async ({
  rows,
  mapping,
  source,
}: {
  rows: ImportRow[];
  mapping: ImportMapping;
  source: string;
}): Promise<ImportCommit> => {
  const preview = await previewTalentImport({ rows, mapping });
  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (let i = 0; i < rows.length; i += 1) {
    const normalized = normalizeRow(rows[i], mapping, i + 1);
    if (normalized.errors.length > 0) {
      skipped += 1;
      continue;
    }
    const existing = await findExistingProfile(normalized);
    const dedupeKey = deriveDedupeKey(normalized);
    const email =
      normalized.email ??
      (existing?.email ?? (dedupeKey ? buildPlaceholderEmail(dedupeKey) : null));
    if (!email) {
      skipped += 1;
      continue;
    }

    const payload: Prisma.TalentProfileUncheckedCreateInput = {
      fullName: normalized.fullName ?? existing?.fullName ?? email,
      email,
      primaryRole:
        normalized.primaryRole ?? existing?.primaryRole ?? "systems_architect",
      secondaryRoles:
        normalized.secondaryRoles.length > 0
          ? normalized.secondaryRoles
          : existing?.secondaryRoles ?? [],
      domains:
        normalized.domains.length > 0 ? normalized.domains : existing?.domains ?? [],
      seniority: normalized.seniority ?? existing?.seniority ?? "ic_senior",
      availabilityWindow:
        normalized.availabilityWindow ??
        existing?.availabilityWindow ??
        "two_four_weeks",
      engagementModes:
        normalized.engagementModes.length > 0
          ? normalized.engagementModes
          : existing?.engagementModes ?? ["remote"],
      rateBand: normalized.rateBand ?? existing?.rateBand ?? null,
      languages:
        normalized.languages.length > 0
          ? normalized.languages
          : existing?.languages ?? ["en"],
      linkedInUrl: normalized.linkedInUrl ?? existing?.linkedInUrl ?? null,
      xingUrl: normalized.xingUrl ?? existing?.xingUrl ?? null,
      locationTimezone: existing?.locationTimezone ?? null,
    };

    const profile = existing
      ? await prisma.talentProfile.update({
          where: { id: existing.id },
          data: payload,
        })
      : await prisma.talentProfile.create({
          data: payload,
        });

    if (existing) {
      updated += 1;
    } else {
      created += 1;
    }

    await prisma.talentSignal.create({
      data: {
        profileId: profile.id,
        source: "IMPORT_CSV",
        version: 1,
        payloadJson: normalized.raw,
        externalProfileUrl: normalized.linkedInUrl ?? normalized.xingUrl ?? null,
        externalId: normalized.externalId ?? null,
        dedupeKey,
        sourceQuery: source,
        capturedAt: new Date(),
      },
    });
  }

  return {
    ...preview,
    created,
    updated,
    skipped,
  };
};
