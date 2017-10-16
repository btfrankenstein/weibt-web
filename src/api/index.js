import apischema from 'apischema';
import axios from 'axios';
// import Cookies from 'js-cookie';
// import { Message } from 'iview';
// import router from '../router';

const baseURL = 'http://localhost:8888';
const timeout = 30000;
const http = axios.create({ baseURL, timeout });

http.interceptors.response.use(response => response.data
, (error) => {
  Promise.reject(error);
});

const schema = apischema({ http });

export default schema;
