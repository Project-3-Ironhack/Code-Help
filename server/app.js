require("dotenv").config();
const history = require("express-history-api-fallback");
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
const config = require("./config");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const cors = require("cors");
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

const authRoutes = require("./routes/auth");
const users = require("./routes/users");
const imagesRoutes = require('./routes/images');

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// add cors
if (app.get("env") === "development") {
  app.use(
    cors({
      origin: "http://localhost:8080"
    })
  );
}

app.use(passport.initialize());
const strategy = new Strategy(
  {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (payload, done) => {
    User.findById(payload.id).then(user => {
      if (user) {
        done(null, user);
      } else {
        done(new Error("User not found"));
      }
    });
  }
);
passport.use(strategy);

app.use("/api", authRoutes);
app.use("/api", users);
app.use('/api/images', imagesRoutes);

const clientRoot = path.join(__dirname, "../client/dist");
app.use("/", express.static(clientRoot));
app.use(history("index.html", { root: clientRoot }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    error: req.app.get("env") === "development" ? err : {}
  });
});

module.exports = app;
