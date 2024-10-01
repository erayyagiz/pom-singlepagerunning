import test from "./BaseTest"

test.describe('TEST SUITE', () => {
  test('TEST1', async ({ loginPage, homePage }) => {
    await loginPage.loginPageFuntion();
    await homePage.homePageFuntion();
    console.log('Test1 running...')

  });

  test('TEST2', async ({ loginPage, homePage }) => {
    await loginPage.loginPageFuntion();
    await homePage.homePageFuntion();
    console.log('Test2 running...')
  });

})