import api from '@/utils/api';
const { http } = api.getInstance();

import {
	REGISTER_CLIENT,
	REGISTER_ESTABLISHMENT
} from './actions';

const state = {};

const getters = {};

const mutations = {}

const actions = {
	[REGISTER_ESTABLISHMENT]: ({ commit }, requestData) =>
		new Promise((resolve, reject) => {
			http({
				method: 'POST',
				url: '/Estabelecimento/CadastrarEstabelecimento',
				data: requestData,
			})
				.then((data) => {
					resolve(data);
				})
				.catch(error => {
					reject(error);
				});
	}),
	[REGISTER_CLIENT]: ({ commit }, requestData) =>
		new Promise((resolve, reject) => {
			http({
				method: 'POST',
				url: '/Clientes/CadastrarCliente',
				data: requestData,
			})
				.then((data) => {
					resolve(data);
				})
				.catch(error => {
					reject(error);
				});
	}),
};

export default {
	state,
	getters,
	mutations,
	actions,
};
