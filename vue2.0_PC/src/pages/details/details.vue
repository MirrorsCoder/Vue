<template>
    <div class="details-wrap">
        <div class="details-left">
            <div class="product-board">
                <img :src="getUrl" alt="" height="100" width="100">
                <ul>
                    <router-link tag="li" active-class="active" :to="'/details/'+item.id" v-for="(item,index) in detailsNav" :key="index">{{item.title}}</router-link>
                </ul>
            </div>
        </div>
        <div class="details-right">
            <keep-alive><router-view></router-view></keep-alive>
        </div>        
    </div>
</template>

<script>
export default {
    name:"details",
    data(){
        return{
            detailsNav:[
                {
                    title:"开发产品",
                    id:"cake"
                },
                {
                    title:"品牌营销",
                    id:"jewellery"
                },
                {
                    title:"使命必达",
                    id:"beauty"
                },
                {
                    title:"勇攀高峰",
                    id:"pet"
                }                                                
            ],
            imgUrl:{
                "/details/cake":require("../../assets/images/1.png"),
                "/details/jewellery":require("../../assets/images/2.png"),
                "/details/beauty":require("../../assets/images/3.png"),
                "/details/pet":require("../../assets/images/4.png")
            }
        }
    },
    computed:{
        getUrl(){
            return this.imgUrl[this.$route.path]
        }
    }
}
</script>

<style scoped>
.details-wrap{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
}
.details-left{
    float: left;
    width: 200px;
    text-align: center;
}
.details-right{
    float: left;
    width: 980px;
    margin-left: 20px;
}
.product-board{
    background: #fff;
    padding: 20px 0;
}
.product-board ul{
    margin-top: 20px;
}
.product-board li{
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
}
.product-board li.active,
.product-board li.hover{
    background: #4fc08d;
    color: #fff;
}
.product-board li a{
    display: block;
}
.sales-board{
    background: #fff;
}
.sales-board-form{
    padding: 30px 20px;
    font-size: 14px;
}
.sales-board-line{
    clear: both;
    padding-bottom: 20px;
}
.sales-board-line-left{
    display: inline-block;
    width: 100px;
}
.sales-board-line-right{
    display: inline-block;
    width: 75%;    
}
.sales-board-des{
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
}
.sales-board-des p{
    line-height: 1.6;
}
.sales-board-des h2{
    font-size: 20px;
    padding-bottom: 15px;
}
.sales-board-des h3{
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
}
.sales-board-des li{
    padding: 5px 0;
}
.sales-board-table{
    width: 100%;
    margin-top: 20px;
}
.sales-board-table th{
    background: #4fc08d;
    color: #fff;
}
.sales-board-table td{
    border: 1px solid #f0f2f5;
    padding: 15px;
}
</style>