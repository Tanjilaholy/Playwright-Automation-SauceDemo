export class ProductObject {
  constructor(page) {
    this.inventoryItems = page.locator('.inventory_item');
    this.productsTitle = page.getByRole('heading', { name: 'Products' });
    this.addToCartButtons = page.getByRole('button', { name: /Add to cart/i });
    this.cartLink = page.getByRole('link', { name: /Shopping cart/i });
    this.filterDropdown = page.locator('[data-test="product-sort-container"]');
  }
}
