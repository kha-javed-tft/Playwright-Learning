import {test, expect} from "@playwright/test"

test("AUTO SUGGEStion", async ({page})=>{

   await page.goto("https://redbus.in/");

    await page.locator("#src").fill("Delhi");
    await page.waitForTimeout(2000)
const options=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
for(const opt of options){
    console.log(await opt.textContent())
}
await page.waitForTimeout(5000)
})