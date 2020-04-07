<template>
  <div class="hello">
    HelloWorld:{{himsg}}
    <Hi @getMsg="getHiMsg" title="传递数据" />
    <button @click="sendDemoMsg">发送数据给Demo</button>
    <!-- <p>HelloWorld读取Count:{{$store.state.count}}</p> -->
    <p>HelloWorld读取Count:{{$store.getters.getState}}</p>
    <p>登录与否：{{$store.state.isLogin ? "登录了":"未登录"}}</p>
    <button @click="updateCount">减少Count</button>
  </div>
</template>

<script>
import Hi from "./Hi";
export default {
  name: "HelloWorld",
  data() {
    return {
      himsg: "",
      demoMsg: "我是传递给Demo的Msg"
    };
  },
  components: {
    Hi
  },
  methods: {
    getHiMsg(data) {
      this.himsg = data;
    },
    sendDemoMsg(data) {
      this.$emit("demomsg", this.demoMsg);
    },
    updateCount(event) {
      // this.$store.commit("min");
      this.$store.dispatch("mins");
      this.$store.commit("login");
    }
  }
};
</script>

<style scoped>
</style>