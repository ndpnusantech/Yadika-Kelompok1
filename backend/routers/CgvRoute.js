const express = require("express");
const {
  createCgv,
  getCgv,
  getCgvById,
  deleteCgv,
} = require("../controllers/CgvController");

const route = express.Router();

route.post("/cgv", createCgv);
route.get("/cgv", getCgv);
route.get("/cgv/:id", getCgvById);
route.delete("/cgv/:id", deleteCgv);

module.exports = route;
