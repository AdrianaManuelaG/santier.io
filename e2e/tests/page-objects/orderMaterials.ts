function orderMaterialsSelectors(){
    return{
        email:page.getByLabel('Email / Username'),
        password:page.getByLabel('Parola'),
        login:page.getByRole('button', { name: 'Login' }),
        siteLabel:page.getByText('apartmentȘantiereGestionează'),
        chooseHouse:page.getByText('#23ActivCasa2Suceava'),
        askButton:page.getByRole('button', { name: 'Cerere' }),
        askMaterialBtn:page.getByRole('button', { name: 'Cerere materiale' }),
        materialName:page.getByLabel('Nume material'),
        quantity:page.getByLabel('Cantitate'),
        unit:page.getByLabel('Unitate de măsură'),
        deliveryTime:page.getByRole('button', { name: 'F. urgent (1 zi)' }),
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