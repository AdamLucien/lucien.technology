import { NextResponse } from "next/server";
import { z } from "zod";
import { getServerAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const postSchema = z.object({
  ids: z.array(z.string().min(1)).optional(),
  markAll: z.boolean().optional(),
});

export async function GET(request: Request) {
  const session = await getServerAuthSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const limitParam = url.searchParams.get("limit");
  const status = url.searchParams.get("status");
  const limit = limitParam ? Number.parseInt(limitParam, 10) : 8;
  const take = Number.isFinite(limit) ? Math.min(Math.max(limit, 1), 20) : 8;

  const where = {
    recipientUserId: session.user.id,
    ...(status === "unread" ? { readAt: null } : {}),
  };

  const [items, unreadCount] = await Promise.all([
    prisma.notification.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take,
    }),
    prisma.notification.count({
      where: { recipientUserId: session.user.id, readAt: null },
    }),
  ]);

  return NextResponse.json({
    items: items.map((item) => ({
      id: item.id,
      type: item.type,
      title: item.title,
      body: item.body,
      createdAt: item.createdAt.toISOString(),
      readAt: item.readAt ? item.readAt.toISOString() : null,
    })),
    unreadCount,
  });
}

export async function POST(request: Request) {
  const session = await getServerAuthSession();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  if (parsed.data.markAll) {
    await prisma.notification.updateMany({
      where: { recipientUserId: session.user.id, readAt: null },
      data: { readAt: new Date() },
    });
  } else if (parsed.data.ids && parsed.data.ids.length > 0) {
    await prisma.notification.updateMany({
      where: {
        recipientUserId: session.user.id,
        id: { in: parsed.data.ids },
      },
      data: { readAt: new Date() },
    });
  } else {
    return NextResponse.json({ error: "No targets" }, { status: 400 });
  }

  const unreadCount = await prisma.notification.count({
    where: { recipientUserId: session.user.id, readAt: null },
  });

  return NextResponse.json({ ok: true, unreadCount });
}
