// 	控制slider
const state = {
	//	选择的路由
	selectRouteKey: null,
	//	展开的路由
	openRouteKey: null,
	//	导航是否展开折叠
	collapsed: false,
};

const mutations = {
	SET_SELECT_ROUTE_KEY: (state: any, selectRouteKey: number) => {
		state.selectRouteKey = selectRouteKey || '-1';
	},
	SET_OPEN_ROUTE_KEY: (state: any, openRouteKey: number) => {
		state.openRouteKey = openRouteKey || '-1';
	},
	SET_COLLAPSED: (state: any, collapsed: boolean) => {
		state.collapsed = collapsed;
	}
};

const actions = {
	setSelectRouteKey({commit}: { commit: Function }, selectRouteKey: number) {
		commit('SET_SELECT_ROUTE_KEY', selectRouteKey);
	},
	setOpenRouteKey({commit}: { commit: Function }, openRouteKey: number) {
		commit('SET_OPEN_ROUTE_KEY', openRouteKey);
	},
	setCollapsed({commit}: { commit: Function }, collapsed: number) {
		commit('SET_COLLAPSED', collapsed);
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
