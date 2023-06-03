'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Audi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Audi.init({
    audiNumber: DataTypes.INTEGER,
    audiId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Audi',
  });
  return Audi;
};