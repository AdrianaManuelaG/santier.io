import { forgotPasswordTest } from "../page-objects/forgotPassword";
import {Given,When,Then} from "@cucumber/cucumber"


Given("I open the site page",async function(){
    await forgotPasswordTest.openPage("https://dev.santier.io");
});
When("I click on 'forgot password'",async function(){
    await forgotPasswordTest.forgotPasswordBtn();
});
Then("They will ask for email or username and press 'reset password'",async function(){
    await forgotPasswordTest.emailField();
});
Then("I should recive a mesage with some helping info", async function(){
    await forgotPasswordTest.pressResetBtn();
});