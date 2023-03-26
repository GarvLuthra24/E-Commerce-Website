const mongoose = require('../db');

const loginSchema = new mongoose.Schema({
        name:{
            type:String,
            // required:true
        },
        email:{
            type:String,
            // required:true
        },
        password:{
            type:String,
            // required: true
        },
        userCart:[{product_id: String}]
}

)

const loginModel = mongoose.model('LogInCredentials' , loginSchema)

module.exports = loginModel;