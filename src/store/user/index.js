
// const PREPARATION_TIME_FRAMES_URL = "/PreparationTimeFrame";
// import api from '@/utils/api';
// const { http } = api.getInstance();

import {
	SET_MOBILE,
	SET_USER_PROFILE
} from './actions';


const state = {
	userName: sessionStorage.getItem("name") || null,
	userId: sessionStorage.getItem("id") || null,
	userType: sessionStorage.getItem("type") || null,
	mobile: sessionStorage.getItem("mobile") || false,
};

const getters = {
	getUserName: state => state.userName,
	getUserId: state => state.userId,
	getUserType: state => state.userType,
    getMobile: (state) => !!state.mobile,
};

const mutations = {
	[SET_MOBILE]: (state, value) => {
		state.mobile = value,
		sessionStorage.setItem("mobile", value);
	},
	[SET_USER_PROFILE]: (state, data) => {
		sessionStorage.setItem("name", data.nome);
		sessionStorage.setItem("id", data.id);
		sessionStorage.setItem("type", data.idStatus);
		state.userName = data.nome;
		state.userId = data.id;
		state.userType = data.idStatus;
	},
};

const actions = {
	[SET_MOBILE]({ commit }, value) {
		commit(SET_MOBILE, value);
	},
	[SET_USER_PROFILE]: ({ commit }) =>
		new Promise(resolve => {
			http({
				method: 'GET',
				url: '/users',
			}).then(response => {
				const { data } = response;
				commit(SET_USER_PROFILE, data);
				resolve();
			});
		}),
};

export default {
	state,
	getters,
	mutations,
	actions,
};
