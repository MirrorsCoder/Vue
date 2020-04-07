<template>
    <div>
        <button v-on:click="flag=!flag">去吧</button>
        <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
            <h1 class="myhello" v-show="flag">哈哈</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:"anim2",
    data(){
        return{
            flag:true
        }
    }
}
</script>

<style scoped>
.myhello{
    position: absolute;
    left: 50%;
}
</style>
