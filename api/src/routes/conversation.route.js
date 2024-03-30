import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createConversation,
  getConversations,
  getConversation,
  updateConversation,
} from "../controllers/conversation.controllers.js";
const router = express.Router();

router.post("/", verifyToken, createConversation);
router.get("/", verifyToken, getConversations);
router.get("/:id", verifyToken, getConversation);
router.put("/:id", verifyToken, updateConversation);

export default router;
