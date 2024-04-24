import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./src/routes/auth.route.js";
import userRoute from "./src/routes/user.route.js";
import productRoute from "./src/routes/product.route.js";
import reviewRoute from "./src/routes/review.route.js";
import orderRoute from "./src/routes/order.route.js";
import conversationRoute from "./src/routes/conversation.route.js";
import chatRoute from "./src/routes/chat.route.js";
import cartRoute from "./src/routes/cart.router.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to SalesPointDB");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/chats", chatRoute);
app.use("/api/carts", cartRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorchate = err.chate || "Something went wrong!";

  return res.status(errorStatus).send(errorchate);
});

app.listen(process.env.PORT || 8800, () => {
  connect();
  console.log("Backend running at port 8800");
});
