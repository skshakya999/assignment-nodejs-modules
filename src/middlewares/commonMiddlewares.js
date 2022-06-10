
const middle1= function ( req, res, next) {
    console.log("This is Middle 1")
    next()
}

const middle2= function ( req, res, next) {
    console.log("This is middle 2")
    next()
}



module.exports.middle1= middle1
module.exports.middle2= middle2

