const express = require('express');
const VendorController = require('../controllers/vendor');
const router = express.Router();

router.get('/vendor', VendorController.getVendor);

module.exports = router;
