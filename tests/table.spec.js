import {test,expect} from "@playwright/test"
import { table } from "console";

test("TABLE", async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");


   const table=await page.locator("#productTable")
  
  const columns= table.locator("thead tr th")
  await expect(await columns.count()).toBe(4)


  console.log(await columns.count())

  const rows=table.locator("tbody tr")

  const matchedrow=rows.filter({
   has:page.locator("td"),
   hasText:"product 4",
  })

  matchedrow.locator("input").check()


 await  page.waitForTimeout(2000)
})