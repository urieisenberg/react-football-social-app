const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log(`MongoDB Connected: ${process.env.PORT}`.white.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`.bgRed.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
