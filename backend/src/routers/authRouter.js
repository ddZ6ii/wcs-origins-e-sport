const express = require("express");

const authController = require("../controllers/authController");
const {
  verifyEmail,
  verifyPassword,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", verifyEmail, verifyPassword, authController.login);

// logout
// register

module.exports = router;
