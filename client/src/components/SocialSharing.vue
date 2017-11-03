<template lang="html">
  <div class="modal-card">
      <section class="modal-card-body">
        <social-sharing url="https://code-help.herokuapp.com"
                    title="Learn to code with experts around the world"
                    description="I'm winning with Code Help"
                    quote="I'm winning with Code Help"
                    hashtags="vuejs, javascript, coder4life"
                    inline-template>
      <div>
        <h4>Help us educate the next generation of coders</h4>
        <p>Share your experience with the world:</p>

        <button class="button is-info social-button">
            <network network="facebook">
              <icon class="social-icon" name="facebook"></icon>
            </network>
        </button>

        <button class="button is-info social-button">
          <network network="linkedin">
            <icon class="social-icon" name="linkedin"></icon>
          </network>
        </button>

        <button class="button is-info social-button">
          <network network="twitter">
            <icon class="social-icon" name="twitter"></icon>
          </network>
        </button>

      </div>
    </social-sharing>
  </section>
</div>

</template>

<script>
export default {
};
</script>


<style lang="css">

.social-icon {
  margin:3px;
  padding-bottom: 3px;
}

.social-button {
  padding: 10px;
}


</style>
