# Testing with Playwright

This project demonstrates how to perform automated testing using Playwright.

## Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js: https://nodejs.org/
- Playwright: https://playwright.dev/

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/ipsaronikolakis/playwright-testing.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests from root directory:
   ```bash
   npx playwright test
   ```

## Playwright default html report

The default playwright report will be generated after test tun in the `./playwright-reports` folder.

Note: Playwright tracer works only with the default playwright html reporter.

## Allure html report

1. To generate the allure report, run:

```bash
npx allure generate ./allure-results
```

2. To open the allure report, run:

```bash
npx allure open ./allure-report
```

Happy testing! 🎭
