import {test} from "@playwright/test"
import path from "path"

test("Verify doenload file",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download')

    page.waitForLoadState('load')

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('a[href="download/some-file.txt"]')
    ])

    const downloadpath= path.join("C:/Users/Roshan kumar.P/OneDrive/Desktop/IBM",download.suggestedFilename())

    await download.saveAs(downloadpath)

    console.log("Save as",downloadpath)
})