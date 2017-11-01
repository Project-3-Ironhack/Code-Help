const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const Session = require("./session");

// username and password will be added to the model by the passport local mongoose schema
const userSchema = new Schema({
  name: String,
  image: String,
  description: String,
  skills: [String],
  role: {
    type: String,
    enum: ["Student", "Teacher"],
    required: true
  },
  price: Number,
  currency: String,
  status: String,

  nameOnCard: String,
  billingAddress: String,
  city: String,
  postalCode: String,
  country: String,
  // cardNumber: Number,
<<<<<<< HEAD
  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Session"
    }
  ],

  gitHubUrl: String,
  linkedInUrl: String,
  personalWebsiteUrl: String,
  twitterUrl: String,

=======
>>>>>>> db26ef2b5a88d04a0264107a60bc390a30f191bb
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
