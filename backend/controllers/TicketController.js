const { Ticket } = require("../helper/relation.js");
const TicketController = {
  // Contoh method untuk membuat tiket baru
  createTicket: async (req, res) => {
    try {
      console.log(req.body);
      const { movieid, date, showTimeId, transactionCode } = req.body;

      // Membuat tiket baru menggunakan model Ticket
      const ticket = await Ticket.create({
        movieid,
        date,
        showTimeId,
        transactionCode,
      });

      // Mengembalikan respons sukses
      return res.status(201).json({
        success: true,
        message: "Ticket created successfully",
        ticket,
      });
    } catch (error) {
      // Mengembalikan respons jika terjadi kesalahan
      console.error("Error creating ticket:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to create ticket",
      });
    }
  },

  // Contoh method untuk mengambil tiket berdasarkan ID
  getTicketById: async (req, res) => {
    try {
      const { ticketId } = req.params.id;

      // Mengambil tiket berdasarkan ID menggunakan model Ticket
      const ticket = await Ticket.findOne(ticketId);

      if (ticket) {
        // Mengembalikan respons tiket jika ditemukan
        return res.status(200).json({
          success: true,
          ticket,
        });
      } else {
        // Mengembalikan respons jika tiket tidak ditemukan
        return res.status(404).json({
          success: false,
          message: "Ticket not found",
        });
      }
    } catch (error) {
      // Mengembalikan respons jika terjadi kesalahan
      console.error("Error getting ticket:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to get ticket",
      });
    }
  },

  // Metode lainnya untuk memanipulasi dan mengambil data tiket
};

module.exports = TicketController;
