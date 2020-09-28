//	路由控制
import {
	NotFoundRoutes,
	syncRoutesList,
	syncRoutesListLength
} from "@/router/modules/syncRoutes"
import {getRoutes} from "@/api/role"
import {RouteConfig} from "vue-router"
import {setRouteListByMap} from "@/utils/routerBasicMap"
import {asyncRoutesList} from "@/router/modules/asyncRoutes"
import {aaaaa} from '@/store/modules/a.ts';

interface STATE {
	routeListLength: number;
	routes: RouteConfig[];
}

const state: STATE = {
	routes: syncRoutesList,
	//	路由的长度，默认为同步路由的长度
	routeListLength: syncRoutesListLength,
};

const mutations = {
	SET_ROUTE_LENGTH: (state: STATE, routesList: RouteConfig[]) => {
		state.routes = syncRoutesList.concat(routesList);
		state.routeListLength = state.routes.length
	}
};


const actions = {
	//  生成路由权限，从服务端动态拉取
	generateRoutes({commit}: { commit: Function }) {
		//	服务端数据
		const map = aaaaa
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(map);
			}, 1000);
		})
			.then((list => {
				// const routesList = convertRouting(list);
				const routesList = setRouteListByMap(map, asyncRoutesList)
				routesList.push(NotFoundRoutes);
				commit('SET_ROUTE_LENGTH', routesList);
				return routesList;
			}));
		return getRoutes()
			.then((accessedRoutes) => {
				//  todo    处理服务端路由，转为前端路由

				// commit('SET_ROUTES', routesList);
				return accessedRoutes;
			});
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
