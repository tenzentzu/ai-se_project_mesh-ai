import { Router } from "express";
import { authRouter } from "./auth.js";
import { chatRouter } from "./chats.js";
import { docsRouter } from "./documents.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/chats", chatRouter);
router.use("/documents", docsRouter);

export default router;