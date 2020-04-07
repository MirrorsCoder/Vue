<template>
    <div class="counter-component">
        <div class="counter-btn" @click="mins">-</div>
        <div class="counter-show">
            <input type="text" v-model="counter" @keyup="inputHandler">
        </div>
        <div class="counter-btn" @click="adds">+</div>
    </div>
</template>

<script>
export default {
    name:"counter",
    data(){
        return{
            counter:1
        }
    },
    props:{
        min:{
            type:Number,
            default:1
        },
        max:{
            type:Number,
            default:10
        }        
    },
    methods:{
        mins(){
            if(this.counter<=this.min){
                return
            }
            this.counter--
            this.$emit("getCounter",this.counter)
            this.$store.dispatch("updateOrder",{"counterData":this.counter})
        },
        adds(){
            if(this.counter>=this.max){
                return
            }
            this.counter++
            this.$emit("getCounter",this.counter)
            this.$store.dispatch("updateOrder",{"counterData":this.counter})
        },
        inputHandler(){
            let fix;
            // 通过正则去验证输入的内容 \D:非数字
            // input输入框输入的数据，输入的任何数据类型都是string类型
            if(typeof this.counter === "string"){
                fix = Number(this.counter.replace(/\D/g,""));
            }else{
                fix = this.min
            }
            if(fix > this.max || this.counter < this.min){
                // 两个条件都不能满足，一旦满足则说明数据出了问题，赋值为最小值
                this.counter = this.min
            }
            this.counter = fix
            this.$emit("getCounter",this.counter)
            this.$store.dispatch("updateOrder",{"counterData":this.counter})
        }
    }
}
</script>

<style scoped>
.counter-component{
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
}
.counter-show{
    float: left;
}
.counter-show input{
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-indent: 4px;
}
.counter-btn{
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    width: 25px;
    line-height: 25px;
    text-align: center;
    cursor: pointer;
}
.counter-btn:hover{
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>