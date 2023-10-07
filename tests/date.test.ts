import { test, expect } from "@playwright/test";

test("date test", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const datepicker = await page.locator("#datepicker");

    //by fill
    await datepicker.fill("17/10/2003");

    await page.waitForTimeout(1000);

    await datepicker.clear();

    const year = "2022";
    const month = "October";
    const day = "17";

    await datepicker.click();

    while (true) {
        const currentYear = await page
            .locator(".ui-datepicker-year")
            .textContent();
        const currentMonth = await page
            .locator(".ui-datepicker-month")
            .textContent();

        if (currentYear == year && currentMonth == month) {
            break;
        }

        await page.locator("a[title='Prev']").click();
    }
    await page.waitForTimeout(1000);

    // const dates = await page.$$(".ui-state-default");

    // for (const date of dates) {
    //     if ((await date.textContent()) == day) {
    //         await date.click();
    //         break;
    //     }
    // }

    //or without loop
    await page
        .locator(`//a[@class='ui-state-default' and text()='${day}']`)
        .click();

    await page.waitForTimeout(3000);
});
