import { World as CucumberWorld } from "@cucumber/cucumber";
import {
  ICreateAttachment,
  ICreateLog
} from "@cucumber/cucumber/lib/runtime/attachment_manager";
import {
  IDefineTestRunHookOptions,
  ITestCaseHookParameter
} from "@cucumber/cucumber/lib/support_code_library_builder/types";
import {
  Browser,
  chromium,
  firefox,
  PlaywrightTestConfig,
  webkit
} from "@playwright/test";
import {
  BrowserType,
  BrowserContext,
  Page,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Request,
  Locator
} from "playwright-core";

export interface MyProject extends CucumberWorld {
  browser: Browser; 
  context: BrowserContext;
  page: Page;
  browserType: BrowserType;
  expect: Locator;
  config: PlaywrightTestConfig;
  runnerOptions: IDefineTestRunHookOptions;
  result: ITestCaseHookParameter;
}

export class SetupTests implements MyProject {
  result!: ITestCaseHookParameter;
  chrome = chromium;
  edge = chromium;
  firefox = firefox;
  safari = webkit;
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  browserType!: BrowserType<{}>;
  expect!: Locator;
  attach!: ICreateAttachment;
  log!: ICreateLog;
  parameters: any;
  config!: PlaywrightTestConfig;
  runnerOptions!: IDefineTestRunHookOptions;
}