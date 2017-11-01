const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const sessionSchema = new Schema({
  //!\\ Commented out: Commenting, focusing on rating at the moment //!\\
  // studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    red: "User"
  },
  startDate: Date,
  endDate: Date,
  // time: Number,
  // feedback: {
  rating: {
    type: Number,
    validator(rating) {
      return [1, 2, 3].includes(rating)
    }
  },
  comment: String,
  // min: 0,
  // max: 5,
  // comment: String,
  // },
});

module.exports = mongoose.model("Session", sessionSchema);
