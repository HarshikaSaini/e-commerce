const router = require("express").Router();
const categoriesCtrl = require("../controllers/categoryCtrl");
const auth = require("../middleware/userAuth");
const authAdmin = require("../middleware/adminAuth");

router.route('/category')
.get(categoriesCtrl.getCategory)
.post(auth,authAdmin , categoriesCtrl.createCategory);

router.route('/category/:id')
.delete(auth,authAdmin,categoriesCtrl.deleteCategory)
.put(auth,authAdmin,categoriesCtrl.updateCategory)



module.exports = router;