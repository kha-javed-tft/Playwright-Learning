import {test,expect} from '@playwright/test'

test('Locator', async({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    // click on login button --property 
    await page.locator("id=login2").click();

    
    // fill user input box --css 
    await page.fill("#loginusername","pavanol")

    // fill user input box --css
    await page.fill("#loginpassword","test@123")

    // click on login button - XPath

    await page.locator("//button[normalize-space()='Log in']").click()

    // check logout visibility - XPath 

    const logoutLink=await page.locator("#logout2")

    await expect(logoutLink).toBeVisible()

    await page.close();

})