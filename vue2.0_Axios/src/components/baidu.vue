<template>
    <div> 
        <p ref="myp">哈哈</p>
        <p :class="hello">哈哈</p>
        <button @click="myHandler">哈哈</button>
        <ul>
            <li v-for="(item,index) in music.song_list" v-bind:key="index">{{item.album_title}}</li>
        </ul>
        <ul ref="ul">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
</template>

<script>
import $ from "jquery"

export default {
    name:"baidu",
    data(){
        return{
            music:{
                song_list:[]
            },
            hello:"hello"
        }
    },
    mounted(){
        var myp=this.$refs.myp
        // myp.addEventListener("click",function(){
        //     console.log("干啥");
        // })
        $(myp).css("color","red");

        var ul = this.$refs.ul
        $(ul).on("click","li",function(event){
            console.log($(this).html());
        })
        // console.log(this.$refs.myp.innerHTML="嘿嘿");
        // console.log(this.$refs.myp.style.color="red");
    },
    created(){
        // 网络请求
        var url = this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0";
        this.$axios.get(url)
        // this.$axios.get("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
        .then(res =>{
            console.log(res);
            this.music = res.data;
        })
        .catch(error =>{
            console.log(error);
        })
    },
    methods:{
        myHandler(event){
            console.log(1);
        }
    }
}
</script>

<style scoped>

</style>
