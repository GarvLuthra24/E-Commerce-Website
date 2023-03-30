const login = require('../database/models/login')

module.exports.createNewUser =async (req,res) => {

    // console.log(req);


    let val = req.body;
    console.log(val);
   


    let newUser = new login({name: val.name , email: val.email , password: val.password})
    newUser.save();
    res.send('1');
}

module.exports.logInUser = async (req,res) => {
    let val = req.body;
    console.log(val);

    uemail = val.email;
    upassword = val.password;
    
    // console.log(uemail);
    // console.log(upassword)




    await login.findOne({ email: uemail, password: upassword})
    .then(existingUser => {
        
        console.log(existingUser)
        if(existingUser == null){
            res.json({signal: 0});
        }
        else{
            res.json({signal: 1,name: existingUser.name , email: existingUser.email, user_id: existingUser._id})
        } 
    })

 
}

