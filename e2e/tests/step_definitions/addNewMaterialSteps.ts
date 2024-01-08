import{Given,When,Then} from "@cucumber/cucumber"
import { AddNewMaterialTest } from "../page-objects/addnewMaterial"

Given("I open the page and I logIN into the application", async function(){
    await AddNewMaterialTest.openPageAndLogin("https://dev.santier.io/");
});
When("I click on the 'Materials' button and fill the details", async function(){
    await AddNewMaterialTest.addMaterialAndDetails();
});
When("I click the 'Add' button",async function(){
    await AddNewMaterialTest.addingBtn();
});
Then("I should see a confirmation message",async function(){
    await AddNewMaterialTest.confirmMsg();
})