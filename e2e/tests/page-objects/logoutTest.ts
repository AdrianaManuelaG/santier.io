import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

function logoutSelectors(){
    return{
        email:page.getByLabel('Username'),
        password:page.getByLabel('Parola'),
        loginBtn:page.getByRole('button', { name: 'Intra in cont' }),
        expandLabel:page.getByLabel('Expand'),
        chooseLogoutBtn:page.getByText('logoutLogout'), 
        popupConfirmation:page.getByText('Logged out. Goodbye Adriana')

    }
}

class LogoutTest{
    async openPage(url:string){
    await page.goto(url);
    }
    async login(){
        await logoutSelectors().email.fill("adrianagula25@gmail.com");
        await logoutSelectors().password.fill("adrianatest");
        await logoutSelectors().loginBtn.click();     
    }
    async chooseLogoutOption(){
        await logoutSelectors().expandLabel.click();
        await logoutSelectors().chooseLogoutBtn.click();
        await logoutSelectors().popupConfirmation.isVisible(); 
    }
}

export const newLogoutTest = new LogoutTest();