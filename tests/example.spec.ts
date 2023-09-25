import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("https://alux444.github.io/tracktrekker/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("TrackTrekker");
});

test("get started link", async ({ page }) => {
    await page.goto("https://alux444.github.io/tracktrekker/");

    // Click the get started link.
    await page.getByRole("button", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole("button", { name: "Artists" })).toBeVisible();
});
