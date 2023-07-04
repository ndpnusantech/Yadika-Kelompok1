const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../helper/relation");

const { User, History } = db;

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "email", "username"],
      include: { model: History },
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

exports.register = async (req, res) => {
  // this for validation register

  // console.log(req.body);
  const { email, username, password, confPassword } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "password and confirm password not suitable !" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await User.create({
      email: email,
      username: username,
      password: hashPassword,
    });

    // HOW TO GET ID FROM DATA BASE

    // PLAN 1

    // const getEmail = await User.findOne({
    //   where: {
    //     email: req.body.email
    //   },
    // });
    // console.log(getEmail.id);

    // PLAN 2

    const id = await User.findOne({
      order: [["id", "DESC"]],
    });
    console.log(id.id);

    await History.create({
      userId: id.id,
    });

    // await History.create({
    //   userEmail: email,
    // });

    res.status(201).json({ msg: "Register succses !" });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Wrong Password !" });
    const userId = user[0].id;
    const email = user[0].email;
    const username = user[0].username;
    const accessToken = jwt.sign(
      { userId, email, username },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "2m",
      }
    );
    const refreshToken = jwt.sign(
      { userId, email, username },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await User.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email Not Found !" });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await User.destroy({
      where: {
        id: userId,
      },
    });
    await History.destroy({
      where: {
        id: userId,
      },
    });
    res.status(202).json({ msg: "User Account deleted" });
  } catch (error) {
    console.log(error);
  }
};
