require('dotenv').config();
const User = require("../models/user");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI,{useMongoClient: true});

const teachersData = [
  {
    name: "Yacine Mhito",
    image: "/static/yacine.jpeg",
    description: "A nice teacher who only knows JS",
    skills: ['Docker','AWS','Google Maps'],
    role: "Teacher",
    rating: 3,
    price: 10,
    currency: 'dollar',
    comment: "Super helpful",
    gitHubUrl: "https://github.com/yacinehmito",
  },
  {
    name: "Maxence Bouret",
    image: "/static/max.jpeg",
    description: "A good teacher",
    skills: ['JavaScript','Vue.js', 'Git', "GitHub",'Bootstrap','Bulma','Heroku','Docker','AWS','Google Maps'],
    role: "Teacher",
    rating: 3,
    price: 5,
    currency: 'euro',
    comment: "Great session with Maxence!",
    gitHubUrl: "https://github.com/mc100s",
  },
  {
    name: "Eduardo San Martin",
    image: "/static/posva.jpeg",
    description: "A cool teacher",
    skills: ['JavaScript','Vue.js','HTML','CSS','React','Angular','Git', "GitHub",'Bootstrap','Bulma'],
    rating: 3,
    role: "Teacher",
    price: 8,
    currency: 'euro',
    comment: "Eduardo was awesome during the session.",
    gitHubUrl: "https://github.com/posva",
  }
];

User.create(teachersData, (err, teachers) => {
  if (err) {
    console.log(err);
  }
  teachers.forEach(teacher => console.log(teacher.name));
  mongoose.disconnect();
});
