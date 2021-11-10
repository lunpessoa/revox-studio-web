import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

import Establishments from '@/views/Establishments'
import EstablishmentsList from '@/components/Establishments/EstablishmentsList/EstablishmentsList'
import Establishment from '@/components/Establishments/Establishment/Establishment'

import Schedule from '@/views/Schedule'
import Profile from '@/views/Profile'

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
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const home = {
    path: '/',
    name: 'Home',
    redirect: '/establishments',
}

export const routes = [
  {
    path: '/establishments',
    name: 'Establishments',
    menuLabel: 'Estabelecimentos',
    icon: BarberChairIcon,
    component: Establishments,
    redirect: '/establishments/establishment-list',
    children: [
      {
        path: 'establishment-list',
        name: 'EstablishmentList',
        component: EstablishmentsList,
      },
      {
        path: 'establishment',
        name: 'Establishment',
        component: Establishment,
      },
    ]
  },
  {
    path: '/schedule',
    name: 'Schedule',
    menuLabel: 'Agenda',
    icon: ScheduleIcon,
    component: Schedule,
  },
  {
    path: '/profile',
    name: 'Profile',
    menuLabel: 'Perfil',
    icon: ProfileIcon,
    component: Profile,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    home,
    ...routes,
    ...unauthenticatedRoutes,
  ],
});

export default router;
