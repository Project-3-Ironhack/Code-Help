<template>
  <div>
    <form>
      <label>Username
        <input type="text" name="" value="">
      </label><br/>
      <label>Password
        <input type="password" name="" value="">
      </label><br/>
      <button type="submit" name="button">Log in</button>
    </form>
    Don't have an account? <router-link to="/signup">Click here to sign up.</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="css">
</style>
