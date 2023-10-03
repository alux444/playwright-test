import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("https://alux444.github.io/tracktrekker/");
    await page
        .locator("#navbar")
        .getByRole("button", { name: "TrackTrekker" })
        .click();
    await page.getByRole("heading", { name: "Find" }).click();
    await page.getByRole("heading", { name: "Something" }).click();
    await page.getByRole("heading", { name: "New" }).click();
    await page.getByRole("button", { name: "Get Started" }).click();
    await page.getByPlaceholder("Search for Song").click();
    await page.getByPlaceholder("Search for Song").fill("swag");
    await page.locator("#songAddButton").first().click();
    await page.getByText("1 song").click();
    await page.getByRole("button", { name: "View Search" }).click();
    await page.getByRole("button", { name: "×" }).click();
    await page.getByRole("button", { name: "Get results" }).click();
    await page
        .getByText(
            "Searching for 1 song, 0 artists, 0 genresWith 0 filters applied."
        )
        .click();
    await page.getByRole("button", { name: "Reroll" }).click();
});
