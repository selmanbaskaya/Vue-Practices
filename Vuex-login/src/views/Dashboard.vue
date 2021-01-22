<template>
  <div class="home mt-5">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <logout-form />
</template>

<script>
export default {
  components: {
    'logout-form': require('../components/LogoutForm').default
  }
}
</script>

<style>

</style>