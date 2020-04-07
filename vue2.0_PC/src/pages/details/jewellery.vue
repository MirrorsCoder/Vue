<template>
    <div>
        jewellery:{{getOrder}}
    </div>
</template>

<script>
export default {
    computed:{// 仅调用一次
        getOrder(){
            return this.$store.getters.getOrder
        }
    }    
}
</script>

<style scoped>

</style>