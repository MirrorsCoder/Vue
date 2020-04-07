<template>
    <div>
        <button v-on:click="flag=!flag">去吧</button>
        <transition name="hello">
            <h1 class="myhello" v-show="flag">哈哈</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:"animal",
    data(){
        return{
            flag:true
        }
    }
}
</script>

<style>
.myhello{
    position: absolute;
    left: 50%;
}
.hello-leave, .hello-enter-to{
    /* opacity: 1; */
    transform: translateX(0);
}
.hello-leave-to, .hello-enter{
    /* opacity: 0; */
    transform: translateX(100px);
}
.hello-leave-active, .hello-enter-active{
    transition: all .5s ease;
}
</style>
