import { test, expect } from "@playwright/test";

test("page sc", async ({ page }) => {
    await page.goto("https://alux444.github.io/tracktrekker/");
    await page.waitForTimeout(2000);
    await page.screenshot({
        path: `./screenshots/tracktrekker_home_${Date.now()}.png`,
    });
});

test("full page sc", async ({ page }) => {
    await page.goto("https://alux444.github.io/tracktrekker/");
    await page.waitForTimeout(2000);
    await page.screenshot({
        path: `./screenshots/tracktrekker_full_home_${Date.now()}.png`,
        fullPage: true,
    });
});

test("element sc", async ({ page }) => {
    await page.goto("https://alux444.github.io/tracktrekker/");
    await page.waitForTimeout(2000);
    await page
        .locator("//img")
        .first()
        .screenshot({
            path: `./screenshots/tracktrekker_element_${Date.now()}.png`,
        });
});
