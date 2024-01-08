import { addNewSiteTest } from "../page-objects/newConstructionSiteAdd";
import{Given,When,Then} from "@cucumber/cucumber"


Given("I navigate to the page",async function(){
    await addNewSiteTest.openPage("https://dev.santier.io");
});
When("I access my account",async function(){
    await addNewSiteTest.login();
});
Then("I click on 'santiere' label",async function(){
    await addNewSiteTest.clickSantiere();
});
When("I fill all the empty fields",async function(){
    await addNewSiteTest.siteDetails();
});
Then("I click on submit buton and i recive an confirmation", async function(){
    await addNewSiteTest.submitAndConfirmation();
});