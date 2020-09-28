import {RouteConfig} from "vue-router"
import store from "@/store"

//	根据数据觉定返回那些路由被展示
export function setRouteListByMap(map: any, asyncRoutesList: any): RouteConfig[] {
	let list: any[]
	list = []
	asyncRoutesList.forEach((item: any) => {
		//	如果服务端返回的数据有这个路由
		if (map[item.name]) {
			//	如果有子路由
			if (item.children) {
				const children = setRouteListByMap(map, item.children);
				item.children = children;
			}
			//	如果是用户列表路由
			if (item.meta.isUserList) {
				//	如果没有子路由，直接抛出错误
				if (!item.children.length) {
					throw new Error('用户列表必须要有子路由，因为要指定重定向');
				}
				item.redirect = item.children[0].path;
				console.log(item.children);
				//	放在特殊的列表里
				store.dispatch('routeList/setUserRouteList', item.children);
			}
			list.push(item);
		}
	});
	return list;
}

