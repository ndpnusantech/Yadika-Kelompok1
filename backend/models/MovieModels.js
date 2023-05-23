const Sequelize = require("sequelize");
const db = require("../config/databaseMovie");

const { DataTypes } = Sequelize;

const Movie = db.define(
  "movies",
  {
    title: DataTypes.STRING,
    sinopsis: DataTypes.TEXT,
    duration: DataTypes.STRING,
    is_show: DataTypes.BOOLEAN,
    normal_price: DataTypes.FLOAT,
    weekend_price: DataTypes.FLOAT,
    special_price: DataTypes.FLOAT,
    stok_ticket: DataTypes.INTEGER,
    poster: DataTypes.TEXT,
    bg_poster: DataTypes.TEXT,
    trailer: DataTypes.TEXT,
    start_show: DataTypes.DATE,
    end_show: DataTypes.DATE,
    is_slider: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = Movie;
