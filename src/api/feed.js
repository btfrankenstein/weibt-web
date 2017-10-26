import schema from './';
// 获取流
export const wsGetFeed = schema.get('/feed/get', {
  userId: { type: String, required: false },
});

// post流
export const wsPostFeed = schema.post('/feed/post', {
  userId: { type: String, required: false },
  content: { type: String, required: true },
});
