import {test} from "@playwright/test"

test("Hidden", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@placeholder='Username']").fill("Admin");
 await page.waitForTimeout(1000)

   await page.locator("//input[@placeholder='Password']").fill("admin123");
 await page.waitForTimeout(1000)

   await page.locator("//button[normalize-space()='Login']").click();
   await page.waitForTimeout(1000)
    
   await page.locator("//div[@class='oxd-layout-navigation']//li[2]").click();
 await page.waitForTimeout(1000)

   await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]").click();
   await page.waitForTimeout(1000)


 const options=  await page.$$("//div[@class='oxd-layout-navigation']//li")

 for (const opt of options){

    console.log(await opt.textContent())
 }

 await await page.waitForTimeout(6000)


})