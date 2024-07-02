import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://dev-ozonetransportation.orgill.com/");
  await page.getByPlaceholder("Username").click();
  await page.getByText("Username").click();
  await page.getByPlaceholder("Password").click();
  await page.getByText("Password").click();
  await page
    .locator("nz-form-item")
    .filter({ hasText: "Password" })
    .locator("nz-input-group")
    .click();
  await page
    .locator("nz-form-item")
    .filter({ hasText: "Username" })
    .locator("nz-input-group")
    .click();
  await page.getByPlaceholder("Username").fill("cstdevelopment1");
  await page.getByPlaceholder("Username").press("Tab");
  await page.getByPlaceholder("Password").fill("Cst2024!!*");
  await page.getByPlaceholder("Password").press("Tab");
  await page.getByRole("button", { name: "Log in" }).press("Enter");
  await page.getByRole("tab", { name: "ROUTES" }).click();
  await page.getByRole("tab", { name: "USERS" }).click();
  await page.getByRole("tab", { name: "BUGS" }).click();
});
