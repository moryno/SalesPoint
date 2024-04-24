import Cart from "../models/cart.model.js";
import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import Stripe from "stripe";

export const createOrder = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_KEY);

  try {
    const cart = await Cart.findById(req.params.cartId);
    const cartObject = await Promise.all(
      cart?.products?.map(async (product) => {
        const prod = await Product.findById(product.productId);
        return { ...prod.toObject(), quantity: product.quantity };
      })
    );
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount:
        cartObject.reduce((acc, item) => acc + item.price * item.quantity, 0) *
        100,
      currency: "KES",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    const products = [];

    for (const item of cartObject) {
      products.push({
        productId: item._id,
        title: item.title,
        image: item.cover,
        price: item.price,
        quantity: item.quantity,
      });
    }

    // Create Order
    const newOrder = new Order({
      buyerId: req.userId,
      sellerId: cartObject[0].userId,
      amount: cartObject.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      products: products,
      payment_intent: paymentIntent.id,
    });

    // Update product sales
    await Promise.all(
      cart?.products?.map(async (product) => {
        await Product.findByIdAndUpdate(product.productId, {
          $inc: { sales: product.quantity },
        });
      })
    );

    await newOrder.save();

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (error) {
    next(error);
  }
};

export const confirm = async (req, res, next) => {
  try {
    await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};
