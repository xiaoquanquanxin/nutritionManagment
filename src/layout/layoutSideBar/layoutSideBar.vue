<template>
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible="">
        <div class="logo"></div>
        <a-menu v-if="(selectRouteKey) && (openRouteKey)"
                :default-selected-keys="[selectRouteKey]"
                :default-open-keys="[openRouteKey]"
                mode="inline"
                theme="dark"
                :inline-collapsed="collapsed"
        >
            <template
                    v-for="item in routes"
                    v-if="!item.hidden"
            >
                <a-menu-item
                        v-if="!item.children"
                        :key=item.name
                        @click="jumpTo(item)"
                >
                    <a-icon type="calendar"/>
                    <span>{{item.meta.chName}}</span>
                </a-menu-item>
                <a-sub-menu v-else
                            :key="item.name"
                >
                    <span slot="title">
                        <a-icon type="appstore"/>
                        <span>{{item.meta.chName}}</span>
                    </span>
                    <template v-for="_item in item.children"
                              v-if="!_item.hidden"
                    >
                        <a-menu-item :key="_item.name"
                                     v-if="!_item.children"
                                     @click="jumpTo(_item)">
                            <span>{{_item.meta.chName}}</span>
                        </a-menu-item>
                    </template>
                </a-sub-menu>
            </template>
        </a-menu>
    </a-layout-sider>
</template>
<script>
    import { mapGetters } from 'vuex';
    import { log } from '@/utils/common';

    export default {
        name: 'layoutSideBar',
        computed: {
            ...mapGetters([
                'routeList',
                'sidebar'
            ]),
            collapsed(){
                return this.$store.state.sidebar.collapsed;
            },
            selectRouteKey(){
                const { selectRouteKey } = this.$store.state.sidebar;
                console.log('🍎选中', selectRouteKey);
                return selectRouteKey;
            },
            openRouteKey(){
                const { openRouteKey } = this.$store.state.sidebar;
                console.log('🍎展开', openRouteKey);
                return openRouteKey;
            },
            routes(){
                const { routes } = this.$store.state.routeList;
                console.log(routes);
                return routes;
            },
        },
        methods: {
            //	跳转
            jumpTo(item){
                console.log(item.path);
                //  自己不跳转自己
                if (this.$route.path === item.path) {
                    return;
                }
//                //  父级组件不能跳
//                if (item.children && item.children.length) {
//                    return;
//                }
                this.$router.push({ path: item.path });
            },
            id(){
                return Math.random();
            }
        }

    };
</script>
