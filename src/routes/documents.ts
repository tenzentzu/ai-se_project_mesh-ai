import { Router } from "express";
import { uploadDoc, getDocsForCurrentUser, getDocById, deleteDoc } from "../controllers/documents.js";

const docsRouter = Router();

docsRouter.post("/documents", uploadDoc);
docsRouter.get("/documents", getDocsForCurrentUser);
docsRouter.get("/documents/:id", getDocById);
docsRouter.delete("/documents/:id", deleteDoc);

export { docsRouter };