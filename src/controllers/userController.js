const UserModel= require("../models/userModel")



const createUser= async function (req, res) {
    let data= req.body
   
    let createUser= await UserModel.create(data)
   
    res.send({User:createUser})

}


module.exports.createUser= createUser
