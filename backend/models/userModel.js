const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
        
    },
    role:{
        type:Number,
        default:0
    },
    houseNumber:{
        type:String,
        require
    },
    city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      phone:{
        type:Number,
        required:true
      },
    cart:{
        type:Array,
        default:[]
    }
},{
    timestamps:true
})

const users = mongoose.model("users",userSchema )
module.exports = users;