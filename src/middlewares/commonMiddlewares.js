
const freeAppUser= function ( req, res, next) {

    let isFreeAppUser=req.headers.isfreeappuser
    
    if(!isFreeAppUser){
       return res.send({Error:"The request is missing a mandatory header"})
    }
    else{
        next()
    }
}



module.exports.freeAppUser= freeAppUser

