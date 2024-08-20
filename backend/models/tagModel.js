const mongoose = require("mongoose");
const tagSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
})

const tags = mongoose.model("tags",tagSchema)
module.exports = tags;