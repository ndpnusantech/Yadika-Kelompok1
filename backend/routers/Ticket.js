const express = require("express");
const router = express.Router();
const TicketController = require("../controllers/TicketController");

// Endpoint untuk membuat tiket baru
router.post("/tickets", TicketController.createTicket);

// Endpoint untuk mengambil tiket berdasarkan ID
router.get("/tickets/:id", TicketController.getTicketById);

// Endpoint lainnya untuk memanipulasi dan mengambil data tiket

module.exports = router;
