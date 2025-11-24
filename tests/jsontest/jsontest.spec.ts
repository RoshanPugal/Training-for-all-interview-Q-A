import {test,Page} from "@playwright/test"
import { jsonfile } from "./jsonreader.spec"

test("Json test",async({page})=>{
    const jsondata = jsonfile()
    

    const data = jsondata.users.find(x=> x.id ===1)
    console.log(data);
    
})