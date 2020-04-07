<template>
    <div class="nav">
        <ul>
            <router-link to="/index">首页</router-link>
            <router-link to="/hello">Hello</router-link>
            <!-- <router-link tag="li" :to="hi">Hi</router-link> -->
            <!-- <router-link tag="li" :to="{path:'/hi'}">Hi</router-link> -->
            <router-link :to="{name:'hi',params:{id:'100',count:20}}">Hi</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"appnav",
    data(){
        return{
            hi:"/hi"
        }
    }
}
</script>

<style scoped>
.nav{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #fff;
}
.nav ul{
    clear: both;
    overflow: hidden;
}
.nav li{
    float: left;
    margin: 0 20px;
    list-style: none;
}
.active{
    color: red !important;
}
</style>