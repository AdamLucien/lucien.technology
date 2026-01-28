import { prisma } from "@/lib/prisma";

export function getDomainFromEmail(email: string) {
  const [, domain] = email.toLowerCase().split("@");
  return domain ?? null;
}

type OrgInput = {
  name: string;
  domain?: string | null;
};

export async function getOrCreateOrg({ name, domain }: OrgInput) {
  if (domain) {
    const existing = await prisma.org.findFirst({ where: { domain } });
    if (existing) {
      return existing;
    }
  }

  const existingByName = await prisma.org.findUnique({ where: { name } });
  if (existingByName) {
    if (!existingByName.domain && domain) {
      return prisma.org.update({
        where: { id: existingByName.id },
        data: { domain },
      });
    }
    return existingByName;
  }

  return prisma.org.create({
    data: {
      name,
      domain: domain ?? undefined,
    },
  });
}
