class BasePage {
    constructor(page) {
        this.page = page;
    }

    // Basic navigation
    async navigateTo(url) {
        await this.page.goto(url)
        await this.page.waitForLoadState('domcontentloaded');
    }

    // Basic page interactions
    async clickElement(selector) {
        await this.page.click(selector)
    }

    async fillInput(selector, text) {
        await this.page.fill(selector, text)
    }

    async isElementVisible(selector) {
        return await this.page.isVisible(selector)
    }
}

module.exports = BasePage;