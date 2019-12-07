import { element, by } from "protractor";

export class DemoPageElements {
  public htmlContactFormButton = element(by.css("[href='https://demoqa.com/html-contact-form/']"));
  public firstNameTextField = element(by.css("[class='firstname'"));
  public lastNameTextField = element(by.id("lname"));
  public countryTextField = element(by.name("country"));
  public subjectTextField = element(by.name("subject"));
  public submitButton = element(by.css("[value='Submit']"));
  public pageTitle = element(by.className("page-title"));
}
