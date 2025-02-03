import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  private emailInput = this.page.locator('[data-test="email"]');
  private passwordInput = this.page.locator('[data-test="password"]');
  private loginButton = this.page.locator('[data-test="login-submit"]');

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await super.goto('/auth/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}