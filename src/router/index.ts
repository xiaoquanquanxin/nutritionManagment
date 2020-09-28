import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import store from '../store';
import {syncRoutesList, syncRoutesListLength} from "@/router/modules/syncRoutes"
import {asyncRoutesList} from "@/router/modules/asyncRoutes"

Vue.use(VueRouter);
const createRouter = (routesList: RouteConfig[]) => new VueRouter({
	mode: 'history',
	routes: routesList.concat(syncRoutesList)
});

const router = createRouter([]);
router.beforeEach(async (to, from, next) => {
	console.log('来自哪儿', from.path);
	console.log('去哪儿', to.path);

	//	如果没更新路由
	if (store.state.routeList.routeListLength === syncRoutesListLength) {
		console.log('拿路由？');
		//	拿路由
		const accessRoutes = await store.dispatch('routeList/generateRoutes');
		const newRouter = createRouter(accessRoutes);
		// @ts-ignore
		// router.match = newRouter.match
		// @ts-ignore
		// router.matcher = newRouter.matcher;
		// @ts-ignore
		router.options.routes = newRouter.options.routes;
		console.log('拿到路由');
		await router.addRoutes(accessRoutes);
		next({...to, replace: true});
		return;
	}
	if (to.path === from.path) {
		return;
	}
	console.log('添加路由，元信息是');
	console.log(to.meta);
	await store.dispatch('sidebar/setOpenRouteKey', to.meta.openRouteKey);
	await store.dispatch('sidebar/setSelectRouteKey', to.meta.selectRouteKey);
	console.log('设置被选中完成了');
	next();
})
export default router;
