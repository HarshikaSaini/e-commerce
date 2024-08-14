const { default: mongoose } = require("mongoose");
const Products = require("../models/productModel");

// class APIfeatures {
//     constructor(query,queryString){
//      this.query=query,
//      this.queryString=queryString

//     }

//     sorting(){}

//     pagination(){}
// }


const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find();
      res.json(products);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  createProducts: async (req, res) => {
    try {
      const {
        _id,
        title,
        price,
        discountPer,
        ratings,
        tags,
        desc,
        brand,
        sold,
        category,
        images,
      } = req.body;

      const existingProduct = await Products.findOne({ _id });
      if (existingProduct) {
        return res
          .status(500)
          .json({ msg: `Product with id ${product_id} already exists` });
      }

      const image = req.files.images;
      cloudinary.uploader.upload(image.tempFilePath, (err, result) => {
      const newProduct = new Products({
        
        title: title.toLowerCase(),
        price,
        discountPer,
        ratings,
        tags,
        desc,
        brand,
        sold,
        category,
        images: result.url,
      })
      newProduct.save();
      res.status(200).json({ msg: "product created", newProduct });
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  taggedProduct: async (req,res)=>{
    try {
      const product = await Products.findById(req.params.id).populate("tags");
      if(!product){
        res.status(400).send("Product not found");
      }
      else{
        res.send(product)
      }
    } catch (error) {
      res.status(500).send(error);
    }
       
  },

  deleteProducts: async (req, res) => {
    try {
      await Products.findByIdAndDelete(req.params.id);
      res.json({ msg: "product deleted" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateProducts: async (req, res) => {
    try {
      const {
        _id,
        title,
        price,
        discountPer,
        ratings,
        tags,
        desc,
        brand,
        
        sold,
        category,
        images,
       
      } = req.body;
      await Products.findByIdAndUpdate(
        { _id },
        {
          title,
          price,
          discountPer,
          ratings,
          tags,
          desc,
          brand,
         
          sold,
          category,
          images,
         
        }
      );

      res.json({ msg: "updated a product" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = productCtrl;
