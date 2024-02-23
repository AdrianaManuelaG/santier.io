function updateCompanyDatesSelectors(){
    return{
        email:page.getByLabel('Username'),
        password:page.getByLabel('Parola'),
        notArobot:page.getByLabel('Are u a robot ?'),
        login:page.getByRole('button', { name: 'Intra in cont' }),
        menuButton:page.getByLabel('Menu'),
        companyLabel: page.getByText('CompanieDatele companiei'),
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
        // await updateCompanyDatesSelectors().notArobot.click();
        await updateCompanyDatesSelectors().login.click();
    }
    async clickCompanyLabel(){
        await updateCompanyDatesSelectors().menuButton.click();
        await updateCompanyDatesSelectors().companyLabel.click();
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