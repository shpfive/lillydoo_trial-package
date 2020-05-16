<template>
  <section id="trialbox" class="trial-package content-element">
    <div class="configurator">
      <div class="cell p-left p-right configurator__selection">
        <h2 class="text--x-large">Dein gratis Testpaket</h2>
        <p class="text--regular text--uppercase m-top m-bottom">
          Wähle deine Grösse
        </p>
        <div class="selection">
          <div
            v-for="trialPackage in trialPackages"
            :key="trialPackage.id"
            @click="setSelectedTrialPackage(trialPackage)"
            class="selection__btn text--center"
            :class="{
              'selection__btn-active':
                trialPackage.id === selectedTrialPackageId
            }"
          >
            <p class="text--medium">{{ trialPackage.size }}</p>
            <label class="text--small">
              {{ trialPackage.sizeHint }}
            </label>
          </div>
        </div>
      </div>
      <div class="cell p-left p-right configurator__image">
        <img
          class="configurator__image__oekotex"
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
      <div class="cell p-left p-right configurator__details">
        <p class="text--regular">
          Teste jetzt unsere Windel und Feuchttücher - in Größe 1 - 3 enthält
          dein Testpaket unsere Feuchttücher mit 99 % Wasser, ab Größe 4 erhälst
          Du unsere Sensitiven Feuchttücher. Wir zahlen die Produkte,
          <span class="text--bold">Du nur den Versand.</span>
        </p>
        <ul>
          <li class="color--primary">
            Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 €
            pro Lieferung.
          </li>
          <li>
            Preise inkl. MwSt., ggf. zzgl.
            <a href="https://www.lillydoo.com/de/zahlung-und-versand"
              >Versandkosten</a
            >
          </li>
        </ul>
        <button class="btn btn--primary" @click="addToBasket()">
          In den Warenkorb legen
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// map store to component
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    // data from store
    ...mapGetters({
      trialPackages: "trialPackages/trialPackages",
      selectedTrialPackageId: "trialPackages/selectedTrialPackageId",
      selectedTrialPackage: "trialPackages/selectedTrialPackage"
    })
  },
  mounted() {
    // check if not selected and trialPackages given
    if (!this.selectedTrialPackageId && this.trialPackages.length) {
      // initialize trialPackage Selection
      this.setInitialTrialPackageSelection();
    }
  },
  methods: {
    // methods from store
    ...mapMutations({
      setSelectedTrialPackage: "trialPackages/setSelectedTrialPackage"
    }),
    /**
     * sets initial trial package selection
     */
    setInitialTrialPackageSelection() {
      // helper
      let size = null;
      // check query params
      size = this.getSizeQueryParam();
      //set if not null
      if (size) {
        const trialPackage = this.getTrialPackageBySize(size);
        if (trialPackage) {
          this.setSelectedTrialPackage(trialPackage);
          return;
        }
      }
      // set first
      this.setSelectedTrialPackage(this.trialPackages[0]);
    },

    /**
     * get size query param
     * @returns {number} size The query param
     */
    getSizeQueryParam() {
      if (typeof URLSearchParams !== "function") return null;
      let uri = window.location.search.substring(1);
      let params = new URLSearchParams(uri);
      return parseInt(params.get("size"));
    },
    /**
     * get trialPacke by size
     * @param {number} size The size of wanted package
     * @returns {Object} trialPackage The found trialPackage with given size
     */
    getTrialPackageBySize(size) {
      return this.trialPackages.find(
        trialPackage => trialPackage.size === size
      );
    },
    /**
     * set selected trial package to basket
     */
    addToBasket() {
      alert("add size " + this.selectedTrialPackage.size + " to basket");
    }
  }
};
</script>

<style scoped lang="scss">
.configurator {
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "selection"
    "image"
    "details";
  grid-gap: 1em;
  @media all and (min-width: 52rem) {
    grid-template-columns: 1.3fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "image selection"
      "image details";
  }

  &__selection {
    grid-area: selection;
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
    .configurator__image__oekotex {
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

.selection {
  display: flex;
  margin: -0.5em;
  flex-wrap: wrap;
  &__btn {
    margin: 0.5em;
    min-width: 4em;
    width: calc((100% / 5) - 1em);
    max-width: calc((100% / 4) - 1em);
    flex-grow: 1;
    padding: 0.25em;
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
