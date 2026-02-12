import { expect } from '@playwright/test';
import { CheckoutObject } from '../pageObject/checkoutObject';

export class CheckoutAction {
  constructor(page) {
    this.checkout = new CheckoutObject(page);
  }

  async fillCheckoutInfo(first, last, zip) {
    await this.checkout.firstName.fill(first);
    await this.checkout.lastName.fill(last);
    await this.checkout.postalCode.fill(zip);
    await this.checkout.continueButton.click();
  }

  getItemNames() { return this.checkout.itemNames; }
  getTotalPrice() { return this.checkout.totalPrice; }

  async verifyProductNames(expectedNames) {
    const actualNames = await this.checkout.itemNames.allTextContents();
    for (const name of expectedNames) {
      expect(actualNames).toContain(name);
    }
  }

  async verifyPriceCalculation() {
    const subTotalLocator = this.checkout.subTotal;
    const taxLocator = this.checkout.tax;
    const totalLocator = this.checkout.totalPrice;

    const getPrice = async (locator) => {
      await locator.waitFor({ state: 'visible' }); 
      const text = await locator.innerText();
      return parseFloat(text.replace(/[^0-9.]/g, ''));
    };

    const sub = await getPrice(subTotalLocator);
    const tax = await getPrice(taxLocator);
    const total = await getPrice(totalLocator);

    // Math check (Item total + Tax = Total)
    expect(total).toBe(Number((sub + tax).toFixed(2))); 
  }

  async finishCheckout() { await this.checkout.finishButton.click(); }
  async verifyOrderSuccess() { await expect(this.checkout.successMessage).toBeVisible(); }
}