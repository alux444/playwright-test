import { Page } from "@playwright/test";

const CartPage = class CartPage {
    page: Page;
    cartId: string;
    cartItems: string;

    constructor(page) {
        this.page = page;
        this.cartId = "#cartur";
        this.cartItems = "tbody tr td";
    }

    async gotoCart() {
        await this.page.locator(this.cartId).click();
    }

    async checkForItem(itemName: string) {
        const items = await this.page.$$(this.cartItems);
        for (const item of items) {
            const text = await item.textContent();
            if (text && text.includes(itemName)) {
                return true;
            }
        }
        return false;
    }
};

export default CartPage;
