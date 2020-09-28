<template>
    <a-layout>
        <LayoutHeader/>
        <LayoutBreadcrumb/>
        <LayoutContent/>
    </a-layout>
</template>
<script lang='ts'>
	import {Vue, Component} from 'vue-property-decorator';
	import LayoutHeader from '@/layout/layoutHeader/layoutHeader.vue';
	import LayoutBreadcrumb from '@/layout/layoutBreadcrumb/layoutBreadcrumb.vue';
	import LayoutContent from '@/layout/layoutContent/layoutContent.vue';

	@Component({
		components: {
			LayoutHeader,
			LayoutBreadcrumb,
			LayoutContent,
		}
	})
	export default class LayoutMain extends Vue {

	}
</script>