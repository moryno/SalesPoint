import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "../controllers/product.controllers.js";
const router = express.Router();

router.post("/", verifyToken, createProduct);
router.delete("/:id", verifyToken, deleteProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", verifyToken, createProduct);
export default router;
