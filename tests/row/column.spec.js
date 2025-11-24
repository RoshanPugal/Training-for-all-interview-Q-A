import{test,page} from "@playwright/test"


test("print the columns name",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const row =page.locator('(//table)[1]//tr[position()=2 or position()=3]')
    const count = await row.count()

    for(let i=0;i<count;i++){   
        const name = await row.nth(i).innerText()
        console.log(`print the box of${i+1}`,{name})
    }
})


test.only("print the price and name",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   const targetID = "BookName"
    let found = false;
    while(!found){
        let rows =await page.$$('(//table)[1]//tr//th[1]')
    
        for (const row of rows){
            const id = await row.innerText()
             if(id ===targetID){
                const name = await page.locator('(//table)[1]//tr[2]//td[1]').textContent()
                const price = await page.locator('(//table)[1]//tr[2]//td[4]').textContent()
                console.log(`Id is${id}`);
                console.log(`name is ${name}`);
                console.log(`price is${price}`)  
             }else{
                console.log("Locator is wrong");
                
             }
        }
        found=true;
        break
    }
    
})