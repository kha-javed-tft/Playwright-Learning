import{test,expect} from "@playwright/test"

test ("FRMAE", async({page})=>{

   await page.goto("https://ui.vision/demo/webtest/frames/");

    // page.frameLocator("x-path").

    // const allframes= await page.frames();

    // await expect(allframes.length).toBe(7);

    // approach 1

    // const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})

    // await frame1.fill("[name='mytext1']","hello");

    // approach-2

    // await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']").fill("Hello")

    
    // nested frames

    const frame3= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})

    const childFrame= await frame3.childFrames()

    await childFrame[0].locator("//*[@id='mG61Hd']/div[2]/div[1]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]").check()

   await page.waitForTimeout(6000)
})