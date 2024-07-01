Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example.spec.js
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.


###
Run all the test case in the test folder by default mode(headless mode)
  - npx playwright test
Run all the test case in the test folder specific mode(headed mode)
  - npx playwright test --headed
Run the test only specific folder (headless)
  - npx playwright test example.spec.js
Run the test specific folder with only specify browser (like chromium)
  - npx playwright test example.spec.js --project=chromium

Run the test specific folder with only specify browser (like chromium) in headed and debug mode
- npx playwright test example.spec.js --project=chromium --headed --debug



### Locating Element in Playwright

# Property
# CSS
# Xpath

Locate Single Element

# link/button
await page.locator('locator').click();
await page.click('locator');

# inputbox
await page.locator('locator').fill('value');
await page.locator('locator').type('value');

await page.fill('locator','value');
await page.type('locator','value');

# Locate Multiple Web Element
const element=await page.$$('locator');

# Waiting apply above the selectors
page.waitForSelectors('locators-XPath')


# automatic record the locators etc
npx playwright codegen // It opens browser & record window that's record step of the browsers.
npx playwright codegen --help

# Assertion
https://playwright.dev/docs/test-assertions

# how to handle input box, radio button, checkbox, multile checkbox

page.locator("x-path/css/property").check(); ---> single

for multiple make an arrays of selectors and then by using loop it's possible to execute
checkboxLocators =["//@type=something and id=1",""//@type=something and id=2"","etc"]
for (locators of checkboxLocators){
  expect(page.locators().isChecked.toBtruthy)
}


# dropdowns, 

page.locator("#country").SelectOption({label:'Indoa'})
page.locator("#id").selectOption("India") // visible text
some times values are different in web pages so for that
page.locator("#country").SelectOption({value:'uk'}) // option is United Kingdom
also we can pass index values
page.locator("#country").SelectOption({index:'0-9'})



# Multi Select Dropdowns
page.selectOption('#id',["one","two","three"])

# Bootstrap Multi Select Dropdowns


# auto suggestion dropdowns
  page.selectors("#id").fill("common values")
  page.waitForSelector("X-path")// exact x-path wait for options appear

  now
  page.$$("x-path")
  capture all the values by using for loop

# HiddenItems dropdowns

locate those hidden drop downs click the buttons then with the help of x-path debuger you can freez the screen then you locates the hidden elements

# alert(), confirm(), prompt() [handleDialog||AlertWindow]

// enabling dialog window handler

page.on("Dialog",async dialog=>{
  expect(dialog.type()).toContain("alert")
  expect(dialog.message()).toContain("box messages")
  await dialog.accept()
})

page.click("x-path") // click dialog open
page.waitForTimeout(5000)

# frame/iframe, 

capture total frames
- const allframes=await page.frames()--> to gett all the frames in one embeded frames on one screen 

approach: frame objects ...> to know better visit frame documentations

# Inner/Nested Frames, 
almost same like frames

# Web Table/Pagination,
// total number of rows and colums

locate page table on the page.. go-> 
const table= await page.locator("X-path of the table")
const colums=await table.locator("thead th tr")//

const rows await table.locator("tbody tr")

now apply some assertions

// select checkbox

cosnt matchedRow=rows.filter({
  has:page.locator("td")
  hasText:"product4"
})

# Date Picker / Calerndars,
- directly fill / date pickers dippends upon how date is display on the web pages

# Mouse Hover Actions
cost desktop= page.locator("x-path")
desktop.hover()

variable.hover()---> it performs mouse hover actions
# Mouse Right Click/Context Click Action
variable.click({variable(button):"right"})

# Mouse Double Click Action
variable.dblclick()

# Mouse Drag And Drop Action 
for drag and drop we need to first source and destination
there are two approch
1-> *source 
    variab.hover() then
    page.mouse.down()

    *Destination
    varibale.hover()
    page.mouse.up()

2-> variable1.drag(variable2)

# Keyboard Actions in Playwright 
https://playwright.dev/docs/api/class-keyboard
page.keyboard.press(controll+A)-> select all

# How To upload files in Playwright 
page.locator("locator").setInputFiles("path")

# upload multiple files at once
page.locator("locator").setInputFiles(["path1","path2"])

# after uploading removes the files
page.locator("locator").setInputFiles([])

# Hooks -> beforeEach, afterEach, beforeAll & afterAll
we can remove the duplication and achive the resuability by using the hooks

why fully parallel is false ? because we need to aheive serilizations
what is diffrence between beforall and beforeeach
beforeall excute at only once
beforeEach excute multiple times

for these we need to pass browser fixure
let page;
test.beforeEach( async ({browser}))=>{
  page=await browser.newPage();

  await page.goto();
  //login
  //repetation work shoud be here
}
test.afterEach(async()=>{
  //logout
  page.locator("#id").click();
})


# Grouping Tests - Describe Block 
some times we have n number of test cases and we need to group it multiple categories
so whenever we have to group the test we can use grouping concept. with the help of describe we can group our tests.

test.describe(async()=<{
  test("test1",async(page)=>{
    console.log()
  })
}>)

# How to capture Screenshots
1-> whatever part is display on the scren.
page.screenshot({path:'path to save'+'file name.png'+Date.now()}) Date.now() diffrentiate the file name

2-> Full page
page.screenshot({path:'path to save'+'file name.png'+Date.now(), fullpage:true})

3-> Element Screenshot
page.locator("xpath")screenshot({path:'path to save'+'file name.png'+Date.now()}) Date.now()

screenshot:'on'
screenshot:'only-on-failure'
add screenshot:on in playwright.config.js file, if I want to capture screenshot if anyone of the test is excuted

# How to record videos for Tests
vide0:'on'
video:'retain-on-failure'
add video:on in playwright.config.js

# Trace Viewer 
it is used to debug the code. we can get all the details like api cal,netwrok cal,source etc etc so that we can easily get the details info
add in playwright.config.js
trace="on"

# How to Tag playwright tests
some times we can teag the test and want to run our tagging test.

by using @sainity or @ reg
we can run the test by using tag name so that we can run whatever we want
--grep @tag name (included)
--grep @tag name --grep--invert @tag name (excluded)

# Annotations | Only, Skip,Fail, Fixme & Slow 

annotation can be used in a group or in single. with the help of these annotation our task is a is easy in a group test.

# Page Object Model Pattern | POM |

page objct model is a framework or a pattern in which we have maintain page elements in seprate files


# How To handle Multiple Pages/Windows | Browser Context |

to create our own page we can do it with the help of Browser context.
pages: a page can refer a tab or pop up windows

import {page,expect,chromium} from"@playwright/test";
or
cosnt {page, expect, chromium}= require("@playwright/test")

for this we don't need to pass page fixure
example:
  test("Browser COntext", async ()={
    // create a browser
    const browser= await chromium.launch()
    // create a context with the help of browser

    cosnt constext = await browser.newContext()
  })

# Reporters | List, Dot, Json, JUnit & HTML Reporters

set in config files

# How to Generate Allure Reports

install alure module
then based on the documentations go step by step.

set credentials in config file and the used allure reports.
the we get a alure test file by using these files we need to genrate html reports

# How To Retry Failed Test Cases | Retries and Test Flakiness 

run--> passed
run--> failed
run--> failed --run--> passed = falky

to set this automatically fix the issue we set it in config file

# Rest API Testing | HTTP Requests |Get,Post,Put & Delete 

at the place of page fixture passed request fixture for example.

test("GET", async ({request})=>{
  const res= await request.get("")

  expect(res.status()).toBe(200)
})















