import { LoginOnlyWithEmailTest } from "../page-objects/loginTestOnlyEmail";
import{Given,When,Then} from "@cucumber/cucumber";

Given("I navigate to app",async function(){
    await LoginOnlyWithEmailTest.openPage("https://dev.santier.io/");
});
When("I fill the email field", async function(){
    await LoginOnlyWithEmailTest.emailField();
});
Then("I click on 'login' button", async function(){
    await LoginOnlyWithEmailTest.clickLoginBtn();
});
Then("I should recive an error that i have to complete password field", async function(){
    await LoginOnlyWithEmailTest.error();
});