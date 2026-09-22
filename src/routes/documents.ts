import { Router } from "express";
import { uploadDoc, getDocsForCurrentUser, getDocById, deleteDoc } from "../controllers/documents.js";

const docsRouter = Router();

docsRouter.post("/", uploadDoc);
docsRouter.get("/", getDocsForCurrentUser);
docsRouter.get("/:id", getDocById);
docsRouter.delete("/:id", deleteDoc);

export { docsRouter };