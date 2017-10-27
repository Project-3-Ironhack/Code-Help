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
  teacherUpdate: (id, description, price) => {
    return users.patch('/teacher/:id', {
    id, description, price
  }).then(response => {
    return response.data;
  }).catch(err => {
    console.error(err);
  });
  },

  saveImage: (id, image) => {
    console.log("DEBUG id", id)
    console.log("DEBUG image", image)
    const formData = new FormData();
    formData.append('image', image);
    formData.append('id', id);
    console.log("DEBUG formData", formData)
    console.log('i made it here', id, image, formData);

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
