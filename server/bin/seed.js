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
    username: "thibautdavoult",
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
    User.register(studentData, "o", (err, user) => {
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
      description: "A nice teacher who only knows JS",
      skills: ["Docker", "AWS", "Google Maps"],
      role: "Teacher",
      price: 10,
      currency: "dollar",
      comment: "Super helpful",
      gitHubUrl: "https://github.com/yacinehmito",
      status: "online"
    },
    {
      name: "Maxence Bouret",
      username: "mc100s",
      image: "/static/max.jpeg",
      description: "A good teacher",
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
      description: "A cool teacher",
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
      description: "Cool TA",
      skills: ["HTML", "CSS", "Bootstrap", "Bulma", "Vue.js"],
      role: "Teacher",
      price: 8,
      currency: "dollar",
      comment: "Michael is an excellent TA, Ironhack is lucky to have him!",
      gitHubUrl: "https://github.com/mlande",
      status: "offline"
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
