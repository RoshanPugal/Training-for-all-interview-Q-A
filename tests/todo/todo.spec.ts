import { test, expect,Page, Locator } from '@playwright/test';

export class Todo{
    page:Page
    todoinput:Locator
    completeinput:Locator
    activebtn:Locator
    activcheck:Locator


    constructor(page:Page){
        this.page=page
        this.todoinput=this.page.locator('.new-todo')
        this.completeinput=this.page.locator('.toggle').nth(1)
        this.activcheck=this.page.locator('.todo-list li')
        this.activebtn=this.page.locator("//a[text()='Active']")

    }

    async goto(){
        await this.page.goto('https://demo.playwright.dev/todomvc')
    }
    async todofill(...list:string[]){
        for(const item of list){
        await this.todoinput.fill(item)
        await this.todoinput.press('Enter')
        }
    }
    async todocomplete(){
        await this.completeinput.check()
    }

    async balancetodo(){
        await this.activebtn.click()
        await expect(this.activcheck).toHaveCount(2)
        await this.page.screenshot({path:'teststodo'+Date.now()+"Active todo.png",fullPage:true})
    }
}