import { test, expect } from "@playwright/test";

test("Drag and Drop", async ({ page }) => {
    await page.goto(
        "http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html"
    );

    const draggable = await page.$$(".dragableBox");

    const boxes = await page.$$(".dragableBoxRight");

    let i = 0;
    //approach 1
    // for (const left of draggable) {
    //     await left.hover();
    //     await page.mouse.down();

    //     await boxes[i].hover();
    //     await page.mouse.up();

    //     i++;

    //     await page.waitForTimeout(2000);
    // }

    //approach 2
    const box6 = await page.locator("#box6").first();
    const box106 = await page.locator("#box106");
    await box6.dragTo(box106);
    await page.waitForTimeout(2000);
});
