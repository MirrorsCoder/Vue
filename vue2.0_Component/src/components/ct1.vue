<template>
    <div class="ct1">
        ct1:
        <button v-on:click="changeCt1">切换Ct1的内容</button>
        {{currentCt1}}
    </div>
</template>

<script>
export default{
    name:"ct1",
    data(){
        return{
            currentCt1:"hello ct1"
        }
    },
    methods:{
        changeCt1(){
            this.currentCt1 = "hello Learn Ct1"
        }
    }
}
</script>

<style>

</style>
