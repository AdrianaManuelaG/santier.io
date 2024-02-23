function orderToiletsSelectors(){
    return{
        email:page.getByLabel('Username'),
        password:page.getByLabel('Parola'),
        loginBtn: page.getByRole('button', { name: 'Intra in cont' }),
        openMenu:page.getByLabel('Menu'),
        siteLabel:page.getByText('Șantiere', { exact: true }),
        casaLabel: page.getByText('Activ #23settings'),
        askBtn:page.getByRole('button', { name: 'Cerere noua' }),
        containerBtn:page.getByRole('button', { name: 'Containere/Toalete' }),
        dropdownDetails:page.locator('div').filter({ hasText: /^arrow_drop_down$/ }),
        chooseDeliverOnSite:page.getByText('Livrare toalete pe santier'),
        deliverInOneDayBtn: page.getByRole('button', { name: 'Foarte urgent' }),
        sendSolicitationBtn: page.getByRole('button', { name: 'Trimite Solicitare' }),
        confirmation:page.getByText('Solicitarea a fost adaugata')
    }
}

class OrderToiletsOnSite{
    async openPageAndLogin(url:string){
        await page.goto(url);
        await orderToiletsSelectors().email.fill("adrianagula25@gmail.com");
        await orderToiletsSelectors().password.fill("adrianatest");
        await orderToiletsSelectors().loginBtn.click();
    }
    async siteLabelAndHouse(){
        await orderToiletsSelectors().openMenu.click();
        await orderToiletsSelectors().siteLabel.click();
        await orderToiletsSelectors().casaLabel.click();
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