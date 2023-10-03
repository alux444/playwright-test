import { test, expect } from "@playwright/test";

const resolutions = [
    { width: 375, height: 667 },
    { width: 414, height: 736 },
    { width: 480, height: 800 },
    { width: 800, height: 1280 },
    { width: 1024, height: 768 },
    { width: 1366, height: 768 },
    { width: 1600, height: 900 },
    { width: 1920, height: 1080 },
];

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

    const listOfRes = page.locator(".songDisplay");
    expect(listOfRes).toHaveCount(8);

    for (const song of songRes) {
        console.log(await song.textContent());
    }

    if (specificSongRes) {
        console.log("First result - " + (await specificSongRes.textContent()));
    }

    // Get by alt text : getByAltText (image)
    // Get by placeholder : getByPlaceholder (input)
    // Get by text, getbylabel (input label), getbytitle, getbytestid(data-testid)

    for (const resolution of resolutions) {
        await page.setViewportSize(resolution);

        await page.waitForTimeout(1000);

        await page.screenshot({
            path: `./screenshots/screenshot_${resolution.width}x${resolution.height}.png`,
        });
    }

    page.close();
});
