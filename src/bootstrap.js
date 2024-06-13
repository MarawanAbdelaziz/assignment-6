import commentRouter from "./modules/comments/comments.routes.js";
import postsRouter from "./modules/posts/posts.routes.js";
import usersRouter from "./modules/users/users.routes.js";

function bootstrap(app, express) {
  app.use(express.json());

  app.use("/users", usersRouter);
  app.use("/posts", postsRouter);
  app.use("/comments", commentRouter);
}

export default bootstrap;
