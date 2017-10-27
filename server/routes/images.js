const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const User = require("../models/user");

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'user-images',
  allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
});

const parser = multer({ storage });

router.patch('/upload', parser.single('image'), (req, res, next) => {
  console.log('searching for id', req.body.id)
  const id = req.body.id;

  User.findByIdAndUpdate(id,{image: req.file.secure_url}, { new: true })
  .then(response => {
      console.log('updated url', response);
      res.json(response);
  });
});

module.exports = router;