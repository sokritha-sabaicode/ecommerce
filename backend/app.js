const express = require("express");
const app = express();
const CategoryRoutes = require("./routes/categoryRoutes");
const ProductRoutes = require("./routes/productRoutes");

// Global Middlewares

// Global Routes
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/products", ProductRoutes);

// Global Error Handler

module.exports = app;
