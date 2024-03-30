import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import responseError from "../utils/responseError.js";

export const createOrder = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);

    const newOrder = new Order({
      productId: product._id,
      buyerId: req.userId,
      sellerId: product.userId,
      title: product.title,
      image: product.cover,
      price: product.price,
      payment_intent: "temporary string",
    });

    const order = await newOrder.save();
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    if (orders?.length === 0)
      return next(responseError(404, "Orders not found!"));
    res.status(200).send(orders);
  } catch (error) {
    next(error);
  }
};
