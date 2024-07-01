const {test,expect}=require("@playwright/test")

test("radio",async({page})=>{

    await page.goto("https://materializecss.com")

    await page.locator("//a[normalize-space()='Forms']").click();
    await page.waitForTimeout(1000)
    await page.locator("//a[@href='radio-buttons.html']").click();
    await page.waitForTimeout(1000)
    await expect(await page.locator("(//input[@name='group1'])[1]")).toBeChecked();


    await expect(await page.check("x-path")).toBeChecked();
})