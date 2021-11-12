import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

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

function authGuard({to, from, next}, type) {
	if (store.getters.isLogged && store.getters.getUserType == type) {
		return next();
	}
	return next('/Login');
}

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
    beforeEnter: (to, from, next) => authGuard({ to, from, next }, 1),
}

export const clientRoutes = [
  {
    path: '/client/establishments',
    name: 'ClientEstablishments',
    menuLabel: 'Estabelecimentos',
    icon: BarberChairIcon,
    component: ClientEstablishments,
    redirect: '/client/establishments/establishment-list',
    children: [
      {
        path: 'establishment-list',
        name: 'EstablishmentList',
        component: EstablishmentsList,
        beforeEnter: (to, from, next) => authGuard({ to, from, next }, 1),
      },
      {
        path: 'establishment',
        name: 'Establishment',
        component: Establishment,
        beforeEnter: (to, from, next) => authGuard({ to, from, next }, 1),
      },
    ]
  },
  {
    path: '/client/schedule',
    name: 'ClientSchedule',
    menuLabel: 'Agenda',
    icon: ScheduleIcon,
    component: ClientSchedule,
    beforeEnter: (to, from, next) => authGuard({ to, from, next }, 1),
  },
  {
    path: '/client/profile',
    name: 'ClientProfile',
    menuLabel: 'Perfil',
    icon: ProfileIcon,
    component: ClientProfile,
    beforeEnter: (to, from, next) => authGuard({ to, from, next }, 1),
  },
];

export const establishmentRoutes = [
  {
    path: '/establishment/schedule',
    name: 'EstablishmentSchedule',
    menuLabel: 'Agendamentos',
    icon: ScheduleIcon,
    component: EstablishmentSchedule,
    beforeEnter: (to, from, next) => authGuard({ to, from, next }, 2),
  },
  {
    path: '/establishment/profile',
    name: 'EstablishmentProfile',
    menuLabel: 'Perfil',
    icon: ProfileIcon,
    component: EstablishmentProfile,
    beforeEnter: (to, from, next) => authGuard({ to, from, next }, 2),
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
