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
          <p class="title is-4">{{result.name}}</p>
          <p class="subtitle is-6">{{result.rating}}</p>
        </div>
      </div>

      <div class="content">
        <div class="tags">
          <a  class="tag is-primary is-rounded" v-show="i < 3" v-for="(skill, i) in result.skills">{{result.skills[i].name}}</a>
        </div>
        <p>Student's comment</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['result'],
}
</script>

<style lang="css">
img{
  object-fit: cover;
}
</style>
