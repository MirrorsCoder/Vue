<template>
    <div class="hi">
        Hi-{{title}}
        <button @click="sendMsg">发送数据</button>
        <p>Hi读取Count:{{getCount}}</p>
        <button @click="updateCount">增加Count</button>
    </div>
</template>

<script>
export default {
    name:"hi",
    data(){
        return{
            msg:"我是hi的数据"
        }
    },
    props:{
        title:{
            type:String,
            default:""
        }
    },
    methods:{
        sendMsg(event){
            this.$emit("getMsg",this.msg);
        },
        updateCount(event){
            // this.$store.commit("add")
            this.$store.dispatch("adds")
        }
    },
    computed:{  // 数据不计算不重复读取
        getCount(){
            // return this.$store.state.count;
            return this.$store.getters.getState;
        }
    }
}
</script>

<style scoped>

</style>