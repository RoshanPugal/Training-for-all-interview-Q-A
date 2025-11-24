import{Locator, Page,expect}from "@playwright/test"

export class TodoList{
    page:Page
    listlocator:Locator
    viewtodo:Locator
    completebtn:Locator
    avtiveclickbtn:Locator


    constructor(page:Page){
        this.page=page
        this.listlocator=this.page.locator('.new-todo')
        this.viewtodo=this.page.locator("//a[text()='All']")
        this.completebtn=this.page.locator('locator')
        this.avtiveclickbtn=this.page.locator('locator')
    }

    async goto(){
        await this.page.goto('https://demo.playwright.dev/todomvc')
    }
    async list(list1:string,list2:string,list3:string){
        await this.listlocator.fill(list1)
        await this.listlocator.click()
        await this.listlocator.fill(list2)
        await this.listlocator.click()
        await this.listlocator.fill(list3)
       await this.listlocator.click()
    }
    async view(){
        await this.viewtodo.click()
    }
    async clickcompletebtn(){
        await this.completebtn.click()
    }
    async activebtn(){
       await this.avtiveclickbtn.click()
       await this.listlocator.isVisible()
        
    }
}