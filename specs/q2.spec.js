import { test, expect } from '@playwright/test';
import { LoginAction } from '../pageAction/loginAction';
import { ProductAction } from '../pageAction/productAction';
import { CartAction } from '../pageAction/cartAction';
import { MenuAction } from '../pageAction/menuAction';
import { CheckoutAction } from '../pageAction/checkoutAction';

test('Q2 purchase flow', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  const login = new LoginAction(page);
  const product = new ProductAction(page);
  const cart = new CartAction(page);
  const menu = new MenuAction(page);
  const checkout = new CheckoutAction(page);

 
  await login.login('standard_user', 'secret_sauce');

  await menu.resetAppState();
  await product.addFirstNProductsToCart(3);

 
  await cart.goToCart();
  await cart.proceedToCheckout();
  await checkout.fillCheckoutInfo('Holy', 'User', '12');
  await expect(checkout.getItemNames()).toHaveCount(3);
 
  const actualProductNames = await checkout.getItemNames().allTextContents();
  await checkout.verifyProductNames(actualProductNames);


  await expect(checkout.getTotalPrice()).toBeVisible();
  await checkout.verifyPriceCalculation();

 
  await checkout.finishCheckout();
  await checkout.verifyOrderSuccess();

 
  await menu.resetAppState();
  await menu.logout();
});