const puppeteer = require('puppeteer');

const grabData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // sample data collection
  const title = await page.title();
  const outerHTML = await page.evaluate(
    () => document.querySelector('body').outerHTML,
  );
  await browser.close();

  return { title, outerHTML };
};

module.exports = grabData;
