import {Locator, Page,expect} from "@playwright/test"

export class LoginPage{
    page:Page
    usernameinput:Locator
    passwordinput:Locator
    submitbtn:Locator
    message:Locator


    constructor(page:Page){
        this.page=page
        this.usernameinput=this.page.locator('//input[@id="username"]')
        this.passwordinput=this.page.locator('//input[@id="password"]')
        this.submitbtn=this.page.locator('.btn')
        this.message=this.page.locator('.post-title')
    }


    async goto(baseurl:string){
        await this.page.goto(baseurl)
    }
    async loginfill(username:string,password:string){
        await this.usernameinput.fill(username)
        await this.passwordinput.fill(password)
        await this.submitbtn.click()
    }
    async getmessage(){
        if(await this.message.isVisible()){
            const title = await this.message.textContent()
            if(title?.includes("Logged In Successfully")){
            return "sucess"
        }
        }
        return "Failure"
    }
}