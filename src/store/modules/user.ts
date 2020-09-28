//	用户信息
import {login, getInfo} from '@/api/user';
import {getToken, setToken} from '@/utils/auth';
import {COMMIT_INTERFACE} from "@/store"

interface STATE {
	token: string;
	name: string;
	avatar: string
	introduction: string
	roles: []
}

const state = {
	token: getToken(),
	name: '',
	avatar: '',
	introduction: '',
	roles: []
};

const mutations = {
	SET_TOKEN: (state: STATE, token: string) => {
		state.token = token;
	},
	SET_INTRODUCTION: (state: STATE, introduction: string) => {
		state.introduction = introduction;
	},
	SET_NAME: (state: STATE, name: string) => {
		state.name = name;
	},
	SET_AVATAR: (state: STATE, avatar: string) => {
		state.avatar = avatar;
	},
	SET_ROLES: (state: STATE, roles: []) => {
		state.roles = roles;
	}
};

const actions = {
	// 用户登录
	login({commit, state}: COMMIT_INTERFACE<STATE>, userInfo: any) {
		const {username, password} = userInfo;
		return new Promise((resolve, reject) => {
			login({username: username.trim(), password: password}).then(response => {
				const {data} = response;
				commit('SET_TOKEN', data.token);
				setToken(data.token);
				resolve();
			}).catch(error => {
				reject(error);
			});
		});
	},

	//	获取用户信息
	getInfo({commit, state}: COMMIT_INTERFACE<STATE>) {
		return new Promise((resolve, reject) => {
			resolve(123);

			getInfo(state.token).then(response => {
				const {data} = response;

				if (!data) {
					reject('验证失败，重新登录');
				}

				const {roles, name, avatar, introduction} = data;
				// roles must be a non-empty array
				if (!roles || roles.length <= 0) {
					reject('getInfo: roles must be a non-null array!');
				}

				commit('SET_ROLES', roles);
				commit('SET_NAME', name);
				commit('SET_AVATAR', avatar);
				commit('SET_INTRODUCTION', introduction);
				resolve(data);
			}).catch(error => {
				reject(error);
			});
		});
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
