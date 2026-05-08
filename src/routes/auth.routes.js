const express = require('express')
const authCotroller = require("../controllers/auth.controller")

const router = express.Router()

router.post("/register", authCotroller.userRegisterController)
router.post("/login", authCotroller.userLoginController)

module.exports = router