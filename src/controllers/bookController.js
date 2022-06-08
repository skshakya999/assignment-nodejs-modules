
const BookModel= require("../models/bookModel")
const UserModel= require("../models/userModel")


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    if(!author_id) return res.send("Author is is mandetory")
    res.send({msg: savedData})
}



const getChetanBhagatBook= async function (req, res) {
    let auth = req.body
    let author= await UserModel.findOne(auth).select({author_id:1,_id:0})
   
    let book= await BookModel.find(author)
    
    res.send({msg: book})
}
const getBookPrice= async function (req, res) {
    
    let author= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
   
   
   let a= author.map(arr)
    function arr(id){
        return id
    }
    
    res.send({msg: authorName})
}
module.exports.createBook= createBook
module.exports.getBookPrice= getBookPrice

module.exports.getChetanBhagatBook= getChetanBhagatBook