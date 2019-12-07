import { wait } from "../../utils/utils";
import { protractor, browser, Key } from "protractor";
import { DemoPageElements } from "./demoPageElements";
import { delay } from "q";

export class DemoPage {

  public element: DemoPageElements;

  constructor() {
    this.element = new DemoPageElements();
  }

  public async clickHtmlSignInButton(): Promise<void> {
    await wait(this.element.htmlContactFormButton, "Html contact form is not available");
    await this.element.htmlContactFormButton.click();
  }

  public async enterFirstName(firstName: string): Promise<void> {
    await this.element.firstNameTextField.sendKeys(firstName);
  }

  public async enterLastName(lastName: string): Promise<void> {
    await this.element.lastNameTextField.sendKeys(lastName);
  }

  public async enterCountry(country: string): Promise<void> {
    await this.element.countryTextField.sendKeys(country);
  }

  public async enterMessage(message: string): Promise<void> {
    await this.element.subjectTextField.sendKeys(message);
  }

  public async clickSubmit(): Promise<void> {
    await this.element.submitButton.click();
  }

  public async getMessage(): Promise<string> {
      return new Promise((resolve, reject) => {
        resolve(this.element.pageTitle.getText().then(function (text) {
          return text;
        }));
        reject(new Error());
      });
    }
  }