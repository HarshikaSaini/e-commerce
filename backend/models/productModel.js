const mongoose = require("mongoose");
const product = new mongoose.Schema({

   product_id:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    discountPer:{
       type:Number,
       required:true
    },
    ratings:{
      type:  Number,
      required:true
    },
    tags:{
        type: [String],
        required:true
    },
    desc:{
        type:String,
        required:true,
        
    },
    brand:{
        type:String,
        required:true
    },
    size:{
        type:[String]
    },
    category:{
        type:String,
        required:true,
    },
    sold:{
        type:Number,
        default:0
    },
    images:{
        type:Object,
        required:true
    },
    reviews:{
        type:[
         {
            ratings:{
                type:Number,
                required:true
            },
            
            date:{
                type:Date,
                default:Date.now
            },
            reviewerName:{
                type:String,
                required:true
            }
         }
        ]
    }
    

},{
    timestamps:true
})

const Products = mongoose.model("Products" ,product )
module.exports = Products