const mongoose = require("mongoose");

const tokenBlackkistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "TOken is required to blacklist"],
      unique: [true, "Token is already blacklisted"],
    },
  },
  { timestamps: true },
);

tokenBlackkistSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 60 * 60 * 24 * 3, // 3 days
  },
);

const tokenBlacklistModel = mongoose.model(
  "tokenBlacklist",
  tokenBlackkistSchema,
);

module.exports = tokenBlacklistModel;
