// import Product from '../../database/models/product.js'
const Product = require('../database/models/product')
const Cart = require('../database/models/cart')
const User = require('../database/models/login')

module.exports.getProductList = async (req , res) => {
    const allItems = await Product.find()

    res.json(allItems)
    // res.send('1 ')
}


module.exports.getAddToCart = async (req , res) => {


    await User.findOne({_id: req.query.user_id})
    .then(userData => {
        console.log(userData)
        if(!userData.userCart.includes(req.query.product_id)){
            userData.userCart.push(req.query.product_id)
            let newCartItem = new User(userData);
            
            User.findOneAndDelete({_id: req.query.user_id})
            newCartItem.save();
            console.log('product added successfully')
            res.send('1')
        }
        else{
            res.send('0');
        }
      
    })
    .catch(err => {
        console.log(err)
        res.send('-1')
    })

 
}

module.exports.searchForCartItems = async( req, res) => {
    
    const user = await User.findOne({_id: req.query.user_id})

    const cartItems =  user.userCart
    console.log(cartItems)
    
    let findProducts = [];

            
    // console.log('search begins for item')

    for(let i of cartItems){
        let foundItem = await Product.find({_id: i})
        // console.log(foundItem)
        findProducts.push(foundItem);
    }

    res.json(findProducts)


}

module.exports.getCartItems = async (req , res) => {
    console.log('user request to view cart items....')

    // send array of id so that api returns the product list
    
}


module.exports.deleteCartItems = async (req,res) => {

    await User.findOne({_id: req.query.user_id})
    .then(userData => {
        // console.log(userData)
        console.log(userData)
        if(userData.userCart.includes(req.query.product_id)){
            console.log(userData.userCart)
            const a =  userData.userCart.filter((i) => {
                return i != req.query.product_id
            })
            // console.log(a)
            userData.userCart = a;
            // console.log(userData.userCart)
            let newCartItem = new User(userData);
            
            User.findOneAndDelete({_id: req.query.user_id})
            newCartItem.save();
            console.log('product deleted successfully')
            res.send('1')
        }
        else{
            res.send('0');
        }
      
    })
    .catch(err => {
        console.log(err)
        res.send('-1')
    })









}

module.exports.getCartCount = async(req , res) => {
    await User.findOne({_id: req.query.user_id})
    .then(userData => {
        res.send(`${userData.userCart.length}`)
    })
    .catch(err => {
        console.log(err)
        res.send('-1')
    })

}

