<template>
  <div id="app">
    <HeroBanner></HeroBanner>
    <ConfiguratorTrialPackage></ConfiguratorTrialPackage>
    <HowTo></HowTo>
  </div>
</template>

<script>
import HeroBanner from "./components/HeroBanner.vue";
import ConfiguratorTrialPackage from "./components/ConfiguratorTrialPackage.vue";
import HowTo from "./components/HowTo.vue";

export default {
  name: "app",
  components: {
    HeroBanner,
    ConfiguratorTrialPackage,
    HowTo
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
