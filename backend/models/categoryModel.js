const mongoose = require("mongoose");
const category = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
},{
    timestamps:true
})

const Categories = mongoose.model("Categories",category)
module.exports = Categories;