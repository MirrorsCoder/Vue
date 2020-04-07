<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <li @click="liHandler(index)" :class="{active:index == nowIndex}" v-for="(item,index) in times" :key="index">{{item.value}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"times",
    data(){
        return{
            nowIndex:0
        }
    },
    props:{
        times:{
            type:Array,
            default:function(){
                return[
                    {
                        value:"test",
                        id:0
                    }
                ]
            }
        }
    },
    methods:{
        liHandler(index){
            this.nowIndex = index
            this.$emit("getTimes",this.times[index].id)
            this.$store.dispatch("updateOrder",{"timesData":this.times[index].id})
        }
    }
}
</script>

<style scoped>
.chooser-component{
    position: relative;
    display: inline-block;
}
.chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
}
.chooser-list li.active{
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>