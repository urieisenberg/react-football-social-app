const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject: {
      type: String,
      required: true,
      enum: ["Bug", "General Question", "Feature Request", "Other"],
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 500,
    },
    status: {
      type: String,
      required: true,
      enum: ["New", "Open", "Closed"],
      default: "New",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
