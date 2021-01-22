<template>
  <div class="home mt-5">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <login-control-message />
  <login-form />
</template>

<script>
export default {
  name: "Home",
  components: {
    "login-form": require("../components/LoginForm").default,
    "login-control-message": require("../components/LoginControlMessage").default,
  },
};
</script>
