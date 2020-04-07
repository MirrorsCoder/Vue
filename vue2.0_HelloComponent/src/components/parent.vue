<template>
    <div>
        我是父亲
        <Child v-on:getInfo="getInfos" title="我是父亲要传递给儿子数据" v-bind:hello="hello" world="我是world" v-bind:obj="obj"/>
        <ul>
            <li v-for="item in initMessage" v-bind:key="item">{{item.name}}-{{item.age}}</li>
        </ul>
    </div>
</template>

<script>
import Child from "./child"

export default {
    name:"Parent",
    data(){
        return{
            hello:"干哈呢",
            obj:{
                name:"iwen",
                age:20
            },
            initMessage:[]
        }
    },
    components:{
        Child
    },
    methods:{
        getInfos(data){
            this.initMessage=data;
        }
    }
}
</script>

<style>

</style>
