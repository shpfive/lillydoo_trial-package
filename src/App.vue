<template>
  <div id="app">
    <HeroBanner></HeroBanner>
    <ConfiguratorTrialPackage></ConfiguratorTrialPackage>
    <HowTo></HowTo>
    <ProductTrialPackage></ProductTrialPackage>
    <div class="page-end"></div>
  </div>
</template>

<script>
import HeroBanner from "./components/HeroBanner.vue";
import ConfiguratorTrialPackage from "./components/ConfiguratorTrialPackage.vue";
import HowTo from "./components/HowTo.vue";
import ProductTrialPackage from "./components/ProductTrialPackage.vue";

export default {
  name: "app",
  components: {
    HeroBanner,
    ConfiguratorTrialPackage,
    HowTo,
    ProductTrialPackage
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
