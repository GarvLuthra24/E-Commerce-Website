const login = require('../database/models/login')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const SECRET_KEY = "ECOMMAPI"

module.exports.createNewUser =async (req,res) => {

    // console.log(req);


    let val = req.body;
    console.log(val);
    // console.log('hio')

    const salt =  await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(val.password,salt);

    // console.log(secPass)

    let newUser = new login({name: val.name , email: val.email , password: secPass})

    console.log(newUser._id);
    const token = jwt.sign({name: newUser.name , email: newUser.email , id: newUser._id}, SECRET_KEY );
    console.log(token);
    newUser.save();
    // res.send('1');
    res.status(201).json({user: newUser , token: token })
}

module.exports.logInUser = async (req,res) => {
    // let val = req.body;
    // console.log(val);


    // uemail = val.email;
    // upassword = val.password;
    
    // // console.log(uemail);
    // // console.log(upassword)




    // await login.findOne({ email: uemail})
    // .then(existingUser => {
        
    //     console.log(existingUser)
    //     if(existingUser == null){
    //         res.json({signal: 0});
    //     }
    //     else{
    //         const matchPassword = await bcrypt.compare(password , existingUser.password);

    //         res.json({signal: 1,name: existingUser.name , email: existingUser.email, user_id: existingUser._id})
    //     } 
    // })

    let val = req.body;

    const email = val.email;
    const password = val.password

    try{
        const existingUser = await login.findOne({email: email});
        if(!existingUser){
            res.json({signal: 0});
        }
        
        const matchPassword = await bcrypt.compare(password , existingUser.password);


        if(!matchPassword){
            res.json({signal:0})
        }

        const token = jwt.sign({name: existingUser.name , email: existingUser.email , id: existingUser._id}, SECRET_KEY );


        res.json({signal: 1,name: existingUser.name , email: existingUser.email, user_id: existingUser._id, token: token})


        




    }
    catch(err){
        console.log(err);
        res.json({signal:0 })
    }

 
}

