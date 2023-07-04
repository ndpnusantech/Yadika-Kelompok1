const express = require("express");
const router = express.Router();
const { veryfyToken } = require("../middleware/middleware.js");
const { refreshToken } = require("../helper/RefreshToken.js");

const {
  getUsers,
  register,
  login,
  deleteUser,
} = require("../controllers/UserController");

router.get("/users", veryfyToken, getUsers);
router.post("/users", register);
router.post("/login", login);
router.get("/token", refreshToken);
router.delete("/users/:id", deleteUser);

module.exports = router;
