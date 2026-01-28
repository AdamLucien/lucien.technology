/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require("child_process");
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set for tests.");
}

if (!process.env.DATABASE_URL.startsWith("postgresql://")) {
  throw new Error("DATABASE_URL must use a PostgreSQL connection string for tests.");
}

execSync("npx prisma migrate reset --force", {
  stdio: "inherit",
  env: process.env,
});
