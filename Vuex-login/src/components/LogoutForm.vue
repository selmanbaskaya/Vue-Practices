<template>
  <div class="about">
    <h1>Login Successful!</h1>
  </div>

  <button type="button" class="btn btn-warning text-white mt-2" @click="logout">
    Logout system
  </button>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");

      if (!this.$store.getters.getLoginStatus) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style></style>
