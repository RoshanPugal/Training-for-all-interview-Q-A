import {test,expect}from "@playwright/test"
import{config}from "dotenv"
import { LoginPage } from "./login.spec"
import * as XLSX from "xlsx"

config();

interface Credentialas{
    id:number;
    username:string;
    password:string;
}

function getexceldata():Credentialas[]{
    const workbook=XLSX.readFile('tests/excel/credential.xlsx')
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const exceldata=XLSX.utils.sheet_to_json<Credentialas>(sheet)
    return exceldata
}

const credentials = getexceldata()

test.describe("Test for data Drive with excel",()=>{
    for(const cred of credentials){
        test(`Test for id:${cred.id}`,async({page})=>{
            const loginpage= new LoginPage(page);


            const baseurl = process.env.Base_Url!
            await loginpage.goto(baseurl)

            await loginpage.loginfill(cred.username,cred.password)

            const result=await loginpage.getmessage()

            if(result==="sucess"){
                console.log(`Login Sucess for Id${cred.id}`)
            }else if(result==="Failure"){
                console.log(`Login Fail for ID ${cred.id}`)
            }else{
                console.log("Credential Fail")
            }
        })


    }

    
})