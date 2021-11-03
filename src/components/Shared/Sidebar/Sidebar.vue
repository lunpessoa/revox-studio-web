<template>
  <nav id="Sidebar" :class="[!mobile && 'active']">
    <ul>
      <li class="logo-container" :class="[!mobile && 'active']">
        <div class="icon">
          <RevoxIcon />
        </div>
        <label class="title" v-show="!mobile">ReVox Studios</label>
      </li>
      <router-link
        v-for="route in routes" 
        :key="route.menuLabel"
        :to="route.path"
        v-slot="{ href, navigate, isActive }"
        custom
      >
        <li class="link" :class="[isActive && 'link-active']">
          <b v-for="x in 2" :key="x"></b>
          <a :href="href" @click="navigate" >
            <component :is="route.icon" class="icon" :color="isActive ? colors[1] : colors[0]"/>
            <label class="title">{{ route.menuLabel }}</label>
          </a>
        </li>
      </router-link>
    </ul>
    <span class="logout" :class="[!mobile && 'active']">
      <div class="icon">
        <LeaveIcon />
      </div>
      <label class="title" v-show="!mobile">Logout</label>
    </span>
  </nav>
</template>

<script>
import HamburguerIcon from '@/components/Shared/Icons/HamburguerIcon'
import RevoxIcon from '@/components/Shared/Icons/Logo'
import LeaveIcon from '@/components/Shared/Icons/LeaveIcon'

import { routes } from '@/router/index.js'

export default {
  name: 'Sidebar',
  components: {
    RevoxIcon,
    HamburguerIcon,
    LeaveIcon
  },
  props: {
    mobile: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      colors: ["#FFFFFF", "#3B185F"],
    }
  },
  computed: {
    routes() {
      return routes;
    }
  },
};
</script>

<style scoped lang="scss">
@import "Sidebar.scss";
</style>
