const router = require("express").Router();
const tagController = require("../controllers/tagCtrl");

router.route("/tag")
.get(tagController.getTags)

router.route("/products/:id/tags")
.post(tagController.createProductTag)
.delete(tagController.deleteProductTag)


module.exports = router