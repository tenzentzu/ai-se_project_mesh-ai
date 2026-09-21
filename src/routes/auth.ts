import { Router } from "express";
import { getCurrentUser, createNewUser, userLogIn } from "../controllers/auth.js";

const authRouter = Router();

authRouter.get("/me", getCurrentUser);
authRouter.post("/register", createNewUser);
authRouter.post("/login", userLogIn);

export { authRouter };