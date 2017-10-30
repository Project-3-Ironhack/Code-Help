const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const sessionSchema = new Schema({
  //!\\ Commented out: Commenting, focusing on rating at the moment //!\\
  // studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  teacher:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  student:
  {
    // add student info here with ref
  }

  // time: Number,
  // feedback: {
  rating: Number
  // min: 0,
  // max: 5,
  // comment: String,
  // },
});

module.exports = mongoose.model("Session", sessionSchema);
