import apischema from 'apischema';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Message } from 'element-ui';
import router from '../router';

const baseURL = 'http://localhost:8888';
const timeout = 30000;
const http = axios.create({ baseURL, timeout });

http.interceptors.request.use((config) => {
  const rtn = config;
  const token = Cookies.get('weibt_token'); // 让每个请求头携带token
  if (token && rtn.url.indexOf('/login') === -1) {
    rtn.headers.token = token;
  }
  return rtn;
}, error => Promise.reject(error));

http.interceptors.response.use((response) => {
  if (response.data.status === 401) { // 接口401登录拦截
    router.push({ path: '/login' });
    Message.error('登录信息过期，请重新登录！');
  } else if (response.data.status === 403) {
    Message.error('您没有此项操作的权限！');
  }
  return response.data;
}, (error) => {
  Promise.reject(error);
});

const schema = apischema({ http });

export default schema;
