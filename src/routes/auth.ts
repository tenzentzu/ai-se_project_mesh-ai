import { Router } from "express";
import { getCurrentUser } from "../controllers/auth.js";

const usersRouter = Router();

usersRouter.get("/", getCurrentUser);

export { usersRouter };