import { Before, BeforeAll, setDefaultTimeout, After } from "cucumber";
import { args } from "../utils/config";
import logger from "../utils/logger";
import {  DemoPage } from "../pages/demo/demoPage";
import { browser } from "protractor";

BeforeAll(async function () {
  logger.info(args);
  setDefaultTimeout(7 * 10 * 60 * 1000);
});

Before({ tags: "@simpleLogger and @debug" }, async function () {
  this.debug = true;
  this.context = {
    ...this.context,
  };
});

Before(async function (scenario) {
  this.demoPage = new DemoPage();

  logger.info(`Scenario: ${scenario.pickle.name}`);
  for (let index = 0; index < scenario.pickle.steps.length; index++) {
    logger.info(`Step [${index}]: ${scenario.pickle.steps[index].text}`);
  }
});

After(async function (scenario) {
  if (scenario.result.status === "failed") {
    const attach = this.attach;

    browser.manage().logs().get("browser").then(function (browserLog) {
      require("util").inspect(browserLog);
      console.log("Here is the Chrome console log: ");
      for (const log of browserLog) {
        console.log(`\nLevel: ${log.level}; \nMessage: ${log.message};\n`);
      }
    });

    browser.takeScreenshot().then(function (png) {
      const decodedImage = new Buffer(png, "base64");
      console.log(`Here is the decoded image (copy/paste it in some base64 to image online converter): \n${png}\n`);
      return attach(decodedImage, "image/png");
    });
  }
});
