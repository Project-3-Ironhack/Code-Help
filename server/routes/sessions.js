const express = require("express");
// const User = require("../models/user");
const Session = require("../models/session");
const router = express.Router();

router.post("/session", (req, res, next) => {
  const { teacherId, studentId } = req.body;
  const startDate = Date.now();
  const session = new Session({
    teacher: teacherId,
    student: studentId,
    startDate: startDate,
    endDate: "",
    rating: ""
  });

  session.save().then(session => {
    res.json({ session });
    if (err) {
      return next(err);
    }
  });
});

router.patch("/session/:id/endDate", (req, res, next) => {
  const id = req.params.id;
  const endDate = Date.now();
  const infoToUpdate = { endDate };
  Session.findByIdAndUpdate(id, infoToUpdate, { new: true }).then(response => {
    res.json({ response });
  });
});

router.patch("/session/:id", (req, res, next) => {
  const id = req.params.id;
  const rating = req.body.rating;
  const comment = req.body.comment
  console.log("HI FROM SERVER:", rating, comment);
  Session.findByIdAndUpdate(id, { rating, comment }, { new: true }).then(response => {
    res.json({ response });
  });
});

router.get("/sessions", (req, res, next) => {
  Session.find().then(sessions => {
    res.json({ sessions });
  });
});

module.exports = router;
