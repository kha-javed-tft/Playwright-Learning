import {test,expect} from "@playwright/test"


let page = await context.newPage()

test("hand", async()=>{


    page.goto("")

    page.locator("").click();


})