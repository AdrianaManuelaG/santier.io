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
Then("I click on settings in the right of the page",async function(){
    await CloseOpenSiteTest.settingsBtn();
});
When("I click on 'inchide santier' button and 'inchide'",async function(){
    await CloseOpenSiteTest.closeSiteBtn();
});
Then("I click 're-deschide santier' button and 're-deschide'",async function(){
    await CloseOpenSiteTest.reopenSiteBtn();
});
    
