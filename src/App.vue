<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { getUser } from "./api/test.js";
export default {
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    computed: {},
    components: {},
    created: function() {
        /* getUser().then( res => {
      debugger;
    }).catch( res => {
      debugger;
    }) */
        //this.$router.push('/login')
    }
};
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
html,
body {
    height: 100%;
    widows: 100%;
}
#app {
    height: 100%;
    width: 100%;
}
</style>
