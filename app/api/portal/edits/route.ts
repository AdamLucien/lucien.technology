import { NextResponse } from "next/server";
import { z } from "zod";
import { getServerAuthSession } from "@/lib/auth";
import { applyDiffSafely } from "@/lib/editing";

const diffSchema = z
  .array(
    z.object({
      field: z.string().min(1),
      from: z.unknown().optional(),
      to: z.unknown().optional(),
    }),
  )
  .min(1);

const bodySchema = z.object({
  entityType: z.enum([
    "engagement",
    "scope",
    "change_request",
    "invoice",
    "document",
    "deliverable",
    "milestone",
  ]),
  entityId: z.string().min(1),
  reason: z.string().min(5),
  diff: diffSchema,
  linkedChangeRequestId: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  const session = await getServerAuthSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json().catch(() => null);
  const parsed = bodySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const result = await applyDiffSafely({
    entityType: parsed.data.entityType,
    entityId: parsed.data.entityId,
    diff: parsed.data.diff,
    reason: parsed.data.reason,
    linkedChangeRequestId: parsed.data.linkedChangeRequestId ?? undefined,
    session,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    status: result.status,
    editEventId: result.editEventId,
  });
}
