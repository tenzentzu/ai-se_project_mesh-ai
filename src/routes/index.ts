import { Router } from "express";
import { authRouter } from "./auth.js";
import { chatRouter } from "./chats.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/chats", chatRouter);

export default router;