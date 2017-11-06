require("dotenv").config();
const User = require("../models/user");
const Session = require("../models/session");
const mongoose = require("mongoose");

function getObjectIdFromProperty(objects, property, value) {
  const object = objects.find(object => object[property] === value);
  if (!object) throw Error(`no object with ${property} equal to ${value}`)
  return object._id
}

function connect() {
  return mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
}

function disconnect() {
  return mongoose.connection.close();
}

function cleanup() {
  return mongoose.connection.db.dropDatabase();
}

function seedStudents(data) {
  const studentData = {
    name: "Thibaut Davoult",
    username: "student@gmail.com",
    image: "/static/thibaut.jpeg",
    description: "I like JS",
    skills: [],
    role: "Student",
    rating: "",
    price: "",
    currency: "",
    gitHubUrl: "https://github.com/thibautdavoult",
    status: "online"
  };
  return new Promise((resolve, reject) => {
    User.register(studentData, "12345678", (err, user) => {
      if (err) reject(err);
      else resolve(Object.assign({ students: [user] }, data));
    });
  });
}

function seedTeachers(data) {
  const teachersData = [
    {
      name: "Yacine Hmito",
      username: "yacinehmito",
      image: "/static/yacine.jpeg",
      description: "I love helping people solve their coding challenges. I also try my best to explain the thought process behind my solution. I'll take the time to make sure you understood it all by the time we end the session.",
      skills: ["JavaScript", "AWS", "C++", "Typescript", "Java"],
      role: "Teacher",
      price: 10,
      currency: "dollar",
      comment: "Very helpful!",
      gitHubUrl: "https://github.com/yacinehmito",
      status: "online"
    },
    {
      name: "Maxence Bouret",
      username: "mc100s",
      image: "/static/max.jpeg",
      description: "I'm the lead teacher for the Ironhack Paris Web Dev part time track. I love programming and am passionate with all languages, so if you have a question, ask away!",
      skills: [
        "JavaScript",
        "Vue.js",
        "Git",
        "GitHub",
        "Bootstrap",
        "Bulma",
        "Heroku",
        "Docker",
        "AWS",
        "Google Maps"
      ],
      role: "Teacher",
      price: 5,
      currency: "euro",
      comment: "Great session with Maxence!",
      gitHubUrl: "https://github.com/mc100s",
      status: "online"
    },
    {
      name: "Eduardo San Martin",
      username: "posva",
      image: "/static/posva.jpeg",
      description: "I'm the main teacher at Ironhack Paris bootcamp. Part of the Vue.js core team. I also built Vue Router, among many other things.",
      skills: [
        "JavaScript",
        "Vue.js",
        "HTML",
        "CSS",
        "React",
        "Angular",
        "Git",
        "GitHub",
        "Bootstrap",
        "Bulma"
      ],
      role: "Teacher",
      price: 8,
      currency: "euro",
      comment: "Eduardo was awesome during the session.",
      gitHubUrl: "https://github.com/posva",
      status: "offline"
    },
    {
      name: "Michael Lande",
      username: "mlande",
      image: "/static/michael.jpeg",
      description: "After completing the Ironhack bootcamp in Paris as a strudent, I joined the team as a TA.",
      skills: ["HTML", "CSS", "Bootstrap", "Bulma", "Vue.js"],
      role: "Teacher",
      price: 8,
      currency: "dollar",
      comment: "Michael is an excellent TA, Ironhack is lucky to have him!",
      gitHubUrl: "https://github.com/mlande",
      status: "offline"
    },
    {
      name: "Liuda Ivanova",
      username: "liuda",
      image: "/static/alexandra.jpeg",
      description: "I completed the Ironhack bootcamp in October and am now available to give free lessons to those who need it! Let's figure out how to fix your coding issues together :)",
      skills: ["HTML", "CSS", "Bulma", "MongoDB", "JQuery", "Vue.js", "Node.js", "npm", "Jasmine"],
      role: "Teacher",
      price: 0,
      currency: "",
      comment: "",
      gitHubUrl: "https://github.com/LiudmilaE",
      status: "offline"
    },
    {
      name: "Maya Despretz",
      username: "maya",
      image: "/static/maya.png",
      description: "I know all there is to know about CSS and HTML. If you need styling done, I can get it done.",
      skills: ["HTML", "CSS"],
      role: "Teacher",
      price: 0,
      currency: "",
      comment: "",
      gitHubUrl: "https://github.com/maya",
      status: "offline",
    },
    {
      name: "Frederic Magnin",
      username: "frederic",
      image: "/static/fred.png",
      description: "I started my own business by coding an MVP with my co-founder. I can help you especially with real-world coding examples. Making it work is all that matters :)",
      skills: ["MongoDB", "JQuery", "Bulma", "Vue.js", "Node.js", "npm", "Jasmine"],
      role: "Teacher",
      price: 0,
      currency: "",
      comment: "",
      gitHubUrl: "https://github.com/frederic117",
      status: "offline",
    },
    {
      name: "Jad Challita",
      username: "jad",
      image: "/static/jad.png",
      description: "I worked in finance before starting as a full time programmer. I love algorithms, so if you're stuck doing katas, I'm the person to call :)",
      skills: ["Javascript", "Python", "Node.js", "npm", "Jasmine"],
      role: "Teacher",
      price: 0,
      currency: "",
      comment: "",
      gitHubUrl: "https://github.com/jadch",
      status: "offline",
    }

    ];

  return User.create(teachersData).then(teachers => {
    teachers.forEach(user => console.log(user.name));
    return Object.assign({ teachers }, data);
  });
}

function seedSessions(data) {
  const { teachers, students } = data;
  const sessionsData = [
    {
      teacher: getObjectIdFromProperty(teachers, "name", "Maxence Bouret"),
      student: getObjectIdFromProperty(students, "name", "Thibaut Davoult"),
      startDate: Date.now() - 30,
      endDate: Date.now(),
      rating: 3,
      comment: "Amazing help, very efficient session!"
    },
    {
      teacher: getObjectIdFromProperty(teachers, "username", "mlande"),
      student: getObjectIdFromProperty(students, "name", "Thibaut Davoult"),
      startDate: Date.now() - 60,
      endDate: Date.now() - 5,
      rating: 2,
      comment: "I understood all the explanations... Great!"
    },
    {
      teacher: getObjectIdFromProperty(teachers, "username", "posva"),
      student: getObjectIdFromProperty(students, "name", "Thibaut Davoult"),
      startDate: Date.now() - 30,
      endDate: Date.now() - 10,
      rating: 3,
      comment: "Great knowledge of Vue.js. Thanks!"
    },
    {
      teacher: getObjectIdFromProperty(teachers, "username", "yacinehmito"),
      student: getObjectIdFromProperty(students, "name", "Thibaut Davoult"),
      startDate: Date.now() - 60,
      endDate: Date.now() - 5,
      rating: 3,
      comment: "Solved my issue in 5 minutes!"
    },
    {
      teacher: getObjectIdFromProperty(teachers, "username", "frederic"),
      student: getObjectIdFromProperty(students, "name", "Thibaut Davoult"),
      startDate: Date.now() - 40,
      endDate: Date.now() - 15,
      rating: 3,
      comment: "Aside from solving my coding issues, Fred gave me great entrepreneurial advice for my project. I'll call him again with no hesitation."
    },
    {
    teacher: getObjectIdFromProperty(teachers, "username", "jad"),
    student: getObjectIdFromProperty(students, "name", "Thibaut Davoult"),
    startDate: Date.now() - 120,
    endDate: Date.now() - 60,
    rating: 3,
    comment: "I got to the next level in algorithms-solving thanks to Jad!"
  },
  {
    teacher: getObjectIdFromProperty(teachers, "username", "maya"),
    student: getObjectIdFromProperty(students, "name", "Thibaut Davoult"),
    startDate: Date.now() - 500,
    endDate: Date.now() - 450,
    rating: 3,
    comment: "I don't have to worry about styling issues thanks to Maya. Always here to help!"
  },
  {
    teacher: getObjectIdFromProperty(teachers, "username", "liuda"),
    student: getObjectIdFromProperty(students, "name", "Thibaut Davoult"),
    startDate: Date.now() - 500,
    endDate: Date.now() - 400,
    rating: 3,
    comment: "Very helpful, espacially for a free lesson!"
  }
  ];
  return Session.create(sessionsData).then(sessions => {
    sessions.forEach(session => console.log(session._id));
    return Object.assign({ sessions }, data);
  });
}

connect()
  .then(cleanup)
  .then(seedStudents)
  .then(seedTeachers)
  .then(seedSessions)
  .then(disconnect)
  .catch(err => {
    console.error(err);
    disconnect();
  });
