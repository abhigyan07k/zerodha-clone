const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true },
    otp: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Delete after 5 min (300 seconds)
otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

const Otp = mongoose.model("Otp", otpSchema);

module.exports = Otp;
