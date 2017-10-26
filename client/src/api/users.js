import axios from "axios";

const users = axios.create({
  baseURL: "http://localhost:3000/api"
});

const apiUsers = {
  getAll: () => {
    return auth.get("/users").then(response => {
      return response.data;
    });
  }
}
