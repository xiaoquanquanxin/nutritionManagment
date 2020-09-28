<template>
    <a-row type="flex" justify="space-around" align="middle" class="breadcrumb">
        <a-col :span="23">
            <a-breadcrumb separator=">">
                <a-breadcrumb-item href="">
                    <a-icon type="home"/>
                </a-breadcrumb-item>
                <a-breadcrumb-item href="">
                    <a-icon type="user"/>
                    <span>Application List</span>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    Application
                </a-breadcrumb-item>
            </a-breadcrumb>
        </a-col>
    </a-row>
</template>
<script lang="ts">
	import {Vue, Component} from 'vue-property-decorator';
	@Component({})
	export default class LayoutBreadcrumb extends Vue {
		
    }
</script>
<style lang="stylus" scoped>
    //  面包屑
    .breadcrumb
        height 50px;
        background-color white;
        border-top: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
</style>