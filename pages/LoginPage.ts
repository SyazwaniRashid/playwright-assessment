import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  usernameInput = () => this.page.locator('#username');
  passwordInput = () => this.page.locator('#password');
  loginButton = () => this.page.locator('#loginBtn');
  dashboardTitle = () => this.page.locator('text=Stock Market Dashboard');

  async goto() {
    await this.page.goto('https://qainterview.netlify.app/');
  }

  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click(); 
  }

  async verifyLoginSuccess() {
    await expect(this.dashboardTitle()).toBeVisible({ timeout: 10000 });
  }
}
