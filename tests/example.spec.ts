import { test } from "./fixtures";

test('example!', async ({ loginPage }) => {
  await loginPage.goto();
});
