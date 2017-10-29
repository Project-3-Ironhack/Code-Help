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
    return users.get('/teacher/'+id).then(response => {
      return response.data;
    });
  },

// need to add skills, deleted image
  teacherUpdate: (id, name, description, skills, price, currency) => {
    console.log('name testing again,', name, 'desc', description, 'skills', skills, 'price',price, 'currency', currency)
    return users.patch('/teacher/:id', {
    id, name, description, skills, price, currency
  }).then(response => {
    return response.data;
  }).catch(err => {
    console.error(err);
  });
  },

  saveImage: (id, image) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('id', id);

    return users.patch('/images/upload',
      formData, { headers: {'Content-Type': 'multipart/form-data'}
    }).then(response => {
      return response;
    }).catch(err => {
      console.error(err);
    });
  }
};

export default apiUsers;
