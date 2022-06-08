const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")


const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    if(!author_id) return res.send("Author is is mandetory")
    res.send({msg: savedData})
}


const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const getAuthorData= async function (req, res) {
    let auth = req.body
    let author= await UserModel.find(auth).select({author_id:1,_id:0})
    let author_name= await UserModel.find(auth).select({author_name:1,_id:0})
   
    let book= await BookModel.findOneAndUpdate({author}, {$inc:{price:100}}).
    res.send({msg: book})
}



module.exports.createAuthor= createAuthor
module.exports.getUsersData= getUsersData
module.exports.getAuthorData= getAuthorData