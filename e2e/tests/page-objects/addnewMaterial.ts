function addNewMaterialSelectors(){
    return{
        email:page.getByLabel('Email / Username'),
        password:page.getByLabel('Parola'),
        loginBtn:page.getByRole('button', { name: 'Login' }),
        materialsBtn:page.getByText('handymanMaterialeLa nivelul'),
        addMaterial:page.getByLabel('Expand', { exact: true }),
        materialName:page.getByLabel('Nume material'),
        unit:page.getByLabel('Unitate de măsură'),
        addButton:page.getByRole('button', { name: 'Adauga' }),
        confirmation:page.getByText('Material adaugat cu succes')

    }
}

class AddNewMaterial{
    async openPageAndLogin(url:string){ 
        await page.goto(url);
        await addNewMaterialSelectors().email.fill("adrianagula25@gmail.com");
        await addNewMaterialSelectors().password.fill("adrianatest");
        await addNewMaterialSelectors().loginBtn.click();
    }
    async addMaterialAndDetails(){
        await addNewMaterialSelectors().materialsBtn.click();
        await addNewMaterialSelectors().addMaterial.click();
        await addNewMaterialSelectors().materialName.fill("Var Lavabil");
        await addNewMaterialSelectors().unit.fill("kg");
    }
    async addingBtn(){
        await addNewMaterialSelectors().addButton.click();
    }
    async confirmMsg(){
        await addNewMaterialSelectors().confirmation.isVisible();
    }
}

export const AddNewMaterialTest = new AddNewMaterial();