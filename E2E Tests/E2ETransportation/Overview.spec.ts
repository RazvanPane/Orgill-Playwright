import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://dev-ozonetransportation.orgill.com/#/admin");
  await page.getByPlaceholder("Username").fill("cstdevelopment1");
  await page.getByPlaceholder("Username").press("Tab");
  await page.getByPlaceholder("Password").fill("Cst2024!!*");
  await page.getByPlaceholder("Password").press("Tab");
  await page.getByRole("button", { name: "Log in" }).press("Enter");
  const totalOrdersElement = page.getByText("TOTAL ORDERS");
  await expect(totalOrdersElement).toBeVisible({ timeout: 30000 }); // 30 seconds
  await expect(page.getByText("TOTAL VISITED")).toBeVisible();
  await expect(page.getByText("TOTAL KEYED IN")).toBeVisible();
  await expect(page.locator("nz-input-group")).toBeVisible();
  await expect(page.getByRole("button", { name: "Search" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Last 7 days" })).toBeVisible();
  await expect(page.getByText("TOTAL SEARCHES")).toBeVisible();
  await expect(page.locator("#total-searches-chart")).toBeVisible();
  await expect(page.getByText("TRAFFIC DASHBOARD OVERVIEW")).toBeVisible();
  await expect(page.getByText("Previous 8 days")).toBeVisible();
  await expect(page.getByText("Next 8 days")).toBeVisible();
  await expect(page.getByText("Daily")).toBeVisible();
  await expect(page.getByText("Weekly")).toBeVisible();
  await expect(page.getByText("Monthly")).toBeVisible();
  await expect(page.getByText("Yearly")).toBeVisible();
  await expect(page.getByPlaceholder("Customer Nr")).toBeVisible();
  await expect(page.locator("#icons-container svg")).toBeVisible();
  await expect(page.locator("#table-container")).toBeVisible();
  await expect(page.getByText("See all records")).toBeVisible();
});
