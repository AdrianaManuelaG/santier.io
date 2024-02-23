function orderMaterialsSelectors(){
    return{
        email:page.getByLabel('Username'),
        password:page.getByLabel('Parola'),
        login:page.getByRole('button', { name: 'Intra in cont' }),
        openMenu:page.getByLabel('Menu'),
        siteLabel:page.getByText('Șantiere', { exact: true }),
        chooseHouse:page.getByText('Activ #23settings'),
        askButton:page.getByRole('button', { name: 'Cerere noua' }),
        askMaterialBtn:page.getByRole('button', { name: 'Cerere materiale' }),
        materialName:page.getByLabel('Nume material'),
        quantity:page.getByLabel('Cantitate'),
        unit:page.getByLabel('Unitate de măsură'),
        deliveryTime:page.getByRole('button', { name: 'Foarte urgent' }),
        clickCommand:page.getByRole('button', { name: 'Comandă' }),
        confirmation: page.getByText('Comanda a fost adaugata cu')

    }
}

class OrderMaterials{
    async openPage(url:string){
        await page.goto(url);
    }
    async login(){
        await orderMaterialsSelectors().email.fill("adrianagula25@gmail.com");
        await orderMaterialsSelectors().password.fill("adrianatest");
        await orderMaterialsSelectors().login.click();
    }
    async clickSantiere(){
        await orderMaterialsSelectors().openMenu.click();
        await orderMaterialsSelectors().siteLabel.click();
    }
    async chooseHouse(){
        await orderMaterialsSelectors().chooseHouse.click();
    }
    async askForMaterials(){
        await orderMaterialsSelectors().askButton.click();
        await orderMaterialsSelectors().askMaterialBtn.click();
    }
    async fillTheFields(){
        const randomName = Math.random().toString(36).slice(2);
        await orderMaterialsSelectors().materialName.fill("Sort"+ randomName);
        await orderMaterialsSelectors().quantity.fill("23");
        await orderMaterialsSelectors().unit.fill("tone");
    }
    async delivery(){
        await orderMaterialsSelectors().deliveryTime.click();
    }
    async commandAndConfirmation(){
        await orderMaterialsSelectors().clickCommand.click();
        await orderMaterialsSelectors().confirmation.isVisible();
    }
}

export const OrderMaterialTest= new OrderMaterials();