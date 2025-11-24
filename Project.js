export class home {
    constructor(page) {
        this.page=page
        this.username=page.getByPlaceholder("Username")
        this.password=page.getByPlaceholder("Password")
        this.login=page.locator("#login-button")
        this.cart=page.locator('(//button[@class="btn_primary btn_inventory"])[1]')
        this.cartview=page.locator('//a[@class="shopping_cart_link fa-layers fa-fw"]')
        this.remove=page.locator('//button[text()="REMOVE"]')
        this.checkout=page.locator('//a[text()="CHECKOUT"]')
        this.first=page.locator("#first-name")
        this.second=page.locator("#last-name")
        this.zip=page.locator("#postal-code")
        this.continue=page.locator('//input[@value="CONTINUE"]')
        this.finish=page.locator("//a[text()='FINISH']")

    }
    async Homepage(user,pass){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.login.click()
    }
    async cartclick(){
        await this.cart.click()
    }
    async viewcart(){
        await this.cartview.click()
    }
    async erase(){
        await this.remove.click()
        await this.checkout.click()
    }
    async info(first,last,num){
        await this.first.fill(first)
        await this.second.fill(last)
        await this.zip.fill(num)
        await this.continue.click()
    }
    async final(){
        await this.finish.click()
    }

}
