<template>
  <div id="app">
    <template v-if="isAuthenticated">
      <Sidebar />
      <Header /> 
    </template>
    <div class="content-app" :class="[isMobile && 'active', !isAuthenticated && 'logout']">
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
    },
    isAuthenticated() {
      console.log('Logged Status',this.$store.getters.isLogged);
      return this.$store.getters.isLogged;
    }
  }
};
</script>

<style lang="scss">
@import "App.scss";
</style>
