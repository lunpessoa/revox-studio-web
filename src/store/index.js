/* Imports */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

/* Modules Import */
import establishments from './establishments';
import user from './user';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
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
