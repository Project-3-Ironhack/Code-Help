const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/users", (req, res, next) => {
  console.log("you're here")
  User.find().then(users => {
    res.json(users);
  });
});

// CAN YOU PUT ANYTHING IN PLACE OF /users?

module.exports = router;
