import { browser } from "protractor";
import { Given, When, Then } from "cucumber"

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given(/^I am on the home page$/, async function () {
  await browser.get(process.env.BASE_URL as string);
});

When(/^I navigate to contact form$/, async function () {
  await this.demoPage.clickHtmlSignInButton();
});

When(/^I enter "(.+?)" in first name text field$/, async function (firstName: string) {
  await this.demoPage.enterFirstName(firstName);
});

When(/^I enter "(.+?)" in last name text field$/, async function (lastName: string) {
  await this.demoPage.enterLastName(lastName);
});

When(/^I enter "(.+?)" in country text field$/, async function (country: string) {
  await this.demoPage.enterCountry(country);
});

When(/^I enter "(.+?)" in message text field$/, async function (message: string) {
  await this.demoPage.enterMessage(message);
});

When(/^I click on Submit button$/, async function () {
  await this.demoPage.clickSubmit();
});

Then(/^I can see the form submitted$/, async function () {
  await expect(this.demoPage.getMessage()).to.eventually.equal("Oops! That page can’t be found.");
});

