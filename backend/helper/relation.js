const sequelize = require("../models/index").sequelize;
const { DataTypes } = require("sequelize");

const Movie = require("../models/movie.js")(sequelize, DataTypes);
const City = require("../models/city.js")(sequelize, DataTypes);
const Cgv = require("../models/cgv.js")(sequelize, DataTypes);

// this realtion for city and cgv
City.hasMany(Cgv, { foreignKey: "cityId" });
Cgv.belongsTo(City, { foreignKey: "cityId" });

// this relation for cgv and movie
Cgv.hasMany(Movie, { foreignKey: "cgvId" });
Movie.belongsTo(Cgv, { foreignKey: "cgvId" });

module.exports = { City, Cgv, Movie };
