import axios from "axios";

const session = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

const apiSessions = {
  saveSession: (teacherId, rating) => {
    return session
      .post("/savesession", { teacherId, rating })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
