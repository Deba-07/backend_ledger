const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const transactionController = require("../controllers/transaction.controller");

const transactionRoutes = Router();

transactionRoutes.post(
  "/create",
  authMiddleware.authMiddleware,
  transactionController.createTransaction,
);

transactionRoutes.post(
  "/system/initial-fund",
  authMiddleware.authSystemUserMiddleware,
  transactionController.createInitialFundsTransaction,
);

module.exports = transactionRoutes;
