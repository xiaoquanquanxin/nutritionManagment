<template>
    <a-layout-content class="layout-content">
        <router-view/>
    </a-layout-content>
</template>
<script lang='ts'>
	import {Vue, Component} from 'vue-property-decorator';

	@Component({})
	export default class LayoutContent extends Vue {

	}
</script>
<style scoped lang="stylus">
    .layout-content
        padding: 24px;
        background: white;
</style>