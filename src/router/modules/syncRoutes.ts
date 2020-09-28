import Page404 from '@/views/Page404.vue'
import Login from "@/views/Login.vue";

//	同步路由
export const syncRoutesList: Array<any> = [
	{
		path: '/404',
		name: '404',
		component: Page404,
		hidden: true
	},
	{
		chName: '登陆',
		path: '/login',
		name: 'login',
		component: Login,
		hidden: true
	},
];


//	路由未找到
export const NotFoundRoutes = {
	path: '*',
	redirect: '/404',
	hidden: true,
};

// syncRoutesList.push(NotFoundRoutes);
//	同步路由的长度
export const syncRoutesListLength = syncRoutesList.length;