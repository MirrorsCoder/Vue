<template>
    <div>
        <input v-focus>
        <p v-mycss>哈哈哈</p>
        <p v-hello>123456789</p>
        <p v-big>大大大</p>
        {{d1|author}}
        {{d2|author}}
        {{m1|money}}
        {{m2|myMoney}}
    </div>
</template>

<script>
export default {
    name:"dir",
    data(){
        return{
            d1:"我是数据d1",
            d2:"我是数据d2",
            m1:20,
            m2:30
        }
    },
    directives:{// 局部自定义指令
        hello:{
            inserted(el){
                el.innerHTML="hello"
            },
            bind(el){
                // 初始化
                console.log("初始化")
                el.innerHTML=""
            }
        },
        big:{
            inserted(el){
                el.style.fontSize="30px"
            }
        }
    },
    filters:{
        myMoney(value){
            return "$" + value  // ￥
        }
    }
}
</script>

<style scoped>

</style>
