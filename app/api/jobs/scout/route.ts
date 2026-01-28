import { NextResponse } from "next/server";
import { getServerAuthSession } from "@/lib/auth";
import { runScoutJob } from "@/lib/scout/job";

const isAuthorized = async (request: Request) => {
  const secret = process.env.JOBS_SECRET;
  if (secret && request.headers.get("x-job-secret") === secret) {
    return { ok: true };
  }
  const session = await getServerAuthSession();
  if (!session?.user?.id) return { ok: false };
  const isStaff =
    session.user.role === "lucien_admin" || session.user.role === "lucien_operator";
  if (!isStaff) return { ok: false };
  return { ok: true, orgId: session.user.orgId };
};

export async function POST(request: Request) {
  const auth = await isAuthorized(request);
  if (!auth.ok) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const result = await runScoutJob({ orgId: auth.orgId });
  return NextResponse.json(result);
}
