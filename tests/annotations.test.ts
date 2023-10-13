import { test, expect } from "@playwright/test";

//checking browsername example
test("browser name", async ({ browserName }) => {
    console.log("test");
    if (browserName == "chromium") {
        test.skip();
    }
    console.log("Not chromium!");
});

//fixme - marks test as failed but doesnt run
test("fixme", async () => {
    test.fixme();
    console.log("fixme");
});

//fail - marks the test as failing. if it doesnt fail, will complain
test("fail", async () => {
    test.fail();
    console.log("failing");
    //expecting to fail, but passes
    expect(1).toBe(1);
});

//slow - triples the timeout timer
test("slow", async ({ page }) => {
    test.slow();
    console.log("slow");
    await page.waitForTimeout(400000);
});
