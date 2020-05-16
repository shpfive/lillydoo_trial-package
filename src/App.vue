<template>
  <div id="app">
    <HeroBanner></HeroBanner>
    <ConfiguratorTrialPackage></ConfiguratorTrialPackage>
    <HowTo></HowTo>
    <ProductTrialPackage></ProductTrialPackage>
    <div
      v-lazy:background-image="'/generall/pusteblume-pattern-04.png'"
      class="page-end"
    ></div>
  </div>
</template>

<script>
import HeroBanner from "@/components/HeroBanner.vue";
import ConfiguratorTrialPackage from "@/components/ConfiguratorTrialPackage.vue";

export default {
  name: "app",
  components: {
    HeroBanner,
    ConfiguratorTrialPackage,
    HowTo: () => import("@/components/HowTo.vue"),
    ProductTrialPackage: () => import("@/components/ProductTrialPackage.vue")
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
