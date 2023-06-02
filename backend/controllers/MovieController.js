const path = require("path");
const crypto = require("crypto");

const { Cgv, Movie } = require("../helper/relation");

exports.getMovie = async (req, res) => {
  try {
    const response = await Movie.findAll();
    res.status(200).json({ data: response });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const response = await Movie.findOne({
      where: req.body.id,
      include: [{ model: Cgv }],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.createMovie = async (req, res) => {
  const {
    title,
    sinopsis,
    duration,
    is_show,
    normal_price,
    weekend_price,
    special_price,
    stok_ticket,
    trailer,
    start_show,
    end_show,
    is_slider,
    status,
    cgvId,
  } = req.body;

  // if (!title) {
  //   return res.status(400).json({ msg: "Masukan nama film" });
  // } else if (!sinopsis) {
  //   return res.status(400).json({ msg: "Masukan sinopsis " });
  // } else if (!is_show) {
  //   return res.status(400).json({ msg: "Masukan is show" });
  // } else if (!normal_price) {
  //   return res.status(400).json({ msg: "masukan harga tiket normal" });
  // } else if (!weekend_price) {
  //   return res.status(400).json({ msg: "masukan harga tiket weekend " });
  // } else if (!special_price) {
  //   return res.status(400).json({ msg: "masukan harga tiket sepesial" });
  // } else if (!stok_ticket) {
  //   return res.status(400).json({ msg: "Masukan stok tiket film" });
  // } else if (!trailer) {
  //   return res.status(400).json({ msg: "Masukkan link trailer film" });
  // }
  if (req.files === null || req.files.length < 2) {
    return res
      .status(400)
      .json({ msg: "Masukkan poster dan bacground poster" });
  }

  const posterFile = req.files.poster; // File poster
  const bgPosterFile = req.files.bg_poster; // File bgPosterFile

  // Proses upload poster file
  const posterTimestamp = Date.now();
  const posterExt = path.extname(posterFile.name);
  const posterRandomString = crypto.randomBytes(8).toString("hex");
  const posterFileName = `${posterTimestamp}-${posterRandomString}${posterExt}`;
  const posterUrl = `${req.protocol}://${req.get(
    "host"
  )}/assets/posters/${posterFileName}`;
  const posterPath = `./public/assets/posters/${posterFileName}`;

  // Proses upload bg poster file
  const bgPosterTimestamp = Date.now();
  const bgPosterExt = path.extname(bgPosterFile.name);
  const bgPosterRandomString = crypto.randomBytes(8).toString("hex");
  const bgPosterFileName = `${bgPosterTimestamp}-${bgPosterRandomString}${bgPosterExt}`;
  const bgPosterUrl = `${req.protocol}://${req.get(
    "host"
  )}/assets/bgPosters/${bgPosterFileName}`;
  const bgPosterPath = `./public/assets/bgPosters/${bgPosterFileName}`;

  // tipe data yang di izinkan
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(posterExt.toLowerCase()))
    return res.status(422).json({ msg: "invalid poster image" });

  if (!allowedType.includes(bgPosterExt.toLowerCase()))
    return res.status(422).json({ msg: "invalid bg poster image" });

  const maxSize = 10000000; // dalam basis 10, 10MB

  if (posterFile.size > maxSize) {
    return res.status(422).json({ msg: "Poster image must be less than 10MB" });
  }

  if (bgPosterFile.size > maxSize) {
    return res.status(422).json({ msg: "bg poster  must be less than 10MB" });
  }

  // Menyimpan poster file ke direktori yang ditentukan
  posterFile.mv(posterPath, async (err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }

    // Menyimpan bg poster file ke direktori yang ditentukan
    bgPosterFile.mv(bgPosterPath, async (err) => {
      if (err) {
        return res.status(500).json({ msg: err.message });
      }

      try {
        await Movie.create({
          title,
          sinopsis,
          duration,
          is_show,
          normal_price,
          weekend_price,
          special_price,
          stok_ticket,
          poster: posterFileName,
          poster_url: posterUrl,
          bg_poster: bgPosterFileName,
          bg_poster_url: bgPosterUrl,
          trailer,
          start_show,
          end_show,
          is_slider,
          status,
          cgvId,
        });

        res.status(201).json({ msg: "Movie Created" });
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
    });
  });
};

exports.updateMovie = async (req, res) => {};

exports.deleteMovie = async (req, res) => {
  try {
    // hapus filenya belum
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
