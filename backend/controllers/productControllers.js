const ProductModel = require("../database/models/ProductModel");
const CategoryModel = require("../database/models/CategoryModel");
const mongoose = require("mongoose");

//http://localhost:5000/api/v1/products
// Get All Products based on the Category, Price, ...
exports.getAllProducts = async (req, res, next) => {
  try {
    // step 1: Get the category ID
    const categoryId = req.query.categoryId;
    let products;

    // step 2: process: fetch all products based on category
    if (categoryId) {
      // step 2.1: Check if category id is valid
      const isValidId = mongoose.Types.ObjectId.isValid(categoryId);
      if (!isValidId) {
        return res.status(404).json({
          status: "fail",
          message: `This category ${categoryId} is not exist`,
        });
      }

      // step 2.2: Check if category id is exist
      const isCategoryExist = await CategoryModel.findById(categoryId);
      console.log("isCategoryExist", isCategoryExist);
      if (!isCategoryExist) {
        return res.status(404).json({
          status: "fail",
          message: `This category ${categoryId} is not exist`,
        });
      }

      // step 2.2: Find products based on the category id provided
      products = await ProductModel.find({
        category: new mongoose.Types.ObjectId(categoryId),
      });
      console.log("product", categoryId);
    }
    // step 3: process: fetch all products
    else {
      products = await ProductModel.find();
    }

    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (err) {
    // Send Error Message
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
