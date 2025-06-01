const BasePage = require('./BasePage')

class HomePage extends BasePage {
    constructor(page) {
        super(page);

        // User relative URL since base URL is in config
        this.url = '/';

        // Centralized locators
        this.locators = {
            signupLoginLink: "a[href='/login']",
            cookieConsentButton: "button .fc-button-label"
        }
    }

    async navigate() {
        await this.navigateTo(this.url);
        await this.handleCookieConsent();
    }

    async handleCookieConsent() {
        // Check if cookie banner is visible and accept it
        try {
            const cookieButton = this.page.locator(this.locators.cookieConsentButton).filter({ hasText: 'Consent' });
            if (await cookieButton.isVisible()) {
                await cookieButton.click();
                // Wait for the banner to disappear
                await this.page.waitForTimeout(1000);
            }
        } catch (error) {
            // If cookie handling fails, continue with the test
            console.log('Cookie consent handling failed, continuing...');
        }
    }

    async clickSignupLogin() {
        await this.clickElement(this.locators.signupLoginLink)
    }
}

module.exports = HomePage;