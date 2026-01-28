import { getServerAuthSession } from "@/lib/auth";
import { notFound, redirect } from "next/navigation";

export async function requirePortalSession() {
  const session = await getServerAuthSession();
  if (!session?.user) {
    redirect("/login?callbackUrl=/portal");
  }
  return session;
}

export function requireLucienAdmin(role?: string | null) {
  if (role !== "lucien_admin") {
    notFound();
  }
}

export function requireLucienStaff(role?: string | null) {
  if (role !== "lucien_admin" && role !== "lucien_operator") {
    notFound();
  }
}

export function getOrgScope(role: string | undefined, orgId: string | undefined) {
  if (role === "lucien_admin" || role === "lucien_operator") {
    return {};
  }
  return { orgId: orgId ?? "" };
}
