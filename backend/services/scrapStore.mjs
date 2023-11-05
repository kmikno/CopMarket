import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import rootDir from '../utils/rootDir.mjs';

const Shops = [
  {
    vendor: 'D1',
    url: 'https://domicilios.tiendasd1.com/ca/alimentos-y-despensa/huevos/ALIMENTOS%20Y%20DESPENSA/HUEVOS',
    products: [],
    /**
     *
     * @param {import('playwright').Page} page
     */
    extract: async function (page) {
      const $productSelector = '.product-card-default';
      const $imgProductSelector = 'img.prod__figure__img';

      await page.waitForSelector($productSelector);
      await page.waitForSelector($imgProductSelector);
      await page.waitForTimeout(1000);

      const getCategory = (
        await page.textContent('div[class*="styles__ProductsHeader"] h1')
      )?.trim();

      const getProducts = await page.$$eval($productSelector, (allProducts) => {
        const data = [];
        allProducts.forEach((product) => {
          const title = product.querySelector('p.prod__name')?.innerText;
          const price = product.querySelector('p.base__price')?.innerText;
          const img = product.querySelector('img.prod__figure__img')?.src;
          data.push({ title, price, img });
        });
        return data;
      });

      this.products.push({ category: getCategory, results: getProducts });
    },
  },
  {
    vendor: 'La vaquita',
    url: 'https://vaquitaexpress.com.co/lacteos-huevos-y-refrigerados/huevos.html',
    products: [],
    /**
     *
     * @param {import('playwright').Page} page
     */
    extract: async function (page) {
      const $productSelector = 'li.product-item .product-item-info';
      const $imgProductSelector = 'img.product-image-photo';

      await page.waitForSelector($imgProductSelector);
      await page.waitForSelector($productSelector);
      await page.waitForTimeout(1000);
      const getCategory = (await page.textContent('h1.page-title'))?.trim();

      const getProducts = await page.$$eval($productSelector, (allProducts) => {
        const data = [];
        allProducts.forEach((product) => {
          const title = product.querySelector('a.product-item-link')?.innerText;
          const price =
            product.querySelector('span.special-price .price')?.innerText ??
            product.querySelector('.price-final_price .price')?.innerText;

          const img = product
            .querySelector('img.product-image-photo')
            ?.getAttribute('data-original');

          data.push({ title, price, img });
        });
        return data;
      });

      this.products.push({ category: getCategory, results: getProducts });
    },
  },
];

void (async () => {
  /* -----------  Browser setup ----------- */
  const browser = await chromium.launch({
    headless: false,
    // slowMo: 30
  });

  // create new context
  const context = await browser.newContext();

  // add init script
  await context.addInitScript(
    "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})"
  );

  /* ----------------------------------- */

  const page = await context.newPage();

  // Structure for products in Shop
  // shop.products = [{ category: '', results: [] }];
  const storagePath = path.join(rootDir, 'data', 'vendors.json');
  for (const shop of Shops) {
    await page.goto(shop.url, { waitUntil: 'load' });
    try {
      await shop.extract(page);
      await fs.writeFile(storagePath, JSON.stringify(Shops), 'utf-8');
    } catch (error) {
      console.error('Algo paso en la extraction de un vendor');
      throw error;
    }
  }

  console.log('\x1b[32mExtraction Completed\x1b[0m');

  await context.close();
  await browser.close();
})();
