import { test, expect, chromium } from "@playwright/test";

test("multiple", async ({}) => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log(allPages.length);

    await page1.goto("https://alux444.github.io/tracktrekker/");
    await expect(page1).toHaveTitle("TrackTrekker");

    await page2.goto("https://alux444.github.io/");
    await expect(page2).toHaveTitle("Portfolio Website");
});

test("opening link", async ({}) => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://alux444.github.io/");
    await expect(page1).toHaveTitle("Portfolio Website");

    //promise to open page in new tab
    const pagePromise = context.waitForEvent("page");
    await page1
        .locator("//*[@id='root']/div/div[2]/header/div/div[3]/a[2]")
        .click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("alux444 (Alex Liang) · GitHub");
    9;
    await newPage.waitForTimeout(2000);

    await browser.close();
});
