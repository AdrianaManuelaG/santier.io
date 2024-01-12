function updateCompanyDatesSelectors(){
    return{
        email:page.getByLabel('Email / Username'),
        password:page.getByLabel('Parola'),
        login:page.getByRole('button', { name: 'Login' }),
        companyLabel: page.getByText('workCompanieDatele companiei'),
        expandOptions:page.getByLabel('Expand', { exact: true }),
        deleteActualName:page.getByLabel('Numele companiei'),
        addNewName:page.getByLabel('Numele companiei'),
        clickModifyBtn:page.getByRole('button', { name: 'Modifică' }),
        confirmMsg:page.getByText('Datele companiei au fost')
    }
}

class UpdateCompanyDates{
    async openPage(url:string){
        await page.goto(url);
    }
    async login(){
        await updateCompanyDatesSelectors().email.fill("adrianagula25@gmail.com");
        await updateCompanyDatesSelectors().password.fill("adrianatest");
        await updateCompanyDatesSelectors().login.click();
    }
    async clickCompanyLabel(){
        await updateCompanyDatesSelectors().companyLabel.click();
    }
    async expandLabel(){
        await updateCompanyDatesSelectors().expandOptions.click();
    }
    async deleteAndchangeName(){
        await updateCompanyDatesSelectors().deleteActualName.fill("");
        const randomName = Math.random().toString(36).slice(2);
        await updateCompanyDatesSelectors().addNewName.fill("Adriana Bau" + randomName);
    }
    async clickModifyBtnAndConfirm(){
        await updateCompanyDatesSelectors().clickModifyBtn.click();
        await updateCompanyDatesSelectors().confirmMsg.isVisible();
    }
   
}
export const updateCompanyDates = new UpdateCompanyDates();