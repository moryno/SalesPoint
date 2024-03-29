import express from "express";
import { createOrder, getOrders } from "../controllers/order.controllers";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.post("/:productId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;
