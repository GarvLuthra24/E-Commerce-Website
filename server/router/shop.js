const express = require('express')
const router = express.Router();
const shopController = require('../controller/shop')


router.get('/' ,shopController.getProductList)
router.get('/addToCart' , shopController.getAddToCart)
router.get('/cart', shopController.searchForCartItems)
router.get('/cart/removeItem',shopController.deleteCartItems)


module.exports = router



