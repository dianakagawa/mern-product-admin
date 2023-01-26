const Product = require("../models/product.model");

// console.log(Product);
module.exports.createProduct = (req, res) => {
  const {title, price, description} = req.body;
  console.log(req.body);

  Product.create({
    title,
    price,
    description,
  })
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};
