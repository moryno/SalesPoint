import express from "express";
import {
  createOrder,
  getOrders,
  confirm,
} from "../controllers/order.controllers.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.post("/create-payment-intent/:cartId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.put("/", verifyToken, confirm);

export default router;
