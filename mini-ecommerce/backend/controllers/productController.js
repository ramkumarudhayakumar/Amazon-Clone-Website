const productModel = require("../models/productModel");

//getProduct api /api/v1/products
exports.getProducts = async (req, res, next) => {
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await productModel.find(query);

  res.json({
    message: "true",
    products,
  });
};

//getSingleProduct api /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json({
      message: "true",
      product,
    });
  } catch (error) {
    res.status(404).json({
      message: "true",
      product: "Unable to get product at that ID",
    });
  }
};
