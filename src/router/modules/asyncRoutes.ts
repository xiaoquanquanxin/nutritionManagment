import LayoutStair from '@/layout/layoutStair/layoutStair.vue';

//	异步路由
export const asyncRoutesList = [
	{
		meta: {
			chName: '用户列表',
			selectRouteKey: 'user',
		},
		path: '/user',
		name: 'user',
		component: () => import(/* webpackChunkName: "user" */ '@/views/user/user.vue'),
	},
	{
		meta: {
			chName: '处方审核列表',
			selectRouteKey: 'prescription',
		},
		path: '/prescription',
		name: 'prescription',
		component: () => import(/* webpackChunkName: "prescription" */ '@/views/prescription/prescription.vue'),
	},
	{
		meta: {
			chName: '配置单',
			selectRouteKey: 'configuration',
		},
		path: '/configuration',
		name: 'configuration',
		component: () => import(/* webpackChunkName: "configuration" */ '@/views/configuration/configuration.vue'),
	},
	{
		meta: {
			chName: '收计费',
			selectRouteKey: 'charge',
		},
		path: '/charge',
		name: 'charge',
		component: () => import(/* webpackChunkName: "charge" */ '@/views/charge/charge.vue'),
	},

	{
		meta: {
			chName: '系统设置',
			selectRouteKey: 'system',
		},
		path: '/system',
		name: 'system',
		component: LayoutStair,
		children: [
			{
				meta: {
					chName: '修改密码',
					selectRouteKey: 'changePassword',
					openRouteKey: 'system',
				},
				name: 'changePassword',
				path: '/system/changePassword',
				component: () => import(/* webpackChunkName: "changePassword" */ '@/views/system/changePassword.vue'),
			},
		]
	},
	{
		meta: {
			chName: '消息列表',
			selectRouteKey: 'message',
		},
		path: '/message',
		name: 'message',
		component: () => import(/* webpackChunkName: "message" */ '@/views/message/message.vue'),
	}
];