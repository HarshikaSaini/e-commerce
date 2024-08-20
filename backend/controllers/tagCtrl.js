const Tags = require("../models/tagModel");
const Product = require("../models/productModel");

const tagCtrl = {
  getTags: async(req,res) =>{
    try {
        const data = await Tags.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
  },


  // deleteProductTag : async(req, res) =>{
  //   try {
      
  //     const product = await Product.findById(req.params.id);
  //     if(!product) return res.status(400).send("no product found in product docs")
  //        const tagId = req.body.tagId;
  //        if(!tagId) return res.status(400).send("no tag found in tag docs")
  //         const tagIndex = product.tags.indexOf(tagId)
  //         if(tagIndex === -1) return res.status(400).send("Tag not found in product")
  //           await  Tags.findByIdAndDelete(tagId)
  //           product.tags.splice(tagIndex,1)
  //           await product.save();  
  //           res.status(200).send("tag successfully deleted from product and docs")
  //   } catch (error) {
  //     res.status(500).send(error.message);
  //   }
  // }

  
}

module.exports = tagCtrl