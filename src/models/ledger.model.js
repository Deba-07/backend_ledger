const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "account",
    required: [true, "Ledger must be associated with an account"],
    index: true,
    immutable: true,
  },
  amount: {
    type: Number,
    required: [true, "Amount is required for creating a ledger entry"],
    immutable: true,
  },
  transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "transaction",
    required: [true, "Ledger must be associated with a transaction"],
    index: true,
    immutable: true,
  },
  type: {
    type: String,
    enum: {
      values: ["CREDIT", "DEBIT"],
      messages: "Type can be either CREDIT or DEBIT",
    },
    required: [true, "Ledger type is required"],
    immutable: true,
  },
});

function preventLedgerModificaton() {
  throw new Error(
    "Ledger entries are immutable and cannot be modified or deleted",
  );
}

ledgerSchema.pre("findOneAndUpdate", preventLedgerModificaton);
ledgerSchema.pre("findOneAndDelete", preventLedgerModificaton);
ledgerSchema.pre("findOneAndReplace", preventLedgerModificaton);
ledgerSchema.pre("updateOne", preventLedgerModificaton);
ledgerSchema.pre("updateMany", preventLedgerModificaton);
ledgerSchema.pre("deleteOne", preventLedgerModificaton);
ledgerSchema.pre("deleteMany", preventLedgerModificaton);
ledgerSchema.pre("remove", preventLedgerModificaton);

const ledgerModel = mongoose.model("ledger", ledgerSchema);

module.exports = ledgerModel;
