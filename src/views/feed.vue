<template>
  <div class="main">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8">
        <div class="wrapper">
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
        </div>
        
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import { wsGetFeed } from '../api/feed';

export default {
  data() {
    return {
      textarea: '',
    };
  },
  mounted() {
    wsGetFeed({}).then((data) => {
      console.log(data);
    });
  },
};
</script>

<style>
  @import '../assets/style/common.scss';
  .main {
    min-height: 1000px;
  }

  .wrapper {
    height: 100%;
    background: #f2f2f2;
    padding: 20px;
  }
</style>



