<template>
  <section class="container">
    <h1>How was your lesson with
      <span v-if="this.teacher" class="capitalise">{{firstName}}</span>
      <span v-else>your teacher</span>?

    </h1>
    <div class="radios">
    <form @submit.prevent="rating" class="form-container">
          <input id="radio1" class="radio" type="radio" value="1" v-model="rating">
          <label for="radio1">
            <img class="rating-icon" src="/static/confused-1.svg">
          </label>
          <input id="radio2" class="radio" type="radio" value="2" v-model="rating">
          <label for="radio2">
            <img class="rating-icon" src="/static/happy-2.svg">
          </label>
          <input id="radio3" class="radio" type="radio" value="3" v-model="rating">
          <label for="radio3">
            <img class="rating-icon" src="/static/super-happy-3.svg">
          </label>
          <br />
          <br />

          <label class="label" style="text-align: left">Help your fellow coders by leaving some feedback <span style="font-weight: normal">(required)</span>
          <b-field type="is-info no-icons" >
            <b-input pack="fa" maxlength="200" size="is-medium" type="textarea" v-model="comment" placeholder="So...tell us how it went!"/>
          </b-field>
          </label>

        <button @click="() => { rateLesson(); success(); }" v-if="rating && comment" type="button" class="button is-success" name="button">Submit feedback</button>
        <button @click="danger" v-else type="button" class="button is-light" name="button">Submit feedback</button>
      </form>
    </div>
<br>
    <div>
      Your lesson lasted <span style="font-weight: bold">{{Math.ceil(sessionLength)}} minute<span v-if="Math.ceil(sessionLength)!==1">s</span></span>.
      <span v-if="teacher.price>0">The price of your lesson was <span style="font-weight: bold">{{teacher.currency === 'dollar' ? '$' : teacher.currency === 'euro' ? '€' : teacher.currency === 'sterling' ? '£' :''  }}{{teacher.price * Math.ceil(sessionLength)}}</span>.</span> Thank you for using Code Help!
    </div>

<br>
  <b-modal :active.sync="isSocialSharingModalActive" @close="close" has-modal-card>
    <social-sharing/>
  </b-modal>

  </section>
</template>

<script>
import apiSessions from "@/api/sessions";
import apiUsers from "@/api/users";
import SocialSharing from "@/components/SocialSharing";

export default {
  data() {
    return {
      rating: "",
      session: "",
      comment: "",
      isActive: false,
      isSocialSharingModalActive: false,
      teacher: "",
      liveSession: "",
      sessionLength:'',
    };
  },
  components: {
    SocialSharing
  },
  created() {
    const id = this.$route.params[0];
    tagoveApp.remove();
    apiSessions
      .getSession(id)
      .then(session => {
        this.sessionLength = (Date.parse(session.session.endDate)- Date.parse(session.session.startDate)) / 1000 / 60;
        console.log('the session lasted', this.sessionLength);
        return (this.liveSession = session);
      })
      .then(() => {
        const teacherId = this.liveSession.session.teacher;
        apiUsers.getTeacherById(teacherId).then(teacher => {
          return (this.teacher = teacher);
        });
      });
  },
  computed: {
    firstName: function() {
      return this.teacher.name.split(" ")[0];
    }
  },
  methods: {
    rateLesson() {
      const id = this.$route.params[0];
      const rating = this.rating;
      const comment = this.comment;
      apiSessions.updateSession(id, rating, comment).then(session => {
        this.session = session;
      });
    },
    success() {
      this.$toast.open({
        duration: 5000,
        message: "Thanks for your feedback!",
        position: "is-top",
        type: "is-success",
        container: "section"
      });
      setTimeout(() => {
        this.isSocialSharingModalActive = !this.isSocialSharingModalActive;
      }, 1000);
    },
    danger() {
      this.$toast.open({
        duration: 4000,
        message: `Please leave a rating and a comment before submitting`,
        position: "is-top",
        type: "is-danger"
      });
    },
    close() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="css">

ul {
    list-style: none;
}

li {
    display: inline-block;
    margin-right: 15px;
}

.radio {
 visibility:hidden;
}

.form-container {
  max-width:500px;
  margin: auto;
}

label {
  cursor: pointer;
  font-size: 1.8rem;
}

input:checked + img {
    height: 80px
}

.rating-icon {
    height: 60px;
    filter: grayscale(100%);
}

.rating-icon:hover {
  filter: grayscale(0%);
}

input[type="radio"]:checked + label >
  .rating-icon {
  filter: grayscale(0%);
}

.capitalise {
  text-transform: capitalize;
}


</style>

<style>

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    lightgrey !important;
    font-size: 0.8em;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    lightgrey !important;
   font-size: 1em;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    lightgrey !important;
   font-size: 1em;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    lightgrey !important;
   font-size: 1em;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:    lightgrey !important;
   font-size: 1em;
}

</style>
