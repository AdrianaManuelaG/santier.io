function changeCommandsStatusSelectors(){
    return{
        email:page.getByLabel('Username'),
        password:page.getByLabel('Parola'),
        loginBtn:page.getByRole('button', { name: 'Intra in cont' }),
        changeStatusOngoing:page.getByRole('button', { name: 'Schimba statusul in desfasurare' }),//first().click()
        clickOK:page.getByRole('button', { name: 'OK' }),
        changeStatusCompleted:page.getByRole('button', { name: 'Schimba statusul in finalizat' }), //first()
        seeTheConfirmation:page.getByText('descriptionAdriana Gulalink a marcat finalizata solicitarea pentru Livrare')//first()
    }
}

class ChangeStatusOfCommandsWorkflow{
    async openPage(url:string){
        await page.goto(url);
    }
    async login(){
        await changeCommandsStatusSelectors().email.fill("adrianagula25@gmail.com");
        await changeCommandsStatusSelectors().password.fill("adrianatest");
        await changeCommandsStatusSelectors().loginBtn.click();
    }
    async statusOngoing(){
        await changeCommandsStatusSelectors().changeStatusOngoing.first().click();
        await changeCommandsStatusSelectors().clickOK.click();
    }
    async statusCompleted(){
        await changeCommandsStatusSelectors().changeStatusCompleted.first().click();
        await changeCommandsStatusSelectors().clickOK.click();
    }
    async confirmation(){
        await changeCommandsStatusSelectors().seeTheConfirmation.first().isVisible();
    }
}
export const ChangeStatusOfComandsTest = new ChangeStatusOfCommandsWorkflow();
