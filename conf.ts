import { browser, Config } from "protractor";

export const config: Config = {

    // seleniumAddress: process.env.SELENIUM_ADDRESS,

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: process.env.BASE_URL,

    // directConnect: true,

    capabilities: {
        "browserName": "chrome",
        "maxInstances": 1,
        "shardTestFiles": true,
        "goog:chromeOptions": {
            w3c: false,
        }
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    suites: {
        demo: "../features/demo/*.feature",
    },

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    },

    async onComplete() {
        await browser.getCapabilities().then(function (caps) {
            console.log("The test was executed on: " + caps.get("browserName") + " v" + caps.get("browserVersion"));
        });
        await browser.driver.close().then(async function () {
            await browser.driver.quit();
        });
    },

    cucumberOpts: {
        "compiler": "ts:ts-node/register",
        "require": ["../build/step-definitions/**/*.js", "../build/hooks/**/*.js"],
        "strict": true,
        "format": ["summary", "node_modules/cucumber-junit-formatter:reports/demo.xml"],
        "format-options": "{ \"scenarioAsStep\": true, \"propertiesInTestcase\": true, \"colorsEnabled\": true }",
    },
};
