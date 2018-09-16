import Vue from "vue";
//引入element 组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import VueRouter from "vue-router";

//注入路由
import router from "./router/routers.js";

//注入Vuex
import store from "./store/index.js";

//Vue.config.devtools = true

Vue.use(ElementUI);

import("./resource/beyond-admin/font-awesome/css/font-awesome.css");

import("@/styles/commonStyle.css");
// 扩展Vue原型，添加axios 到 $http
import http from "./http/http.js";
Vue.prototype.$http = http;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
