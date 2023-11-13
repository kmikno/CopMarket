import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { rootDir, storagePath } from '../utils/rootDir.mjs';

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

      // TODO: Existe una API para extraer mayor información sobre productos "https://nextgentheadless.instaleap.io/api/v3"

      const getProducts = await page.$$eval(
        $productSelector,
        (allProducts, getCategory) => {
          const data = [];
          getCategory = getCategory.replace(/\(.*\)/i, '');
          allProducts.forEach((product) => {
            const title = product.querySelector('p.prod__name')?.innerText;
            const price = product.querySelector('p.base__price')?.innerText;
            const img = product.querySelector('img.prod__figure__img')?.src;
            data.push({ title, price, img, category: getCategory });
          }, getCategory);
          return data;
        },
        getCategory
      );
      // console.log(getProducts);
      this.products = this.products.concat(getProducts);
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

      const getProducts = await page.$$eval(
        $productSelector,
        (allProducts, getCategory) => {
          const data = [];
          getCategory = getCategory.replace(/\(.*\)/i, '');
          allProducts.forEach((product) => {
            const title = product.querySelector(
              'a.product-item-link'
            )?.innerText;
            const url = product.querySelector('a.product-item-link')?.href;
            const price =
              product.querySelector('span.special-price .price')?.innerText ??
              product.querySelector('.price-final_price .price')?.innerText;

            const img = product
              .querySelector('img.product-image-photo')
              ?.getAttribute('data-original');

            data.push({ title, url, price, img, category: getCategory });
          });
          return data;
        },
        getCategory
      );

      this.products = getProducts;
    },
  },
];

export const ScrapStore = async () => {
  /* -----------  Browser setup ----------- */
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

  /* ----------------------------------- */
  const initTime = performance.now();

  const page = await context.newPage();

  // Structure for products in Shop
  // shop.products = [{ category: '', results: [] }];

  const savePath = path.join(storagePath, 'vendors.json');
  for (const shop of Shops) {
    await page.goto(shop.url, { waitUntil: 'load' });
    try {
      await shop.extract(page);
      // console.log(shop.products);
      await fs.writeFile(savePath, JSON.stringify(Shops, null, 2), 'utf-8');
    } catch (error) {
      console.error('Algo paso en la extraction de un vendor');
      throw error;
    }
  }

  console.log('\x1b[32mExtraction Completed\x1b[0m');

  await context.close();
  await browser.close();
  const endTime = performance.now();
  let sec = (endTime - initTime) / 1000;
  sec = sec.toFixed(2);
  console.log(`\x1b[36mTime lapse -> ${sec} seconds`);
};
await ScrapStore();
