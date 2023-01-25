const mongoose = require('../db')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    imageURL: String
});

const product = mongoose.model('product' , productSchema);

module.exports = product



