<template>
  <section class="how-to bg-color--grey-100 content-element">
    <h2 class="text--align-center">Wie es funktioniert</h2>
    <div class="steps">
      <div class="steps__step text--align-center m--2-top">
        <img
          class="steps__step__image m-bottom"
          v-lazy="'/howTo/lillydoo-your-trialbox-icon.svg'"
          alt="trialbox icon"
          title="Dein Tespaket"
        />
        <h3 class="text--bold text--uppercase">Dein Testpaket</h3>
        <p>
          Wir schenken Dir die Produkte,<br />
          Du übernimmst nur das Porto.
        </p>
      </div>
      <div class="steps__step  text--align-center m--2-top">
        <img
          class="steps__step__image m-bottom"
          v-lazy="'/howTo/lillydoo-your-flexibility-icon.svg'"
          alt="flexibility icon"
          title="Deine Flexibilität"
        />
        <h3 class="text--bold text--uppercase">Deine Flexibilität</h3>
        <p>
          Erste Monatsbox nach 14 Tagen für 49,50&nbsp;€ erhalten. Oder noch vor
          der ersten Lieferung kündigen.
        </p>
        <a class="m--4-top" href="https://www.lillydoo.com/de/windel-abo">
          Erfahre hier mehr über das <br />LILLYDOO Windel-Abo.
        </a>
      </div>
      <div class="steps__step text--align-center m--2-top">
        <img
          class="steps__step__image m-bottom"
          v-lazy="'/howTo/lillydoo-your-subscription-icon.svg'"
          alt="subscription icon"
          title="Deine Monatsbox"
        />
        <h3 class="text--bold text--uppercase">Deine Monatsbox</h3>
        <p>
          Jederzeit Windelgröße, Designs und Lieferintervalle anpassen oder
          weitere Produkte hinzufügen.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.steps {
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  &__step {
    width: 100%;
    padding: 0 1em;
    @media all and (min-width: 52rem) {
      width: 33%;
    }
  }
}
</style>
