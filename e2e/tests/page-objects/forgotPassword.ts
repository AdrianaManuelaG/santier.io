function forgotPasswordSelectors(){
    return{
        forgotPassBtn: page.getByRole('link', { name: 'Ai uitat parola?' }),
        usernameOrEmailField: page.getByLabel('Email / Username'),
        resetPassBtn: page.getByRole('button', { name: 'Reseteaza Parola' }),
        infoSteps: page.getByText('Daca datele introduse sunt')
    }
}

class ForgotPassword{
    async openPage(url:string){
        await page.goto(url);
    }
    async forgotPasswordBtn(){
        await forgotPasswordSelectors().forgotPassBtn.click();
    }
    async emailField(){
        await forgotPasswordSelectors().usernameOrEmailField.fill("adriana@gmail.com");
    }
    async pressResetBtn(){
        await forgotPasswordSelectors().resetPassBtn.click();
        await forgotPasswordSelectors().infoSteps.isVisible();
    }
}

export const forgotPasswordTest = new ForgotPassword();