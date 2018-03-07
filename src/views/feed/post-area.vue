<template>
  <div class="post-area">
    <el-input
      type="textarea"
      :rows="4"
      resize="none"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
    <div class="m-t-10">
      <el-button @click="postFeed" type="primary" icon="search">发布</el-button>
    </div>
    <router-link to="/login">login</router-link>
  </div>
</template>

<script>
import { wsPostFeed } from '@/api/feed';

export default {
  data() {
    return {
      textarea: '',
    };
  },
  methods: {
    postFeed() {
      wsPostFeed({
        content: this.textarea,
      }).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>




