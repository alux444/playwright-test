import { test, expect } from "@playwright/test";

test("dropdown test", async ({ page }) => {
    await page.goto("https://alux444.github.io/tracktrekker/");

    await page.getByRole("button", { name: "Get Started" }).click();

    await page.getByRole("button", { name: "Genres" }).click();

    await page.waitForTimeout(3000);

    const options = await page.$$(".selectOptionButton");

    console.log(options.length);

    for (const option of options) {
        await option.click();
    }

    await page.waitForTimeout(3000);
});
