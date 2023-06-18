const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productControllers");

// sub route
router.route("/").get(ProductController.getAllProducts);

module.exports = router;