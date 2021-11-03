<template>
  <header id="Header">
    <div class="toggle-icon" @click="toggleMenu">
      <HamburguerIcon  />
    </div>
  </header>
</template>

<script>
import HamburguerIcon from '@/components/Shared/Icons/HamburguerIcon'

export default {
  name: 'Header',
  components: {
    HamburguerIcon
  },
  data() {
    return {
      colors: ["#FFFFFF", "#3B185F"],
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu');
    }
  }
};
</script>

<style scoped lang="scss">
@import "Header.scss";
</style>
