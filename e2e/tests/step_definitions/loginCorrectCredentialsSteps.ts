import { happyFlowLoginTest } from "../page-objects/loginCorrectCredentials";
import {Given, When, Then} from "@cucumber/cucumber"

Given("I open the home page", async function(){
    await happyFlowLoginTest.openPage("https://dev.santier.io");
});
When("I fill the login fields",async function(){
    await happyFlowLoginTest.fillEmailPassField();
});
Then("I click login button",async function(){
    await happyFlowLoginTest.clickLogin();
});
Then("I should be redirected on the home page of the site", async function(){
    await happyFlowLoginTest.verifyRedirectedToDashboard();
});