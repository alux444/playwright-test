import { test, expect } from "@playwright/test";

test("handling inputs", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");

    //handling text inputs
    await page.getByPlaceholder("First Name").fill("Timmy");
    await expect(page.getByPlaceholder("First Name")).toHaveValue("Timmy");
    await page.locator("#lastName").fill("Joe");

    //handling radio input
    await page.locator("[for='gender-radio-1']").check();
    await expect(page.locator("[id='gender-radio-1']")).toBeChecked();
    await expect(
        page.locator("[id='gender-radio-1']").isChecked()
    ).toBeTruthy();
    await expect(page.locator("#gender-radio-2")).not.toBeChecked();
});
