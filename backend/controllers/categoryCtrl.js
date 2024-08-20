const Categories = require("../models/categoryModel");

const categoriesCtrl = {
  getCategory: async (req, res) => {
    try {
      const categories = await Categories.find();
      res.json(categories);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Categories.findOne({ name });

      if (category)
        return res.status(400).json({ msg: "category already exisit" });

      const newCategory = new Categories({ name });
      await newCategory.save();
      res.json({ msg: "created a category" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  deleteCategory: async (req,res)=>{
    try {
        const {name} = req.body
        await Categories.findOne({name})
        res.json({msg:"deleted a category"});
        
     

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
  },

  updateCategory: async (req, res)=>{
    try {
        const {name} = req.body
        await Categories.findOne({name})
        res.json({msg:"updated the category"})
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
  }

};
module.exports = categoriesCtrl;
