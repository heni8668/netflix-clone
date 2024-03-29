const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
