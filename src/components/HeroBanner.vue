<template>
  <section class="hero-banner">
    <div class="hero-banner--content cell p--regular">
      <h1 class="text--xx-large text--secondary text--align-center text--thin">
        Dein gratis Testpaket
      </h1>
      <button
        class="btn btn--primary m--auto-left m--auto-right m-top text--center"
      >
        Wähle deine Größe
      </button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hero-banner {
  min-height: 70vh;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  background-image: url("/heroBanner/header-trialbox-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0;

  @media all and (min-width: 23rem) {
    background-image: url("/heroBanner/header-trialbox-tablet.jpg");
  }
  @media all and (min-width: 50rem) {
    background-image: url("/heroBanner/header-trialbox-desktop.jpg");
    align-items: center;
  }

  &--content {
    background-color: rgba(#ffffff, 0.7);
    padding: var(--x-large);
    @media all and (min-width: 50rem) {
      max-width: 22em;
      margin-right: 4em;
    }
    .btn {
      max-width: 15em;
    }
  }
}
</style>
