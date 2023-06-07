const { Cgv, Audi, Seat } = require("../helper/relation.js");

// Mendapatkan semua data audi
async function getAllAudi(req, res) {
  try {
    const audis = await Audi.findAll();
    res.json(audis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Mendapatkan data audi berdasarkan ID

async function getAudiById(req, res) {
  try {
    const audi = await Audi.findOne({
      include: [{ model: Seat }],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(audi);
  } catch (error) {
    console.error(error);
  }
}

// Membuat data audi baru
async function createAudi(req, res) {
  const { audiNumber, cgvId } = req.body;
  try {
    const audi = await Audi.create({
      audiNumber,
      cgvId,
    });
    res.status(201).json(audi);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Mengupdate data audi berdasarkan ID
async function updateAudi(req, res) {
  const { id } = req.params;
  const { audiNumber, audiId } = req.body;
  try {
    const audi = await Audi.findByPk(id);
    if (!audi) {
      res.status(404).json({ message: "Audi not found" });
    } else {
      audi.audiNumber = audiNumber;
      audi.audiId = audiId;
      await audi.save();
      res.json(audi);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Menghapus data audi berdasarkan ID
async function deleteAudi(req, res) {
  try {
    await Audi.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Audi Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  getAllAudi,
  getAudiById,
  createAudi,
  updateAudi,
  deleteAudi,
};
