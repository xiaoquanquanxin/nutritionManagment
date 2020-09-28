import LayoutStair from '@/layout/layoutStair/layoutStair.vue';
import User from '@/views/user/user.vue';
//	异步路由
export const asyncRoutesList = [
	{
		meta: {
			chName: '用户列表',
			selectRouteKey: 'user',
			//	是user路由
			isUserList: true,
		},
		name: 'user',
		path: '/user',
		component: User,
		//	虽然有子项，但作为一个项存在，而不是一个菜单
		isMenuItem: true,
		children: [
			{
				meta: {
					chName: '病人信息',
					selectRouteKey: 'user',
					//	是user路由的某一项子路由
					userSelectKey: 'patientInfo',
				},
				name: 'patientInfo',
				path: '/user/patientInfo',
				component: () => import(/* webpackChunkName: "prescription" */ '@/views/user/patientInfo.vue'),
				hidden: true,
			},
			{
				meta: {
					chName: '筛查',
					selectRouteKey: 'user',
					userSelectKey: 'screening',
				},
				name: 'screening',
				path: '/user/screening',
				component: () => import(/* webpackChunkName: "prescription" */ '@/views/user/screening.vue'),
				hidden: true,
			},
			{
				meta: {
					chName: '营养评估',
					selectRouteKey: 'user',
					userSelectKey: 'assess',
				},
				name: 'assess',
				path: '/user/assess',
				component: () => import(/* webpackChunkName: "prescription" */ '@/views/user/assess.vue'),
				hidden: true,
			},
			{
				meta: {
					chName: '营养干预',
					selectRouteKey: 'user',
					userSelectKey: 'intervene',
				},
				name: 'intervene',
				path: '/user/intervene',
				component: () => import(/* webpackChunkName: "prescription" */ '@/views/user/intervene.vue'),
				hidden: true,
			},
			{
				meta: {
					chName: '监测',
					selectRouteKey: 'user',
					userSelectKey: 'monitor',
				},
				name: 'monitor',
				path: '/user/monitor',
				component: () => import(/* webpackChunkName: "prescription" */ '@/views/user/monitor.vue'),
				hidden: true,
			},
			{
				meta: {
					chName: '病程记录',
					selectRouteKey: 'user',
					userSelectKey: 'treatmentCourse',
				},
				name: 'treatmentCourse',
				path: '/user/treatmentCourse',
				component: () => import(/* webpackChunkName: "prescription" */ '@/views/user/treatmentCourse.vue'),
				hidden: true,
			},
			{
				meta: {
					chName: '活动小结',
					selectRouteKey: 'user',
					userSelectKey: 'activitySummary',
				},
				name: 'activitySummary',
				path: '/user/activitySummary',
				component: () => import(/* webpackChunkName: "prescription" */ '@/views/user/activitySummary.vue'),
				hidden: true,
			},
		]
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
			chName: '处方详情',
			selectRouteKey: 'prescription',
		},
		path: '/prescription/prescriptionDetail',
		name: 'prescriptionDetail',
		component: () => import(/* webpackChunkName: "prescription" */ '@/views/prescription/prescriptionDetail.vue'),
		hidden: true,
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
			chName: '配置详情',
			selectRouteKey: 'configuration',
		},
		path: '/configuration/configurationDetail',
		name: 'configurationDetail',
		component: () => import(/* webpackChunkName: "configuration" */ '@/views/configuration/configurationDetail.vue'),
		hidden: true,
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
			chName: '缴费',
			selectRouteKey: 'charge',
		},
		path: '/charge/pay',
		name: 'pay',
		component: () => import(/* webpackChunkName: "charge" */ '@/views/charge/pay.vue'),
		hidden: true,
	},
	{
		meta: {
			chName: '计费',
			selectRouteKey: 'charge',
		},
		path: '/charge/billing',
		name: 'billing',
		component: () => import(/* webpackChunkName: "charge" */ '@/views/charge/billing.vue'),
		hidden: true,
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
		name: 'message',
		path: '/message',
		component: () => import(/* webpackChunkName: "message" */ '@/views/message/message.vue'),
	}
];