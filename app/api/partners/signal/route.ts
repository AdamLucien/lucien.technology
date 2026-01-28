import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import {
  availabilityIds,
  domainIds,
  engagementModeIds,
  languageIds,
  rateBandIds,
  roleIds,
  seniorityIds,
} from "@/lib/talent/taxonomy";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 6;

const allowedRoles = new Set(roleIds);
const allowedDomains = new Set(domainIds);
const allowedSeniorities = new Set(seniorityIds);
const allowedAvailability = new Set(availabilityIds);
const allowedEngagementModes = new Set(engagementModeIds);
const allowedRateBands = new Set(rateBandIds);
const allowedLanguages = new Set(languageIds);

const payloadSchema = z.object({
  fullName: z.string().min(1).max(120),
  email: z.string().email(),
  locationTimezone: z.string().max(120).optional().or(z.literal("")),
  linkedInUrl: z.string().url().optional().or(z.literal("")),
  primaryRole: z.string().refine((value) => allowedRoles.has(value)),
  secondaryRoles: z
    .array(z.string())
    .default([])
    .refine((values) => values.every((value) => allowedRoles.has(value))),
  domains: z
    .array(z.string())
    .min(1)
    .refine((values) => values.every((value) => allowedDomains.has(value))),
  seniority: z.string().refine((value) => allowedSeniorities.has(value)),
  availabilityWindow: z.string().refine((value) => allowedAvailability.has(value)),
  engagementModes: z
    .array(z.string())
    .default([])
    .refine((values) => values.every((value) => allowedEngagementModes.has(value))),
  rateBand: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine(
      (value) => value === undefined || value === "" || allowedRateBands.has(value),
    ),
  languages: z
    .array(z.string())
    .default([])
    .refine((values) => values.every((value) => allowedLanguages.has(value))),
  consent: z.boolean(),
  honeypot: z.string().optional().default(""),
  locale: z.string().optional(),
});

const normalizeList = (list: string[]) => Array.from(new Set(list.filter(Boolean)));

const cleanOptional = (value?: string | null) => {
  if (!value) return null;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
};

const getClientIp = (request: Request) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  const realIp = request.headers.get("x-real-ip");
  return realIp ?? "unknown";
};

const isMissingTableError = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return error.code === "P2021" || error.code === "P2022";
  }
  if (error instanceof Error) {
    return (
      error.message.includes("does not exist") ||
      error.message.includes("no such table")
    );
  }
  return false;
};

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  } else if (entry.count >= RATE_LIMIT_MAX) {
    return NextResponse.json(
      { ok: false, messageKey: "partners.form.error.rateLimit" },
      { status: 429 },
    );
  } else {
    entry.count += 1;
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, messageKey: "partners.form.error.invalid" },
      { status: 400 },
    );
  }

  const parsed = payloadSchema.safeParse(payload);
  if (!parsed.success || !parsed.data.consent) {
    return NextResponse.json(
      { ok: false, messageKey: "partners.form.error.invalid" },
      { status: 400 },
    );
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const email = parsed.data.email.trim().toLowerCase();
  const primaryRole = parsed.data.primaryRole;
  const secondaryRoles = normalizeList(
    parsed.data.secondaryRoles.filter((value) => value !== primaryRole),
  );
  const domains = normalizeList(parsed.data.domains);
  const engagementModes = normalizeList(parsed.data.engagementModes);
  const languages = normalizeList(parsed.data.languages);
  const rateBand = cleanOptional(parsed.data.rateBand);
  const linkedInUrl = cleanOptional(parsed.data.linkedInUrl);
  const locationTimezone = cleanOptional(parsed.data.locationTimezone);

  try {
    const profile = await prisma.talentProfile.upsert({
      where: { email },
      update: {
        fullName: parsed.data.fullName.trim(),
        locationTimezone,
        linkedInUrl,
        primaryRole,
        secondaryRoles,
        domains,
        seniority: parsed.data.seniority,
        availabilityWindow: parsed.data.availabilityWindow,
        engagementModes,
        rateBand,
        languages,
      },
      create: {
        fullName: parsed.data.fullName.trim(),
        email,
        locationTimezone,
        linkedInUrl,
        primaryRole,
        secondaryRoles,
        domains,
        seniority: parsed.data.seniority,
        availabilityWindow: parsed.data.availabilityWindow,
        engagementModes,
        rateBand,
        languages,
      },
    });

    await prisma.talentSignal.create({
      data: {
        profileId: profile.id,
        source: "PARTNERS_FORM",
        version: 1,
        payloadJson: {
          raw: {
            ...parsed.data,
            email,
            secondaryRoles,
            domains,
            engagementModes,
            languages,
            rateBand,
            linkedInUrl,
            locationTimezone,
          },
          meta: {
            ip,
            locale: parsed.data.locale ?? null,
            userAgent: request.headers.get("user-agent"),
            submittedAt: new Date().toISOString(),
          },
        },
      },
    });

    return NextResponse.json({ ok: true, profileId: profile.id });
  } catch (error) {
    if (isMissingTableError(error)) {
      return NextResponse.json(
        { ok: false, messageKey: "partners.form.error.unavailable" },
        { status: 503 },
      );
    }
    console.error("PartnersSignalFailed", error);
    return NextResponse.json(
      { ok: false, messageKey: "partners.form.error.generic" },
      { status: 500 },
    );
  }
}
