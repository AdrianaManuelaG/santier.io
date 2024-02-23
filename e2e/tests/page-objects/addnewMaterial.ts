function addNewMaterialSelectors(){
    return{
        email:page.getByLabel('Username'),
        password:page.getByLabel('Parola'),
        notArobot:page.getByLabel('Are u a robot ?'),
        loginBtn:page.getByRole('button', { name: 'Intra in cont' }),
        menuButton:page.getByLabel('Menu'),
        materialsBtn:page.getByRole('complementary').getByText('Materiale'),
        addMaterial:page.getByRole('listitem').getByLabel('Expand'),
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
        // await addNewMaterialSelectors().notArobot.click();
        await addNewMaterialSelectors().loginBtn.click();
    }
    async addMaterialAndDetails(){
        await addNewMaterialSelectors().menuButton.click();
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