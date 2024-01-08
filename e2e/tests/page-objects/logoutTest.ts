import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

function logoutSelectors(){
    return{
        email:page.getByLabel('Email / Username'),
        password:page.getByLabel('Parola'),
        loginBtn:page.getByRole('button', { name: 'Login' }),
        expandLabel:page.getByLabel('Expand "AdrianaGula"'),
        chooseLogoutBtn:page.getByText('Ieșire'),
        confirmation:page.getByText('Logged out. Goodbye Adriana'),
        closeConfirmation:page.getByRole('button', { name: 'Close' })

    }
}

class LogoutTest{
    async openPage(url:string){
    await page.goto(url);
    }
    async login(){
        await logoutSelectors().email.fill("adrianagula25@gmail.com");
        await logoutSelectors().password.fill("adrianagula25");
        await logoutSelectors().loginBtn.click();     
    }
    async chooseLogoutOption(){
        await logoutSelectors().expandLabel.click();
        await logoutSelectors().chooseLogoutBtn.click();
        await logoutSelectors().confirmation.isVisible();
        await logoutSelectors().closeConfirmation.click();
    }
}

export const newLogoutTest = new LogoutTest();