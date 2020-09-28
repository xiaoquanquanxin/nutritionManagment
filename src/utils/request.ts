import axios from 'axios';
import store from '@/store';
import {getToken} from '@/utils/auth';

// create an axios instance
const service = axios.create({
	// url = base url + request url
	baseURL: process.env.VUE_APP_BASE_API,
	//	当跨域请求时发送cookie
	// withCredentials: true,
	timeout: 5000
});

//	拦截器
service.interceptors.request.use(
	config => {
		if (store.getters.token) {
			config.headers['X-Token'] = getToken();
		}
		return config;
	},
	error => {
		// do something with request error
		console.log(error); // for debug
		return Promise.reject(error);
	}
);

// response interceptor
service.interceptors.response.use(
	(response: any) => {
		const res = response.data;
		// if the custom code is not 20000, it is judged as an error.
		if (res.code !== 20000) {
			// 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
			if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
				// to re-login
				//	弹框
			}
			return Promise.reject(new Error(res.message || 'Error'));
		} else {
			return res;
		}
	},
	(error: Error) => {
		console.log('err' + error); // for debug
		//	弹框
		return Promise.reject(error);
	}
);

export default service;
