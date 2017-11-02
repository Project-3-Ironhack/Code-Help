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

  token: String,
  
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

});

userSchema.query.addRatingAndComment = function() {
  return this.then(users => {
    const usersPromises = users.map(user => {
      return Session.find({ teacher: user._id }).then(sessions => {
        const avgRating = sessions.reduce((avg, session) => {
          return avg + session.rating / sessions.length;
        }, 0);
        user = user.toObject();
        user.rating = avgRating;
        const topSessions = sessions
          .filter(session => session.rating === 3 && session.comment !== "")
          .sort((a, b) => {
            return b.endDate - a.endDate;
          });
        user.topSession = topSessions[0];
        return user;
      });
    });
    return Promise.all(usersPromises)
  });
}

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
