import { test, expect } from "@playwright/test";

test("print two xpath values", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const rows = page.locator('(//table)[1]//tr[position()=1 or position()=3]');

  const count = await rows.count();
  console.log("Total rows found: " + count);

  for (let i = 0; i < count; i++) {
    const text = await rows.nth(i).textContent();
    console.log(`Row${i+1}:row`,text);
  }
})


test.only("Find 16th row in pagination table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const targetID = "Master In Selenium";
    let found = false;

    while (!found) {

        // Get all rows (skip header)
        const rows = await page.$$("(//table)[1]");

        for (const row of rows) {
            const id = await row.locator("//tr[5]//td[1]").innerText();

            if (id === targetID) {
                const name = await page.locator("(//table)[1]//tr[5]//td[2]").innerText();
                const price = await page.locator("(//table)[1]//tr[5]//td[4]").innerText();

                console.log(`ID: ${id}`);
                console.log(`Name: ${name}`);
                console.log(`Price: ${price}`);


                found = true;
                break;
            }
        }

    }

})