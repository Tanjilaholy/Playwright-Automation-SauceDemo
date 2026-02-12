export class CartAction {
  constructor(page) {
    this.page = page;
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async proceedToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}