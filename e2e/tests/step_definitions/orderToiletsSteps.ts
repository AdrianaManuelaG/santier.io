import{Given,When,Then} from "@cucumber/cucumber"
import { OrderToiletsOnSiteTest } from "../page-objects/orderToilets";


Given("I go to the page and sign in", async function(){
    await OrderToiletsOnSiteTest.openPageAndLogin("https://dev.santier.io/");
});
When("I go to 'santiere'label and choose 'Casa GULA'", async function(){
    await OrderToiletsOnSiteTest.siteLabelAndHouse();
});
Then("I click on red button 'Cerere' and 'toalete'", async function(){
    await OrderToiletsOnSiteTest.askForToilets();
});
Then("I choose 'Livrare toalete pe santier' and çlick on 'f.urgent'", async function(){
    await OrderToiletsOnSiteTest.detailsField();
});
Then("I click on 'trimitere solicitare' and i recive the confirmation",async function(){
    await OrderToiletsOnSiteTest.sendAndConfirm();
});