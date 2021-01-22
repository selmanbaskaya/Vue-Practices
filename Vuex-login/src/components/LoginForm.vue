<template>
  <div class="row mt-5">
    <div class="col-5" />
    <div class="col-2">
      <div class="form-group">
        <label>Username</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter username"
          v-model="username"
        />
      </div>
      <div class="form-group mt-2">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter Password"
          v-model="password"
        />
      </div>
      <button type="button" class="btn btn-success mt-2" @click="loginControl">
        Login system
      </button>
    </div>
    <div class="col-5" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    loginControl() {
      this.$store.dispatch("loginControl", [this.username, this.password]);

      if (this.$store.getters.getLoginStatus) {
        this.$router.push({ name: "Dashboard" });
      }
    },
  },
};
</script>

<style></style>
