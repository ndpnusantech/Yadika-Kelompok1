const express = require('express');
const router = express.Router();
const AudiController = require('../controllers/AudiController');

// Mendapatkan semua data audi
router.get('/audis', AudiController.getAllAudi);

// Mendapatkan data audi berdasarkan ID
router.get('/audis/:id', AudiController.getAudiById);

// Membuat data audi baru
router.post('/audis', AudiController.createAudi);

// Mengupdate data audi berdasarkan ID
router.put('/audis/:id', AudiController.updateAudi);

// Menghapus data audi berdasarkan ID
router.delete('/audis/:id', AudiController.deleteAudi);

module.exports = router;
