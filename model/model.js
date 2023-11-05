 const mongoose = require("mongoose")

  const schemaUser = new mongoose.Schema({

    task: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }


  })
  const Userdb = mongoose.model('userdb', schemaUser);

  module.exports = Userdb;