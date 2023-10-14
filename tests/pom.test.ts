import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

test("pom", async ({ page }) => {
    test.slow();

    //login using pom
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("youngtimmy", "123456");

    await page.waitForTimeout(3000);

    //Homepage using pom
    const home = new HomePage(page);
    await home.addToCart("Samsung galaxy s6");

    await page.waitForTimeout(3000);

    //cartpage using pom
    const cart = new CartPage(page);
    await cart.gotoCart();

    await page.waitForTimeout(3000);

    expect(await cart.checkForItem("Samsung galaxy s6"));

    await page.waitForTimeout(3000);
});
