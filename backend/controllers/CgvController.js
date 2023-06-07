const db = require("../helper/relation");

const { Cgv, Movie, Audi } = db;

exports.createCgv = async (req, res) => {
  try {
    const { cgv, cityId } = req.body;
    const data = await Cgv.create({ cgv, cityId });
    res.status(201).json({ msg: "cgv created", data: data });
  } catch (error) {
    console.log(error);
  }
};

exports.getCgv = async (req, res) => {
  try {
    const response = await Cgv.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

exports.getCgvById = async (req, res) => {
  try {
    const response = await Cgv.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Movie }, { model: Audi }],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCgv = async (req, res) => {
  try {
    await Cgv.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ msg: "Cgv deleted" });
  } catch (error) {
    console.log(error);
  }
};
