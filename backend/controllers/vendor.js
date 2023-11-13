/**
 * Get all Products by Store
 * @param {import('express').Request} req The request context of express
 * @param {import('express').Response} res The response context of express
 * @param {import('express').NextFunction} next The next function for middlewares
 *
 * @returns {} json to the client
 */
const getVendor = (req, res, next) => {
  res.json({ message: 'hi from Vendor Store' });
};

module.exports = {
  getVendor,
};
