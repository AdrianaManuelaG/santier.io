function addNewProviderSelectors(){
    return{
        email:page.getByLabel('Username'),
        password:page.getByLabel('Parola'),
        areUrobotBtn:page.getByLabel('Are u a robot ?'),
        loginBtn:page.getByRole('button', { name: 'Intra in cont' }),
        menuButton:page.getByLabel('Menu'),
        provider:page.getByText('Furnizori'),
        addNewProvider:page.getByRole('listitem').getByLabel('Expand'),
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
        // await addNewProviderSelectors().areUrobotBtn.click();
        await addNewProviderSelectors().loginBtn.click();
    }
    async providerLbl(){
        await addNewProviderSelectors().menuButton.click();
        await addNewProviderSelectors().provider.click();
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