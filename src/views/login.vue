<template>
  <div>
    
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="6">
        <h1 style="text-align:center;">WeiBt</h1>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <div style="text-align:center;">
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
    <router-link to="/feed">feed</router-link>
    
  </div>
</template>

<script>
// import Cookies from 'js-cookie';

// import { wsLogin } from '../api/login';

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.$store);
      this.$store.dispatch('storeLogin', this.form).then(() => {
        this.$router.push({ path: '/feed' });
      }).catch((e) => {
        alert(e);
      });
    },
  },
};
</script>

