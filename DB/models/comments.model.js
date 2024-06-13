// content, postId (linked to the post model), and userId (linked to the User model).

import { DataTypes } from "sequelize";
import sequelize from "../connection.js";

sequelize;
const commentModel = sequelize.define("comment", {
  content: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
});

export default commentModel;
