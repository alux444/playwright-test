import { test, expect } from "@playwright/test";

test("Test 1 @tag", async ({ page }) => {
    console.log("t1");
});

test("Test 2 @tag", async ({ page }) => {
    console.log("t2");
});

test("Test 3 @reg", async ({ page }) => {
    console.log("t3");
});

test("Test 4 @reg", async ({ page }) => {
    console.log("t4");
});

test("Test 5 @tag@reg", async ({ page }) => {
    console.log("t4");
});
