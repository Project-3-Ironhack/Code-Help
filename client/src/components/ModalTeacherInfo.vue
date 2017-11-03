<template>
    <div class="modal-card">
        <section class="modal-card-body">
          <h1>{{result.name}}</h1>
          <h3 class="title is-4 capitalise">Rating: <img class="rating-image" :src="rating"></h3>
          <h3>{{result.description}}</h3>

        <div class="card">

          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="result.image" alt="Placeholder image">
            </figure>
          </div>

    <div class="card-content">
      <div class="media-right">
        <div class="media-content">
          <div class="tags">
            <a  class="tag is-primary is-rounded" v-for="(skill, i) in result.skills">{{result.skills[i]}}</a>
          </div>
          <a :href="result.gitHubUrl" target="_blank"><icon name="github" scale="2"></icon></a>
          <p class="subtitle is-6 capitalise"></p>
        </div>
      </div>

      <div class="content">
        <p><strong>Student's comment</strong>: {{result.topSession.comment}}</p>
        <br>
        <!-- <router-link to="/lesson" v-if="result.status === 'online'">this teacher is ONLINE, start call</router-link> -->
         <div><span v-if="result.currency>'0'">{{currency}}{{ result.price }} / minute</span><span v-else >Call <span class="capitalise">{{result.name}}</span> free of charge</span></div>
      </div>
    </div>
  </div>

        </section>
    </div>
</template>

<script>
import apiUsers from "@/api/users";

export default {
  data() {
    return {
      currency: ""
    };
  },
  props: ["result"],
  created() {
    this.result.currency === "sterling"
      ? (this.currency = "£")
      : this.result.currency === "euro"
        ? (this.currency = "€")
        : this.result.currency === "dollar" ? (this.currency = "$") : "";
  },
  computed: {
    rating: function() {
      const rates = Math.round(this.result.rating);
      console.log(rates);
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
    }
  }
};
</script>

<style>
.rating-image {
  width: 25px;
}

.modal-card {
  border-radius: 8px;
}
</style>
