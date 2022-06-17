let axios = require("axios")

const getAllMems = async function(req,res){

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let mems = await axios(options);
        console.log(mems)
        let data = mems.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const CreateAllMems = async function(req,res){

    try {
        let id =req.params.template_id
        let text0 =req.params.text0
        let text1 =req.params.text1
        let uname =req.params.username
        let pass =req.params.password

        let options = {
            method: 'post',
            url: 'https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}?&text1=${text1}&username=${uname}&password=${pass}'
        }
        let mems = await axios(options);
        console.log(mems)
        let data = mems.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getAllMems=getAllMems
module.exports.CreateAllMems=CreateAllMems