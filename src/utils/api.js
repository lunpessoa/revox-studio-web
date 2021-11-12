import axios from 'axios';
import router from '../router';

class Http {
	constructor() {
		this.http = axios.create({
			baseURL: process.env.VUE_APP_BASE_URL + 'api',
		});

		this.http.interceptors.response.use(
			null,
			err =>
				new Promise(() => {
					if (err && err.response.data.statusCode === 401) {
						// if (
						// 	err.response.data.message == 'Senha Incorreta!' ||
						// 	err.response.data.message == 'Usuário não encontrado!'
						// ) {
						// 	return;
						// }
						router.push({ name: 'Login' });
						sessionStorage.removeItem('budget_token');
					}
					throw err;
				}),
		);
	}
}

export default class SingletonHttp {
	constructor() {
		throw new Error('Use Singleton.getInstance()');
	}
	static getInstance() {
		if (!SingletonHttp.instance) {
			SingletonHttp.instance = new Http();

			if (sessionStorage.getItem('budget_token')) {
				SingletonHttp.instance.http.defaults.headers.common.Authorization = `Bearer ${sessionStorage.getItem(
					'budget_token',
				)}`;
			}
		}
		return SingletonHttp.instance;
	}
}
