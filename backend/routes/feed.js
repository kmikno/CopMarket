const express = require('express');
const feedController = require('../controllers/vendor');

const router = express.Router();

router.get('/posts', feedController.getVendor);

module.exports = router;
