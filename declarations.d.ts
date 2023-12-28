// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IWorld, World } from "@cucumber/cucumber";
import {
  BrowserType,
  Browser,
  BrowserContext,
  Page,
  PlaywrightTestConfig,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  expect
} from "@playwright/test";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { config } from './playwright.config';

declare global {
  export var page: Page;
  export var config: PlaywrightTestConfig;
  export var browsertype: BrowserType;
  export var context: BrowserContext;
  export var browser: Browser;
  export var result: ITestCaseHookParameter;
  export var customworld: World;
  export var chromiumOptions = config.projects?.find(
    (project) => project.name === "chromium"
  );
  export var firefoxOptions = config.projects?.find(
    (project) => project.name === "firefox"
  );
  export var webKitOptions = config.projects?.find(
    (project) => project.name === "webkit"
  );
  export var openedTerm;
}