import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

import ClientEstablishments from '@/views/Client/Establishments'
import EstablishmentsList from '@/components/Client/Establishments/EstablishmentsList/EstablishmentsList'
import Establishment from '@/components/Client/Establishments/Establishment/Establishment'
import ClientSchedule from '@/views/Client/Schedule'
import ClientProfile from '@/views/Client/Profile'

import EstablishmentSchedule from '@/views/Establishment/Schedule'
import EstablishmentProfile from '@/views/Establishment/Profile'

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

export const clientRoutes = [
  {
    path: '/client/establishments',
    name: 'clientEstablishments',
    menuLabel: 'Estabelecimentos',
    icon: BarberChairIcon,
    component: ClientEstablishments,
    redirect: '/client/establishments/establishment-list',
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
    path: '/client/schedule',
    name: 'clientSchedule',
    menuLabel: 'Agenda',
    icon: ScheduleIcon,
    component: ClientSchedule,
  },
  {
    path: '/client/profile',
    name: 'clientProfile',
    menuLabel: 'Perfil',
    icon: ProfileIcon,
    component: ClientProfile,
  },
];

export const establishmentRoutes = [
  {
    path: '/establishment/schedule',
    name: 'establishmentSchedule',
    menuLabel: 'Agendamentos',
    icon: ScheduleIcon,
    component: EstablishmentSchedule,
  },
  {
    path: '/establishment/profile',
    name: 'establishmentProfile',
    menuLabel: 'Perfil',
    icon: ProfileIcon,
    component: EstablishmentProfile,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    home,
    ...clientRoutes,
    ...establishmentRoutes,
    ...unauthenticatedRoutes,
  ],
});

export default router;
