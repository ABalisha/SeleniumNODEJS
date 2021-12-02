const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function example() {
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();
  try {
    await driver.get('http://192.168.1.1');
    await driver.findElement(By.name("name")).sendKeys('AdminGPON');
    await driver.findElement(By.name("pswd")).sendKeys('ALC#FGU',Key.RETURN);
    await new Promise(r => setTimeout(r, 10000));
    await driver.get("http://192.168.1.1/wlan_config.cgi");
    // await driver.get('');
    await new Promise(r => setTimeout(r, 10000));
    await driver.findElement(By.name("wpaKey")).clear()
    await driver.findElement(By.name("wpaKey")).sendKeys('20202020'); // Password of MODEM 
    await driver.findElement(By.xpath(`/html/body/div/form/div[15]/input[1]`)).click();
    await new Promise(r => setTimeout(r, 100000));
    await driver.wait(until.titleIs('Archer C54'), 1000);
  }

  finally {
    await driver.quit();
  }


};

example()
