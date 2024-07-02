import { test, expect } from "@playwright/test";

test.use({ storageState: "storageState.json" });

test("example test", async ({ page }) => {
  await page.goto("/admin"); // Assuming your test relies on being logged in
  await expect(page.locator("text=TOTAL ORDERS")).toBeVisible();
  // Your test code here
});
