import { test, expect } from "@playwright/test";

test.beforeAll(async ({}) => {
    console.log("Before all hook");
});

test.afterAll(async ({}) => {
    console.log("After all hook");
});

test.beforeEach(async () => {
    console.log("Before each hook");
});

test.afterEach(async () => {
    console.log("After each hook");
});

test.describe.skip("group 1", () => {
    test("Test 1", async ({ page }) => {
        console.log("t1");
    });

    test("Test 2", async ({ page }) => {
        console.log("t2");
    });
});

test.describe("group 2", () => {
    test("Test 3", async ({ page }) => {
        console.log("t3");
    });

    test("Test 4", async ({ page }) => {
        console.log("t4");
    });
});
