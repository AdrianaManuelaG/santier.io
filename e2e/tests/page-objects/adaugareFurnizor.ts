function addNewProviderSelectors(){
    return{
        email:page.getByLabel('Email / Username'),
        password:page.getByLabel('Parola'),
        loginBtn:page.getByRole('button', { name: 'Login' }),
        providerLabel:page.getByText('shopping_cartFurnizori'),
        addNewProvider:page.getByLabel('Expand', { exact: true }),
        fillTheFields:page.getByLabel('Furnizor'),
        clickAddBtn:page.getByRole('button', { name: 'Adauga' }),
        confirmMsg:page.getByText('Furnizor adaugat cu succes')
    }
}

class AddProvider{
    async openPage(url:string){
        await page.goto(url);
    }
    async login(){
        await addNewProviderSelectors().email.fill("adrianagula25@gmail.com");
        await addNewProviderSelectors().password.fill("adrianatest");
        await addNewProviderSelectors().loginBtn.click();
    }
    async providerLbl(){
        await addNewProviderSelectors().providerLabel.click();
    }
    async addNewProvider(){
        await addNewProviderSelectors().addNewProvider.click();
        await addNewProviderSelectors().fillTheFields.fill("DEDEMAN")
    }
    async clickAddBtnAndConfirmation(){
        await addNewProviderSelectors().clickAddBtn.click();
        await addNewProviderSelectors().confirmMsg.isVisible();
    }
}
export const addProviderTest = new AddProvider();