<template>
    <a-layout-header style="background: #fff; padding: 0">
        <a-row type="flex" justify="space-around" align="middle">
            <a-col :sm="4" :md="2">
                <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="() => (collapsed = !collapsed)"
                />
            </a-col>
            <a-col :sm="20" :md="22">
                <a-row type="flex" justify="end">
                    <a-col :sm="8" :md="4">
                        <div>
                            <a-avatar :size="36" icon="user"/>
                            <a-dropdown>
                                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                                    权鑫
                                    <a-icon type="down"/>
                                </a>
                                <a-menu slot="overlay" @click="onClick">
                                    <a-menu-item key="1">
                                        1st menu item
                                    </a-menu-item>
                                    <a-menu-item key="2">
                                        2nd menu item
                                    </a-menu-item>
                                    <a-menu-item key="3">
                                        3rd menu item
                                    </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </div>
                    </a-col>
                    <a-col :sm="3" :md="2">
                        <a-badge count="0" show-zero>
                            <a-icon type="bell"/>
                            <a class="head-example"></a>
                        </a-badge>
                    </a-col>
                    <a-col :sm="3" :md="2">
                        关机
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </a-layout-header>
</template>
<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';

	@Component({})
	export default class LayoutHeader extends Vue {
		//  折叠左侧菜单？
		get collapsed(): boolean {
			return this.$store.state.sidebar.collapsed;
		}

		set collapsed(collapsed) {
			this.$store.dispatch('sidebar/setCollapsed', collapsed);
		}

		constructor() {
			super();
		}


		onClick({key}: { key: string }) {
			console.log(`Click on item ${key}`);
		}
	}
</script>
<style scoped lang="stylus">
    //  徽章
    .head-example
        width 10px;
        height 10px;
        border-radius 4px;
        display inline-block;
</style>