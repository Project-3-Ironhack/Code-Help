import axios from "axios";

const session = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

const apiSessions = {
  getAll: () => {
    return session
      .get("/sessions")
      .then(response => {
        return response;
      })
      .catch(err => {
        console.error(err);
      });
  },

  createSession: (teacherId, studentId) => {
    return session
      .post("/session", { teacherId, studentId })
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(err => {
        console.error(err);
      });
  },
  endSession: id => {
    return session
      .patch(`/session/${id}/endDate`)
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  },

  updateSession: (id, rating, comment) => {
    console.log("hi from API:", rating, comment);
    return session
      .patch(`/session/${id}`, {
        rating,
        comment
      })
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default apiSessions;
