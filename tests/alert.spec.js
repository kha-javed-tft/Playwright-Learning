import {expect, test} from "@playwright/test"


test("ALERT", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")



    page.on("DIALOG", async dialog =>{

        await expect(await dialog.type()).toContain("alert")
        await expect(await dialog.message()).toContain("I am an alert box!")

        dialog.accept();
    await page.waitForTimeout(5000)

    })



    await page.locator("//button[normalize-space()='Alert']").click();

    await page.waitForTimeout(5000)
    
})