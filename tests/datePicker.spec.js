import{test, expect} from "@playwright/test"


test("DATE PICKER", async({page})=>{

    // page.fill(""); // pass the x-path and date

    // date pick from the provided popup
await page.goto("https://testautomationpractice.blogspot.com/")

    const year="2024";
    const month="July";
    const date="1";

    await page.locator("#datepicker").click();

    while(true){
        const currentMonth= await page.locator("//span[@class='ui-datepicker-month']").textContent()
        const currentYear= await page.locator("//span[@class='ui-datepicker-year']").textContent()

        if (currentMonth==month && currentYear==year){
            break;
        }
       await page.click("//span[@class='ui-icon ui-icon-circle-triangle-e']")
    }

    const dates= await page.$$("//a[@class='ui-state-default']");

    for (const dt of  dates){

        if (await dt.textContent()==date){
            await dt.click();
            break;
        }
    }


await page.waitForTimeout(5000)

})