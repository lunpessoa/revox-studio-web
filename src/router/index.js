import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

import BarberChairIcon from '@/components/Shared/Icons/BarberChairIcon'
import ProfileIcon from '@/components/Shared/Icons/ProfileIcon'
import ScheduleIcon from '@/components/Shared/Icons/ScheduleIcon'

Vue.use(VueRouter);

export const unauthenticatedRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

export const routes = [
  {
    path: '/establishments',
    name: 'Establishments',
    alias: '/',
    menuLabel: 'Estabelecimentos',
    icon: BarberChairIcon,
    component: Home,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    menuLabel: 'Agenda',
    icon: ScheduleIcon,
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    menuLabel: 'Perfil',
    icon: ProfileIcon,
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    ...unauthenticatedRoutes,
  ],
});

export default router;
