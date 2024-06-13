import express from "express";
import {
  addPost,
  deletePost,
  getPosts,
  getSpecificPost,
  updatePost,
} from "./controllers/posts.controller.js";

const postsRouter = express.Router();

postsRouter.post("/", addPost);
postsRouter.get("/", getPosts);
postsRouter.get("/specificPost", getSpecificPost);
postsRouter.patch("/", updatePost);
postsRouter.delete("/", deletePost);

export default postsRouter;
