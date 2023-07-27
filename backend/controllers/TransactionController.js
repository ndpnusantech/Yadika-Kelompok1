const {
  Transaction,
  User,
  Movie,
  Cgv,
  Audi,
  Seat,
} = require("../helper/relation");

exports.createTransaction = async (req, res) => {
  const {
    userId,
    movieId,
    audiId,
    seatId,
    quantity,
    ticketId,
    historyId,
    status,
  } = req.body;
  const date = new Date();
  console.log(date);
  try {
    const transaction = await Transaction.create({
      userId,
      movieId,
      audiId,
      seatId,
      quantity,
      transactionDate: date,
      status,
      ticketId,
      historyId,
    });
    res.status(201).json({ msg: "transaction created", transaction });
  } catch (error) {
    console.log(error);
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transaction = await Transaction.findAll();
    res.status(200).json(transaction);
  } catch (error) {
    console.log(error);
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      where: { id: req.params.id },
      include: [{ model: Movie }],
    });
    res.status(200).json(transaction);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.destroy({
      where: { id: req.params.id },
    });
    res.status(201).json({ msg: "transaction deleted" });
  } catch (error) {
    console.log(error);
  }
};
