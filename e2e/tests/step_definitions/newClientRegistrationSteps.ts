import { newClientRegistration } from "../page-objects/newClientRegistration";
import{ Given, When,Then} from "@cucumber/cucumber";


Given("I open the page",{timeout: 2 * 5000}, async function(){
    await newClientRegistration.openPage("https://dev.santier.io/");
});
When("I click on register button", async function(){
    await newClientRegistration.goToRegister();
});
Then("I fill up the fields from the page",{timeout: 6 * 5000},async function(){
    await newClientRegistration.fillTheFields();
});
When("I click on 'register' green button",async function(){
    await newClientRegistration.clickRegisterButton();
});
Then("A pop-up with confirmation should apear", async function(){
    await newClientRegistration.popupConfirmation();
});