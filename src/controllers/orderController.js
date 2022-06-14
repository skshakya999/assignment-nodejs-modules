const { count } = require("console")
const OrderModel= require("../models/orderModel")
const ProductModel = require("../models/productModel")
const UserModel= require("../models/userModel")

const createOrder= async function (req, res) {
    let data = req.body
    let uId = data.userId
    let pId = data.productId
    let freeApp = req.headers.isfreeappuser


    let userID = UserModel.findById(uId)
    let productID = ProductModel.findById(pId)
    


    if( userID ==null || productID ==null){
        return res.send({Error: 'User Id and product Id are mandatory'})
    }
    console.log(freeApp)
    if(freeApp=="true"){
        let createorder= await OrderModel.create(data)
       

        let setTrue = await OrderModel.findOneAndUpdate({userId:uId,productId:pId}, {$set:{isFreeAppUser:true, amount:0}})
        console.log(setTrue)
        res.send({data:setTrue})
    }
    
    else{
        let uBalance = await UserModel.findById(uId).select({ balance:1, _id:0})
        let productPrice = await ProductModel.findById(pId).select({ price:1, _id:0})
        let bal=[uBalance]
        let balanc=JSON.stringify(bal[0].balance)
        let mainBal=JSON.parse(balanc)

        let price = [productPrice]
        let priceJson = JSON.stringify(price[0].price)
        let mainPrice = JSON.parse(priceJson)
        let diff = mainBal - mainPrice
        if(diff>=0){
            let updatebalance = await UserModel.findByIdAndUpdate(uId, {$set:{balance:diff}})
            let createorder= await OrderModel.create(data)

        }
        else{
            return res.send({Error:"Insuffucient balance"})
        }
        console.log(diff)

        res.send({data:uBalance})
    }

    
}

module.exports.createOrder= createOrder
