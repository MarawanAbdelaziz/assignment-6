import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "mysql://u01elo2qfwfxygwf:qs5hiYXOvwghK9iNrwa9@bu68fqurmycrhdavkag9-mysql.services.clever-cloud.com:3306/bu68fqurmycrhdavkag9"
);

// const sequelize = new Sequelize("assignment6", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("failed to connect", error));

export default sequelize;
