import NextAuth from "next-auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getClientIp, rateLimit } from "@/lib/rateLimit";

const authRateLimit = {
  windowMs: 10 * 60 * 1000,
  max: 20,
};

const handler = NextAuth(authOptions);

async function enforceRateLimit(request: Request) {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  const clientIp = getClientIp(request);
  const result = rateLimit(`auth:${clientIp}`, authRateLimit);
  if (!result.allowed) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }
  return null;
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ nextauth: string[] }> },
) {
  const limited = await enforceRateLimit(request);
  if (limited) {
    return limited;
  }
  return handler(request, context as never);
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ nextauth: string[] }> },
) {
  const limited = await enforceRateLimit(request);
  if (limited) {
    return limited;
  }
  return handler(request, context as never);
}
