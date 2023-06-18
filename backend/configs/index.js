const dotenv = require("dotenv");
const path = require("path");

if (process.env.NODE_ENV.trim() != "production") {
  dotenv.config({ path: path.resolve(__dirname, ".env.dev") });
} else {
  dotenv.config({ path: path.resolve(__dirname, ".env.prod") });
}
module.exports = {
  DATABASE_URL: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ecommerce-test.vfqecgl.mongodb.net/?retryWrites=true&w=majority`,
  PORT: process.env.PORT || 6000,
};
