import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import $ from 'jquery';
import axios from 'axios';

Vue.prototype.$axios = axios;

// 判断是否登录。 必须写在挂载实例前面。
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  const type = to.meta.type;
  // 判断该路由是否需要登录权限
  // console.log(to.meta.type);
  if (type === 'login') {
    if (window.localStorage.getItem('login')) {
      next();
    } else {
      next('/login');
    }
  } else {
    next(); // 确保一定要有next()被调用
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
