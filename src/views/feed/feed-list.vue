<template>
  <div class="feed-list">
    <div v-for="(item, index) in feedList" :key="index">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 14px;">
          <span>{{ item.content }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ item.createdAt | timeFormate }}</time>
          </div>
        </div>
      </el-card>
    </div>
    
  </div>
</template>

<script>
import { wsGetFeed } from '@/api/feed';
import TimeFormtter from 'time-schema-formatter';

export default {
  data() {
    return {
      pubTime: '',
      feedList: null,
    };
  },
  filters: {
    timeFormate(value) {
      return TimeFormtter({
        time: value,
        format: 'YYYY/MM/DD hh:mm:ss',
      });
    },
  },
  mounted() {
    wsGetFeed({}).then((data) => {
      this.feedList = data.data;
    });
  },
};
</script>
