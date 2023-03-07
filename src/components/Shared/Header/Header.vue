<template>
  <header id="Header" :class="[mobile ? 'active': '']">
    <div class="toggle-icon" @click="toggleMenu">
      <HamburguerIcon  />
    </div>
    <div class="user-container">
      <span>{{ userName }}</span>
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
      mobile: false,
    }
  },
  mounted(){
    this.mobile = this.isMobile;
  },
  methods: {
    toggleMenu() {
      this.mobile = !this.mobile;
      this.$store.dispatch(SET_MOBILE, this.mobile);
    }
  },
  computed: {
    isMobile() {
      return this.$store.getters.getMobile;
    },
    userName() {
      return this.$store.getters.getUserName;
    }
  }
};
</script>

<style scoped lang="scss">
@import "Header.scss";
</style>
