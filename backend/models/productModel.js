const mongoose = require("mongoose");
const product = new mongoose.Schema({
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
        ref:"Categories",
        required:true
    },
    sold:{
        type:Number,
        default:0
    },
    images:[{
       url:{
        type:String,
        required:true
      },
      public_id:{
        type:String,
        required:true
      },
      original_filename:{
        type:String,
        required:true
      }
    }],
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