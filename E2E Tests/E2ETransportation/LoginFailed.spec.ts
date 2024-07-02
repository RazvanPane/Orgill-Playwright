import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://dev-ozonetransportation.orgill.com/");
  await page.goto("https://dev-ozonetransportation.orgill.com/#/auth");
  await page.getByPlaceholder("Username").fill("cstdevelopment1");
  await page.getByPlaceholder("Username").press("Tab");
  await page.getByPlaceholder("Password").fill("123457q");
  await page.getByPlaceholder("Password").press("Tab");
  await page.getByRole("button", { name: "Log in" }).press("Enter");
  await expect(page.locator("nz-message")).toContainText(
    "(401) Http failure response for https://dev-ozonetransportation.orgill.com/api/VendorAccount/NewLogin: 401 Unauthorized"
  );
});
