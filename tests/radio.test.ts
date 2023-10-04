import { test, expect } from "@playwright/test";

test("radiotest", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");

    await page.locator("[for='hobbies-checkbox-3']").check();

    await expect(
        page.locator("//input[@type='checkbox' and @id='hobbies-checkbox-3']")
    ).toBeChecked();

    const checkboxes = await page.$$("//input[@type='checkbox']");

    console.log(checkboxes.length);
});
