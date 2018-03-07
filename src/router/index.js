import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
// import Login from '@/views/login';
// import Feed from '@/views/feed/index';

Vue.use(Router);

export function createRouter() {
  const whiteList = ['/login', '/hello']; // 不重定向白名单
  const router = new Router({
    mode: 'history',
    fallback: false,
    routes: [
      {
        path: '/',
        name: 'Hello',
        component: () => import('@/components/HelloWorld.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login.vue'),
      },
      {
        path: '/feed',
        name: 'Feed',
        component: () => import('@/views/feed/index.vue'),
      },
    ],
  });
  return router
}
