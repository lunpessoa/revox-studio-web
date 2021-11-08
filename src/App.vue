<template>
  <div id="app">
    <Sidebar />
    <Header /> 
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
  computed: {
    isMobile() {
      return this.$store.getters.getMobile;
    }
  }
};
</script>

<style lang="scss">
@import "App.scss";
</style>
