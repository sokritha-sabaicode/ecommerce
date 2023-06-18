const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img_url: {
    type: String,
    required: true,
    default: "https://flowbite.com/docs/images/logo.svg",
  },
  description: {
    type: String,
  },
});

module.exports = CategoryModel = mongoose.model("Category", CategorySchema);
