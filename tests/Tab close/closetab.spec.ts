import{chromium, test} from"@playwright/test"
import { promises } from "dns"

test.describe.configure({retries:2})
test("Close tab",async()=>{
   
    const browser=await chromium.launch({headless:false})
    const window = await browser.newContext()
    const page = await window.newPage()
     

    await page.goto('https://www.amazon.in/s?i=fashion&rh=n%3A22371749031%2Cp_72%3A1318477031%2Cp_36%3A60000-%2Cp_n_feature_nineteen_browse-bin%3A11301363031&s=shoe&dc&fs=true&ds=v1%3Al8JPi25PB7TFRMjZXhBSVc0KA1Abkc1yMFs9s6HG8wc&_encoding=UTF8&content-id=amzn1.sym.4e6ff138-157a-4eaa-9fb0-4d002d2d0904&pd_rd_r=a9043719-fefb-44dc-8dc3-45371cdfbaad&pd_rd_w=LEhay&pd_rd_wg=mT2Tx&pf_rd_p=4e6ff138-157a-4eaa-9fb0-4d002d2d0904&pf_rd_r=0NRRHT02TW5NRD2A9F6P&qid=1713510673&rnid=11301362031&ref=pd_hp_d_atf_unk')    
    
    
    await page.waitForLoadState('load')


    const [newPage]= await Promise.all([
        window.waitForEvent('page'),
        page.locator('//img[@class="s-image"]').first().click()
    ])

    const title = await page.title()
    console.log("Title:",title)
    await newPage.close()
    await page.waitForTimeout(2000)
})