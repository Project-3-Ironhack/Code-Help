require('dotenv').config();
const User = require("../models/user");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI,{useMongoClient: true});

const teachersData = [
  {
    name: "Rob",
    image: "http://via.placeholder.com/350x350",
    description: "A nice teacher who only knows JS",
    skills: [
      {
        name: "Javascript",
        icon: "js-image",
      },
      {
        name: "Vue",
        icon: "vue-image",
      },
      {
        name: "HTML",
        icon: "html-image",
      }
    ],
    role: "Teacher",
    rating: 0,
    price: 500
  },
  {
    name: "Vob",
    image: "http://via.placeholder.com/350x350",
    description: "A good teacher",
    skills: [
      {
        name: "Javascript",
        icon: "js-image"
      },
      {
        name: "Redis",
        icon: "redis-image",
      },
      {
        name: "Vue",
        icon: "js-image",
      },
      {
        name: "CSS",
        icon: "CSS-image",
      },
      {
        name: "HTML",
        icon: "html-image",
      }
    ],
    role: "Teacher",
    rating: 4,
    price: 300
  },
  {
    name: "Wob",
    image: "http://via.placeholder.com/350x350",
    description: "A cool teacher",
    skills: [
      {
        name: "Vue.js",
        icon: "vuejs-image"
      },
      {
        name: "Postman",
        icon: "postman-image",
      },
      {
        name: "MongoDB",
        icon: "mongodb-image",
      }
    ],
    rating: 5,
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
