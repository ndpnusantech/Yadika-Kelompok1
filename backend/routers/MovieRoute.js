const express = require("express");
const {
  createMovie,
  deleteMovie,
  getMovie,
  getMovieById,
  updateMovie,
} = require("../controllers/MovieController.js");

const router = express.Router();

router.get("/movies", getMovie);
router.get("/movies/:id", getMovieById);
router.post("/movies", createMovie);
router.patch("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);

module.exports = router;
