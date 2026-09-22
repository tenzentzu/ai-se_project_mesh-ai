import { Router } from "express";
import { getAllChats, createNewChat, getChatById, deleteChat,sendChatGetReply } from "../controllers/chats.js";

const chatRouter = Router();

chatRouter.get("/", getAllChats);
chatRouter.post("/", createNewChat);
chatRouter.get("/:id", getChatById);
chatRouter.delete("/:id", deleteChat);
chatRouter.post("/:id/messages", sendChatGetReply);

export { chatRouter };