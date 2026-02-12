export class CheckoutObject {
  constructor(page) {
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.postalCode = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });


    this.itemNames = page.locator('.inventory_item_name');
    this.subTotal = page.locator('.summary_subtotal_label'); 
    this.tax = page.locator('.summary_tax_label');           
    this.totalPrice = page.locator('.summary_total_label');  

    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.successMessage = page.getByRole('heading', {
      name: /thank you for your order/i,
    });
  }
}
