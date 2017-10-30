const express = require("express");
// const User = require("../models/user");
const Session = require("../models/session");
const router = express.Router();

router.post("/session", (req, res, next) => {
  const { teacherId, rating } = req.body;
  const session = new Session({
    teacherId,
    rating
  });

  session.save().then(session => {
    res.json({ session });
    if (err) {
      return next (err)
    }
  });
});

router.get("/sessions", (req, res, next) => {
  Session.find().then(sessions => {
    res.json({sessions})
  })
})



module.exports = router;
