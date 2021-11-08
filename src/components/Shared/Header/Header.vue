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

import { 
  SET_MOBILE,
} from "@/store/user/actions"

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
      console.log(this.isMobile);
      this.$store.dispatch(SET_MOBILE);
      console.log(this.isMobile);
    }
  },
  computed: {
    isMobile() {
      return this.$store.getters.getMobile;
    }
  }
};
</script>

<style scoped lang="scss">
@import "Header.scss";
</style>
