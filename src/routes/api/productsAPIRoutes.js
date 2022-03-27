const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productAPIController');

router.get('/', productAPIController.list)

router.get('/:id', productAPIController.detail);

// router.delete('/delete/:id', productAPIController.destroy)

// router.get('/search', productAPIController.search);

module.exports = router