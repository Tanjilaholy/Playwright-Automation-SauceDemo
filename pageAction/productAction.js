import { ProductObject } from '../pageObject/productObject';

export class ProductAction {
  constructor(page) {
    this.page = page;
    this.product = new ProductObject(page);
  }

  // Q2
  async addFirstNProductsToCart(n) {
    await this.product.inventoryItems.first().waitFor({ state: 'visible' });
    
    for (let i = 0; i < n; i++) {
      await this.product.addToCartButtons.nth(i).click();
    }
  }

  // Q3
  async filterByNameZtoA() {
    await this.product.filterDropdown.selectOption('za');
  }
  async addFirstProductToCart() {
    await this.product.addToCartButtons.first().click();
  }
}
