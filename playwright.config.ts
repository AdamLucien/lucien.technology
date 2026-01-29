import { defineConfig } from "@playwright/test";

const magicLinkCaptureDir =
  process.env.MAGIC_LINK_CAPTURE_DIR ?? "test-results/magic-links";
process.env.MAGIC_LINK_CAPTURE_DIR = magicLinkCaptureDir;

export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
  webServer: {
    command: "npm run dev -- --port 3000",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    env: {
      DATABASE_URL:
        process.env.DATABASE_URL ??
        `postgresql://lucien:lucien_dev@localhost:${
          process.env.LUCien_PG_PORT ?? "5433"
        }/lucien_dev?schema=public`,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ?? "dev-secret",
      NEXTAUTH_URL: "http://localhost:3000",
      ADMIN_EMAIL: process.env.ADMIN_EMAIL ?? "admin@lucien.ai",
      EMAIL_FROM: process.env.EMAIL_FROM ?? "contact@lucien.ai",
      MAGIC_LINK_CAPTURE_DIR: magicLinkCaptureDir,
    },
  },
});
