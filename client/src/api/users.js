import axios from "axios";

const users = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
});

const apiUsers = {
  getAll: () => {
    return users.get("/users").then(response => {
      return response.data;
    });
  },

  getTeacherById: (id) => {
    return auth.get('/teacher/'+id).then(response => {
      return response.data;
    });
  },

// need to add skills
  teacherUpdate: (id, name, description, image, price) => {
    return auth.patch('/teacher/:id', {
    id, name, description, image, price
  }).then(response => {
    return response.data;
  }).catch(err => {
    console.error(err);
  });
  },
};

export default apiUsers;
