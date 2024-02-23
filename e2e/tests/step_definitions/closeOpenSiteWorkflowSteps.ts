import{Given,When,Then} from "@cucumber/cucumber"
import { CloseOpenSiteTest } from "../page-objects/closeReopenSiteWorkflow"

Given("I navigate to app page",async function(){
    await CloseOpenSiteTest.openPage("https://dev.santier.io/");
});
When("I sign in", async function(){
    await CloseOpenSiteTest.login();
});
Then("I go to site label and choose the house", async function(){
    await CloseOpenSiteTest.siteLabelandChooseHouse();
});
Then("I click on settings near the name of the house",async function(){
    await CloseOpenSiteTest.settingsBtn();
});
When("I click on 'inchide santier' button and 'ok'",async function(){
    await CloseOpenSiteTest.closeSiteBtn();
});
Then("I click 're-deschide santier' button and 'ok'",async function(){
    await CloseOpenSiteTest.reopenSiteBtn();
});
    
