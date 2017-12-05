import schema from './';
// 获取流
export const wsGetFeed = schema.get('/feed/get', {});

// post流
export const wsPostFeed = schema.post('/feed/post', {
  content: { type: String, required: true },
});
