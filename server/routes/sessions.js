const express = require("express");
// const User = require("../models/user");
const Session = require("../models/session");
const router = express.Router();

router.post("/session", (req, res, next) => {
  console.log(req.body)
  const { teacherId } = req.body;
  console.log("Teacher ID: ", teacherId)
  const session = new Session({
    teacher: teacherId,
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
