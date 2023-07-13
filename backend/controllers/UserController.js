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
    // console.log(error);
    res.status(400).json({ msg: error.message }); // sementara seperti ini dulu agar jika error keliatan errornya
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
    // Cek apakah pengguna dengan username yang sama sudah ada di database
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ msg: "username ini sudah digunakan" });
    }

    // Cek apakah pengguna dengan email yang sama sudah ada di database
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ msg: "Email ini sudah digunakan" });
    }

    const user = await User.create({
      email: email,
      username: username,
      password: hashPassword,
    });

    await History.create({
      userId: user.id,
    });

    res.status(201).json({ msg: "Register succses !" });
  } catch (error) {
    // console.log(error);
    res.status(400).json({ msg: error.message }); // sementara seperti ini dulu agar jika error keliatan errornya
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Email tidak terdaftar" });
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password !" });
    const userId = user.id;
    const email = user.email;
    const username = user.username;
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
    // res.status(404).json({ msg: "Email Not Found !" });
    res.status(400).json({ msg: error.message }); // sementara seperti ini dulu agar jika error keliatan errornya
  }
};

// logout

exports.logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  console.log("Ini cookies " + refreshToken);

  if (!refreshToken) return res.sendStatus(204);

  const user = await User.findOne({
    where: {
      refresh_token: refreshToken,
    },
  });

  if (!user) return res.sendStatus(203);

  const userId = user.id;

  await User.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );

  res.clearCookie("refreshToken");

  return res.sendStatus(200);
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

// ||

// exports.register = async (req, res) => {
//   // this for validation register

//   // console.log(req.body);
//   const { email, username, password, confPassword } = req.body;
//   if (password !== confPassword)
//     return res
//       .status(400)
//       .json({ msg: "password and confirm password not suitable !" });
//   const salt = await bcrypt.genSalt();
//   const hashPassword = await bcrypt.hash(password, salt);

//   try {
//     const user = await User.create({
//       email: email,
//       username: username,
//       password: hashPassword,
//     });

//     // HOW TO GET ID FROM DATA BASE

//     // PLAN 1

//     // const getEmail = await User.findOne({
//     //   where: {
//     //     email: req.body.email
//     //   },
//     // });
//     // console.log(getEmail.id);

//     // PLAN 2

//     // const id = await User.findOne({
//     //   order: [["id", "DESC"]],
//     // });

//     // console.log(id.id);
//     // debugger
//     // console.log(user.id);

//     await History.create({
//       userId: user.id,
//     });

//     res.status(201).json({ msg: "Register succses !" });
//   } catch (error) {
//     // console.log(error);
//     res.status(400).json({ msg: error.message }); // sementara seperti ini dulu agar jika error keliatan errornya

//   }
// };
