<template>
  <div id="app">

    {{demo}}
    <div v-html="html"></div>

    <div v-bind:class="active" v-bind:data-id="id">
      hello
      {{ 10>9?"对了":"错了" }}
    </div>

    <div v-if="flag">
      我是条件渲染
    </div>
    <div v-show="flag">
      我是条件渲染
    </div>
    <template v-if="flag">
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </template>
    <template v-else>
      <p>4</p>
    </template>

    <ul>
      <li v-for="(item,index) in names" v-bind:key="index">{{ item }} - {{index}}</li>
    </ul>
    <ul>
      <li v-for="(obj,key,index) in myobj" v-bind:key="index">{{obj}}-{{key}}-{{index}}</li>
    </ul>

    <button v-on:click="counter+=1" type="button" name="button">按钮</button>
    {{counter}}<br>
    <button v-on:click="clickHandler" type="button" name="button">第二按钮</button>
    {{eventShow}}<br>
    <button v-on:click.prevent.once="dataevent(content,$event)" type="button" name="button">第三按钮</button>
    {{showCon}}<br>
    <input v-on:keyup.enter="getInfo" type="text" name="" value=""/><br><br>
    
    <input v-model.lazy="msg" type="text" name="" value=""/>
    <p>{{msg}}</p>
    <button v-on:click="getMSG" type="button" name="button">按钮</button>

    <ul>
      <li v-for="name in names" v-bind:key="name">{{name}}</li>
    </ul>
    <button v-on:click="addInfo" type="button" name="button">去吧皮卡丘</button>

    <div>
      <p v-bind:class="{active:isActive}">哈哈哈</p>
      <p v-bind:class="{active: 0>10, 'demo':true }">哈哈哈</p>
    </div>
    <ul>
      <li v-bind:class="[{'active': index%2 == 0},'hello']" v-for="(item, index) in names" v-bind:key=index>{{item}}</li>
    </ul>

    <div class="">
      <p v-bind:style="myStyle">字体</p>
    </div>

    <div>
      {{massageInfo}}
      {{mtssageInfo()}}
    </div>

    <hello />
  </div>
</template>

<script>
import hello from "./components/HelloWorld"

export default {
  name: 'App',
  data(){
    return{
      demo:"我是第一个VueDemo",
      html:"<h1>我是第一个VueDemo</h1>",
      active:"active",
      id:19,
      flag:true,
      names:["iwen","ime","ice"],
      myobj:{
        name:"iwen",
        age:20
      },
      counter:1,
      eventShow:"我是孙悟空",
      content:"悟空,快给为师抓个妖孽玩一玩",
      showCon:"",
      msg:"hello",
      isActive:true,
      myStyle:{
        color:'#f00',
        fontSize:'30px'
      },
      message:'hello'
    }
  },
  computed:{
    massageInfo(){
      return this.message.split('').reverse().join('')
    }
  },
  components:{
    hello
  },
  methods:{
    clickHandler(event){
      console.log("事件")
      this.eventShow="我是六耳猕猴" //this指向当前组件
    },
    dataevent(data,enent){
      this.showCon=this.content;
      console.log(data,event);
    },
    getInfo(event){
      // if(event.keyCode === 13){
      //   console.log("按了回车键");
      // } -> .enter
      console.log(event.key);
    },
    getMSG(event){
      console.log(this.msg);
    },
    addInfo(event){
      // this.names.push("二哥");
      this.names.concat(["二哥"]);//js不改变原数组，链接新数组处理
      // console.log(this.names.concat(["二哥"]));
    },
    mtssageInfo(){
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

<style lang="css">
/* #app{
  background: red;
} */
</style>
