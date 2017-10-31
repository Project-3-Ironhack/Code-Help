import axios from "axios";

const session = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

const apiSessions = {
  createSession: (teacherId, studentId) => {
    return session
      .post("/session", { teacherId, studentId })
      .then(response => {
        console.log(response)
        return response;
      })
      .catch(err => {
        console.error(err);
      });
  },

  // WIP under this line

  updateSession: (rating, duration) => {
    return session
      .patch("/session", { rating, duration })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  // WIP above this line
};

export default apiSessions;
