import Movie from "../models/MovieModel.js";

export const getMovie = async (req, res) => {
  try {
    const response = await Movie.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieById = async (req, res) => {
  try {
    const response = await Movie.findOne({
      where: req.body.id,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createMovie = async (req, res) => {
  try {
    await Movie.create(req.body);
    res.status(201).json({ msg: "Movie Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMovie = async (req, res) => {
  try {
    await Movie.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Movie Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movie.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Movie Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
