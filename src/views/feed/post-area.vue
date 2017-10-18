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
      <el-button type="primary" icon="search">发布</el-button>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      textarea: '',
    };
  },
};
</script>




