const { User, History } = require("../helper/relation");

exports.getHistory = async (req, res) => {
  try {
    const data = await History.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.getHistoryById = async (req, res) => {
  try {
    const data = await History.findOne({
      where: {
        id: req.params.id,
      },
      include: { model: User },
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
