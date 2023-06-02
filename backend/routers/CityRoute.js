const express = require("express");
const {
  createCity,
  getCity,
  getCityById,
  deleteCity,
} = require("../controllers/CityController");

const route = express.Router();

route.post("/city", createCity);
route.get("/city", getCity);
route.get("/city/:id", getCityById);
route.delete("/city/:id", deleteCity);

module.exports = route;
