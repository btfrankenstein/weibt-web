// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { sync } from 'vuex-router-sync';
import { createRouter } from './router';
import { createStore } from './store';
import { getToken } from '@/utils/token'; // 验权
import App from './App.vue';

const whiteList = ['/login', '/hello']; // 不重定向白名单

Vue.use(ElementUI);

Vue.config.productionTip = false;

export function createApp() {
  const router = createRouter();
  const store = createStore();

  // router.beforeEach((to, from, next) => {
  //   console.log(getToken());
  //   if (getToken()) {
  //     store.dispatch('getUserInfo').then(() => {
  //       next();
  //     }).catch((e) => {
  //       ElementUI.Message.error(e);
  //       next({ path: '/login' });
  //     });
  //   } else if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //     next();
  //   } else {
  //     next({ path: '/login' });
  //   }
  // });

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });

  return { app, router, store };
};
