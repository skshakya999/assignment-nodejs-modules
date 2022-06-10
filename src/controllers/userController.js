let address = require('address');




const middleApi= async function(req, res) {

    let ip = address.ip()
    let dt = new Date().toISOString().replace('T','  ').substring(0,19)
   
    
    console.log( dt+ ", "+ip+",  /middleApi")
    res.send({ msg: "This is coming from controller (handler)"})
    }





module.exports.middleApi= middleApi