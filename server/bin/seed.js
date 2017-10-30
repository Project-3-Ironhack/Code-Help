require('dotenv').config();
const User = require("../models/user");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI,{useMongoClient: true});

const teachersData = [
  {
    name: "Rob",
    image: "http://via.placeholder.com/350x350",
    description: "A nice teacher who only knows JS",
    skills: ['JavaScript','Vue.js','HTML','CSS','React','Angular','Git', "GitHub",'Bootstrap','Bulma','Heroku','Docker','AWS','Google Maps'],
    role: "Teacher",
    rating: 0,
    price: 500
  },
  {
    name: "Vob",
    image: "http://via.placeholder.com/350x350",
    description: "A good teacher",
    skills: ['JavaScript','Vue.js','HTML','CSS','React','Angular','Git', "GitHub",'Bootstrap','Bulma','Heroku','Docker','AWS','Google Maps'],
    role: "Teacher",
    rating: 4,
    price: 300
  },
  {
    name: "Wob",
    image: "http://via.placeholder.com/350x350",
    description: "A cool teacher",
    skills: ['JavaScript','Vue.js','HTML','CSS','React','Angular','Git', "GitHub",'Bootstrap','Bulma','Heroku','Docker','AWS','Google Maps'],
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
