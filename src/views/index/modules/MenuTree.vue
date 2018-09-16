<template>
    <div>
        <template v-for="value in menuData">
            <el-submenu  v-if="value.children && value.children.length > 0">
                <template slot="title" :title="value.name">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">{{value.name}}</span>
                </template>
                <MenuTree :menuData="value.children"></MenuTree>
            </el-submenu>

            <el-menu-item :index="value.url" v-else :title="value.name" :route="value.url">
                <i class="el-icon-tickets"></i>
                <span slot="title">{{value.name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
export default {
    name: "MenuTree",
    props: ["menuData"]
};
</script>
