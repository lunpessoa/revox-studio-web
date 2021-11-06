<template>
  <div id="app">
    <Sidebar :mobile="isMobile"/>
    <Header @toggleMenu="toggleMenu"/> 
    <div class="content-app" :class="[isMobile && 'active']">
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
    toggleMenu(isMobile) {
      this.isMobile = isMobile;
    }
  }
};
</script>

<style lang="scss">
@import "App.scss";
</style>
