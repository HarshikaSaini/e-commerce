const mongoose = require("mongoose");
const tagSchema = new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        default:mongoose.Types.ObjectId
    },
    name:{
        type:String,
        required:true
    }
})

const tags = mongoose.model("tags",tagSchema)
module.exports = tags;