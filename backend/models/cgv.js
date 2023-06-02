"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cgv extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cgv.init(
    {
      cityId: DataTypes.STRING,
      cgv: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cgv",
    }
  );
  return Cgv;
};
