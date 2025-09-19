const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chat.controller");
const { authMiddleware } = require("../middleware/auth.middleware.js");

router.get("/", authMiddleware, chatController.getAllChats);
router.get("/new", authMiddleware, chatController.showNewForm);
router.post("/", authMiddleware, chatController.createChat);
router.get("/:id/edit", authMiddleware, chatController.showEditForm);
router.put("/:id", authMiddleware, chatController.updateChat);
router.delete("/:id", authMiddleware, chatController.deleteChat);

module.exports = router;
