function orderToiletsSelectors(){
    return{
        email:page.getByLabel('Email / Username'),
        password:page.getByLabel('Parola'),
        loginBtn: page.getByRole('button', { name: 'Login' }),
        siteLabel:page.getByText('apartmentȘantiereGestionează'),
        casaGulaLabel:page.getByText('#18ActivCasa GULABOSANCI'),
        askBtn:page.getByRole('button', { name: 'Cerere' }),
        containerBtn:page.getByRole('menu').getByRole('button', { name: 'Containere/Toalete' }),
        dropdownDetails:page.locator('div').filter({ hasText: /^Solicitare$/ }).first(),
        chooseDeliverOnSite:page.getByText('Livrare toalete pe santier'),
        deliverInOneDayBtn:page.getByRole('button', { name: 'F. urgent (1 zi)' }),
        sendSolicitationBtn: page.getByRole('button', { name: 'Trimite Solicitare' }),
        confirmation:page.getByText('Solicitarea a fost adaugata')
    }
}

class OrderToiletsOnSite{
    async openPageAndLogin(url:string){
        await page.goto(url);
        await orderToiletsSelectors().email.fill("adrianagula25@gmail.com");
        await orderToiletsSelectors().password.fill("adrianagula25");
        await orderToiletsSelectors().loginBtn.click();
    }
    async siteLabelAndHouse(){
        console.log("here yes");
        await orderToiletsSelectors().siteLabel.click();
        console.log("works till here");
        await orderToiletsSelectors().casaGulaLabel.click();
    }
    async askForToilets(){
        await orderToiletsSelectors().askBtn.click();
        await orderToiletsSelectors().containerBtn.click();
    }
    async detailsField(){
        await orderToiletsSelectors().dropdownDetails.click();
        await orderToiletsSelectors().chooseDeliverOnSite.click();
        await orderToiletsSelectors().deliverInOneDayBtn.click();
    }
    async sendAndConfirm(){
        await orderToiletsSelectors().sendSolicitationBtn.click();
        await orderToiletsSelectors().confirmation.isVisible();
    }
}
export const OrderToiletsOnSiteTest = new OrderToiletsOnSite();