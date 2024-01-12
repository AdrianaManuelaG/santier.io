import{Given,When,Then} from "@cucumber/cucumber"
import { OrderMaterialTest } from "../page-objects/orderMaterials"

Given("I go to the app",async function(){
    await OrderMaterialTest.openPage("https://dev.santier.io/");
});
When("I login in the account",async function(){
    await OrderMaterialTest.login();
});
Then("I go to the 'santiere' label",async function(){
    await OrderMaterialTest.clickSantiere();
});
When("I click on 'Casa2'",async function(){
    await OrderMaterialTest.chooseHouse();
});
Then("I click the red button 'Cerere' and 'Cerere materiale'", async function(){
    await OrderMaterialTest.askForMaterials();
});
Then("I fill all the important fields",async function(){
    await OrderMaterialTest.fillTheFields();
});
When("I choose delivery in one day", async function(){
    await OrderMaterialTest.delivery();
});
Then("I click on 'Comanda' button and should see a confirmation", async function(){
    await OrderMaterialTest.commandAndConfirmation();
});