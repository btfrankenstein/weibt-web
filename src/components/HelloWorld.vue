<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div :class="[prefixCls + '-loading-content']">
      <p :class="[prefixCls + '-loading-block']" style="width:94%"/>
      <p>
        <span :class="[prefixCls + '-loading-block']" style="width: 28%" />
        <span :class="[prefixCls + '-loading-block']" style="width: 62%" />
      </p>
      <p>
        <span :class="[prefixCls + '-loading-block']" style="width: 22%" />
        <span :class="[prefixCls + '-loading-block']" style="width: 66%" />
      </p>
      <p>
        <span :class="[prefixCls + '-loading-block']" style="width: 56%" />
        <span :class="[prefixCls + '-loading-block']" style="width: 39%" />
      </p>
      <p>
        <span :class="[prefixCls + '-loading-block']" style="width: 21%" />
        <span :class="[prefixCls + '-loading-block']" style="width: 15%" />
        <span :class="[prefixCls + '-loading-block']" style="width: 40%" />
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      prefixCls: 'ant-card',
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.ant-card-loading-block {
  display: inline-block;
  margin: 5px 1% 0;
  height: 14px;
  border-radius: 2px;
  background: -webkit-linear-gradient(left,rgba(207,216,220,.2),rgba(207,216,220,.4),rgba(207,216,220,.2));
  background: linear-gradient(90deg,rgba(207,216,220,.2),rgba(207,216,220,.4),rgba(207,216,220,.2));
  -webkit-animation: card-loading 1.4s ease infinite;
  animation: card-loading 1.4s ease infinite;
  background-size: 600% 600%;
}

@keyframes card-loading {
  0%,
  100% {
		background-position: 0 50%;
	}
	50% {
		background-position: 100% 50%;
	}
}
</style>
