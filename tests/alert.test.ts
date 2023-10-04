import { test, expect } from "@playwright/test";

test("dialog test", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //event listener to handle default alert
    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("I am an alert box!");
        console.log("dialog found");
        await dialog.accept();
    });

    //handling default alert
    await page.getByRole("button", { name: "Alert" }).click();

    await page.waitForTimeout(2000);
});

test("confirmation dialog", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    let alreadyClicked: boolean = false;

    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("Press a button!");
        if (alreadyClicked) {
            await dialog.accept();
        } else {
            await dialog.dismiss();
            alreadyClicked = true;
        }
    });

    await page.getByRole("button", { name: "Confirm Box" }).click();

    await expect(page.locator("#demo")).toContainText("You pressed Cancel!");

    await page.getByRole("button", { name: "Confirm Box" }).click();

    await expect(page.locator("#demo")).toContainText("You pressed OK!");
});

test("prompt dialog", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");

        await dialog.accept("Young Timmy");
    });

    await page.getByRole("button", { name: "Prompt" }).click();

    await expect(page.locator("#demo")).toContainText(
        "Hello Young Timmy! How are you today?"
    );
});
