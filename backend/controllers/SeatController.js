const { Seat } = require("../helper/relation.js");

// Membuat seat baru
async function createSeat(seatNumber, isBook, audiId) {
  try {
    const seat = await Seat.create({
      seatNumber,
      isBook,
      audiId,
    });
    console.log('Seat created:', seat.toJSON());
  } catch (error) {
    console.error('Error creating seat:', error);
  }
}

// Mengambil semua seat
async function getAllSeats() {
  try {
    const seats = await Seat.findAll();
    console.log('Seats:', seats);
  } catch (error) {
    console.error('Error retrieving seats:', error);
  }
}

// Mengambil seat berdasarkan audiId
async function getSeatsByAudiId(audiId) {
  try {
    const seats = await Seat.findAll({
      where: {
        audiId,
      },
    });
    console.log(`Seats in Audi ${audiId}:`, seats);
  } catch (error) {
    console.error(`Error retrieving seats in Audi ${audiId}:`, error);
  }
}

// Mengupdate status isBook seat berdasarkan seatNumber
async function updateSeatStatus(seatNumber, isBook) {
  try {
    const seat = await Seat.findOne({
      where: {
        seatNumber,
      },
    });

    if (seat) {
      seat.isBook = isBook;
      await seat.save();
      console.log('Seat updated:', seat.toJSON());
    } else {
      console.log(`Seat with seatNumber ${seatNumber} not found.`);
    }
  } catch (error) {
    console.error('Error updating seat:', error);
  }
}

// Menghapus seat berdasarkan seatNumber
async function deleteSeat(seatNumber) {
  try {
    const seat = await Seat.findOne({
      where: {
        seatNumber,
      },
    });

    if (seat) {
      await seat.destroy();
      console.log('Seat deleted.');
    } else {
      console.log(`Seat with seatNumber ${seatNumber} not found.`);
    }
  } catch (error) {
    console.error('Error deleting seat:', error);
  }
}

// Contoh penggunaan fungsi-fungsi controller
createSeat(1, true, 'audi123');
getAllSeats();
getSeatsByAudiId('audi123');
updateSeatStatus(1, false);
deleteSeat(1);
