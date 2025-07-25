const {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = require("express").Router();

router.route("/").post(createProduct).get(getProduct);
router.route("/:id").delete(deleteProduct).patch(updateProduct);

module.exports = router;
