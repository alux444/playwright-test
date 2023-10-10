import { test, expect } from "@playwright/test";

test("keyboard test", async ({ page }) => {
    await page.goto("https://gotranscript.com/text-compare#diff");

    const first = await page.locator("//textarea[@name='text1']");

    await first.fill("Hello everybody");

    await page.waitForTimeout(1000);

    //ctrl a, ctrl c, tab, ctrl v (control instead of meta for windows)
    await page.keyboard.press("Meta+A");
    await page.keyboard.press("Meta+C");
    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");
    await page.keyboard.press("Meta+V");

    await page.waitForTimeout(2000);
});
