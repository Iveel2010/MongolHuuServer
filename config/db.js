const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("🔥 MongoDB холбогдлоо!");
  } catch (error) {
    console.error("❌ MongoDB алдаа:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
