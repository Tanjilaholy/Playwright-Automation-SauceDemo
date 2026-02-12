import { test, expect } from '@playwright/test';
import { LoginAction } from '../pageAction/loginAction';
import { ProductAction } from '../pageAction/productAction';
import { CartAction } from '../pageAction/cartAction';
import { MenuAction } from '../pageAction/menuAction';
import { CheckoutAction } from '../pageAction/checkoutAction';

test('Q3 purchase flow', async ({ page }) => {
 
  await page.goto('https://www.saucedemo.com/');

  const login = new LoginAction(page);
  const product = new ProductAction(page);
  const cart = new CartAction(page);
  const menu = new MenuAction(page);
  const checkout = new CheckoutAction(page);

  await login.login('performance_glitch_user', 'secret_sauce');
  await page.waitForLoadState('domcontentloaded');
 
  await menu.resetAppState();
  await product.filterByNameZtoA();
  await product.addFirstProductToCart();

  // checkout
  await cart.goToCart();
  await cart.proceedToCheckout();
  await checkout.fillCheckoutInfo('Holy', 'User', '12');

 
  const productNames = await checkout.getItemNames().allTextContents();
  expect(productNames.length).toBe(1);

  await expect(checkout.getTotalPrice()).toBeVisible();


  await checkout.finishCheckout();
  await checkout.verifyOrderSuccess();

  await menu.resetAppState();
  await menu.logout();
});
