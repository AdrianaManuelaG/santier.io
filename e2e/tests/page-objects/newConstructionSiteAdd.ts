function newConstructionSite(){
    return{
        email:page.getByLabel('Email / Username'),
        password:page.getByLabel('Parola'),
        clickLogin: page.getByRole('button', { name: 'Login' }),
        santiereLabel: page.getByText('apartmentȘantiereGestionează'),
        addNewSite:page.getByText('Adaugă șantier'),
        siteName: page.getByLabel('Numele șantierului'),
        siteLocation: page.getByLabel('Locația noului șantier'),
        siteAdress:page.getByLabel('Adresa de livrare pentru'),
        siteChef: page.locator('label').filter({ hasText: 'Șefii noului ș' }).locator('i'),
        chooseChef:page.getByRole('option', { name: 'Adriana Gula' }).locator('div').nth(2),
        siteManager:page.locator('label').filter({ hasText: 'Managerii de achiziții al' }).locator('i'),
        chooseManager:page.getByRole('option', { name: 'Adriana Gula' }).locator('span'),
        submitBtn: page.getByRole('button', { name: 'Submit' }),
        confirmation:page.getByText('Santier adaugat cu succes')

    }
}

class AddNewSite{
    async openPage(url:string){
        await page.goto(url);
    }
    async login(){
        await newConstructionSite().email.fill("adrianagula25@gmail.com");
        await newConstructionSite().password.fill("adrianatest");
        await newConstructionSite().clickLogin.click();
    }
    async clickSantiere(){
        await newConstructionSite().santiereLabel.click();
        await newConstructionSite().addNewSite.click();
    }
    async siteDetails(){
        await newConstructionSite().siteName.fill("Casa2");
        await newConstructionSite().siteLocation.fill("Suceava");
        await newConstructionSite().siteAdress.fill("Aleea Teiului");
        await newConstructionSite().siteChef.click();
        await newConstructionSite().chooseChef.click();
        await newConstructionSite().siteManager.click();
        await newConstructionSite().chooseManager.click();
    }
    async submitAndConfirmation(){
        await newConstructionSite().submitBtn.click();
        await newConstructionSite().confirmation.isVisible();
    }
}

export const addNewSiteTest = new AddNewSite();