import { test, expect } from "@playwright/test";

test("video", async ({ page }) => {
    await page.goto("https://alux444.github.io/tracktrekker/");

    // Click the get started link.
    await page.getByRole("button", { name: "Get started" }).click();

    // Expects page to have a button to switch to artists.
    await expect(page.getByRole("button", { name: "Artists" })).toBeVisible();

    // Go to search bar and search for song
    await page.getByPlaceholder("Search for Song").fill("hello");

    // Expect the page to have song results
    const displayElement = await page.$(".songDisplay");

    if (displayElement) {
        expect(displayElement).toBe(true);
    }

    //add the very first song on the page
    const firstAddButton = await page.locator("[id='songAddButton']").first();
    firstAddButton.click();

    //wait for results
    await page.waitForTimeout(4000);

    //intentional failure error
    await page.locator("hidsh").click();
});
