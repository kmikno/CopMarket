const { cacheFile } = require('./cacheProduct');

const supportedVendors = {
  d1: {
    getProduct: async function (prodQuery) {
      const { ExtractD1 } = await import('../services/ExtractD1.mjs');
      const products = await ExtractD1(prodQuery);
      return products;
    }
  },
  vaquita: {
    getProduct: async function (prodQuery) {
      const { ExtractVaquita } = await import('../services/ExtractVaquita.mjs');
      const products = await ExtractVaquita(prodQuery);
      return products;
    }
  },
  isimo: false
};

/**
 * Get all Products by Store
 * @param {import('express').Request} req The request context of express
 * @param {import('express').Response} res The response context of express
 * @param {import('express').NextFunction} next The next function for middlewares
 *
 * @returns {} json to the client
 */
const getVendor = (req, res, next) => {
  const { name } = req.params;
  res.json({ message: `Hola desde la tienda ${name}` });
};

/**
 * Get product by search params
 * @param {import('express').Request} req The request context of express
 * @param {import('express').Response} res The response context of express
 * @param {import('express').NextFunction} next The next function for middlewares
 *
 * @returns {} json to the client
 */
const getVendorProduct = async (req, res, next) => {
  const { name, query } = req.params;

  if (!supportedVendors[name]) {
    return res.status(404).json(`Tienda ${name} no encontrada`);
  }

  const hasCache = await cacheFile(name, query);
  console.log(hasCache);
  if (hasCache) return res.json(hasCache);

  const returnProducts = await supportedVendors[name].getProduct(query);
  res.json(returnProducts);
};

module.exports = {
  getVendor,
  getVendorProduct
};
