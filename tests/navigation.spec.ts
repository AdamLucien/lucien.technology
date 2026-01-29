import { test, expect, type Page } from "@playwright/test";

const completeOnboardingIfNeeded = async (page: Page) => {
  const onboardingHeading = page.getByRole("heading", {
    level: 1,
    name: /confirm profile/i,
  });
  const onboardingNeeded =
    page.url().includes("/portal/onboarding") ||
    (await page
      .waitForURL(/\/portal\/onboarding/, { timeout: 4000 })
      .then(() => true)
      .catch(() => false));

  if (!onboardingNeeded) {
    return;
  }

  const headingVisible = await onboardingHeading
    .isVisible({ timeout: 5000 })
    .catch(() => false);
  if (!headingVisible) {
    return;
  }
  await page.getByRole("button", { name: /continue/i }).click();
  const engagementSelect = page.getByRole("combobox", {
    name: /primary engagement/i,
  });
  if (await engagementSelect.isVisible()) {
    await engagementSelect.selectOption({ index: 0 });
  }
  await page.getByRole("button", { name: /continue/i }).click();
  await page
    .getByLabel(/portal contains confidential project data/i)
    .check();
  await page.getByRole("button", { name: /complete onboarding/i }).click();
  await expect(page).toHaveURL(/\/portal/);
};

test("desktop navigation routes without reload", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: /systems thinking/i }),
  ).toBeVisible();

  const nav = page.getByRole("navigation", { name: "Primary" });

  await nav.getByRole("link", { name: "Marketplace" }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: /mission problem/i }),
  ).toBeVisible();

  await nav.getByRole("link", { name: "How We Work" }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: /structured engagements/i }),
  ).toBeVisible();

  await nav.getByRole("link", { name: "Security" }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: /confidentiality-first/i }),
  ).toBeVisible();

  await nav.getByRole("link", { name: "About" }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: /quiet discipline/i }),
  ).toBeVisible();

  await nav.getByRole("link", { name: "Insights" }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: /focused analysis/i }),
  ).toBeVisible();

  await nav.getByRole("link", { name: "Contact" }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: /scoped engagement request/i }),
  ).toBeVisible();

  await page.getByRole("link", { name: /lucien home/i }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: /systems thinking/i }),
  ).toBeVisible();
});

test("mobile menu closes after navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: /open menu/i }).click();
  const dialog = page.getByRole("dialog", { name: /mobile navigation/i });
  await expect(dialog).toBeVisible();

  await dialog.getByRole("link", { name: "Marketplace" }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: /mission problem/i }),
  ).toBeVisible();
  const overlay = page.locator('[data-overlay="mobile-menu-backdrop"]');
  await expect(overlay).toBeHidden({ timeout: 2000 });
  await expect(dialog).toBeHidden({ timeout: 2000 });

  const aiFilter = page.getByRole("button", { name: "AI", exact: true });
  await aiFilter.click({ timeout: 2000 });
  await expect(aiFilter).toHaveAttribute("aria-pressed", "true");
});

test("marketplace card opens service detail page", async ({ page }) => {
  await page.goto("/marketplace");

  const firstCard = page.locator("[data-service-link]").first();
  await expect(firstCard).toBeVisible();

  await Promise.all([
    page.waitForResponse(
      (response) =>
        response.url().includes("/marketplace/") && response.status() === 200,
    ),
    firstCard.click(),
  ]);

  await expect(page).toHaveURL(/\/marketplace\/.+/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("marketplace card order is deterministic", async ({ page }) => {
  await page.goto("/marketplace");
  const getTopTitles = async () => {
    const titles = [];
    for (let index = 0; index < 3; index += 1) {
      const title = await page
        .locator("[data-service-link] h3")
        .nth(index)
        .textContent();
      titles.push(title?.trim() ?? "");
    }
    return titles;
  };

  const initial = await getTopTitles();
  await page.reload();
  const afterReload = await getTopTitles();
  expect(afterReload).toEqual(initial);
});

test("portal requires authentication", async ({ page }) => {
  await page.goto("/portal");
  await expect(page).toHaveURL(/\/login/);
});

test("request scope submits and confirms", async ({ page }) => {
  await page.goto("/request-scope");
  await page.getByLabel("Organization name").fill("Civic Systems");
  await page.getByLabel("Your role").fill("Program Lead");
  await page.getByLabel("Problem area").selectOption({ index: 1 });
  await page.getByLabel("Timeframe").selectOption({ index: 1 });
  await page.getByLabel("Work email").fill("morgan@example.com");
  await page.getByLabel("Short critical note (optional, 140 chars)").fill(
    "Procurement window in 6 weeks.",
  );
  await page.getByLabel(
    "I confirm this inquiry is lawful and does not request restricted instructions.",
  ).check();

  await page.getByRole("button", { name: /request scope/i }).click();
  await expect(page).toHaveURL(/\/request-scope\/confirm/);
  await expect(
    page.getByRole("heading", { level: 1, name: /request received/i }),
  ).toBeVisible();
});

test("admin converts inquiry to engagement", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "admin@lucien.ai", exact: true }).click();
  await page.waitForURL(/\/portal/);
  await page.goto("/portal/inquiries");
  const firstInquiry = page.locator('a[href^="/portal/inquiries/"]').first();
  await firstInquiry.click();
  const convertButton = page.getByRole("button", { name: /convert inquiry/i });
  if (await convertButton.isVisible()) {
    await convertButton.click();
    await expect(page).toHaveURL(/\/portal\/engagements\//);
  }
  await page.goto("/portal/engagements");
  await expect(
    page.locator('a[href^="/portal/engagements/"]').first(),
  ).toBeVisible();
});

test("client views engagements list", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "user@civic.example", exact: true }).click();
  await page.waitForURL(/\/portal/);
  await completeOnboardingIfNeeded(page);
  await page.goto("/portal/engagements");
  await completeOnboardingIfNeeded(page);
  await expect(
    page.getByRole("heading", { level: 1, name: /active engagements/i }),
  ).toBeVisible();
  await expect(
    page.locator('a[href^="/portal/engagements/"]').first(),
  ).toBeVisible();
});

test("client onboarding flow completes once", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "user@civic.example", exact: true }).click();
  await page.waitForURL(/\/portal/);
  await completeOnboardingIfNeeded(page);
  await page.goto("/portal");
  await expect(
    page.getByRole("heading", { level: 1, name: /client overview/i }),
  ).toBeVisible();
});

test("client can edit proposed change request but not after approval", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "user@civic.example", exact: true }).click();
  await page.waitForURL(/\/portal/);
  await completeOnboardingIfNeeded(page);
  await page.goto("/portal/engagements");
  const engagementHref = await page
    .locator('a[href^="/portal/engagements/"]')
    .first()
    .getAttribute("href");
  if (!engagementHref) {
    throw new Error("No engagement available for change request.");
  }
  const engagementId = engagementHref.split("/").pop();
  if (!engagementId) {
    throw new Error("Invalid engagement id.");
  }
  const createRequest = await page.request.post("/api/portal/change-requests", {
    data: {
      engagementId,
      title: `E2E proposed ${Date.now()}`,
      description: "Automated proposed change request for edit flow.",
      impact: "scope",
      severity: "low",
    },
  });
  expect(createRequest.ok()).toBeTruthy();
  await page.goto("/portal/change-requests");
  await completeOnboardingIfNeeded(page);
  await expect(
    page.getByRole("heading", { level: 1, name: /scope changes/i }),
  ).toBeVisible();
  const proposedRequest = page
    .locator('a[href^="/portal/change-requests/"]')
    .filter({ hasText: "Proposed" })
    .first();
  await proposedRequest.click({ force: true });

  const editHeading = page.getByRole("heading", { name: /edit request/i });
  await expect(editHeading).toBeVisible();
  await page.getByLabel("Title").fill("Updated request title");
  await page.getByLabel("Description").fill(
    "Updating the change request description for clarity.",
  );
  await page.getByLabel("Reason for change").fill("Clarify request scope.");
  await page.getByRole("button", { name: /update request/i }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Updated request title",
  );

  const changeRequestUrl = page.url();
  await page.getByRole("button", { name: /logout/i }).click();
  await page.waitForURL("**/");
  await page.goto("/login");

  await page.getByRole("button", { name: "admin@lucien.ai", exact: true }).click();
  await page.waitForURL(/\/portal/);
  await page.goto(changeRequestUrl);
  await page.getByRole("combobox", { name: "Status" }).selectOption("approved");
  await page.getByLabel("Decision note").fill("Approved with no deltas.");
  await page.getByRole("button", { name: /record decision/i }).click();
  await page.getByRole("button", { name: /logout/i }).click();
  await page.waitForURL("**/");

  await page.goto("/login");
  await page.getByRole("button", { name: "user@civic.example", exact: true }).click();
  await page.waitForURL(/\/portal/);
  await completeOnboardingIfNeeded(page);
  await page.goto(changeRequestUrl);
  await expect(page.getByRole("heading", { name: /edit request/i })).toHaveCount(0);
});

test("document archive permissions enforced", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "user@civic.example", exact: true }).click();
  await page.waitForURL(/\/portal/);
  await completeOnboardingIfNeeded(page);
  await page.goto("/portal/documents");
  await expect(page.getByRole("button", { name: "Archive" })).toHaveCount(0);

  await page.getByRole("button", { name: /logout/i }).click();
  await page.waitForURL("**/");
  await page.goto("/login");
  await page.getByRole("button", { name: "admin@lucien.ai", exact: true }).click();
  await page.waitForURL(/\/portal/);
  await page.goto("/portal/documents");
  const archiveButton = page.getByRole("button", { name: "Archive" }).first();
  await archiveButton.click();
  await page.getByPlaceholder("Why is this document archived?").fill("Superseded.");
  await page.getByRole("button", { name: /confirm archive/i }).click();
  await page.getByRole("link", { name: /show archived/i }).click();
  await expect(page.getByText("Archived")).toBeVisible();
});

test("critical edit requires change request", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "user@civic.example", exact: true }).click();
  await page.waitForURL(/\/portal/);
  await completeOnboardingIfNeeded(page);
  await page.goto("/portal/engagements");
  const engagementLink = await page
    .locator('a[href^="/portal/engagements/"]')
    .first()
    .getAttribute("href");
  if (!engagementLink) {
    throw new Error("No engagement link found");
  }
  const engagementId = engagementLink.split("/").pop();
  const response = await page.evaluate(async (payload) => {
    const res = await fetch("/api/portal/edits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data };
  }, {
    entityType: "engagement",
    entityId: engagementId,
    reason: "Procurement reference update requested.",
    diff: [
      {
        field: "procurementRef",
        from: null,
        to: "PO-UPDATED-001",
      },
    ],
  });
  expect(response.ok).toBeTruthy();
  expect(response.data.status).toBe("pending_approval");
});
