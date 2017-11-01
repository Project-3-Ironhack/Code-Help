import axios from "axios";
import apiUsers from "@/api/users";

const auth = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
});

function saveUserInfo({ token, user }) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

const api = {
  signup: userInfo => {
    return auth.post("/signup", userInfo).then(response => {
      return response.data;
    });
  },

  login: (username, password, vm) => {
    return auth.post("/login", { username, password }).then(response => {
      saveUserInfo(response.data);
      vm.user = response.data.user;
      return response.data;
    });
  },

  checkUser: vm => {
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("user");
    if (token && userInfo) {
      const user = JSON.parse(userInfo);
      saveUserInfo({
        token,
        user
      });
      vm.user = user;
    }
  },

  logout: vm => {
    console.log('test 2')
    
    localStorage.removeItem("token");
    console.log('vmuser check', vm.user)
    console.log('changing online status', vm.user._id, 'offline')
    apiUsers.updateOnlineStatus(vm.user._id, 'offline');

    vm.user = null;
    delete axios.defaults.headers.common["Authorization"];
  },

};

export default api;
