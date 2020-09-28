<template>
    <div>
        <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="1">
                <a-icon type="mail"/>
                第一项
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="mail"/>
                第二项
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="mail"/>
                第三项
            </a-menu-item>
        </a-menu>
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'user',
        data(){
            return {
                current: ['1'],
            };
        },
    };
</script>

<style lang="stylus">
</style>