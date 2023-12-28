import { After, Before, World } from "@cucumber/cucumber";
import { SetupTests } from "./types";
import config from "./playwright.config";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";

const setup = new SetupTests();

let myBrowser = process.env.BROWSER || "chromium";
const headless = config.projects?.find(
  (configValue) => configValue.name === myBrowser
)?.use?.headless;

export function getEnvironment() {
  console.log("[test.setup.ts]My environment is: " + process.env.ENVIRONMENT);
  return process.env.ENVIRONMENT!;
}

let url = getEnvironment();

Before(async () => {
  console.log("[test.setup.ts] Before ...");
  console.log("[test.setup.ts] Headless mode is set to: " + headless);

  function getBrowser() {
    console.log("My browser is " + process.env.BROWSER);
    switch (process.env.BROWSER) {
      case "webkit":
        return setup.safari;

      case "chrome":
        return setup.chrome;

      case "firefox":
        return setup.firefox;

      case "edge":
        return setup.edge;

      default:
        return setup.chrome;
    }
  }
  if (process.env.BROWSER == "edge") {
    global.browser = await getBrowser().launch({
      headless: headless,
      slowMo: 50,
      channel: "msedge"
    });
  } else {
    global.browser = await getBrowser().launch({
      headless: headless
    });
  }

  global.context = await global.browser.newContext({ });
  global.page = await global.context.newPage();

  console.log("[test.setup.ts] Current ENVIRONMENT is: " + url);
});

After(async function (this: World, { result, pickle }: ITestCaseHookParameter) {
  if (headless === false && !global.page.isClosed()) {
     await global.page.waitForTimeout(2000);
  }
  await global.page?.close();

  console.log("[test.setup.ts] Scenario result is: " + result);

  await global.context?.close();

  await global.browser?.close();
});