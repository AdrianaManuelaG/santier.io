function happyFlowLogin(){
    return{
        emailLabel: page.getByLabel('Username'),
        passwordLabel: page.getByLabel('Parola'),
        areYouRobotBtn:page.getByLabel('Are u a robot ?'),
        loginBtn:  page.getByRole('button', { name: 'Intra in cont' }),

    }
}

class HappyFlowLogin{
    async openPage(url:string){
        await page.goto(url);
    }
    async fillEmailPassField(){
        await happyFlowLogin().emailLabel.fill("adrianagula25@gmail.com");
        await happyFlowLogin().passwordLabel.fill("adrianatest");
    //     await happyFlowLogin().areYouRobotBtn.click();
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
