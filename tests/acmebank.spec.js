import {test,expect} from '@playwright/test'
import data from "../tests/testdata/acmebankdata.json"
test('login',async({page})=>{
    await page.goto('https://demo.applitools.com/')
    await page.locator('//input[@id="username"]').fill(data.username)
    await page.locator('//input[@type="password"]').fill(data.Password)
    await page .locator('//a[@id="log-in"]').click()
})
