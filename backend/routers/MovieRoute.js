const express = require("express");
const { getMovies, getMovieById } = require("../controllers/MovieController");

const router = express.Router();

router.get("/movies", getMovies);
router.get("/movies/:id", getMovieById);

module.exports = router;
