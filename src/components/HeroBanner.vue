<template>
  <section class="hero-banner">
    <div class="hero-banner__content cell p--regular">
      <h1 class="text--secondary text--align-center text--thin">
        Entdecke unsere Hautfreunlichkeit
      </h1>
      <a
        class="btn btn--primary m--auto-left m--auto-right m-top text--center"
        href="#trialbox"
      >
        Wähle deine Größe
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hero-banner {
  height: 1em; // fix for vertical alignment in ie
  min-height: 70vh;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  background-image: url("/heroBanner/header-trialbox-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0;

  @media all and (min-width: 24rem) {
    background-image: url("/heroBanner/header-trialbox-tablet.jpg");
  }
  @media all and (min-width: 52rem) {
    background-image: url("/heroBanner/header-trialbox-desktop.jpg");
    align-items: center;
  }

  &__content {
    background-color: rgba(#ffffff, 0.7);
    padding: var(--x-large);
    @media all and (min-width: 52rem) {
      max-width: 30em;
      margin-right: 4em;
    }
    .btn {
      max-width: 15em;
    }
  }
  h1 {
    font-size: var(--x-large);
    @media all and (min-width: 24rem) {
      font-size: var(--xx-large);
    }
  }
}
</style>
