const express = require("express");
const authCotroller = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", authCotroller.userRegisterController);
router.post("/login", authCotroller.userLoginController);
router.post(
  "/logout",
  authMiddleware.authMiddleware,
  authCotroller.userLogoutController,
);

module.exports = router;
