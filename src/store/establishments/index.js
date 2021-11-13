
import api from '@/utils/api';
const { http } = api.getInstance();

import {
	GET_ESTABLISHMENTS_REQUEST,
	GET_ESTABLISHMENTS_SUCCESS,
	GET_ESTABLISHMENTS_ERROR,
	SELECT_ESTABLISHMENT_SCHEDULING
} from './actions';


const state = {
	establishmentsStatus: '',
	selectedScheduling: null,
};

const getters = {
	isEstablishmentsLoaded: (state) => state.establishmentsStatus !== 'loading',
    hasSelectedScheduling: (state) => state.selectedScheduling !== null,
    hasSelectedScheduling: (state) => state.selectedScheduling !== null,
};

const mutations = {
	[GET_ESTABLISHMENTS_REQUEST]: (state) => state.establishmentsStatus == 'loading',
	[GET_ESTABLISHMENTS_SUCCESS]: (state) => state.establishmentsStatus == 'success',
	[GET_ESTABLISHMENTS_ERROR]: (state) => state.establishmentsStatus == 'error',
	[SELECT_ESTABLISHMENT_SCHEDULING]: (state, scheduling) => state.selectedScheduling = scheduling,
};

const actions = {
	[GET_ESTABLISHMENTS_REQUEST]: ({ commit }) => {
		return new Promise((resolve, reject) => {
			commit(GET_ESTABLISHMENTS_REQUEST);
			http({
				method: 'GET',
				url: '/Clientes/ListarEstabelecimentos',
			})
				.then((data) => {
					commit(GET_ESTABLISHMENTS_SUCCESS);
					resolve(data);
				})
				.catch(error => {
					commit(GET_ESTABLISHMENTS_ERROR);
					reject(error);
				});
		});
	},
	[SELECT_ESTABLISHMENT_SCHEDULING]: ({ commit }, scheduling) => {
		commit(SELECT_ESTABLISHMENT_SCHEDULING, scheduling);
	}
};

export default {
	state,
	getters,
	mutations,
	actions,
};
