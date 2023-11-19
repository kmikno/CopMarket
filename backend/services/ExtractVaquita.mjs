import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { rootDir, storagePath } from '../utils/rootDir.mjs';

const shop = {
  vendor: 'Vaquita',
  baseUrl: 'https://vaquitaexpress.com.co/',
  products: [],
  /**
   *
   * @param {import('playwright').Page} page
   */
  extract: async function (page, query) {
    await page.goto(`${this.baseUrl}catalogsearch/result/?q=${query}`, { waitUntil: 'load' });

    const $productSelector = 'li.product-item .product-item-info';
    const $imgProductSelector = 'img.product-image-photo';

    await page.waitForSelector($imgProductSelector);
    await page.waitForSelector($productSelector);
    // await page.waitForTimeout(1000);
    const getCategory = (await page.textContent('h1.page-title'))?.trim();

    const getProducts = await page.$$eval(
      $productSelector,
      (allProducts, getCategory) => {
        const data = [];
        getCategory = getCategory.replace(/\(.*\)/i, '');
        if (allProducts?.length < 1) {
          return 'Producto no encontrado';
        }

        allProducts.forEach((product) => {
          const title = product.querySelector('a.product-item-link')?.innerText;
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
  }
};

/**
 * Function to Open the navigator, scrap the products
 * @param {string} query Product searched
 * @returns {Promise<{
 *  lastUpdate: number;
 *  data:{
 *  title: string,
 *  url?: string,
 *  img?: string,
 *  price?: string
 *  category?: object[]
 *  }[]|[]
 * }>}
 */
export const ExtractVaquita = async (query = '') => {
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
  // Structure for products in Shop
  const savePath = path.join(storagePath, `${shop.vendor}_${query}.json`);
  let result = {};

  try {
    await shop.extract(page, query);
    // console.log(shop.products);
    result = {
      lastUpdate: Date.now(),
      data: shop.products
    };
    await fs.writeFile(savePath, JSON.stringify(result, null, 2), 'utf-8');
  } catch (error) {
    console.error('Algo paso en la extraction de un vendor');
    throw error;
  }

  console.log('\x1b[32mExtraction Completed\x1b[0m');

  await context.close();
  await browser.close();
  const endTime = performance.now();
  let sec = (endTime - initTime) / 1000;
  sec = sec.toFixed(2);
  console.log(`\x1b[36mTime lapse -> ${sec} seconds`);
  return result;
};
