// import Product from '../../database/models/product.js'
const Product = require('../database/models/product')
const Cart = require('../database/models/cart')

module.exports.getProductList = async (req , res) => {
    // const product = new Product({name:'silence'})
    // await product.save();

    const allItems = await Product.find()

    // console.log(allItems)
    
    // const product =  Product.find();
    // console.log(product)

    // const allItems = await Product.find({name:'garv'})
    // console.log(allItems._conditions.name)
    // const string = JSON.stringify(allItems._conditions)
    // console.log(string)
    res.json(allItems)
    // console.log(myJSON)

    // res.send(stringItem.json())

    // res.send(eval(stringItem))

}


module.exports.getAddToCart = async (req , res) => {
    // console.log('message get check')
    // console.log(req.query);

    const newCart = await Cart.find({_id: req.query.product_id})
    // console.log(newCart)
    if(newCart.length == 0){
        
    let newCartItem = await new Cart({_id: req.query.product_id})
        // console.log('adding product to the cart...')
        // console.log(newCartItem);
        await newCartItem.save()
        // console.log('product added successfully')
    }
    else{
        // console.log('Item already exists in Cart!!')
    }

}

module.exports.searchForCartItems = async( req, res) => {
    
 
    
    const cartItems =  await Cart.find()
    // console.log(cartItems)
    
    let findProducts = [];

            
    // console.log('search begins for item')

    for(let i of cartItems){
        let foundItem = await Product.find({_id: i._id})
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
    // making a GET request here to delete the cart item
    // console.log('removing the cart item......')
    const productId = req.query.product_id;
    // console.log(productId)

    await Cart.deleteOne({_id : productId })
    .then(() => {
        // console.log('Item deleted Successfully')
    })
    .catch((err) => console.log(err))






}

