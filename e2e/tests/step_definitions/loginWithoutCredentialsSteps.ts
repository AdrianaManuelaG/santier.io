import { LoginFailTest } from "../page-objects/loginWithoutCreddentials";
import{Given,When,Then} from "@cucumber/cucumber";


Given("I navigate the home page", async function(){
    await LoginFailTest.openPage("https://dev.santier.io");
});
When("I click on login button",async function(){
    await LoginFailTest.pressLoginBtn();
});
Then("An error alert should apear", async function(){
    await LoginFailTest.alertMessage();
});