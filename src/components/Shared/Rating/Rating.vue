<template>
  <div class="rating">
    <ul class="list">
      <li @click="rate(star)" v-for="star in 5" :key="star.stars" :class="`star ${isDisable ? 'disabled' : ''}`">
        <Star v-if="star <= rateStar" />
        <EmptyStar v-else />
      </li>
    </ul>
  </div>
</template>

<script>
import EmptyStar from "@/components/Shared/Icons/StarIcon";
import Star from "@/components/Shared/Icons/StarIcon";

export default {
  name: 'Rating',
  components: {
    EmptyStar,
    Star
  },
  props: {
    isDisable: {
      type: Boolean,
      default: false
    },
    stars: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      rateStar: this.stars,
    }
  },
  methods: {
    rate(star) {
      if(this.isDisable) return;
      if (star <= 5 && star >= 0) {
        this.rateStar = this.rateStar === star ? star - 1 : star
      }
      this.$emit('rate', this.rateStar);
    }
  },
}
</script>

<style lang="scss">
@import "Rating.scss";
</style>
