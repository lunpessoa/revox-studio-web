
// const PREPARATION_TIME_FRAMES_URL = "/PreparationTimeFrame";
// import api from '@/utils/api';
// const { http } = api.getInstance();

import {
	SELECT_ESTABLISHMENT_SCHEDULING
} from './actions';


const state = {
	selectedScheduling: null,
};

const getters = {
	getSelectedScheduling: (state) => state.selectedScheduling,
    hasSelectedScheduling: (state) => state.selectedScheduling !== null,
};

const mutations = {
	[SELECT_ESTABLISHMENT_SCHEDULING]: (state, scheduling) => {
		state.selectedScheduling = scheduling
	},
};

const actions = {
	[SELECT_ESTABLISHMENT_SCHEDULING]({ commit }, scheduling) {
		commit(SELECT_ESTABLISHMENT_SCHEDULING, scheduling);
	}
};

export default {
	state,
	getters,
	mutations,
	actions,
};
