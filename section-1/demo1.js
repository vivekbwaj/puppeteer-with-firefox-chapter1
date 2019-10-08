const puppeteerChrome = require("puppeteer");
const puppeteerFF = require("puppeteer-firefox");

(async function() {
  var test = async function test(browser) {
    //Page
    var page = await browser.newPage();

    //Set view port of the page
    await page.setViewport({
      width: 1440,
      height: 10000
    });

    await page.goto("http://executeautomation.com/demosite/Login.html");
    await page.type("[name=UserName]", "executeautomation");
    await page.type("[name=Password]", "admin");
    await page.keyboard.press("Enter");
    await browser.close();
  };

  var firefox = await puppeteerFF.launch({
    headless: false,
    slowMo: 50
  });

  await test(firefox);

  var chrome = await puppeteerChrome.launch({
    headless: false,
    slowMo: 50
  });

  await test(chrome);
})();
