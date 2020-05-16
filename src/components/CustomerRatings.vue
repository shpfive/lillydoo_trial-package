<template>
  <div class="customerRatings text--default">
    <div class="ratings">
      <span class="star fa-stack" v-for="i in [1, 3, 5, 7, 9]" :key="i">
        <i
          class="far fa-star color--grey-200"
          :class="{
            'color--yellow': stars >= i,
            'fas fa-star-half-alt': stars === i,
            fa: stars > i
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
