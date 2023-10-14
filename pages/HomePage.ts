import { Page } from "@playwright/test";

const HomePage = class HomePage {
    page: Page;
    products: string;
    addToCartBtn: string;
    cartBtn: string;

    constructor(page) {
        this.page = page;
        this.products = ".card-block a";
        this.addToCartBtn = "//a[text()='Add to cart']";
        this.cartBtn = "#cartur";
    }

    async addToCart(itemName: string) {
        let itemFound = false;
        const items = await this.page.$$(this.products);

        for (const item of items) {
            const text = await item.textContent();
            if (text && text.includes(itemName)) {
                itemFound = true;
                await item.click();
                break;
            }
        }

        if (!itemFound) {
            console.log("Couldn't find item: ", itemName);
            return;
        }

        await this.page.waitForTimeout(5000);

        await this.page.on("dialog", async (dialog) => {
            if (dialog.message().includes("Product added.")) {
                await dialog.accept();
            }
        });

        await this.page.locator(this.addToCartBtn).click();
    }
};

export default HomePage;
