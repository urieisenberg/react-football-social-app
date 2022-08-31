const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 1024,
    },
    team: {
      type: Object,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    coverPictures: {
      type: String,
      deafult: "",
    },
    follows: {
      type: Array,
      default: [],
    },
    followed: {
      type: Array,
      default: [],
    },
    fixtures: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
