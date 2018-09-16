<template>
    <el-container class="ui-container">
        <el-aside :width="isCollapse ? '64px' : '200px'" class="ui-aside">
            <div class="head-icon">

            </div>
           <el-menu default-active="2" class="ui-menu" :background-color="'#303133'" :text-color="'#fff'" :collapse="isCollapse"  :router="true" :default-active="$route.path" :collapse-transition="false">
               <menu-tree :menuData='menuList'/>
           </el-menu>
        </el-aside>
        <el-container class="ui-container">
            <el-header class="ui-header" >
                <el-row class="header-row">
                  <el-col :span="1">
                    <div @click="isCollapse = !isCollapse"   class="collapse-btn" ><i class="fa  fa-align-justify" :class="{ 'isCollapse-btn' :isCollapse}"></i></div>
                  </el-col>

                  <el-col :span="2" :offset="+4">
                    <i class="fa fa-th-large"></i>
                  </el-col>
                  <el-col :span="2">
                    <i class="fa  fa-chain"></i>
                  </el-col>
                  <el-col :span="2">
                    <i class="fa fa-road"></i>
                  </el-col>
                  <el-col :span="2">
                    <i class="fa fa-wrench"></i>
                     
                  </el-col>
                  <el-col :span="2">
                    <i class="fa  fa-bar-chart-o"></i>
                  </el-col>
                  <el-col :span="2">
                    <i class="fa fa-laptop"></i>
                  </el-col>

                  <el-col :span="1" :offset="+4">
                    <ui-screenfull></ui-screenfull>
                  </el-col>
                  <el-col :span="1" >
                    <i class="fa fa-envelope-o"></i>
                  </el-col>
                  <el-col :span="1">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        <i class="fa  fa-user"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>账号设置</el-dropdown-item>
                        <el-dropdown-item divided>注销退出</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </el-row>
            </el-header>
            <el-main>
                <transition name="fade-transform" mode="out-in">
                    <router-view/>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import MenuTree from "./modules/MenuTree";
import Screenfull from "./../../components/Screenfull/index.vue";
var arr = [
    /* {
    id: "402880636463f4e3016463f4e3e60000",
    name: "首页",
    checked: false,
    state: null,
    children: null,
    url: "/home",
    icon: "icon-home",
    parentId: "0",
    hasParent: false,
    hasChildren: false
  }, */
    {
        id: "402880636463f4e3016463f4e3e60001",
        name: "用户管理",
        checked: false,
        state: null,
        children: null,
        url: "/views/bar",
        icon: "icon-settings",
        parentId: "0",
        hasParent: false,
        hasChildren: false
    },
    {
        id: "402880636463f4e3016463f4e3e60002",
        name: "角色管理",
        checked: false,
        state: null,
        children: null,
        url: "/sys/role",
        icon: "icon-shop",
        parentId: "0",
        hasParent: false,
        hasChildren: true
    },
    {
        id: "402880636463f4e3016463f4e3e60005",
        name: "组织管理",
        checked: false,
        state: null,
        children: null,
        url: "/sys/dept",
        icon: null,
        parentId: "402880636463f4e3016463f4e3e60002",
        hasParent: false,
        hasChildren: false
    },
    {
        id: "402880636463f4e3016463f4e3e60006",
        name: "片区管理",
        checked: false,
        state: null,
        children: null,
        url: "/dashboard/merchant/account",
        icon: null,
        parentId: "402880636463f4e3016463f4e3e60002",
        hasParent: false,
        hasChildren: false
    },
    {
        id: "402880636463f4e3016463f4e3e60007",
        name: "菜单管理",
        checked: false,
        state: null,
        children: null,
        url: "/sys/menu",
        icon: null,
        parentId: "402880636463f4e3016463f4e3e60002",
        hasParent: false,
        hasChildren: false
    },
    {
        id: "402880636463f4e3016463f4e3e60008",
        name: "权限管理",
        checked: false,
        state: null,
        children: null,
        url: "/dashboard/merchant/account",
        icon: null,
        parentId: "402880636463f4e3016463f4e3e60002",
        hasParent: false,
        hasChildren: false
    }
];
export default {
    data() {
        return {
            menuList: arr,
            isCollapse: false
        };
    },
    computed: {
        openMenu: function() {
            return this.$store.state.currentMenu;
        },
        currentMenu() {
            console.log(this.$router.path);
            return this.$router.path;
        }
    },
    components: {
        "menu-tree": MenuTree,
        "ui-screenfull": Screenfull
    },
    created() {}
};
</script>
<style scope>
.ui-container {
    height: 100%;
    overflow: hidden;
}
.ui-menu {
    height: calc(100% - 60px);
    border-right: none;
    color: #fff;
}
.ui-header {
    background-color: #409eff;
}
.head-icon {
    height: 60px;
    background-color: #0c78e7;
}
.collapse-btn {
    line-height: 60px;
    font-size: 19px;
    border: none;
    color: #fff;
}
.header-row,
.collapse-btn {
    height: 100%;
}

.ui-aside {
    background-color: #303133;
    transition: width 0.8s;
}
.ui-container,
.ui-menu,
.ui-aside {
    transition: 0.8s;
}
.header-row > .el-col {
    height: 100%;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: #fff;
}
.header-row > .el-col:nth-child(1) {
    text-align: left;
}
.el-dropdown-link {
    font-size: 20px;
    color: #fff;
}
.isCollapse-btn {
    transition: rotate(90deg) 0.8s;
    -ms-transition: rotate(90deg) 0.8s;
    /* IE 9 */
    -moz-transition: rotate(90deg) 0.8s;
    /* Firefox */
    -webkit-transition: rotate(90deg) 0.8s;
    /* Safari 和 Chrome */
    -o-transition: rotate(90deg) 0.8s;
    /* Opera */
    transform: rotate(90deg);
    transition: 0.8s;
}
.collapse-btn > i {
    transition: 0.8s;
    cursor: pointer;
}
/* 由于对el-menu 进行的封装所以在这补充样式 */
.el-menu--collapse .el-menu-item span,
.el-menu--collapse .el-submenu > .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
.ui-menu,
.el-menu-item {
    overflow: hidden;
    /* text-overflow: ellipsis; */
    white-space: nowrap;
}
/*fade*/
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all 0.5s;
}
.fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
}
.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
.header-row {
    height: 100%;
    align-content: center;
}
.menu-btn {
    font-size: 20px;
}
</style>


