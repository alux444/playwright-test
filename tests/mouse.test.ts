import { test, expect } from "@playwright/test";

test("right clicking", async ({ page }) => {
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const rightClickButton = await page.locator(
        "//span[text()='right click me']"
    );

    await rightClickButton.click({ button: "right" });
});

test("double clicking", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const button = await page.getByRole("button", { name: "Copy Text" });

    await button.dblclick();

    const content = await page.locator("#field2");
    await expect(content).toHaveValue("Hello World!");

    await page.waitForTimeout(2000);
});
