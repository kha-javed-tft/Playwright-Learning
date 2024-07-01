import{test,expect} from "@playwright/test"

test("Mouse Hover Actions", async({page})=>{

    await page.goto("https://stqatools.com/demo/MouseHover.php")

    const dashboard=await page.locator("//button[normalize-space()='Mouse Hover DropDown']")
    const link3=await page.locator("//a[normalize-space()='Link 3']")

   await dashboard.hover()
    await link3.hover()

    await page.waitForTimeout(5000)



})