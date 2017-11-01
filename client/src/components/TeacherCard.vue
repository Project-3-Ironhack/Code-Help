<template>
  <div>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="result.image" alt="Placeholder image">
      </figure>
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
        <!-- <router-link to="/lesson" v-if="result.status === 'online'">this teacher is ONLINE, start call</router-link> -->
        <div v-if="result.status === 'online'"><span class="capitalise">{{ result.name }} is online</span>
          <button class="button is-success" @click="startLesson(result._id)"><span class="capitalise">Call {{ result.name }}</span></button>
        </div>
        <div class="tag is-medium" v-else><span class="capitalise">{{ result.name }} is offline</span></div>
        <div><span v-if="currency>'0'">{{currency}}{{ result.price }} / minute</span><span v-else >Call <span class="capitalise">{{result.name}}</span> free of charge</span></div>
      </div>
    </div>
  </div>

        <b-modal :active.sync="isModalActive" has-modal-card>
          <modal-form></modal-form>
            <!-- <modal-form v-bind="formProps"></modal-form> -->
        </b-modal>

</div>
</template>

<script>
import apiSessions from "@/api/sessions";
import apiUsers from "@/api/users";
import ModalForm from '@/components/ModalForm'

export default {
  components: {
    ModalForm
  },
  data() {
    return {
      userId: "",
      session: "",
      isModalActive: false,
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
          this.isModalActive = true;
          // this.$router.push("/account");
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
    }
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
</style>
