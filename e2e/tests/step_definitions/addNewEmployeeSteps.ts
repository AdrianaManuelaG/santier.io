import {Given,When,Then} from "@cucumber/cucumber"
import { addNewEmployeeTest } from "../page-objects/addNewEmployee"


Given("I login in the app",async function(){
    await addNewEmployeeTest.openPage("https://dev.santier.io");
    await addNewEmployeeTest.fillEmailField();
});
When("I click on the 'angajati' label",async function(){
    await addNewEmployeeTest.employeeField();    
});
Then("I fill all the fields from the page",async function(){
    await addNewEmployeeTest.employeeDetails();
});
When("I click on 'Adauga angajat'", async function(){
    await addNewEmployeeTest.clcikAddEmployeeBtn();
});
Then("I recive a message with approvment", async function(){
    await addNewEmployeeTest.confirmation();
});