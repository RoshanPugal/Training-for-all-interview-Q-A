import {test,expect} from "@playwright/test"
import{config}from "dotenv"
import { LoginPage } from "./Login.spec"
import { getexceldata} from "./exceldata.spec"

config()

const credential=getexceldata()

test.describe("Test from excel utils file",()=>{
    for (const cred of credential){
    test(`Excel data for ID:${cred.id}`,async({page})=>{
        const loginpage=new LoginPage(page)
        const baseurl= process.env.BASE_URL!;

        await loginpage.goto(baseurl)
        await loginpage.loginfill(cred.username,cred.password)
        const result=await loginpage.getresult()
        if(result ==="sucess"){
            console.log(`Login Sucess for ID:${cred.id}`)
        }else if(result ==="Failure"){
            console.log(`Login failure for ID${cred.id}`)
        }else{
            console.log("get result worng")
        }
    })
}
})

