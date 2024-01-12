import{Given,When,Then} from "@cucumber/cucumber"
import { ChangeStatusOfComandsTest } from "../page-objects/changeStatusOfCommands"

Given("I go to my app page", async function(){
    await ChangeStatusOfComandsTest.openPage("https://dev.santier.io/");
});
When("I login application", async function(){
    await ChangeStatusOfComandsTest.login();
});
Then("I click on 'change status in ongoing' at Casa Gula and ok button",async function(){
    await ChangeStatusOfComandsTest.statusOngoing();
});
Then("I click on 'change status in completed' and ok button", async function(){
    await ChangeStatusOfComandsTest.statusCompleted();
});
Then("I see a message that confirm that the command is completed", async function(){
    await ChangeStatusOfComandsTest.confirmation();
});