const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
 try {
  let data = abcd.body;
  if(Object.keys(data).length===0) return xyz.status(400).send({error:"All fields are required"})
  let savedData = await userModel.create(data);
 
  xyz.send.status(201)({ msg: savedData });}
  catch(err){
    xyz.status(400).send({Error:err.message });
  }
};

const loginUser = async function (req, res) {
 try {let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, token: token });
}
  catch(err){
    xyz.send.status(400)({Error:err.message });
  }
};

const getUserData = async function (req, res) {
  try {
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.status(400).send({ status: false, msg: "Bad request" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.status(400).send({ status: false, msg: "Bad request" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(201).send({ status: true, data: userDetails });
}
catch(err){
  res.status(400).send({Error:err.message });
}

};

const updateUser = async function (req, res) {


 try {
    let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(400).send({Error:"bad request", msg:"No such user exists"});
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(201).send({ status: updatedUser, data: updatedUser });
}
catch(err){
  res.status(400).send({Error:err.message });
}
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
