const jwt = require("jsonwebtoken")
const SECRET_KEY = "ECOMMAPI"




const auth  = (req, res, next) => {

    console.log('starting authorization')

    try{
        let token = req.header.token || req.body.token || req.query.token || req.params.token;
        console.log(token);

        if(token){
            // token = token.split(" ")[1];
           
            let user = jwt.verify(token , SECRET_KEY);
            console.log(user);
            // req.query.user_id = user.user_id
            req.user_id = user.id;
            console.log(req.user_id);
        }
        else{
            res.status(401).json({message: "Unauthorized User"});
        }
        next();
    }

    catch(err){
        console.log(err)
        res.status(401).json({message: "Unauthorized User"});
    }

}

module.exports = auth;

