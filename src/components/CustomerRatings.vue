<template>
  <div class="customerRatings text--default">
    <div class="ratings">
      <span class="star fa-stack">
        <i
          class="far fa-star color--grey-200"
          :class="{
            'color--yellow': stars >= 1,
            'fas fa-star-half-alt': stars === 1,
            fa: stars > 1
          }"
        ></i>
      </span>
      <span class="star fa-stack">
        <i
          class="far fa-star color--grey-200"
          :class="{
            'color--yellow': stars >= 3,
            'fas fa-star-half-alt': stars === 3,
            fa: stars > 3
          }"
        ></i>
      </span>
      <span class="star fa-stack">
        <i
          class="far fa-star color--grey-200"
          :class="{
            'color--yellow': stars >= 5,
            'fas fa-star-half-alt': stars === 5,
            fa: stars > 5
          }"
        ></i>
      </span>
      <span class="star fa-stack">
        <i
          class="far fa-star color--grey-200"
          :class="{
            'color--yellow': stars >= 7,
            'fas fa-star-half-alt': stars === 7,
            fa: stars > 7
          }"
        ></i>
      </span>
      <span class="star fa-stack">
        <i
          class="far fa-star color--grey-200"
          :class="{
            'color--yellow': stars >= 9,
            'fas fa-star-half-alt': stars === 9,
            fa: stars > 9
          }"
        ></i>
      </span>
    </div>
    <span class="p-left">({{ amount }})</span>
  </div>
</template>

<script>
export default {
  props: {
    amount: {
      type: Number,
      default: 0
    },
    stars: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.customerRatings {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .star {
    width: 1.5em;
  }
}
</style>
