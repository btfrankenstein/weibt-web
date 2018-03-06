<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
