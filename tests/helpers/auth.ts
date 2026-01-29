import { createHash } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import type { Page } from "@playwright/test";

type TestUserKind = "admin" | "user";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getCaptureDir = () => {
  const dir = process.env.MAGIC_LINK_CAPTURE_DIR;
  if (!dir) {
    throw new Error("MAGIC_LINK_CAPTURE_DIR is required for magic-link tests.");
  }
  return dir;
};

const getMagicLinkPath = (email: string) => {
  const hash = createHash("sha256").update(email).digest("hex").slice(0, 12);
  return path.join(getCaptureDir(), `${hash}.json`);
};

export const buildTestEmail = (kind: TestUserKind) => {
  const tag = `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  return kind === "admin"
    ? `admin+${tag}@lucien.ai`
    : `user+${tag}@civic.example`;
};

const waitForMagicLink = async (email: string) => {
  const filePath = getMagicLinkPath(email);
  const deadline = Date.now() + 15000;

  while (Date.now() < deadline) {
    try {
      const payload = await fs.readFile(filePath, "utf8");
      const parsed = JSON.parse(payload) as { url?: string };
      if (parsed.url) {
        return parsed.url;
      }
    } catch {
      // Wait for the auth handler to write the capture file.
    }
    await sleep(250);
  }

  throw new Error("Magic link was not captured within the timeout window.");
};

export const loginWithMagicLink = async (
  page: Page,
  email: string,
  callbackUrl = "/portal/hr",
) => {
  await page.goto(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  await page.getByLabel(/work email/i).fill(email);
  await page.getByRole("button", { name: /send magic link/i }).click();
  const magicLink = await waitForMagicLink(email);
  await page.goto(magicLink);
  await page.waitForURL(/\/portal/);
};

export const loginAs = async (
  page: Page,
  kind: TestUserKind,
  callbackUrl = "/portal/hr",
) => {
  const email = buildTestEmail(kind);
  await loginWithMagicLink(page, email, callbackUrl);
  return email;
};
