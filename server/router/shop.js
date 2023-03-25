const express = require('express')
const router = express.Router();
const shopController = require('../controller/shop')
const LoginController = require('../controller/login')


router.post('/login' , LoginController.logInUser)
router.post('/login/new-user', LoginController.createNewUser)
router.get('/' ,shopController.getProductList)
router.get('/addToCart' , shopController.getAddToCart)
router.get('/cart', shopController.searchForCartItems)
router.get('/cart/removeItem',shopController.deleteCartItems)
router.get('/cart/itemCount' , shopController.getCartCount)


module.exports = router



