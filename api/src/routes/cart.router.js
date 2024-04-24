import express from "express";
import { verifyToken, verifyTokenAndAuthorization } from "../middleware/jwt.js";
import {
  createCart,
  deleteCart,
  getCart,
  updateCart,
} from "../controllers/cart.controllers.js";

const router = express.Router();

router.post("/", verifyToken, createCart);
router.get("/:userId", verifyTokenAndAuthorization, getCart);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

export default router;
