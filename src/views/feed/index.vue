<template>
  <div class="main">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="8">
        <div class="wrapper">
          <postArea></postArea>
          <feedList></feedList>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import postArea from './post-area.vue';
import feedList from './feed-list.vue';
export default {
  components: {
    postArea,
    feedList,
  },
};
</script>

<style lang="scss">
  @import '~styles/common.scss';
  @import './feed.scss';
</style>



