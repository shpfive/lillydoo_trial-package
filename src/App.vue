<template>
  <div id="app">
    <HeroBanner></HeroBanner>
    <ConfiguratorTrialPackage></ConfiguratorTrialPackage>
  </div>
</template>

<script>
import HeroBanner from "./components/HeroBanner.vue";
import ConfiguratorTrialPackage from "./components/ConfiguratorTrialPackage.vue";

export default {
  name: "app",
  components: {
    HeroBanner,
    ConfiguratorTrialPackage
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
