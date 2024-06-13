import express from "express";
import {
  login,
  logout,
  registration,
  specificUserAndPost,
} from "./controllers/users.controllers.js";

const usersRouter = express.Router();

usersRouter.post("/", registration);
usersRouter.get("/", login);
usersRouter.get("/logout", logout);
usersRouter.get("/specificUserAndPost", specificUserAndPost);

export default usersRouter;
