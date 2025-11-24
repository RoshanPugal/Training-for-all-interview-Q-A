import {test,Page, expect} from "@playwright/test"
import path from "path"

test("Verify uplode file test",async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/upload')

    await page.locator('#file-upload').setInputFiles("C:/Users/Roshan kumar.P/OneDrive/Desktop/Resume.pdf")

     await page.locator('#file-submit').click();

     await expect(page.locator('#uploaded-files')).toHaveText('Resume.pdf')

     await page.waitForTimeout(2000)

})

test.only("Upload multiple file",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const file1=path.join(__dirname,"C:\Users\Roshan kumar.P\OneDrive\Desktop\Resume.pdf")
    const file2 =path.join(__dirname,"C:\Users\Roshan kumar.P\OneDrive\Desktop\Immanuvel.xlsx")
    const filepath= page.locator('#multipleFilesInput')

    await filepath.setInputFiles([file1,file2])

    await page.click('type="submit"')
    await expect(page.locator('#multipleFilesStatus')).toHaveText('Multiple files selected:')
})