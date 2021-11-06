<template>
  <header id="Header" :class="[isMobile && 'active']">
    <div class="toggle-icon" @click="toggleMenu">
      <HamburguerIcon  />
    </div>
    <div class="user-container">
      <span>Luan Pessoa</span>
      <div class="img-container">
        <img src="../../../assets/images/user.png" alt="">
      </div>
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
      isMobile: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMobile = !this.isMobile
      this.$emit('toggleMenu', this.isMobile);
    }
  }
};
</script>

<style scoped lang="scss">
@import "Header.scss";
</style>
