<template>
  <div class="row">
    <div class="col-5" />
    <div class="col-2">
      <div
        class="alert alert-danger"
        role="alert"
        v-if="$store.getters.loginControlMessage"
      >
        Username and/or password incorrect!
      </div>
    </div>
    <div class="col-5" />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
