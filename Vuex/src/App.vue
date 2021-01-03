<template>
  <div id="app">
    <h4>State: {{ message}}, {{ username }}</h4>
    <h4>Getters: {{ welcomeMessage }}</h4>
    <hr />
    <input v-model="name">
    <button @click="updateName">Update Name</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      name: 'selmanbaskaya',
    };
  },
  computed: {
    ...mapState([
      'message',
      'username',
    ]),
    ...mapGetters([
      'welcomeMessage',
    ]),
  },
  methods: {
    ...mapActions([
      'updateUsername',
    ]),
    updateName() {
      this.updateUsername(this.name);
      this.updateUsername(this.name);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
