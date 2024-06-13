import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
  updateComment,
} from "./controllers/comments.controller.js";

const commentRouter = express.Router();

commentRouter.post("/", addComment);
commentRouter.get("/", getComments);
commentRouter.patch("/", updateComment);
commentRouter.delete("/", deleteComment);

export default commentRouter;
