import { test, expect } from "@playwright/test";

test("mouse hover test", async ({ page }) => {
    await page.goto("https://demo.opencart.com/");

    const desktopsElement = await page.locator("//a[text()='Desktops']");

    const macElement = await page.locator("//a[text()='Mac (1)']");

    await desktopsElement.hover();

    await page.waitForTimeout(2000);

    await macElement.hover();

    await page.waitForTimeout(2000);

    await macElement.click();

    await page.waitForTimeout(2000);
});
