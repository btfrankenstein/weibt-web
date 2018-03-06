import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
// import Login from '@/views/login';
// import Feed from '@/views/feed/index';

Vue.use(Router);

export function createRouter() {
  return new Router({
    routes: [
      {
        path: '/',
        name: 'Hello',
        component: () => import('@/components/HelloWorld.vue'),
      },
      {
        path: '/hello',
        name: 'Hello11',
        component: () => import('@/components/Hello.vue'),
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
}
