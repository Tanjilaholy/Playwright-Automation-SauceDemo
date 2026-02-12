import { test, expect } from '@playwright/test';
import { LoginAction } from '../pageAction/loginAction';
import { LoginObject } from '../pageObject/loginObject';

test('error message', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  const loginAction = new LoginAction(page);
  const loginObject = new LoginObject(page);

  await loginAction.login('locked_out_user', 'secret_sauce');
  await expect(loginObject.errorMessage)
    .toHaveText('Epic sadface: Sorry, this user has been locked out.');
});
