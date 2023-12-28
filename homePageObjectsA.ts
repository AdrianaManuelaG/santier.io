


// function homePageSelectors(){
//     return{
//         women: page.getByTestId("genderSwitch-1" ),
//         men: page.getByTestId("genderSwitch-2"),
//         kids: page.getByTestId("genderSwitch-3"),
//         rFlagimg: page.getByTestId("languageCountrySwitchSelectedCountryFlag"), 
//         srchBarImput: page.getByTestId("searchBarInput"),
        


//     }
    
// };
// class HomePageObjects{
 
//     async  clickMenuItems(){
//         await page.waitForLoadState('domcontentloaded');
//         await homePageSelectors().women.click();
//         await homePageSelectors().men.click();
//         await homePageSelectors().kids.click();
//         await homePageSelectors().rFlagimg.isVisible();
//         await homePageSelectors().srchBarImput.click();
//     }
        

//     async openPage(url: string){
//             await page.goto(url)
//     } 
// };

// export const homePageObj = new HomePageObjects();
