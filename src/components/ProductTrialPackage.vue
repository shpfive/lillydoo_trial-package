<template>
  <section class="product-trial-package content-element">
    <h2 class="text--align-center">Dein Testpaket enthält</h2>
    <div class="trial-package-contains">
      <div
        class="trial-package-contains__product"
        v-for="product in selectedTrialPackage.products"
        :key="product.id"
      >
        <div class="trial-package-contains__product__image">
          <img
            v-lazy="product.image"
            :alt="product.name + ' Produktbild'"
            :title="product.name"
          />
        </div>
        <div class="trial-package-contains__product__details">
          <h3 class="text--uppercase">{{ product.name }}</h3>
          <p>{{ product.ratings.stars }}* ({{ product.ratings.amount }})</p>
          <ul class="p--0 p-left">
            <li v-for="(feature, index) in product.features" :key="index">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      selectedTrialPackage: "trialPackages/selectedTrialPackage"
    }),
    diapers() {
      if (this.selectedTrialPackage && this.selectedTrialPackage.diapers)
        return this.selectedTrialPackage.diapers;
      return null;
    },
    wipes() {
      if (this.selectedTrialPackage && this.selectedTrialPackage.wipes)
        return this.selectedTrialPackage.wipes;
      return null;
    }
  }
};
</script>

<style lang="scss" scoped>
.trial-package-contains {
  max-width: var(--max-width);
  width: 100%;
  margin: 2em auto;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  &__product {
    width: 100%;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    align-items: top;
    @media all and (min-width: 52em) {
      width: 50%;
    }
    &__image {
      width: 35%;
      min-width: 6rem;
      max-width: 12rem;
      margin-right: 2em;
      flex-grow: 0;
      img {
        width: 100%;
      }
    }
    &__details {
      width: 100%;
    }
  }
}
</style>
