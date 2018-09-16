import Vue from "vue";
import VueRouter from "vue-router";

import NProgress from "nprogress"; // 加载进度条
import "nprogress/nprogress.css"; // 进度条样式

NProgress.configure({ showSpinner: false }); // 配置

//使用路由
Vue.use(VueRouter);

//引入主页路由
import layout from "./../views/index/index";

//默认路由 --登录页和首页不需要权限
const defaultRoutes = [
  {
    path: "/login",
    component: () => import("./../views/login/login"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("./../views/errorPage/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("./../views/errorPage/401"),
    hidden: true
  },
  {
    path: "",
    component: layout,
    redirect: "home",
    children: [
      {
        path: "home",
        component: () => import("./../views/sys/menu/menu"),
        name: "dashboard",
        meta: { title: "dashboard", icon: "dashboard", noCache: true }
      }
    ]
  },
  {
    path: "/sys",
    component: layout,
    redirect: "/sys/menu",
    children: [
      {
        path: "menu",
        component: () => import("./../views/sys/menu/menu")
      },
      {
        path: "role",
        component: () => import("./../views/sys/role/Role")
      },
      {
        path: "dept",
        component: () => import("./../views/sys/dept/Dept")
      }
    ]
  },
  { path: "*", redirect: "/404", hidden: true }
];

//实例化路由router
const router = new VueRouter({
  routes: defaultRoutes // (缩写) 相当于 routes: routes
  /* mode: 'history' */
});

router.addRoutes([
  {
    path: "/405",
    component: () => import("./../views/errorPage/401"),
    hidden: true
  }
]);

router.beforeEach((to, from, next) => {
  NProgress.start(); // 开始加载进度条
  next();
  NProgress.done();
  /* if (to.path === '/404') { //这就是跳出循环的关键
        next()
    } else {
        next('/404')
    } */
});

router.afterEach((to, from) => {});
export default router;
