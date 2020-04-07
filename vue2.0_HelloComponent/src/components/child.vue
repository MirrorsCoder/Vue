<template>
    <div>
        我是孩子<br>
        父亲给你的：{{title}}-{{hello}}-{{world}}-{{obj}}

        <button v-on:click="sendMsg">发送</button>
    </div>
</template>

<script>
export default {
    name:"Child",
    data(){
        return{
            initMsg:[
                {
                    name:"child",
                    age:10
                },
                {
                    name:"father",
                    age:10
                }
            ]
        }
    },
    props:{
        title:String,
        hello:{
            type:[String,Number],
            required:true //必选项
        },
        world:{
            type:[String,Number],
            default:"hello world" //默认值
        },
        obj:{
            type:Object,
            default:function(){
                return{
                    example:"name"
                }
            }
            // validator:function(value){
            //     return value > 10
            // }
        }
    },
    methods:{
        sendMsg(event){
            // 儿子准备好发送数据
            this.$emit("getInfo",this.initMsg);
        }
    }
}
</script>

<style>

</style>
