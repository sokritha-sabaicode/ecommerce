const express = require("express");
const router = express.Router();
const CategoryControllers = require("../controllers/categoryControllers");

// sub route
router.route("/").get(CategoryControllers.getAllCategories);

module.exports = router;
