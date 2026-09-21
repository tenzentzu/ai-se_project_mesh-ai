import { Router } from "express";
import { getAllChats, createNewChat, getChatById, deleteChat,sendChatGetReply } from "../controllers/chats.js";

const chatRouter = Router();

chatRouter.get("/chats", getAllChats);
chatRouter.post("/chats", createNewChat);
chatRouter.get("/chats/:id", getChatById);
chatRouter.delete("/chats/:id", deleteChat);
chatRouter.post("/chats/:id/messages", sendChatGetReply);

export { chatRouter };