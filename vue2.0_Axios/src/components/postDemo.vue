<template>
    <div>
        post请求；
    </div>
</template>

<script>
import qs from "qs"

export default {
    name:"post",
    data(){
        return{
            
        }
    },
    created(){
        // axios的post请求接收参数是from-data格式：?name=iwe&age=20
        // this.$axios.post("http://www.wwtliu.com/sxtstu/blueberrypai/login.php",qs.stringify({
        //     user_id:"iwen@qq.com",
        //     password:"iwen123",
        //     verification_code:"crfvw"
        // }))
        // .then(res =>{
        //     console.log(res);
        // })
        // .catch(error =>{
        //     console.log(error);
        // })

        this.$axios({
            method:"POST",
            url:"/sxtstu/blueberrypai/login.php",
            data:{
                user_id:"iwen@qq.com",
                password:"iwen123",
                verification_code:"crfvw"
            },
            // transfromRequest:[function(data){
            //     console.log(data);
            //     return qs.stringify(data)
            // }]
        })
        .then(res =>{
            console.log(res);
        })
        .catch(error =>{
            console.log(error);
        })
    }
}
</script>

<style scoped>

</style>