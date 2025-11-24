import{expect, test}from "@playwright/test"
import { TodoList } from "./todolist.spec"


test("Verify the totdo list is completed",async({page})=>{

    const todolist= new TodoList(page)

    await todolist.goto()

    await todolist.list("first name","second name","third name")


    await todolist.view()

    await todolist.clickcompletebtn()
    // await page.waitForTimeout(2000)
})