import axios from "axios";

const session = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

const apiSessions = {
  createSession: teacherId => {
    return session
      .post("/session", { teacherId })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.error(err);
      });
  },

// WIP under this line

  updateSession: (teacherId, rating, duration) => {
    return session
      .patch("/session", { teacherId, rating, duration })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  // WIP above this line
};
