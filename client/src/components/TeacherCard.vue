<template>
  <div>
  <div class="card">
    <div @click="viewTeacherInfo()" class="card-image hovering">
      <!-- @click="viewTeacherInfo()" -->
      <div class="image is-4by3" style="height: 200px">
        <img :src="result.image" alt="Placeholder image">
      </div>
      <div class="overlay">
        <p class="title is-4 capitalise"><span id="teacherName">{{result.name}}</span></p>
        <p style="font-weight: bold" class="overlay-description">Click to read more</p>
      </div>
    </div>
    <div class="card-content">
      <div class="content">
        <b-taglist>
          <b-tag  class="tag is-rounded" type="is-primary" v-show="i < 3" v-for="(skill, i) in result.skills">{{result.skills[i]}}</b-tag>
        </b-taglist>
        <div class="content feedbacks">
          <hr class="card-separator">
          <p class="content is-size-7">Student feedback:</p>
          <img class="tiny-img" :src="rating">
          <p v-if="result.topSession"><em>"{{slicedComment}}"</em></p>
        </div>
        <div class="card-actions">
          <div v-if="result.status === 'online'">
            <p class="button is-success" @click="startLesson(result._id)"><span class="capitalise">Call {{ firstName }}</span></p>
          </div>
          <div class="button is-static" v-else><span class="capitalise">{{ firstName }}</span><span>&nbsp</span><span>is offline</span></div>

        <div class="content" style="padding-top: 10px;"><span class="is-small" v-if="result.price>'0'">{{currency}}{{ result.price }} / minute</span><span v-else ><span class="capitalise">{{firstName}}</span> doesn't charge for their help</span></div>
      </div>
    </div>
    </div>
  </div>
      <!-- BILLING MODAL -->
        <!-- <b-modal :active.sync="isBillingModalActive" has-modal-card>
          <modal-billing-details-form></modal-billing-details-form>
        </b-modal> -->

      <!-- TEACHER INFO MODAL -->
        <b-modal :active.sync="isTeacherInfoModalActive" has-modal-card>
          <modal-teacher-info :result="result"></modal-teacher-info>
        </b-modal>

</div>
</template>

<script>
import apiSessions from "@/api/sessions";
import apiUsers from "@/api/users";
// import ModalBillingDetailsForm from "@/components/ModalBillingDetailsForm";
import ModalTeacherInfo from "@/components/ModalTeacherInfo";

export default {
  components: {
    // ModalBillingDetailsForm,
    ModalTeacherInfo
  },
  data() {
    return {
      userId: "",
      session: null,
      // isBillingModalActive: false,
      isTeacherInfoModalActive: false
    };
  },

  props: ["result", "sessions"],

  created() {
    const userId = this.$root.user._id;
  },


  methods: {
    startLesson(result, teacherId, studentId) {
      const userId = this.$root.user._id;
      apiUsers.getStudentById(userId).then(user => {
          apiSessions
            .createSession(result, userId)
            .then(session => {
              this.session = session.data.session;
            })
            .then(() => {
              this.$router.push("/lesson/" + this.session._id);
            });
        // }
      });
    },
    viewTeacherInfo() {
      this.isTeacherInfoModalActive = true;
    },
  },

      // this.$checkout.open({
      //   name: 'Add your payment details',
      //   currency: 'USD',
      //   amount: 99999,
      //   token(token) {
      //     console.log('this is the token',token);
      //     //   this.$checkout.close();
      //   }
      // })
      // .then(()=>{
    // *********************************

        // if (!user.token && this.result.price >0) {
        //   this.isBillingModalActive = true;
        //   // setTimeout(()=>{
        //   //   this.isBillingModalActive = false;
        //   // },3000)
        // } else {

  computed: {
    currency: function() {
      switch (this.result.currency) {
        case "dollar":
          return "$";
          break;
        case "euro":
          return "€";
          break;
        case "sterling":
          return "£";
          break;
      }
    },
    rating: function() {
      const rates = Math.round(this.result.rating);
      switch (rates) {
        case 0:
          return "/static/super-happy-3.svg";
          break;
        case 1:
          return "/static/confused-1.svg";
          break;
        case 2:
          return "/static/happy-2.svg";
          break;
        case 3:
          return "/static/super-happy-3.svg";
          break;
      }
    },
    firstName: function() {
      return this.result.name.split(" ")[0]
    },
    slicedComment: function() {
      const comment = this.result.topSession.comment
      return comment.length <= 50 ? comment : comment.substring(0, 50) + "..."
    }
  }
};
</script>

<style lang="css">
img{
  object-fit: cover;
}

.capitalise{
  text-transform: capitalize;
}

.hovering {
  overflow: hidden;
  position: relative;
  color: white;

}


.feedbacks {
  min-height: 122px;
}

.card-separator {
  width: 80%;
  height: 1px;
  margin: auto;
  margin-bottom: 16px;
  background-color: #EDEDED;

}

.overlay{
  height: 100%;
  width: 100%;

  position: absolute;
  z-index: 1;
  /* controls how high the overlay is before hover -- set to % rather than pixels to deal with different screen sizes */
  top: 75%;
  /* controls the padding on the teacher's name in the overlay */
  padding: 15px 20px;
  transition: 0.5s;
  background: rgba(50, 115, 220, 0.65);

}

.hovering:hover .overlay{
  /* controls how hight the overlay rises */
  top: 40%;
}

.tiny-img {
  height: 20px
}

#teacherName{
  color: white;
}

@media (min-width: 769px) and (max-width: 1024px) {
  .overlay {
    top: 72%;
  }
  #teacherName {
    font-size: 18px;
  }
  .feedbacks {
    min-height: 170px;
  }
}

</style>
