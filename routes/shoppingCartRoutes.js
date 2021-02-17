const express = require('express');
const { createShoppingCart , modifyShoppingCart } = require('../controllers/shoppingCartController')
const router = express.Router();

router
    .route('/')
    .post(createShoppingCart);

router
    .route('/:id')
    .patch(modifyShoppingCart);

module.exports = router;