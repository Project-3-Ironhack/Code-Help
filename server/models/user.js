const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

// username and password will be added to the model by the passport local mongoose schema
const userSchema = new Schema({
  name: String,
  image: String,
  description: String,
  skills: [
    {
      name: String,
      icon: String
    }
  ],
  role: {
    type: String,
    enum: ["Student", "Teacher"],
    required: true
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
