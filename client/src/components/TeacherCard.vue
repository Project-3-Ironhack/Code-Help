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
          <p class="subtitle is-6 capitalise">{{result.rating}}</p>
        </div>
      </div>

      <div class="content">
        <div class="tags">
          <a  class="tag is-primary is-rounded" v-show="i < 3" v-for="(skill, i) in result.skills">{{result.skills[i]}}</a>
        </div>
        <p>Student's comment</p>
        <br>
        <p v-if="result.status === 'online'">this teacher is ONLIIIINE</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
// On Image: need to use object-fit to force keeping image's ratio

export default {
  data(){
    return {
      userId: '',
    };
  },

  props: ['result'],

  created(){
    const userId = this.$root.user._id;
    console.log('user id', userId);
  },

}


</script>

<style lang="css">
img{
  object-fit: cover;
}

.capitalise{
  text-transform: capitalize;
}
</style>
