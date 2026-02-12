export class CartObject {
  constructor(page) {
    this.cartItems = page.locator('.inventory_item_name');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }
}
