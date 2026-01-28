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

const loginWithDev = async (page: Page, email: string) => {
  await page.goto("/login");
  await page.getByRole("button", { name: email, exact: true }).click();
  await page.waitForURL(/\/portal/);
};

test("notifications dialog shows items and can mark all read", async ({ page }) => {
  await loginWithDev(page, "user@civic.example");
  await completeOnboardingIfNeeded(page);

  const bellButton = page.getByRole("button", { name: "Notifications" });
  await bellButton.click();
  const popover = page.locator("[data-notifications-popover]");
  await expect(popover).toBeVisible();
  await expect(popover.getByText(/notifications/i)).toBeVisible();

  const markAll = popover.getByRole("button", { name: /mark all read/i });
  await markAll.click();
  await expect(
    page.locator('button[aria-label="Notifications"] span'),
  ).toHaveCount(0);

  await popover.getByRole("link", { name: /view all/i }).click();
  await expect(page).toHaveURL(/\/portal\/notifications/);
});

test("client cannot hard delete", async ({ page }) => {
  await loginWithDev(page, "user@civic.example");
  await completeOnboardingIfNeeded(page);

  const response = await page.evaluate(async () => {
    const res = await fetch("/api/portal/admin/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entityType: "notification",
        entityId: "not_real",
        reason: "Testing deletion constraints.",
        confirm: "DELETE FOREVER",
      }),
    });
    return res.status;
  });

  expect(response).toBe(403);
});

test("admin can hard delete with confirmation and reason", async ({ page }) => {
  await loginWithDev(page, "admin@lucien.ai");
  await page.goto("/portal/engagements");
  const engagementHref = await page
    .locator('a[href^="/portal/engagements/"]')
    .first()
    .getAttribute("href");
  if (!engagementHref) {
    throw new Error("No engagement available");
  }
  const engagementId = engagementHref.split("/").pop();
  if (!engagementId) {
    throw new Error("Invalid engagement id");
  }

  const created = await page.evaluate(async (id) => {
    const res = await fetch("/api/portal/change-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        engagementId: id,
        title: "Admin test delete",
        description: "Created for hard delete verification.",
        impact: "scope",
        severity: "low",
      }),
    });
    const data = await res.json().catch(() => null);
    return { ok: res.ok, data };
  }, engagementId);

  if (!created.ok) {
    throw new Error("Failed to create change request");
  }

  const changeRequestId = created.data?.item?.id as string | undefined;
  if (!changeRequestId) {
    throw new Error("Missing change request id");
  }

  const deleteResult = await page.evaluate(async (id) => {
    const res = await fetch("/api/portal/admin/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entityType: "change_request",
        entityId: id,
        reason: "Automated cleanup.",
        confirm: "DELETE FOREVER",
      }),
    });
    return res.ok;
  }, changeRequestId);

  expect(deleteResult).toBeTruthy();
});

test("controlled edit requires approved change request before apply", async ({ page }) => {
  await loginWithDev(page, "admin@lucien.ai");
  await page.goto("/portal/engagements");
  const engagementHref = await page
    .locator('a[href^="/portal/engagements/"]')
    .first()
    .getAttribute("href");
  if (!engagementHref) {
    throw new Error("No engagement available");
  }
  const engagementId = engagementHref.split("/").pop();
  if (!engagementId) {
    throw new Error("Invalid engagement id");
  }

  const created = await page.evaluate(async (id) => {
    const res = await fetch("/api/portal/change-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        engagementId: id,
        title: "Controlled edit test",
        description: "Request to update procurement reference.",
        impact: "scope",
        severity: "med",
      }),
    });
    const data = await res.json().catch(() => null);
    return { ok: res.ok, data };
  }, engagementId);

  if (!created.ok) {
    throw new Error("Failed to create change request");
  }

  const changeRequestId = created.data?.item?.id as string | undefined;
  if (!changeRequestId) {
    throw new Error("Missing change request id");
  }

  const editCreated = await page.evaluate(
    async ({ entityId, linkedChangeRequestId }) => {
      const res = await fetch("/api/portal/edits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          entityType: "engagement",
          entityId,
          reason: "Procurement reference update requested.",
          linkedChangeRequestId,
          diff: [
            {
              field: "procurementRef",
              from: null,
              to: "PO-TEST-CTRL",
            },
          ],
        }),
      });
      const data = await res.json().catch(() => null);
      return { ok: res.ok, data };
    },
    { entityId: engagementId, linkedChangeRequestId: changeRequestId },
  );

  if (!editCreated.ok) {
    throw new Error("Failed to create edit event");
  }

  const editEventId = editCreated.data?.editEventId as string | undefined;
  if (!editEventId) {
    throw new Error("Missing edit event id");
  }

  await page.goto(`/portal/edits/${editEventId}`);
  await page.getByRole("button", { name: /apply edit/i }).click();
  await expect(page.getByText(/change request not approved/i)).toBeVisible();

  await page.evaluate(async (id) => {
    await fetch(`/api/portal/change-requests/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "approved" }),
    });
  }, changeRequestId);

  await page.getByRole("button", { name: /apply edit/i }).click();
  await expect(page.getByText(/applied/i)).toBeVisible();
});
