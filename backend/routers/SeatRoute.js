const express = require("express");
const router = express.Router();
const {
  createSeat,
  getSeats,
  getSeatById,
  deleteSeat,
} = require("../controllers/SeatController");

// Mendapatkan semua seat
router.get("/seats", getSeats);

// Mendapatkan seat berdasarkan ID
router.get("/seats/:id", getSeatById);

// Membuat seat baru
router.post("/seats", createSeat);

// Mengupdate seat berdasarkan ID
// router.put("/seats/:id", seatController.updateSeat);

// Menghapus seat berdasarkan ID
router.delete("/seats/:id", deleteSeat);

module.exports = router;
