require('dotenv').config();
const User = require("../models/user");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI,{useMongoClient: true});

const teachersData = [
  {
    name: "Rob",
    image: "http://placeholder/url/ph.jpg",
    description: "A nice teacher who only knows JS",
    skills: [
      {
        name: "Javascript",
        icon: "js-image"
      }
    ],
    role: "Teacher",
    price: 500
  },
  {
    name: "Bob",
    image: "http://placeholder/url/ph2.jpg",
    description: "A good teacher",
    skills: [
      {
        name: "Javascript",
        icon: "js-image"
      }
    ],
    role: "Teacher",
    price: 300
  },
  {
    name: "Gob",
    image: "http://placeholder/url/ph2.jpg",
    description: "A cool teacher",
    skills: [
      {
        name: "Vue.js",
        icon: "vuejs-image"
      }
    ],
    role: "Teacher",
    price: 200
  }
];

User.create(teachersData, (err, teachers) => {
  if (err) {
    console.log(err);
  }
  teachers.forEach(teacher => console.log(teacher.name));
  mongoose.disconnect();
});
