const sequelize = require("../models/index").sequelize;
const { DataTypes } = require("sequelize");

// models
const Movie = require("../models/movie.js")(sequelize, DataTypes);
const City = require("../models/city.js")(sequelize, DataTypes);
const Cgv = require("../models/cgv.js")(sequelize, DataTypes);
const Seat = require("../models/seat")(sequelize, DataTypes);
const Audi = require("../models/audi")(sequelize, DataTypes);
const User = require("../models/user")(sequelize, DataTypes);
const Ticket = require("../models/ticket")(sequelize, DataTypes);
const History = require("../models/histories")(sequelize, DataTypes);
const Transaction = require("../models/transactions")(sequelize, DataTypes);

// this realtion for city and cgv
City.hasMany(Cgv, { foreignKey: "cityId" });
Cgv.belongsTo(City, { foreignKey: "cityId" });

// this relation for cgv and movie
Cgv.hasMany(Movie, { foreignKey: "cgvId" });
Movie.belongsTo(Cgv, { foreignKey: "cgvId" });

// this relation for cgv and audi
Cgv.hasMany(Audi, { foreignKey: "cgvId" });
Audi.belongsTo(Cgv, { foreignKey: "cgvId" });

// this relation for audi and seat
Audi.hasMany(Seat, { foreignKey: "audiId" });
Seat.belongsTo(Audi, { foreignKey: "audiId" });

// this relation for user and history
User.hasOne(History, { foreignKey: "userId" });
History.belongsTo(User, { foreignKey: "userId" });

// this relation for transaction and any
User.hasOne(Transaction, { foreignKey: "userId" });
Movie.hasOne(Transaction, { foreignKey: "movieId" });
Audi.hasMany(Transaction);

module.exports = { City, Cgv, Movie, Seat, Audi, User, Ticket, History };
