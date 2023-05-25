import Movie from "../models/MovieModels.js";
import path from "path";
import crypto from "crypto";

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
  const {
    title,
    sinopsis,
    duration,
    is_show,
    normal_price,
    weekend_price,
    special_price,
    stock_ticket,
    poster,
    bg_poster,
    trailer,
    start_show,
    end_show,
    is_slider,
    status,
  } = req.body;

  if (!title) {
    return res.status(400).json({ msg: "Masukan nama film" });
  } else if (!sinopsis) {
    return res.status(400).json({ msg: "Masukan sinopsis " });
  } else if (!is_show) {
    return res.status(400).json({ msg: "Masukan show" });
  } else if (!normal_price) {
    return res.status(400).json({ msg: "masukan harga tiket" });
  } else if (!weekend_price) {
    return res.status(400).json({ msg: "masukan harga tiket" });
  } else if (!special_price) {
    return res.status(400).json({ msg: "masukan harga tiket" });
  } else if (!stock_ticket) {
    return res.status(400).json({ msg: "Masukan stok film" });
  } else if (!poster) {
    return res.status(400).json({ msg: "Masukkan durasi film" });
  } else if (!bg_poster) {
    return res.status(400).json({ msg: "Masukkan durasi film" });
  } else if (!trailer) {
    return res.status(400).json({ msg: "Masukkan durasi film" });
  } else if (!start_show) {
    return res.status(400).json({ msg: "Masukkan durasi film" });
  } else if (!end_show) {
    return res.status(400).json({ msg: "Masukkan durasi film" });
  } else if (!is_slider) {
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
        title: title,
        sinopsis: sinopsis,
        is_show: is_show,
        normal_price: normal_price,
        weekend_price: weekend_price,
        special_price: special_price,
        poster: fileName,
        bg_poster: url,
        trailer: trailer,
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
