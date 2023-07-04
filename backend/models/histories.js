"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Histories.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Histories",
    }
  );
  return Histories;
};
