const { Seat, Audi } = require("../helper/relation.js");

// Membuat seat baru
exports.createSeat = async (req, res) => {
  try {
    const { seatNumber, isBook, audiId } = req.body;
    const response = await Seat.create({
      seatNumber,
      isBook,
      audiId,
    });
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

// Mengambil semua seat
exports.getSeats = async (req, res) => {
  try {
    const response = await Seat.findAll({});
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

// Mengambil seat berdasarkan audiId
exports.getSeatById = async (req, res) => {
  try {
    const response = await Seat.findOne({
      include: [{ model: Audi }],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
// Mengupdate status isBook seat berdasarkan seatNumber

// Menghapus seat berdasarkan seatNumber
exports.deleteSeat = async (req, res) => {
  try {
    await Seat.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "seat deleted" });
  } catch (error) {
    console.log(error);
  }
};
