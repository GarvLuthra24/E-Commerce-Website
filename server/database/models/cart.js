const mongoose = require('../db')


const cartSchema = new mongoose.Schema({
    _id : String
});

const cart = mongoose.model('cart' , cartSchema);

module.exports = cart;