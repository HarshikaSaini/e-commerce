const router = require("express").Router();
const tagController = require("../controllers/tagCtrl");

router.route("/tag")
.get(tagController.getTags)

// router.route("/products/tags:id")   //it is product id 
// .post(tagController.createProductTag)
// .delete(tagController.deleteProductTag)


module.exports = router