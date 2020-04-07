<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <!-- <PostDemo/> -->
    <Baidu/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PostDemo from './components/postDemo'
import Baidu from "./components/baidu"

export default {
  name: 'App',
  components: {
    HelloWorld,
    PostDemo,
    Baidu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
