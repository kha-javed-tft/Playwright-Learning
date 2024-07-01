import {test,expect} from "@playwright/test";


test('Multiple Locators',async({page})=>{

    await page.goto("https://demoblaze.com/index.html");

//    const links= await page.$$("//a")

//    for (const link of links){

//     const textElements= await link.textContent();

//     console.log(textElements)

//    }

   const products= await page.$$("//div[@id='tbodyid']//div//h4//a");

   for (const product of products){

    const productName= await product.textContent();

    console.log(productName);

   }
})