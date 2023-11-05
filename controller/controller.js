
const Userdb = require("../model/model");

exports.create = (req,resp)=>{

    if(!req.body){

        resp.status(404).send({err:" no data has been sent  "})
        return ;
    }
    let user = new Userdb({
        
        task : req.body.task,
        status :req.body.status
    })

    user
    .save(user)
    .then((data)=>{

        resp.redirect('/render')
    })
    .catch((err)=>{
      resp.status(400).send(err)
      console.log(err);
    })
}

exports.find = ( req,resp)=>{

    
    if(!req.body){

        resp.status(404).send({err:" no data has been sent  "})
        return ;
    }

    Userdb.find()

    .then((data)=>{
        resp.send(data)
    })
    .catch((err)=>{
        resp.status(404).send({err:" no data has been sent  "})
    })

}