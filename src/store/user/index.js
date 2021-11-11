
// const PREPARATION_TIME_FRAMES_URL = "/PreparationTimeFrame";
// import api from '@/utils/api';
// const { http } = api.getInstance();

import {
	SET_MOBILE
} from './actions';


const state = {
	mobile: sessionStorage.getItem("mobile") || false,
};

const getters = {
    getMobile: (state) => state.mobile,
};

const mutations = {
	[SET_MOBILE]: (state) => {
		state.mobile = !state.mobile
		sessionStorage.setItem("mobile", state.mobile);
	},
};

const actions = {
	[SET_MOBILE]({ commit }) {
		commit(SET_MOBILE);
	}
};

export default {
	state,
	getters,
	mutations,
	actions,
};
