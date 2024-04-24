import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    products: [
      {
        productId: {
          type: String,
          require: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        image: {
          type: String,
          required: false,
        },
        price: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
      },
    ],

    sellerId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
