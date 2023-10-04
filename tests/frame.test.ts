import { test, expect } from "@playwright/test";

test("frame test", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const allFrames = await page.frames();
    console.log("Amount of frames: " + allFrames.length);

    //using name or url of page (src of html)
    //await page.frame("name attribute")
    const frame1 = await page.frame({
        url: "https://ui.vision/demo/webtest/frames/frame_1.html",
    });
    await frame1?.locator("[name='mytext1']").fill("Hello");

    await page.waitForTimeout(3000);

    //using frame locator
    const inputbox = await page
        .frameLocator("frame[src='frame_2.html']")
        .locator("[name='mytext2']");

    await inputbox.fill("Freddy");

    await page.waitForTimeout(3000);
});
