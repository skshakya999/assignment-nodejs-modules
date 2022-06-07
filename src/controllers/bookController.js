const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const bookList= async function (req, res) {

    let allBooks= await BookModel.find( ).select({bookName: 1,authorName:1,_id:0})
    res.send({book: allBooks})
}
const getBooksInYear= async function (req, res) {
    let book =req.body
    let allBooks= await BookModel.find(book) 
    res.send({books:allBooks})
}
const getParticularBooks= async function (req, res) {
    let book =req.body
    let allBooks= await BookModel.find(book) 
    res.send({books:allBooks})
}
const getXINRBooks= async function (req, res) {
    // let indianPrice = prices.indianPrice
    let allBooks= await BookModel.find({$or:[{"prices.indianPrice":{$eq:"250"}},{"prices.indianPrice":{$eq:"99"}},{"prices.indianPrice":{$eq:"200"}}]}) 
    res.send({books:allBooks})
}
const getRandomBooks= async function (req, res) {
    
    let allBooks= await BookModel.find({$or:[{pages:{$gt:300}},{stockAvailable:true}]}) 
    res.send({books:allBooks})
}



module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks
