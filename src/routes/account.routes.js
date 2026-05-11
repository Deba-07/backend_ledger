const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const accountController = require("../controllers/account.controller");

const router = express.Router();

router.post(
  "/create",
  authMiddleware.authMiddleware,
  accountController.createAccountController,
);
rouuter.post(
  "/",
  authMiddleware.authMiddleware,
  accountController.getUserAccountsController,
);
router.get(
  "/balance/:accountId",
  authMiddleware.authMiddleware,
  accountController.getAccountBalanceController,
);

module.exports = router;
