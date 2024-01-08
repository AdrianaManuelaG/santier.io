import{Given, When,Then} from "@cucumber/cucumber"
import { addProviderTest } from "../page-objects/adaugareFurnizor"

Given("I go to the page", async function(){
    await addProviderTest.openPage("https://dev.santier.io/");
});
When("I login in the application",async function(){
    await addProviderTest.login();
});
Then("I click on 'furnizori' label",async function(){
    await addProviderTest.providerLbl();
});
When("I click 'adauga un nou furnizor' and fill the fields", async function(){
    await addProviderTest.addNewProvider();
});
Then("I click 'adauga' button and i should recive a confirmation",async function(){
    await addProviderTest.clickAddBtnAndConfirmation();
});