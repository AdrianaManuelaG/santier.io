function newClientRegistrationSelectors(){
    return{
      registerBtn:page.getByRole('link', { name: 'Creaza Cont Nou de Utilizator' }),
      firstNameField: page.getByLabel('Prenume'),
      secondNameField: page.getByLabel('Nume',{exact: true}),
      userNameField: page.getByLabel('Username'),
      emailAdressField: page.getByLabel('Email'),
      passwordField: page.getByLabel('Parola',{exact: true}),
      passwordConfirmationField: page.getByLabel("Confirmă parola"),
      registerButton:page.getByRole('button', { name: 'Creaza Cont Nou' }),
      popupConfBtn: page.getByText('Utilizator inregistrat cu'),
      notArobot:page.getByLabel('Are u a robot ?'),
      termsAndCond:page.getByRole('checkbox', { name: 'Accept' }),
      confidPolitics:page.getByRole('checkbox', { name: 'Sunt de acord cu' })
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
        await newClientRegistrationSelectors().confidPolitics.click();
        await newClientRegistrationSelectors().termsAndCond.click();
        // await newClientRegistrationSelectors().notArobot.click();
        await newClientRegistrationSelectors().registerButton.click();
    }
    async popupConfirmation(){
        await newClientRegistrationSelectors().popupConfBtn.isVisible();
    }
}
export const newClientRegistration = new NewClientRegistration();