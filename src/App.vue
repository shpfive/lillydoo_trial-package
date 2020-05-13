<template>
  <div id="app">
    <HeroBanner></HeroBanner>
  </div>
</template>

<script>
import HeroBanner from "./components/HeroBanner.vue";

export default {
  name: "app",
  components: {
    HeroBanner
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
