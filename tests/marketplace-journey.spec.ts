import { test, expect } from "@playwright/test";

test("marketplace journey guides to request scope", async ({ page }) => {
  await page.goto("/marketplace");
  await expect(
    page.getByRole("heading", { name: /what problem are you solving/i }),
  ).toBeVisible();

  const reviewCta = page.locator('[data-testid="review-scope"]').first();
  await expect(reviewCta).toBeDisabled();

  await page.locator('[data-testid="suggestion-chip"]').first().click();
  const contextStep = page.getByTestId("context-step");
  await expect(contextStep).toBeVisible();

  await contextStep.locator('button[data-testid^="domain-"]').first().click();
  await contextStep.locator('button[data-testid^="mode-"]').first().click();

  await page.locator('[data-testid^="toggle-service-"]').first().click();
  await expect(reviewCta).toBeEnabled();

  await reviewCta.click();
  await expect(page.getByTestId("review-drawer")).toBeVisible();
  await expect(page.getByTestId("selected-service").first()).toBeVisible();

  await page.getByTestId("continue-to-request-scope").click();
  await expect(page).toHaveURL(/\/request-scope/);
  await expect(page.getByText(/prefilled from marketplace/i)).toBeVisible();
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("marketplace journey works on mobile", async ({ page }) => {
    await page.goto("/marketplace");
    await expect(
      page.getByRole("heading", { name: /what problem are you solving/i }),
    ).toBeVisible();

    await page.locator('[data-testid="suggestion-chip"]').first().click();

    const contextStep = page.getByTestId("context-step");
    await contextStep.locator('button[data-testid^="domain-"]').first().click();

    await page.locator('[data-testid^="toggle-service-"]').first().click();

    const reviewCta = page.locator('[data-testid="review-scope"]').first();
    await reviewCta.click();
    await expect(page.getByTestId("review-drawer")).toBeVisible();

    await page.getByTestId("continue-to-request-scope").click();
    await expect(page).toHaveURL(/\/request-scope/);
  });
});
