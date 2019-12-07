import { ElementFinder, browser, protractor } from "protractor";

export function wait(element: ElementFinder, errorMsg?: string) {
  return new Promise((resolve, reject) => {
    const timeout = parseInt(process.env.TEST_TIMEOUT as string);
    resolve(browser.wait(protractor.ExpectedConditions.visibilityOf(element), timeout, `The element was not found for ${timeout / 1000} seconds. ${errorMsg}`));
    reject(new Error());
  });
}

