const express = require('express');

const bodyparser = require("body-parser");


const app = express();

const mongoose = require("mongoose");
 
const user = "mongodb+srv://adu:adsadt123@cluster1.i7xzqtp.mongodb.net/"
mongoose.connect(user)
.then(()=>console.log("database is fine and running"))
.catch((err)=> " u have an error in database")

app.use(bodyparser.urlencoded({ extended : true}))


app.set("view engine", "ejs")

app.use('/',require('./routes/routes'));


app.listen(3000, ()=> { console.log(`Server is running `)});
