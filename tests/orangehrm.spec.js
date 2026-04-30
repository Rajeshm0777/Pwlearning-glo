import{test,expect} from "@playwright/test"
test('Login',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("//input[@placeholder='Username']").fill('Admin')
    await page.locator('//input[@placeholder="Password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click( )    
    await page.locator("//li[contains(.,'Add Employee')]").click()
    await page.locator("//input[@placeholder='First Name']").fill("Vijaya")
    await page.locator("//input[@placeholder='Last Name']").fill("Vani")
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("23456")
    await page.locator("//button[@type='submit']").click()

})