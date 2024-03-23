import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import appRoute from "./src/routes/auth.route.js";

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

app.use("/api/auth", appRoute);

app.listen(process.env.PORT || 8800, () => {
  connect();
  console.log("Backend running at port 8800");
});
