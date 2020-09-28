<template>
    <div id="app">
        <MyLayout/>
    </div>
</template>
<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';
	import MyLayout from '@/components/layout.vue';

	@Component({
		components: {
			MyLayout
		}
	})
	export default class App extends Vue {

	}
</script>
<style lang="stylus">
    #app {
        height: 100vh;
    }
</style>
