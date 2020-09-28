<template>
    <div>
        <a-menu v-if="currentMeta"
                v-model="userSelectKey"
                mode="horizontal">
            <a-menu-item
                    v-for="item in userRouteList"
                    :key="item.name"
                    @click="jumpTo(item)"
            >
                <a-icon type="mail"/>
                {{item.meta.chName}}
            </a-menu-item>
        </a-menu>
        <router-view/>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import { TOJSON } from '@/utils/common';

    export default {
        name: 'user',
        computed: {
            ...mapGetters([
                'routeList',
            ]),
            userRouteList(){
                const { userRouteList } = this.$store.state.routeList;
                console.table(TOJSON(userRouteList)[0]);
                return userRouteList;
            },
            currentMeta(){
                const { currentMeta } = this.$store.state.routeList;
                return currentMeta;
            }
        },
        data(){
            return {
                userSelectKey: []
            };
        },
        created(){
            this.userSelectKey = [this.currentMeta.userSelectKey];
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
        }

    };
</script>
<style lang="stylus">
</style>