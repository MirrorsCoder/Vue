<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <Parent /> -->
    <UseComponent>
      <!-- 虽然数据传递给了子组件显示，但是渲染的时候依然在父组件中渲染 -->
      <!-- <p>我是父亲</p> -->
      <div slot="hello">
        <p>哈哈1</p>
        <p>哈哈2</p>
      </div>
      <p slot="world" slot-scope="props">{{h3}}--{{props.text}}</p>
    </UseComponent>
  </div> 
</template>

<script>
import Parent from "./components/parent"
import UseComponent from "./components/usecomponent"
export default {
  name: 'App',
  components: {
    Parent,
    UseComponent
  },
  data(){
    return{
      h3:"哈哈3"
    }
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
