import { wsLogin } from '@/api/login';
import { getToken, setToken } from '@/utils/token';

const user = {
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
  },
};

export default user;
