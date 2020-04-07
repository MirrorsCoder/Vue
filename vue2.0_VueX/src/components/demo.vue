<template>
    <div class="demo">
        Demo{{title}}
        <!-- <p>Demo读取Count:{{$store.state.count}}</p> -->
        <p>Demo读取Count:{{$store.getters.getState}}</p>
    </div>
</template>

<script>
export default {
    name:"demo",
    data(){
        return{

        }
    },
    props:{
        title:{
            type:String,
            default:""
        }
    }
}
</script>

<style scoped>

</style>