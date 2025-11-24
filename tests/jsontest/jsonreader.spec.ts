import * as fs from 'fs';


export interface credential{
    username:string
    password:string
}
export interface user{
    id:number
    details:credential
}
export interface root{
    users:user[]
}

export function jsonfile():root{
    const jsonpath = fs.readFileSync('tests/jsontest/sample.json','utf-8')
    return JSON.parse(jsonpath) as root
}
