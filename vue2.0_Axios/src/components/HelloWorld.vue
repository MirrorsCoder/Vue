<template>
  <div class="hello">
    <ul>
      <li v-for="item in axiosData.banner" v-bind:key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      axiosData:{
        banner:[]
      }
    }
  },
  created(){  //插入DOM之后触发
    // this.$axios.get("https://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php",{
    //   params:{
    //     type:"yule",
    //     count:10
    //   }
    // })  // 有参与无参
    // .then(res => {
    //   // console.log(res.data);
    //   this.axiosData = res.data;
    // })
    // .catch(error =>{
    //   console.log(error);
    // })

    this.$axios({
      method:"get",
      url:"https://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php",
      params:{
        type:"yule",
        count:30
      }
    })
    .then(res => {
      console.log(res.data);
      // this.axiosData = res.data;
    })
    .catch(error =>{
      console.log(error);
    })
  }
}
</script>

<style scoped>

</style>
