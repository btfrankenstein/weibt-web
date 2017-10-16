import schema from './';
// 供应商登录
export const wsRegister = schema.get('/login/register', {
  email: { type: String, required: true },
  password: { type: String, required: true },
});
// 供应商注销
export const wsLogin = schema.get('/login', {
  email: { type: String, required: true },
  password: { type: String, required: true },
});
