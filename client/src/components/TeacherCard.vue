<template>
  <div>
  <div class="card">

    <div @click="viewTeacherInfo()" class="card-image hovering">
      <!-- @click="viewTeacherInfo()" -->
      <figure class="image is-4by3">
        <img :src="result.image" alt="Placeholder image">
      </figure>
      <div class="overlay">
        <p class="title is-4 capitalise"><span id="teacherName">{{result.name}}</span></p>
        <p class="overlay-description">Click to find out more</p>
      </div>

    </div>

    <div class="card-content">
      <div class="media-right">
        <div class="media-content">
          <p class="title is-4 capitalise">{{result.name}}</p>
          <p class="subtitle is-6 capitalise">{{sessions}}</p>
        </div>
      </div>

      <div class="content">
        <div class="tags">
          <a  class="tag is-primary is-rounded" v-show="i < 3" v-for="(skill, i) in result.skills">{{result.skills[i]}}</a>
        </div>
        <p>Student's comment</p>
        <br>
          <div v-if="result.status === 'online'"><span class="capitalise">{{ result.name }} is online</span>
          <button class="button is-success" @click="startLesson(result._id)"><span class="capitalise">Call {{ result.name }}</span></button>
        </div>
        <div class="tag is-medium" v-else><span class="capitalise">{{ result.name }} is offline</span></div>

        <div><span v-if="currency>'0'">{{currency}}{{ result.price }} / minute</span><span v-else ><span class="capitalise">{{result.name}}</span> doesn't charge for their help</span></div>
      </div>
    </div>
  </div>
      <!-- BILLING MODAL -->
        <b-modal :active.sync="isBillingModalActive" has-modal-card>
          <modal-billing-details-form></modal-billing-details-form>
            <!-- <modal-form v-bind="formProps"></modal-form> -->
        </b-modal>

      <!-- TEACHER INFO MODAL -->
        <b-modal :active.sync="isTeacherInfoModalActive" has-modal-card>
          <modal-teacher-info :result="result"></modal-teacher-info>
        </b-modal>

</div>
</template>

<script>
import apiSessions from "@/api/sessions";
import apiUsers from "@/api/users";
import ModalBillingDetailsForm from '@/components/ModalBillingDetailsForm'
import ModalTeacherInfo from '@/components/ModalTeacherInfo'

export default {
  components: {
    ModalBillingDetailsForm,
    ModalTeacherInfo
  },
  data() {
    return {
      userId: "",
      session: "",
      isBillingModalActive: false,
      isTeacherInfoModalActive: false,
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
        if (!user.nameOnCard) {
          this.isBillingModalActive = true;
        } else {
          apiSessions
            .createSession(result, userId)
            .then(session => {
              this.session = session.data.session;
            })
            .then(() => {
              this.$router.push("/lesson/" + this.session._id);
            });
        }
      });
    },
    viewTeacherInfo(){
      this.isTeacherInfoModalActive = true;
    },
  },
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
          return "£"
          break;
      }
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

.overlay{
  height: 100%;
  width: 100%;

  position: absolute;
  z-index: 1;
  top: 185px;
  padding: 15px 20px;
  transition: 0.5s;
  background: rgba(149,149,149,0.9);

}

.hovering:hover .overlay{
  top: 40%;
}

#teacherName{
  color: white;
}
</style>
