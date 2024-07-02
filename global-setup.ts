import { chromium } from "@playwright/test";

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://dev-ozonetransportation.orgill.com/");
  await page.getByPlaceholder("Username").fill("cstdevelopment1");
  await page.getByPlaceholder("Password").fill("Cst2024!!*");
  await page.getByRole("button", { name: "Log in" }).press("Enter");

  // Save storage state to a file
  await context.storageState({ path: "storageState.json" });
  await browser.close();
}

export default globalSetup;
