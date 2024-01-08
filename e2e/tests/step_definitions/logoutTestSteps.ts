import{Given,When,Then} from "@cucumber/cucumber"
import { newLogoutTest } from "../page-objects/logoutTest"

Given("I go to the app page", async function(){
    await newLogoutTest.openPage("https://dev.santier.io/");
});
When("I login", async function(){
    await newLogoutTest.login();
});
Then("I choose the logout option", async function(){
    await newLogoutTest.chooseLogoutOption();
});