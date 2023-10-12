import { test, expect } from "@playwright/test";

test("tracing", async ({ page }) => {
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

    // Fill the search bar with junk value
    await page
        .getByPlaceholder("Search for Song")
        .fill("jndkaknjvknjvdknsjvnkjdaadsaaidss");

    //wait for results
    await page.waitForTimeout(4000);

    //expect no results for junk search
    await expect(page.getByText("Your search had no results :(")).toBeVisible();

    //click tutorial
    await page.getByRole("button", { name: "How to use TrackTrekker" }).click();

    //find the next icon for tutorial
    const tutorialNextButton = await page.locator(
        '[data-testid="KeyboardArrowRightIcon"]'
    );
    if (tutorialNextButton) {
        tutorialNextButton.click();
    }

    //wait to check next page of tutorial exists
    await new Promise((resolve) => setTimeout(resolve, 2000));

    //close tutorial
    await page.getByRole("button", { name: "×" }).click();

    //go to artists
    await page.getByRole("button", { name: "Artists" }).click();

    //type into searchbar with new placeholder
    await page.getByPlaceholder("Search for Artist").fill("kanye");

    await page.waitForTimeout(1000);

    //click add button from first artist result
    await page.locator('[id="artistAddButton"]').first().click();
});
