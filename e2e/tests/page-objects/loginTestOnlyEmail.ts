function loginWithEmailOnlySelectors(){
    return{
        email:page.getByLabel('Username'),
        loginBtn:page.getByRole('button', { name: 'Intra in cont' }),
        error:page.getByText('Minim 5 caractere'),
        error1:page.getByText('error')
    }
}
class LoginOnlyWithEmail{
    async openPage(url:string){
        await page.goto(url);
    }
    async emailField(){
        await loginWithEmailOnlySelectors().email.fill("adrianagula25@gmail.com");
    }
    async clickLoginBtn(){
        await loginWithEmailOnlySelectors().loginBtn.click();       
    }
    async error(){
        await loginWithEmailOnlySelectors().error.isVisible();
    }
}

export const LoginOnlyWithEmailTest = new LoginOnlyWithEmail();