import Movie from "../models/MovieModel2.js";
import path from "path";
import fs from "fs";
import crypto from 'crypto'

export const getMovie = async (req, res) => {
  // try {
  //   const response = await Movie.findAll();
  //   res.status(200).json(response);
  // } catch (error) {
  //   console.log(error.message);
  // }
};

export const getMovieById = async (req, res) => {
  // try {
  //   const response = await Movie.findOne({
  //     where: req.body.id,
  //   });
  //   res.status(200).json(response);
  // } catch (error) {
  //   console.log(error.message);
  // }
};



export const createMovie = async (req, res) => {
  const { name, description, location, duration, price, stock } = req.body;

  if (!name) {
    return res.status(400).json({ msg: "Masukan nama film" });
  } else if (!description) {
    return res.status(400).json({ msg: "Masukan deskripsi" });
  } else if (!location) {
    return res.status(400).json({ msg: "Masukan location" });
  } else if (!price) {
    return res.status(400).json({ msg: "masukan harga tiket" });
  } else if (!stock) {
    return res.status(400).json({ msg: "Masukan stok film" });
  } else if (!duration) {
    return res.status(400).json({ msg: "Masukkan durasi film" });
  }

  if (req.files === null)
    return res.status(400).json({ msg: "Masukan poster film" });
  const timestamp = Date.now(); // Mendapatkan timestamp saat ini
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const randomString = crypto.randomBytes(8).toString("hex"); // Menghasilkan string acak
  const fileName = `${timestamp}-${randomString}${ext}`; // Menambahkan timestapm dan string acak ke dalam nama file
  const url = `${req.protocol}://${req.get("host")}/movie-posters/${fileName}`;

  // tipe data yang di izinkan
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "invalid images" });

 
    const maxSize = 10000000; // dalam basis 10;p/
    // const maxSize = 3 * 1024 * 1024; // dalam basis 2
  if (fileSize > maxSize)
    return res.status(422).json({ msg: "image must be less than 10mb" });

  // menyimpan image ke public movie-posters
  file.mv(`./public/movie-posters/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });

    try {
      await Movie.create({
        name: name,
        description: description,
        movie_posters: fileName,
        imgUrl: url,
        location: location,
        duration: duration,
        price: price,
        stock: stock,
      });
      res.status(201).json({ msg: "Movie Created" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
};

export const updateMovie = async (req, res) => {
  // try {
  //   await Movie.update(req.body, {
  //     where: {
  //       id: req.params.id,
  //     },
  //   });
  //   res.status(200).json({ msg: "Movie Updated" });
  // } catch (error) {
  //   console.log(error.message);
  // }
};

export const deleteMovie = async (req, res) => {
  // try {
  //   await Movie.destroy({
  //     where: {
  //       id: req.params.id,
  //     },
  //   });
  //   res.status(200).json({ msg: "Movie Deleted" });
  // } catch (error) {
  //   console.log(error.message);
  // }
};
