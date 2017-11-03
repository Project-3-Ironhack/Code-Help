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

  getSession: id => {
    return session.get(`/sessions/${id}`).then(response => {
      return response.data;
    }).catch(err => {
      console.log(err)
    })
  },

  createSession: (teacherId, studentId) => {
    console.log('the ids are: teacher', teacherId, 'student', studentId )
    console.log('SESSION', session)
    return session
      .post("/session", { teacherId, studentId })
      .then(response => {
        console.log('the response is',response);
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
