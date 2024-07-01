import {test,expect} from "@playwright/test"

test("DROPDOWNS", async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");

//    await page.locator("#country").selectOption({label:'India'});
//    await page.locator("#country").selectOption('India');
//    await page.locator("#country").selectOption({value:'uk'});

   //multiple selections

  const options= await page.$$("#country option");

  for (const opt of options){

    console.log(await opt.textContent())

    // page.selectOption(options);
  }


 await  page.waitForTimeout(2000)
})