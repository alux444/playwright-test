import { Page } from "@playwright/test";

const LoginPage = class LoginPage {
    page: Page;
    loginLink: string;
    usernameInput: string;
    passwordInput: string;
    loginBtn: string;

    constructor(page) {
        this.page = page;
        this.loginLink = "#login2";
        this.usernameInput = "#loginusername";
        this.passwordInput = "#loginpassword";
        this.loginBtn = "//button[text()='Log in']";
    }

    async gotoLoginPage() {
        await this.page.goto("https://www.demoblaze.com/index.html");
    }

    async login(username, password) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.waitForSelector(this.loginBtn);
        await this.page.locator(this.loginBtn).click();
        await this.page.waitForTimeout(5000);
    }
};

export default LoginPage;
