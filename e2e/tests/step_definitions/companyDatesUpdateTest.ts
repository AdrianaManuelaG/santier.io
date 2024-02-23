import{Given,When,Then}  from "@cucumber/cucumber"
import { updateCompanyDates } from "../page-objects/companyDatesUpdate"

Given("I open the page of app", async function(){
    await updateCompanyDates.openPage("https://dev.santier.io/");
});
When("I login in my acount", async function(){
    await updateCompanyDates.login();
});
Then("I go to 'companie' label", async function(){
    await updateCompanyDates.clickCompanyLabel();
});
Then("I change tha name of company", async function(){
    await updateCompanyDates.deleteAndchangeName();
});
Then("I click on 'modifica' button and i recive the confirmation", async function(){
    await updateCompanyDates.clickModifyBtnAndConfirm();
});