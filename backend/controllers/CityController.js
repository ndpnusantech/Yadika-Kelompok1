const { City, Cgv } = require("../helper/relation.js");

exports.createCity = async (req, res) => {
  try {
    await City.create({
      city: req.body.city,
    });
    res.status(201).json({ msg: "City Created" });
  } catch (error) {
    console.log(error);
  }
};

exports.getCity = async (req, res) => {
  try {
    const response = await City.findAll();
    res.status(200).json({ data: response });
  } catch (error) {
    console.log(error);
  }
};

exports.getCityById = async (req, res) => {
  try {
    const response = await City.findOne({
      include: [{ model: Cgv }],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCity = async (req, res) => {
  try {
    await City.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "city deleted" });
  } catch (error) {
    console.log(error);
  }
};
