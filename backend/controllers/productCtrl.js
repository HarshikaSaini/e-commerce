const  mongoose  = require("mongoose");
const Products = require("../models/productModel");
const cloudinary = require ("../utils/cloudinary")
const Category = require("../models/categoryModel")
const Tags = require("../models/tagModel");
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
      const products = await Products.find()
        .populate('category',"name")
        .populate("tags","name")
      res.json(products);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  createProducts: async (req, res) => {
    try {
      const {
        title,
        price,
        discountPer,
        ratings,
        tags,
        desc,
        brand,
        sold,
        category,
      } = req.body;
      

      let parsedTags = [];
      if(tags){
        parsedTags = JSON.parse(tags)
      }


      let tagIDs = [];
      if(parsedTags && Array.isArray(parsedTags)){
        tagIDs = await Promise.all(parsedTags.map(async (tagName)=>{
          let existingTag = await Tags.findOne({name:tagName.toLowerCase()});
          if(existingTag) return  existingTag._id ;
          const newTag = new Tags({name:tagName.toLowerCase()});
          const savedTag = await newTag.save();
          return existingTag._id ;
        }))
      }



      const categoryName = await  Category.findOne({name:category});
      // console.log(categoryName._id)
      if(!categoryName._id) return res.status(400).send("no category found")
    
      const imageFiles = req.files.images;// getting image array
      const imagePromise = imageFiles.map(image => 
        cloudinary.uploader.upload(image.tempFilePath));// mapping all images to upload

      const uploadResult = await Promise.all(imagePromise); // wait till all images are uploaded
      
      const images = uploadResult.map(result => ({
        url:result.secure_url,
        public_id:result.public_id,
        original_filename: result.original_filename
      }));

      const newProduct = new Products({
        title: title.toLowerCase(),
        price,
        discountPer,
        ratings,
        tags:tagIDs,
        desc,
        brand,
        sold,
        category : categoryName._id,
        images,
      });
      await newProduct.save();
      res.status(200).json({ msg: "product created", newProduct });
    } catch (error) {
      return res.status(500).json({ msg:error.message });
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
