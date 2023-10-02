import { test, expect } from "@playwright/test";

test("Locator Testing", async ({ page }) => {
    await page.goto("https://alux444.github.io/tracktrekker/");

    //check page title
    await expect(page).toHaveTitle("TrackTrekker");

    //locator by property
    const idDivText = await page.locator("id=landing").textContent();
    console.log(idDivText);

    //id by hashtag
    console.log(await page.locator("#landing").textContent());

    //by xpath
    console.log(
        await page
            .locator("button[class='flex gap-1 items-center']")
            .first()
            .textContent()
    );

    //click start button
    await page.getByRole("button", { name: "Get Started" }).click();

    //fill search bar
    await page.locator("#songSearchBar").fill("blue");

    await page.waitForTimeout(4000);

    const songRes = await page.$$(".songDisplay");

    const specificSongRes = await page.$(
        "//*[@id='askForSongs']/div[3]/div[1]/div[1]"
    );

    console.log("Results size:" + songRes.length);
    for (const song of songRes) {
        console.log(await song.textContent());
    }

    if (specificSongRes) {
        console.log("First result - " + (await specificSongRes.textContent()));
    }

    page.close();
});
