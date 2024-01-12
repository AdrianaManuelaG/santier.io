function happyFlowLogin(){
    return{
        emailLabel: page.getByLabel('Email / Username'),
        passwordLabel: page.getByLabel('Parola'),
        loginBtn:  page.getByRole('button', { name: 'Login' })
    }
}

class HappyFlowLogin{
    async openPage(url:string){
        await page.goto(url);
    }
    async fillEmailPassField(){
        await happyFlowLogin().emailLabel.fill("adrianagula25@gmail.com");
        await happyFlowLogin().passwordLabel.fill("adrianatest");
    }
    async clickLogin(){
        await happyFlowLogin().loginBtn.click();
    }
    async verifyRedirectedToDashboard(){
        const expectUrl = 'https://dev.santier.io/app/dashboard';
        await page.waitForNavigation();
        const currentUrl = await page.url();   
    }
}
export const happyFlowLoginTest = new HappyFlowLogin();
