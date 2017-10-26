const express = require("express");
const User = require("../models/user");
const router = express.Router();

// Route only displaying teachers, used in SearchBar

router.get("/users", (req, res, next) => {
  console.log("you're here")
  User.find({ role: "Teacher" }).then(users => {
    res.json(users);
  });
});

// CAN YOU PUT ANYTHING IN PLACE OF /users?

module.exports = router;
