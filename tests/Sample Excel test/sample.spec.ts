import{Locator, Page,expect}from "@playwright/test"

export class Loginpage{
    page:Page
    usernameinput:Locator
    passwordinput:Locator
    submitbtn:Locator
    getmessage:Locator
    


    constructor(page:Page){
        this.page=page
        this.usernameinput=this.page.locator('//input[@id="username"]')
        this.passwordinput=this.page.locator('//input[@id="password"]')
        this.submitbtn=this.page.locator('.btn')
        this.getmessage=this.page.locator('.post-title')
    }

    async goto(baseurl:string){
        await this.page.goto(baseurl)
    }
    async logindata(username:string,password:string){
        await this.usernameinput.fill(username)
        await this.passwordinput.fill(password)
        await this.submitbtn.click()
    }
    async message(){
        if(await this.getmessage.isVisible()){
            const title=await this.getmessage.textContent()
            console.log("Sucess Message",title)
            expect(this.getmessage).toContainText('Logged In Successfully')
        }else{
            console.log("Failure")
        }
    }
}