// title, content, and author (linked to the User model)

import { DataTypes } from "sequelize";
import sequelize from "../connection.js";

sequelize;
const postModel = sequelize.define("post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default postModel;
