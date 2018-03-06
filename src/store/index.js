import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters';
import { wsLogin } from '@/api/login';
import { wsGetFeed } from '@/api/feed';
import { getToken, setToken } from '@/utils/token';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      token: getToken(),
      userName: '',
    },
    mutations: {
      SET_TOKEN(state, token) {
        const rowState = state;
        rowState.token = token;
      },
    },
    actions: {
      storeLogin({ commit }, userInfo) {
        const username = userInfo.username.trim();
        return new Promise((resolve, reject) => {
          wsLogin({
            email: username,
            password: userInfo.password,
          }).then((response) => {
            if (response.status === 200) {
              const data = response.data;
              setToken(response.data.token);
              commit('SET_TOKEN', data.token);
              resolve();
            } else {
              reject(response.msg);
            }
          }).catch((error) => {
            reject(error);
          });
        });
      },
      getUserInfo() {
        return new Promise((resolve, reject) => {
          wsGetFeed({}).then((res) => {
            resolve(res);
          }).catch((e) => {
            reject(e);
          });
        });
      },
    },
    getters,
  });
}
// export function createStore() {
//   return new Vuex.Store({
//     modules: {
//       user,
//     },
//     getters,
//   });
// }
