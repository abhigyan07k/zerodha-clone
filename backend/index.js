require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// Correct model imports
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const User = require("./model/User");
const Otp = require("./model/Otp");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.send("✅ Server is running fine!");
});

// ------------------------------------
// JWT Creator
// ------------------------------------
function createToken(user) {
  return jwt.sign({ id: user._id, phone: user.phone }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
}

// ------------------------------------
// SEND OTP
// ------------------------------------
app.post("/api/send-otp", async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.json({ success: false, message: "Phone required" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await Otp.create({ phone, otp });

    console.log("OTP:", otp); // remove in production

    return res.json({ success: true, message: "OTP sent" });
  } catch (err) {
    console.error("Send OTP Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// ------------------------------------
// SIGNUP / VERIFY OTP
// ------------------------------------
app.post("/api/verify-otp", async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const found = await Otp.findOne({ phone, otp });
    if (!found) return res.json({ success: false, message: "Invalid OTP" });
    let user = await User.findOne({ phone });
    if (!user) user = await User.create({ phone });
    await Otp.deleteMany({ phone });
    const token = createToken(user);
    return res.json({
      success: true,
      message: "Signup successful",
      token,
      user,
    });
  } catch (err) {
    console.error("Verify OTP Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// ------------------------------------
// LOGIN / VERIFY OTP
// ------------------------------------
app.post("/api/login-verify-otp", async (req, res) => {
  try {
    const { phone, otp } = req.body;

    const found = await Otp.findOne({ phone, otp });
    if (!found) return res.json({ success: false, message: "Invalid OTP" });

    const user = await User.findOne({ phone });
    if (!user) {
      await Otp.deleteMany({ phone });
      return res.json({ success: false, message: "User not found" });
    }

    await Otp.deleteMany({ phone });
    const token = createToken(user);

    return res.json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (err) {
    console.error("Login OTP Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// ------------------------------------
// JWT Middleware
// ------------------------------------
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ success: false, message: "Auth missing" });
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
}

// ------------------------------------
// PROFILE ROUTE
// ------------------------------------
app.get("/api/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-__v");
    return res.json({ success: true, user });
  } catch (err) {
    console.error("Profile Error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// ------------------------------------
// HOLDINGS
// ------------------------------------
app.get("/allHoldings", async (req, res) => {
  try {
    const all = await HoldingsModel.find({});
    res.json(all);
  } catch (err) {
    res.status(500).send("Error fetching holdings");
  }
});

// ------------------------------------
// POSITIONS
// ------------------------------------
app.get("/allPositions", async (req, res) => {
  try {
    const all = await PositionsModel.find({});
    res.json(all);
  } catch (err) {
    res.status(500).send("Error fetching positions");
  }
});

// ------------------------------------
// NEW ORDER
// ------------------------------------
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.json({ success: true, message: "Order saved!" });
  } catch (err) {
    console.error("Order Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ------------------------------------
// START SERVER + CONNECT DB
// ------------------------------------
mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Database Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB Error:", err));
