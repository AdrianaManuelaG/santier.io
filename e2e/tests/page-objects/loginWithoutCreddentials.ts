function failLogin(){
    return{
        loginBtn:page.getByRole('button', { name: 'Login' }),
        alertMsg: page.getByRole("alert",{name:"Minim 5 caractere"})
    }
}

class LoginFail{
    async openPage(url:string){
        await page.goto(url);
    }
    async pressLoginBtn(){
        await failLogin().loginBtn.click();
    }
    async alertMessage(){
        await failLogin().alertMsg.isVisible();
    }
}
export const LoginFailTest = new LoginFail();