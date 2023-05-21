const express = require('express')
const router = express.Router();
const shopController = require('../controller/shop')
const LoginController = require('../controller/login')
const auth = require('../controller/auth')


router.post('/login' , LoginController.logInUser)
router.post('/login/new-user', LoginController.createNewUser)
router.get('/' ,shopController.getProductList)
router.get('/addToCart' , auth ,shopController.getAddToCart)
router.get('/cart',auth, shopController.searchForCartItems)
router.get('/cart/removeItem',auth,shopController.deleteCartItems)
router.get('/cart/itemCount' , shopController.getCartCount)


module.exports = router



