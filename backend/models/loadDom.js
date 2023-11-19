const { chromium } = require('playwright');
module.exports = class LoadDom {
  async Launch() {
    const browser = await chromium.launch({
      // headless: false,
      // slowMo: 300,
    });

    // create new context
    const context = await browser.newContext();

    // add init script
    await context.addInitScript(
      "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})"
    );

    const page = await context.newPage();
    return page;
  }
};
