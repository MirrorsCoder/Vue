<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld @demomsg="getDomeMsg"/>
    <Demo :title="demomsg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Demo from "./components/demo"

export default {
  name: 'App',
  components: {
    HelloWorld,
    Demo
  },
  data(){
    return{
      demomsg:""
    }
  },
  methods:{
    getDomeMsg(data){
      this.demomsg=data;
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
