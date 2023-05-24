import express from "express";
import {
  createMovie,
  deleteMovie,
  getMovie,
  getMovieById,
  updateMovie,
} from "../controllers/MovieController.js";

const router = express.Router();

router.get("/movie", getMovie);
router.get("/movie/:id", getMovieById);
router.post("/movie", createMovie);
router.patch("/movie/:id", updateMovie);
router.delete("/movie/:id", deleteMovie);

export default router;
