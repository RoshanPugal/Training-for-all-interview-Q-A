import * as XLSX from "xlsx"


interface Credential{
    id:number
    username:string
    password:string
}

export function getexceldata():Credential[]{
    const workbook=XLSX.readFile("tests/excel/credential.xlsx")
    const sheet=workbook.Sheets[workbook.SheetNames[0]]
    const exceldata=XLSX.utils.sheet_to_json<Credential>(sheet)
    return exceldata
}