let axios = require("axios")

let getWetherData = async function (req, res) {

    try {
        let citys = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        cityArray =[]
        
        
        
       for(let i=0;i<citys.length;i++){
        let obj = {city:citys[i]}
        console.log(obj)
        var options = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${citys[i]}&appid=e6a1eb6f7d31b1d11f819917933922f0`
        }
        let result = await axios(options)
        obj.temp = result.data.main.temp
        cityArray.push(obj)
       }

       let sortCity = cityArray.sort( function(a,b){return a.temp - b.temp})
       
        console.log(sortCity)
        res.status(200).send({ data:sortCity })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWetherData=getWetherData