const {test,expect}=require("@playwright/test")


test ('HOME PAGE', async({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    const pageTitle= await page.title();

    console.log("PAGE TITLE IS", pageTitle)

    await expect(page).toHaveTitle("STORE");

    const pageUrl= await page.url();

    console.log("PAGE URL IS", pageUrl)

    await expect(page).toHaveURL('https://demoblaze.com/index.html')

    await page.close();
})