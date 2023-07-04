const {
  getHistory,
  getHistoryById,
} = require("../controllers/HistoryController");

const route = require("express").Router();

route.get("/history", getHistory);
route.get("/history/:id", getHistoryById);

module.exports = route;
