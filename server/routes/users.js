const express = require("express");
const User = require("../models/user");
const Session = require("../models/session");
const router = express.Router();

// Route only displaying teachers, used in SearchBar

router.get("/users", (req, res, next) => {
  User.find({ role: "Teacher" })
    .addRatingAndComment()
    .then(users => res.json(users))
});

// GET TEACHER INFO
router.get("/teacher/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id).then(user => {
    res.json(user);
  });
});

// UPDATE TEACHER INFO
router.patch("/teacher/:id", (req, res, next) => {
  console.log("and testing the name again", req.body);

  const {
    id,
    name,
    description,
    skills,
    price,
    currency,
    gitHubUrl,
    linkedInUrl,
    personalWebsiteUrl,
    twitterUrl
  } = req.body;
  const infoToUpdate = {
    id,
    name,
    description,
    skills,
    price,
    currency,
    gitHubUrl,
    linkedInUrl,
    personalWebsiteUrl,
    twitterUrl
  };

  User.findByIdAndUpdate(id, infoToUpdate, { new: true }).then(updatedUser => {
    res.json(updatedUser);
  });
});

// GET STUDENT INFO
router.get("/student/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id).then(user => {
    res.json(user);
  });
});

// UPDATE STUDENT PAYMENT INFO
router.patch("/student/:id", (req, res, next) => {
  console.log('and it goes to teh serverer')
  const id = req.body.id;
  const {
    token
  } = req.body.token;
  const infoToUpdate = {
    id,
    token
  };

  User.findByIdAndUpdate(id, infoToUpdate, { new: true }).then(updatedUser => {
    res.json(updatedUser);
  });
});

// UPDATE TEACHER ONLINE STATUS
router.post("/status/:id", (req, res, next) => {
  console.log("the body contains...", req.body.status);
  const { id } = req.body;
  User.findByIdAndUpdate(
    id,
    { status: req.body.status },
    { new: true }
  ).then(updatedUser => {
    console.log("the updated user is ", updatedUser);
    res.json(updatedUser);
  });
});

module.exports = router;
