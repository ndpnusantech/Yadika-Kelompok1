import { Sequelize } from "sequelize";

const db = new Sequelize("cinemaid_db", "root", "141105", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
