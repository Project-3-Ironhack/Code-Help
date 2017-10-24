import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:3000/api"
});

function saveUserInfo({ token, user }) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
};

const api = {

  signup: userInfo => {
    return auth.post("/signup", userInfo).then(response => {
      return response.data;
    });
  },

  login: (username, password, vm) => {
    return auth.post('/login', { username, password })
    .then(response => {
      saveUserInfo(response.data);
      vm.user = response.data.user;
      return response.data;
    });
  },

  logout: (vm) => {
    localStorage.removeItem('token');
    vm.user = null;
    delete axios.defaults.headers.common['Authorization'];
  },

};


export default api;
