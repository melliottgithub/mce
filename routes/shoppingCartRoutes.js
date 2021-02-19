const express = require('express');
const { createShoppingCart ,
    modifyShoppingCart ,
    deleteShoppingCart,
    getShoppingCartById,
    getAllShoppingCarts
} = require('../controllers/shoppingCartController');

const router = express.Router();

router
    .route('/')
    .get(getAllShoppingCarts)
    .post(createShoppingCart);

router
    .route('/:id')
    .patch(modifyShoppingCart)
    .get(getShoppingCartById)
    .delete(deleteShoppingCart);

module.exports = router;