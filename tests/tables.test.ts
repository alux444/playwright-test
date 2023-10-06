import { test, expect, Page } from "@playwright/test";

test("tables", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");

    //extracting total amount rows/cols
    const columns = await table.locator("thead tr th");
    console.log("Number of columns: ", await columns.count());
    const rows = await table.locator("tbody tr");
    console.log("Number of roles: ", await rows.count());

    //selecting specific product
    // const rowWithProduct4 = await rows.filter({
    //     has: page.locator("td"),
    //     hasText: "Product 4",
    // });

    // await rowWithProduct4.locator("input").check();

    //selecting multiple products
    await selectProduct("Product 4", page, rows);
    await selectProduct("Product 3", page, rows);
    await selectProduct("Product 2", page, rows);

    const pageButtons = await page.locator(".pagination li a");

    for (let i = 0; i < (await pageButtons.count()); i++) {
        await pageButtons.nth(i).click();
        await scrapeCurrentItems(table);
    }
});

const selectProduct = async (productName: string, page: Page, rows) => {
    const rowWithProduct4 = await rows.filter({
        has: page.locator("td"),
        hasText: productName,
    });

    await rowWithProduct4.locator("input").check();
};

const scrapeCurrentItems = async (table) => {
    const allRows = await table.locator("tbody tr");
    for (let i = 0; i < (await allRows.count()); i++) {
        const tds = await allRows.nth(i).locator("td");
        let currentInfo = "";
        for (let j = 0; j < (await tds.count()); j++) {
            currentInfo += (await tds.nth(j).textContent()) + " ";
        }
        console.log(currentInfo);
    }
};
