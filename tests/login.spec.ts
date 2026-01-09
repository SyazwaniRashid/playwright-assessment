import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('admin1', 'P@ssword1');
  await loginPage.verifyLoginSuccess();
});
