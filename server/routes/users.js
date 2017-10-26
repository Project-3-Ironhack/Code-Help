const express = require("express");
const User = require("../models/user");
const router = express.Router();

// Route only displaying teachers, used in SearchBar

router.get("/users", (req, res, next) => {
  User.find( {role: "Teacher"} ).then(users => {
    res.json(users);
  });
});

// GET TEACHER INFO
router.get('/teacher/:id', (req, res, next) => {
  const id = req.params.id;
  User.findById(id).then(user => {
    res.json(user);
  })
});

// UPDATE TEACHER INFO
router.patch('/teacher/:id', (req, res, next) => {

  const {id, name, description, image, price} = req.body;
  const infoToUpdate = {id, name, description, image, price}

  User.findByIdAndUpdate(id, infoToUpdate, { new: true }).then(updatedUser => {
    res.json(updatedUser);
  });
});

module.exports = router;
