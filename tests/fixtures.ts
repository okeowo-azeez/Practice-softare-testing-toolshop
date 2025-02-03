import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

type TestFixtures = {
  loginPage: LoginPage;
};

const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { test };