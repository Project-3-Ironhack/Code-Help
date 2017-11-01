<template>
    <div class="modal-card">
        <section class="modal-card-body">

            {{result}}

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
          <p class="subtitle is-6 capitalise">{{result.rating}}</p>
        </div>
      </div>

      <div class="content">
        <div class="tags">
          <a  class="tag is-primary is-rounded" v-show="i < 3" v-for="(skill, i) in result.skills">{{result.skills[i]}}</a>
        </div>
        <p>Student's comment</p>
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
import apiUsers from "@/api/users"


export default {

    data() {
        return {
            currency: '',
        };
    },
    props: ["result"],
    created(){
        this.result.currency === 'sterling' ? this.currency = '£' : this.result.currency === 'euro' ? this.currency = "€" : this.result.currency === 'dollar' ? this.currency = "$" : '';
    }

}
</script>

<style>
    .modal-card{
        border-radius: 8px;
    }
</style>
