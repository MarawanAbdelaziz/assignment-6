import express from "express";
import sequelize from "./DB/connection.js";
import commentModel from "./DB/models/comments.model.js";
import bootstrap from "./src/bootstrap.js";

const app = express();
const port = 3000;

sequelize.sync({ alter: true });
// sequelize.sync();

bootstrap(app, express);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
