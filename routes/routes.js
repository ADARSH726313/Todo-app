 const express = require("express");
 const route = express.Router();
 const axios = require("axios");
 const controller = require('../controller/controller');

route.get("/",(req,resp)=>{

    

    resp.render('index');
})
route.get("/render",(req,resp)=>{

    axios.get('http://localhost:3000/api/users')
    .then((value)=>{
        resp.render('render',{val:value.data});
    })
    .catch((err)=>{
        resp.status(404).send("u made an error in routes")
    })

    
})


//

route.post("/api/users",controller.create),
route.get("/api/users",controller.find)

module.exports = route ;