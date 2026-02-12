# Playwright Automation Framework (POM)
## Overview
This project is a robust end-to-end automation framework designed to test the **[Sauce Demo](https://www.saucedemo.com/)** e-commerce application. It covers critical user journeys like login, product selection, and the checkout process.

The framework is built using **Playwright** and follows the **Page Object Model (POM)** pattern, ensuring that the code is readable, modular, and easy to maintain.

---
### 🛠️ Tech Stack
* **Language:** JavaScript 
* **Framework:** Playwright
* **Reporting:** Allure Report

## Install dependencies
```bash
npm install
```
```bash
npx playwright install
```
## Install Allure Commandline
```bash
npm install --save-dev allure-commandline
```
## Running Tests (Sequential Execution)
Run all tests together (login, Q2, Q3) with Allure report generation:
```bash
npm test
```
## Running Individual Specs
Run login:
```bash
npx playwright test specs/login.spec.js
```
Run Q2
```bash
npx playwright test specs/q2.spec.js
```
Run Q3
```bash
npx playwright test specs/q3.spec.js
```
## Browser Configuration
While this framework is fully compatible with **Cross-Browser Testing** (Chromium, Firefox, and WebKit), for this assignment:
* **Primary Browser:** **Chromium** was used for execution to optimize performance and execution time.
* **Flexibility:** You can easily switch browsers within the `playwright.config.js` file or via CLI commands to run tests on Firefox or Safari (WebKit).

---
## Authors

- [@Tanjilaholy](https://github.com/Tanjilaholy)
