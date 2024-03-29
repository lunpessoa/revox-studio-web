/* Imports */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

/* Modules Import */
import auth from './auth';
import register from './register';
import user from './user';
import establishments from './establishments';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		auth,
		register,
		user,
		establishments
	},
	plugins: [
		createPersistedState({
			key: 'vuex-user-auth',
			paths: ['auth'],
			storage: {
				getItem: (key) => Cookies.get(key),
				removeItem: (key) => Cookies.remove(key),
				setItem: (key, value) =>
					Cookies.set(
						key,
						value,
					)
			},
		})
	],
});
