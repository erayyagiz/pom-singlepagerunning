import test from "./BaseTest"

test.describe('TEST SUITE', () => {
  test('TEST1', async ({ loginPage, homePage }) => {
    await loginPage.loginPageFuntion();
    await homePage.homePageFuntion();

  });

  test('TEST2', async ({ loginPage, homePage }) => {
    await loginPage.loginPageFuntion();
    await homePage.homePageFuntion();

  });

})
