<template>
  <section class="trial-package p--2-top p--2-bottom m--auto">
    <div class="cell p-left p-right trial-package__configurator">
      <h2 class="text--x-large">Dein gratis Testpaket</h2>
      <p class="text--regular text--uppercase m-top m-bottom">
        Wähle deine Größe
      </p>
      <div class="configurator">
        <div
          v-for="trialPackage in trialPackages"
          :key="trialPackage.id"
          @click="setSelectedTrialPackage(trialPackage.id)"
          class="configurator__btn text--center"
          :class="{
            'configurator__btn-active':
              trialPackage.id === selectedTrialPackageId
          }"
        >
          <p class="text--medium">{{ trialPackage.size }}</p>
          <label class="text--x-small">
            {{ trialPackage.sizeHint }}
          </label>
        </div>
      </div>
    </div>
    <div class="cell p-left p-right trial-package__image">
      <img
        class="trial-package__image__oekotex"
        src="/products/oekotex_green_de.svg"
        alt="Oeko-Tex Certificate"
      />
      <img
        class=""
        v-if="selectedTrialPackage"
        :src="selectedTrialPackage.image"
        :alt="'Produktbild' + selectedTrialPackage.name"
        :title="selectedTrialPackage.name"
      />
    </div>
    <div class="cell p-left p-right trial-package__details">
      <p class="text--regular">
        Teste jetzt unsere Windel und Feuchttücher - in Größe 1 - 3 enthält dein
        Testpaket unsere Feuchttücher mit 99 % Wasser, ab Größe 4 erhälst Du
        unsere Sensitiven Feuchttücher. Wir zahlen die Produkte,
        <span class="text--bold">Du nur den Versand.</span>
      </p>
      <ul>
        <li class="color--primary">
          Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 €
          pro Lieferung.
        </li>
        <li>
          Preise inkl. MwSt., ggf. zzgl.
          <span class="color--primary">Versandkosten</span>
        </li>
      </ul>
      <button class="btn btn--primary">In den Warenkorb legen</button>
    </div>
  </section>
</template>

<script>
// use json as api example
import trialPackages from "@/json/trialPackages.json";
export default {
  data() {
    return {
      trialPackages,
      selectedTrialPackageId: null
    };
  },
  computed: {
    /**
     * selected trial package by selectedTrialPackageId
     * @returns {Object} trialPackage The trialPackage with given selectedTrialPackageId
     */
    selectedTrialPackage() {
      if (!this.selectedTrialPackageId) return null;
      return trialPackages.find(
        trialPackage => trialPackage.id === this.selectedTrialPackageId
      );
    }
  },
  mounted() {
    // initialize trial package configurator
    this.setInitialTrialPackageSelection();
  },
  methods: {
    /**
     * select package by packageId
     * @param {number} id The id of clicked package
     */
    setSelectedTrialPackage(id) {
      this.selectedTrialPackageId = id;
    },
    /**
     * sets initial trial package selection
     */
    setInitialTrialPackageSelection() {
      // size
      let size = null;
      // check query params
      size = this.getSizeQueryParam();
      //set if not null
    },
    /**
     * get size query param
     * @returns {number} size The query param
     */
    getSizeQueryParam() {
      let uri = window.location.search.substring(1);
      let params = new URLSearchParams(uri);
      return params.get("size");
    }
  }
};
</script>

<style scoped lang="scss">
.trial-package {
  max-width: 80rem;
  width: 100%;
  display: grid;
  grid-template-areas:
    "configurator"
    "image"
    "details";
  grid-gap: 1em;
  @media all and (min-width: 53.5rem) {
    grid-template-columns: 1.3fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "image configurator"
      "image details";
  }

  &__configurator {
    grid-area: configurator;
  }
  &__image {
    grid-area: image;
    position: relative;
    img {
      width: 100%;
      display: block;
      max-width: 35rem;
      margin: 0 auto;
    }
    .trial-package__image__oekotex {
      position: absolute;
      margin-left: 6%;
      width: 30%;
      max-width: 15rem;
      border-radius: 3px;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
    }
  }
  &__details {
    grid-area: details;
  }
}

.configurator {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5em, 1fr));
  grid-gap: 1em;
  &__btn {
    cursor: pointer;
    text-align: center;
    p {
      margin: 0;
      line-height: 1.2;
    }
    color: var(--grey-300);
    border: 1px solid currentColor;
    &-active {
      color: var(--white);
      border-color: var(--primary-color);
      background-color: var(--primary-color);
    }
  }
}
</style>
