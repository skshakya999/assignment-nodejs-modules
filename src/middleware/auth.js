const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const middleware = async function(req, res, next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token is not present" });
  
    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
  
    let decodTok = decodedToken.userId
    let userId = req.params.userId;

    if(decodTok!=userId) return res.send({status:false,msg:"Invalid user loggedIn"})
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }
    next()
}

module.exports.middleware=middleware