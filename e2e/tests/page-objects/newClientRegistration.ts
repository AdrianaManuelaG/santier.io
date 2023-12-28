function newClientRegistrationSelectors(){
    return{
      registerBtn: page.getByRole('link', { name: 'Inregistreaza-te' }),
      firstNameField: page.getByLabel('Prenume'),
      secondNameField: page.getByLabel('Nume',{exact: true}),
      userNameField: page.getByLabel('Nume de utilizator'),
      emailAdressField: page.getByLabel('Adresa de mail'),
      passwordField: page.getByLabel('Parola',{exact: true}),
      passwordConfirmationField: page.getByLabel("Confirmă parola"),
      registerButton:page.getByRole('button'),
      popupConfBtn: page.getByRole('alertdialog')
    }
}

class NewClientRegistration{
    async openPage(url:string){
        await page.goto(url);
    }
    async goToRegister(){
        await newClientRegistrationSelectors().registerBtn.click();
    }
    
    async fillTheFields(){
        await newClientRegistrationSelectors().firstNameField.fill("Adriana");
        await newClientRegistrationSelectors().secondNameField.fill('Gula');
        const radomName = Math.random().toString(36).slice(2)
        await newClientRegistrationSelectors().userNameField.fill('adrianaMAG-' + radomName);
        await newClientRegistrationSelectors().emailAdressField.fill('adrianaaGAM' + radomName + '@gmail.com');   
        await newClientRegistrationSelectors().passwordField.fill('adrianag25');
        await newClientRegistrationSelectors().passwordConfirmationField.fill('adrianag25');
    }
    async clickRegisterButton(){
        await newClientRegistrationSelectors().registerButton.click();
    }
    async popupConfirmation(){
        await newClientRegistrationSelectors().popupConfBtn.isVisible();
    }
}
export const newClientRegistration = new NewClientRegistration();