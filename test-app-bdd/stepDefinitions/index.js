const{expect} = require("chai");
const{Given,When,Then,Before,After} = require("@cucumber/cucumber");
const{Builder,By,Key,until,sleep} = require("selenium-webdriver");
const {delay} = require("../utils/delay");

Given("Test registeration functionality",{timeout : 30000}, async function(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/register");
    await driver.findElement(By.id("firstname")).sendKeys("test");
    await driver.findElement(By.id("lastname")).sendKeys("test");
    await driver.findElement(By.id("email")).sendKeys("test@gmail.com");
    await driver.findElement(By.id("phone")).sendKeys("123456789");
    await driver.findElement(By.id("username")).sendKeys("test12");
    await driver.findElement(By.id("password")).sendKeys("testsuccess");
    await driver.sleep(delay);
    await driver.findElement(By.id("submitUser")).click();

    await driver.wait(until.elementLocated(By.id("loginForm")),30000);
    expect(await driver.wait(unitil.elementLocated(By.id("loginForm"))));
    //await driver.quit();
}
);
Given("Test login functionality",{timeout: 30000}, async function(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("username")).sendKeys("test12");
    await driver.findElement(By.id("password")).sendKeys("testsuccess");
    await driver.sleep(delay);
    await driver.findElement(By.id("submitLogin")).click();

    await driver.wait(until.elementLocated(By.id("registerationForm")),30000);
    expect(await driver.wait(unitil.elementLocated(By.id("registrationForm"))));
    //await driver.quit();
    // gcvnb
    

})