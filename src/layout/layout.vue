<template>
    <a-layout id="layout">
        <layoutSideBar/>
        <LayoutMain/>
    </a-layout>
</template>
<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';
	
	import LayoutMain from '@/layout/layoutMain/layoutMain.vue';
	import LayoutSideBar from '@/layout/layoutSideBar/layoutSideBar.vue';

	@Component({
		components: {
			LayoutSideBar,
			LayoutMain,
		}
	})
	export default class MyLayout extends Vue {
	}
</script>
<style lang="stylus">
    #layout
        height: 100vh;
    
    #layout .trigger
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    
    
    #layout .trigger:hover
        color: #1890ff;
    
    #layout .logo
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
</style>
