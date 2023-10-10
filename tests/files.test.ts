import { test, expect } from "@playwright/test";

test("single file", async ({ page }) => {
    await page.goto("https://www.foundit.in/");

    //wait for selector to be available
    await page.waitForSelector(".mqfihd-upload");

    //click upload button
    await page.locator(".mqfihd-upload").click();

    await page.waitForTimeout(2000);

    await page.locator("#file-upload").setInputFiles("tests/uploads/test2.txt");

    await page.waitForTimeout(2000);
});

test.only("multiple files", async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.waitForSelector("#filesToUpload");
    await page
        .locator("#filesToUpload")
        .setInputFiles(["tests/uploads/test2.txt", "tests/uploads/upload.txt"]);

    await page.waitForTimeout(1000);

    await expect(await page.locator("#fileList li").first()).toHaveText(
        "test2.txt"
    );
    await expect(await page.locator("#fileList li").nth(1)).toHaveText(
        "upload.txt"
    );

    //remove all files
    await page.locator("#filesToUpload").setInputFiles([]);

    await expect(await page.locator("#fileList li").first()).toHaveText(
        "No Files Selected"
    );

    await page.waitForTimeout(1000);
});
