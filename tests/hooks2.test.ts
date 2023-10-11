import { test, expect } from "@playwright/test";

//beforeEach/afterEach - each indiv test
//beforeAll/afterAll -  once testing

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto("https://www.demoblaze.com/");

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("youngtimmy");
    await page.locator("#loginpassword").fill("123456");
    await page.getByRole("button", { name: "Log in" }).click();

    await page.waitForTimeout(4000);
});

test.afterAll(async () => {
    await page.locator("#logout2").click();
});

test("home test", async () => {
    const products = await page.$$(".card-block");
    expect(products).toHaveLength(9);
});

test("cart test", async () => {
    const firstProduct = await page.locator(".card-block").first();
    await firstProduct.locator("//a").click();
    await page.locator("//a[text()='Add to cart']").click();
    page.on("dialog", async (dialog) => {
        expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    });

    await page.waitForTimeout(1000);

    await page.locator("//a[text()='Cart']").click();

    await page.waitForTimeout(5000);

    expect(await page.locator("#tbodyid").textContent()).toContain(
        "Samsung galaxy s6"
    );

    await page.waitForTimeout(1000);
});
