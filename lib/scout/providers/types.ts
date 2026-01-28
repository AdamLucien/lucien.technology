import type { ScoutSource } from "@prisma/client";

export type ScoutIntentInput = {
  orgId: string;
  intentId?: string;
  searchIntentId?: string;
  roleIds: string[];
  domainIds: string[];
  keywords: string[];
  seniorityId?: string | null;
  availabilityWindowId?: string | null;
  modeIds: string[];
  source: ScoutSource;
  sourceQuery?: string | null;
};

export type ScoutResult = {
  fullName: string;
  email?: string | null;
  linkedInUrl?: string | null;
  xingUrl?: string | null;
  externalProfileUrl?: string | null;
  externalId?: string | null;
  dedupeKey?: string | null;
  primaryRole?: string | null;
  secondaryRoles?: string[];
  domains?: string[];
  seniority?: string | null;
  availabilityWindow?: string | null;
  engagementModes?: string[];
  rateBand?: string | null;
  languages?: string[];
  sourceQuery?: string | null;
  payload?: Record<string, unknown>;
};

export type ScoutProvider = {
  source: ScoutSource;
  search: (intent: ScoutIntentInput) => Promise<ScoutResult[]>;
};
