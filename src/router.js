import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        type: 'login', // 是否需要判断是否登录,这里是需要判断
      },
    },
    {
      path: '/order', // 分类页
      name: 'order',
      component: () => import(/* webpackChunkName: "about" */ './views/order.vue'),
      meta: {
        type: 'login', // 是否需要判断是否登录,这里是需要判断
      },
    },
    {
      path: '/preview', // 播放页
      name: 'preview',
      component: () => import(/* webpackChunkName: "about" */ './views/preview.vue'),
      meta: {
        type: 'login', // 是否需要判断是否登录,这里是需要判断
      },
    },
    {
      path: '/history', // 历史记录
      name: 'history',
      component: () => import(/* webpackChunkName: "about" */ './views/history.vue'),
      meta: {
        type: 'login', // 是否需要判断是否登录,这里是需要判断
      },
    },
    {
      path: '/register', // 注册
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register.vue'),
      meta: {
        type: 'login', // 是否需要判断是否登录,这里是需要判断
      },
    },
    {
      path: '/login', // 登录
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue'),
    },
    {
      path: '/forgetPassword', // 找回密码
      name: 'forgetPassword',
      component: () => import(/* webpackChunkName: "about" */ './views/forgetPassword.vue'),
      meta: {
        type: 'login', // 是否需要判断是否登录,这里是需要判断
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
