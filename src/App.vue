<template>
  <div id="app">
    <Sidebar :mobile="isMobile"/>
    <div class="content" :class="[isMobile && 'active']">
      <Header @toggleMenu="toggleMenu"/> 
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Shared/Sidebar/Sidebar.vue';
import Header from '@/components/Shared/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      isMobile: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMobile = !this.isMobile;
    }
  }
};
</script>

<style lang="scss">
@import "App.scss";
</style>
