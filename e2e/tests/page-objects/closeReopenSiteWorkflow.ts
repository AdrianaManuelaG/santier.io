function siteSettingsSelectors(){
    return{
        email:page.getByLabel('Username'),
        password:page.getByLabel('Parola'),
        loginBtn:page.getByRole('button', { name: 'Intra in cont' }),
        openMenu:page.getByLabel('Menu'),
        siteLabel:page.getByText('Șantiere', { exact: true }),
        chooseHouse:page.getByText('Activ #26'),
        settingsButton: page.getByRole('listitem').getByLabel('Expand'),
        closeSite:page.getByRole('button', { name: 'Închide șantier' }),
        okBtn:page.getByRole('button', { name: 'Inchide' }),
        reopenSite:page.getByRole('button', { name: 'Re-Deschide șantier' }),
        reopenConfirm:page.getByRole('button', { name: 'Re-Deschide', exact: true })

    }
}

class CloseOpenSiteWorkflow{
    async openPage(url:string){
        await page.goto(url);
    }
    async login(){
        await siteSettingsSelectors().email.fill("adrianagula25@gmail.com");
        await siteSettingsSelectors().password.fill("adrianatest");
        await siteSettingsSelectors().loginBtn.click();
    }
    async siteLabelandChooseHouse(){
        await siteSettingsSelectors().openMenu.click();
        await siteSettingsSelectors().siteLabel.click();
        await siteSettingsSelectors().chooseHouse.click();
    }
    async settingsBtn(){
        await siteSettingsSelectors().settingsButton.click();  
    }
    async closeSiteBtn(){
        await siteSettingsSelectors().closeSite.click();
        await siteSettingsSelectors().okBtn.click();
    }
    async reopenSiteBtn(){
        await siteSettingsSelectors().reopenSite.click();
        await siteSettingsSelectors().reopenConfirm.click();
    }
}

export const CloseOpenSiteTest = new CloseOpenSiteWorkflow();