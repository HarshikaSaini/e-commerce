const mongoose = require("mongoose");
const product = new mongoose.Schema({
    _id:{
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId
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
    tags:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"tags"
       }
    ],
    desc:{
        type:String,
        required:true,
        
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        re:"Categories",
        required:true,
    },
    sold:{
        type:Number,
        default:0
    },
    images:{
        type:Object,
        required:true
    }
    // reviews:{
    //     type:[
    //      {
    //         ratings:{
    //             type:Number,
    //             required:true
    //         },
            
    //         date:{
    //             type:Date,
    //             default:Date.now
    //         },
    //         reviewerName:{
    //             type:String,
    //             required:true
    //         }
    //      }
    //     ]
    // }
    

},{
    timestamps:true
})

const Products = mongoose.model("Products" ,product )
module.exports = Products