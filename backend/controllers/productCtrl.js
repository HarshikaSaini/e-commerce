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


    
    getProducts: async(req,res) =>{
        try {
            const products = await Products.find()
             res.json(products)
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },

    createProducts:  async(req,res) =>{
        try {
        
            const products = req.body; // Expecting an array of products
            if (!Array.isArray(products)) {
            return res.status(400).json({ msg: "Data should be an array of products" });
            }

          const newProducts = [];

          for (const productData of products) {
            const { product_id, title, price,discountPer,ratings,tags,desc,brand,size,sold, category,images,reviews } = productData;
            
            const existingProduct = await Products.findOne({ product_id });
            if (existingProduct) {
                return res.status(500).json({ msg: `Product with id ${product_id} already exists` });
            }



            const newProduct = new Products({
                product_id, title:title.toLowerCase(), price,discountPer,ratings,tags,desc,brand,size,sold, category,images,reviews
            });
            await newProduct.save();
            newProducts.push(newProduct);
        }
            res.json({msg:"product created", newProducts})

        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },

    deleteProducts:  async(req,res) =>{
        try {
         
            await Products.findByIdAndDelete(req.params.id);
            res.json({msg:"product deleted"})
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },

    updateProducts:  async(req,res) =>{
        try {
         const {
            product_id, title, price,discountPer,ratings,tags,desc,brand,size,sold, category,images,reviews}  = req.body;
         await Products.findByIdAndUpdate({_id:req.params.id},{
             title, price,discountPer,ratings,tags,desc,brand,size,sold, category,images,reviews
         })

         res.json({msg:"updated a product"});
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    }


}
 module.exports = productCtrl 