import{test,expect} from "@playwright/test"
import * as XLSX from "xlsx"
import { config } from "dotenv"
import { Loginpage } from "./sample.spec";

config();

interface data{
    username:string
    password:string
}

const workbook=XLSX.readFile('tests/excel/logincredential.xlsx')
const sheet=workbook.Sheets[workbook.SheetNames[0]]
const exceldata=XLSX.utils.sheet_to_json<data>(sheet)
const data=exceldata[0]



test("Test for login page data extract from excel",async({page})=>{
    const loginpage=new Loginpage(page)
    const baseurl=process.env.Base_Url!
    await loginpage.goto(baseurl)   

    await loginpage.logindata(data.username,data.password)
    await loginpage.message()
})