import { PrismaClient } from "@prisma/client";
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Configure a Postgres connection string.");
}

const globalForPrisma = global as typeof global & {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
