const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage')

test.describe('Sign up page', () => {
    test('should navigate to homepage and click signup/login', async ({ page }) => {
        const homePage = new HomePage(page);

        // Navigate to home page
        await homePage.navigate();

        // Verify we can click on signup/login link
        await homePage.clickSignupLogin();

        // Verify successful signup/login
        await expect(page).toHaveURL(/.*login/)
    })
})