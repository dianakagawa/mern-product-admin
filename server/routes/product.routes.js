const ProductController = require("../controllers/product.controllers");

module.exports = function (app) {
  app.post("/api/products", ProductController.createProduct);
};
