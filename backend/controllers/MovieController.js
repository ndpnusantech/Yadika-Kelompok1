const path = require("path");
const crypto = require("crypto");
const fs = require("fs");
const { Cgv, Movie } = require("../helper/relation");

exports.getMovie = async (req, res) => {
  try {
    const response = await Movie.findAll({});
    res.status(200).json(response);
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

exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({
      where: {
        uuid: req.params.id,
      },
    });

    if (!movie) return res.status(404).json({ msg: "film tidak ditemukan" });
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

    let iPoster = "";
    let iBg_poster = "";
    const allowedType = [".png", ".jpg", ".jpeg"];
    const maxSize = 10000000; // 10MB

    //  poster
    if (
      !req.files.poster ||
      req.files.poster === undefined ||
      req.files.poster === null
    ) {
      iPoster = movie.poster;
    } else {
      // unggah poster

      const posterFile = req.files.poster; // File poster

      // Proses upload poster file
      const posterTimestamp = Date.now(); // ambil dta waktu saat ini 
      const posterExt = path.extname(posterFile.name); // ambil tipe file
      const posterRandomString = crypto.randomBytes(8).toString("hex"); // buat string random
      const posterFileName = `${posterTimestamp}-${posterRandomString}${posterExt}`; // rangkai nama file

      const posterPath = `./public/assets/posters/${posterFileName}`; // path baru

        // cek apakah gambar?
      if (!allowedType.includes(posterExt.toLowerCase()))
        return res.status(422).json({ msg: "invalid poster image" });

        // ukuran file tidak lebih besar dari 10mb
      if (posterFile.size > maxSize) {
        return res
          .status(422)
          .json({ msg: "Poster image must be less than 10MB" });
      }

      const filepath = `./public/assets/posters/${movie.poster}`; // path lama
      fs.unlinkSync(filepath); // hapus file lama

      // simpan file baru
      await posterFile.mv(posterPath, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });

      iPoster = posterFileName;
    }

    // bg_poster

    if (
      !req.files.bg_poster ||
      req.files.bg_poster === undefined ||
      req.files.bg_poster === null
    ) {
      iBg_poster = movie.bg_poster;
    } else {
      const bgPosterFile = req.files.bg_poster; // File bgPosterFile

      // Proses upload bg poster file
      const bgPosterTimestamp = Date.now();
      const bgPosterExt = path.extname(bgPosterFile.name);
      const bgPosterRandomString = crypto.randomBytes(8).toString("hex");
      const bgPosterFileName = `${bgPosterTimestamp}-${bgPosterRandomString}${bgPosterExt}`;

      const bgPosterPath = `./public/assets/bgPosters/${bgPosterFileName}`;

      if (!allowedType.includes(bgPosterExt.toLowerCase()))
        return res.status(422).json({ msg: "invalid bg poster image" });

      if (bgPosterFile.size > maxSize) {
        return res
          .status(422)
          .json({ msg: "Poster image must be less than 10MB" });
      }

      // path hapus bg poster
      const filepath = `./public/assets/bgPosters/${movie.bg_poster}`;

      fs.unlinkSync(filepath); // hapus file lama

      // simpan file baru
      await bgPosterFile.mv(bgPosterPath, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });

      iBg_poster = bgPosterFileName;
    }

    // url poster
    const posterUrl = `${req.protocol}://${req.get(
      "host"
    )}/assets/posters/${iPoster}`;

    // url bg_poster
    const bgPosterUrl = `${req.protocol}://${req.get(
      "host"
    )}/assets/bgPosters/${iBg_poster}`;

    await Movie.update(
      {
        title,
        sinopsis,
        duration,
        is_show,
        normal_price,
        weekend_price,
        special_price,
        stok_ticket,
        poster: iPoster,
        poster_url: posterUrl,
        bg_poster: iBg_poster,
        bg_poster_url: bgPosterUrl,
        trailer,
        start_show,
        end_show,
        is_slider,
        status,
        cgvId,
      },
      {
        where: {
          id: movie.id,
        },
      }
    );

    res.status(200).json({ msg: "Movie Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  const movie = await Movie.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!movie) return res.status(404).json({ msg: "Film tidak ditemukan" });

  try {
    // Hapus bg poster
    // cek apa apakah ada poster ? jika ada maka hapus
    if (movie.poster) {
      const bgPosterPath = `./public/assets/bgPosters/${movie.bg_poster}`;
      fs.unlinkSync(bgPosterPath); // Hapus file 
    }

    // Hapus poster
    // cek apa apakah ada bg_poster ? jika ada maka hapus
    if (movie.bg_poster) {
      const posterPath = `./public/assets/posters/${movie.poster}`;
      fs.unlinkSync(posterPath); // Hapus file 
    }

    await Movie.destroy({
      where: {
        id: movie.id,
      },
    });

    res.status(200).json({ msg: "Film berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
