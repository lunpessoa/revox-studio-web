import api from '@/utils/api';
import { SET_USER_PROFILE } from '../user/actions';
const { http } = api.getInstance();

import { 
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT
} from './actions';

const state = {
	user: null,
	token: sessionStorage.getItem(`budget_token`) || null,
	status: '',
};

const getters = {
	isLogged: state => !!state.token,
	isLoginLoaded: state => state.status !== 'loading',
};

const mutations = {
	[LOGIN_REQUEST]: state => {
		state.status = 'loading';
	},
	[LOGIN_SUCCESS]: (state, token) => {
		state.token = token;
		state.status = 'success';
	},
	[LOGIN_FAILED]: state => {
		state.token = null;
		state.status = 'error';
	},
	[LOGOUT]: state => {
		state.token = null;
		state.status = '';
	},
};

const actions = {
	[LOGIN_REQUEST]: ({ commit }, requestData) =>
		new Promise((resolve, reject) => {
			const { email, senha } = requestData;
			commit(LOGIN_REQUEST);
			http({
				method: 'POST',
				url: '/Clientes/Login',
				data: {
					email,
					senha,
				},
			})
				.then(({ data }) => {
					if(data.sucesso) {
						sessionStorage.setItem(`budget_token`, data.mensagem);
						http.defaults.headers.common.Authorization = `Bearer ${data.mensagem}`;
						http({
							method: 'GET',
							url: `/Clientes/ValidarToken?token=${data.mensagem}`,
						})
							.then((response) => {
								commit(SET_USER_PROFILE, response.data);
								commit(LOGIN_SUCCESS, data.mensagem);
								resolve(response.data);
							})
						return
					}
					sessionStorage.removeItem(`budget_token`);
					commit(SET_USER_PROFILE, []);
					commit(LOGIN_FAILED);
					reject(error);
				})
				.catch(error => {
					sessionStorage.removeItem(`budget_token`);
					commit(SET_USER_PROFILE, []);
					commit(LOGIN_FAILED);
					reject(error);
				});
		}),
	[LOGOUT]: ({ commit }) =>
		new Promise(resolve => {
			sessionStorage.removeItem(`budget_token`);
			sessionStorage.removeItem(`name`);
			sessionStorage.removeItem(`id`);
			sessionStorage.removeItem(`type`);
			sessionStorage.removeItem("mobile");
			commit(SET_USER_PROFILE, []);
			http.auth = null;
			commit(LOGOUT);
			resolve();
		}),
};

export default {
	state,
	getters,
	mutations,
	actions,
};
