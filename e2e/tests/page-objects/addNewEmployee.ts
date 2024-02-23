function addingNewEmployee(){
    return{
        emailField: page.getByLabel('Username'),
        passwordField: page.getByLabel('Parola'),
        notArobotBtn:page.getByLabel('Are u a robot ?'),
        loginBtn:page.getByRole('button', { name: 'Intra in cont' }),
        menuButton:page.getByLabel('Menu'),
        employeeLabel:page.getByText('Angajați', { exact: true }),
        expandFieldsNewEmployee: page.getByRole('main').locator('div').filter({ hasText: 'peopleCompanie > Angajatikeyboard_arrow_downAdauga un nou angajat' }).getByLabel('Expand'),
        employeeFirstName:page.getByLabel('Prenume'),
        employeeSecondName:page.getByLabel('Nume', { exact: true }),
        employeeUserName:page.getByLabel('Username'),
        employeePassword: page.getByLabel('Parola', { exact: true }),
        confirmPassword:page.getByLabel('Confirmă parola'),
        employeeEmail:page.getByLabel('Email (optional)'),
        employeePhoneNumber:page.getByLabel('Telefon (optional)'),
        addEmployeeBtn:page.getByRole('button', { name: 'Adaugă angajat' }),
        successfulAddingMsg:page.getByText('Angajat adaugat cu succes')

    }
}
class AddingNewEmployeeTest{
    async openPage(url:string){
        await page.goto(url);
    }
    async fillEmailField(){
        await addingNewEmployee().emailField.fill("adrianagula25@gmail.com");
        await addingNewEmployee().passwordField.fill("adrianatest");
        // await addingNewEmployee().notArobotBtn.click();
        await addingNewEmployee().loginBtn.click();
    }
    async employeeField(){
        await addingNewEmployee().menuButton.click();
        await addingNewEmployee().employeeLabel.click();
        await addingNewEmployee().expandFieldsNewEmployee.click();   
    }
    async employeeDetails(){
        await addingNewEmployee().employeeFirstName.fill("Cristi");
        await addingNewEmployee().employeeSecondName.fill("Hren");
        const randomNames = Math.random().toString(36).slice(2);
        await addingNewEmployee().employeeUserName.fill("CristianH" + randomNames);
        await addingNewEmployee().employeePassword.fill("cristih");
        await addingNewEmployee().confirmPassword.fill("cristih");
        await addingNewEmployee().employeeEmail.fill("crisith@gamil.com" + randomNames);
    }
    async clcikAddEmployeeBtn(){
        await addingNewEmployee().addEmployeeBtn.click();
    }
    async confirmation(){
        await addingNewEmployee().successfulAddingMsg.isVisible();
    }
    
}
export const addNewEmployeeTest = new AddingNewEmployeeTest();