const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

//createOrder api /api/v1/order
exports.createOrder = async (req, res, next) => {
  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce(
      (result, items) => result + items.product.price * items.qty,
      0
    )
  ).toFixed(2);
  const status = "pending";
  const order = await orderModel.create({ cartItems, amount, status });

  //Update product quantity
  cartItems.forEach(async (item) => {
    const product = await productModel.findById(item.product._id);
    product.stock = product.stock - item.qty;
    await product.save();
  });

  res.json({
    message: "true",
    order,
  });
};
