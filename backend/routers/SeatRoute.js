const express = require('express');
const router = express.Router();
const seatController = require('../controllers/SeatController');


// Mendapatkan semua seat
router.get('/seats', seatController.getAllSeats);

// Mendapatkan seat berdasarkan ID
router.get('/seats/:id', seatController.getSeatById);

// Membuat seat baru
router.post('/seats', seatController.createSeat);

// Mengupdate seat berdasarkan ID
router.put('/seats/:id', seatController.updateSeat);

// Menghapus seat berdasarkan ID
router.delete('/seats/:id', seatController.deleteSeat);

module.exports = router;
