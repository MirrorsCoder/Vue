<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <button v-on:click="changeEvent">切换</button>
    <keep-alive>  //组件缓存
      <component :is="currentView"></component>
    </keep-alive> -->

    <!-- <ComponentDemo/> -->

    <!-- <Anim/> -->
    <!-- <Anim1/> -->
    <!-- <Anim2/> -->
    <DirectiveDemo/>
  </div>
</template>

<script>
import Ct1 from "./components/ct1"
import Ct2 from "./components/ct2"
import ComponentDemo from "./components/ComponentDemo"
import Anim from "./components/Anim"
import Anim1 from "./components/Anim1"
import Anim2 from "./components/Anim2"
import DirectiveDemo from "./pages/directiveDemo"

export default {
  name: 'App',
  components: {
    Ct1,
    Ct2,
    ComponentDemo,
    Anim,
    Anim1,
    Anim2,
    DirectiveDemo
  },
  methods:{
    changeEvent(event){
      if(this.flag){
        this.currentView=Ct2
        this.flag=false
      }else{
        this.currentView=Ct1
        this.flag=true
      }
    }
  },
  data(){
    return{
      currentView:Ct1,
      flag:true
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
