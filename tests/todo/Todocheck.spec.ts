import {test,expect} from "@playwright/test"
import { Todo } from "./todo.spec"

test("Todo list",async({page})=>{
    const todolist = new Todo(page)

    await todolist.goto()
    await todolist.todofill("Buy groscery","Cook lunch","Eat food")
    await todolist.todocomplete()
    await todolist.balancetodo()
    await page.waitForTimeout(2000)
})