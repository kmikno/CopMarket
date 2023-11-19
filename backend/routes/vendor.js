const express = require('express');
const VendorController = require('../controllers/vendor');
const router = express.Router();

// GET path /vendor/products
router.get('/:name', VendorController.getVendor);
router.get('/:name/:query', VendorController.getVendorProduct);
module.exports = router;
