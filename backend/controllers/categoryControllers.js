const CategoryModel = require("../database/models/CategoryModel");

exports.getAllCategories = async (req, res, next) => {
  try {
    // Step 1: Fetch All Categories from Database - Model Category
    const categories = await CategoryModel.find();
    // Step 2: Send Response To Client (Server Frontend)
    res.status(200).json({
      status: "success",
      data: categories,
    });
  } catch {
    // Send Error Message
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
