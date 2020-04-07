<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>流量分析</h2>
            <p>获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律。</p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line-left">
                购买数量：
            </div>
            <div class="sales-board-line-right">
                <!-- 自定义组件 -->
                <Counter :min="counter.min" :max="counter.max" @getCounter="getOrder('counterData',$event)"/>
            </div>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line-left">
                产品类型：
            </div>
            <div class="sales-board-line-right">
                <!-- 自定义组件 -->
                <Typer :types="types" @getTyper="getOrder('typerData',$event)"/>
            </div>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line-left">
                购买时间：
            </div>
            <div class="sales-board-line-right">
                <!-- 自定义组件 -->
                <Times :times="times" @getTimes="getOrder('timesData',$event)"/>
            </div>
        </div>  
        <div class="sales-board-form">
            <div class="sales-board-line-left">
                价钱：
            </div>
            <div class="sales-board-line-right">
                {{price}}元
            </div>
        </div> 
        <div class="sales-board-form">
            <div class="sales-board-line-left">
            </div>
            <div class="sales-board-line-right">
                <a href="#" class="button">立即购买</a>
            </div>
        </div> 
        <div class="sales-board-form">
            <div class="sales-board-line-left">
            </div>
            <div class="sales-board-line-right">
                订单：{{orderInfo}}
            </div>
        </div>                                      
        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>网站访问统计分析报告的基础数据源于网站流量统计信息</p>
            <h3>用户行为指标</h3>
            <ul>
                <li>主要反映用户如何来到网站、在网站上停留了多长时间、访问了那些页面等，主要的统计指标包括：</li>
                <li>用户在网站的停留时间；</li>
                <li>用户来源网站；</li>
                <li>用户所使用的搜索引擎及其关键词；</li>
                <li>用户浏览网站方式的相关统计指标主要包括：用户上网设备类型，用户浏览器的名称和版本，访问者电脑分辨率显示模式，用户所使用的操作系统名称和版本，用户所在地理区域分布状况等。</li>
            </ul>
        </div>        
    </div>
</template>

<script>
import Counter from "../../components/Counter"
import Typer from "../../components/Typer"
import Times from "../../components/Times"
export default {
    name:"cake",
    data(){
        return{
            counter:{
                max:10,
                min:1
            },
            orderInfo:{},
            types:[
                {
                    value:"初级内容",
                    id:1
                },
                {
                    value:"中级内容",
                    id:2
                },
                {
                    value:"高级内容",
                    id:3
                }
            ],
            times:[
                {
                    value:"1个月",
                    id:1
                },
                {
                    value:"3个月",
                    id:3
                },
                {
                    value:"6个月",
                    id:6
                },
                {
                    value:"12个月",
                    id:12
                }                  
            ],
            counterData:1,
            timesData:1,
            typerData:1,
            price:0
        }
    },
    components:{
        Counter,
        Typer,
        Times
    },
    methods:{
        // getCounterHandler(data){
        //     console.log(data);
        // },
        // getTimesHandler(data){
        //     console.log(data);
        // },
        // getTyperHandler(data){
        //     console.log(data);
        // }
        getOrder(key,value){
            this[key] = value
            // console.log(this)
            var readData ={
                "counterData":this["counterData"],
                "timesData":this["timesData"],
                "typerData":this["typerData"]
            }
            // 默认counter:5元1个 timer:7元1个级别 typer:10元一个
            this.price = readData.counterData*5+readData.timesData*7+readData.typerData*10
            this.orderInfo = this.$store.getters.getOrder
        }
    },
    computed:{// 仅调用一次
        // getInfo(){
        //     this.$store.getters.getOrder
        // }
    }
}
</script>

<style scoped>
.buy-dialog-title{
    font-size: 16px;
    font-weight: bold;
}
.buy-dialog-btn{
    margin-top: 20px;
}
.buy-dialog-table{
    width: 100%;
    margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
}
.buy-dialog-table th{
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
}
.button{
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
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
.sales-board-des, 
.sales-board-intro{
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
}
.sales-board-des p, 
.sales-board-intro p{
    line-height: 1.6;
}
.sales-board-des h2, 
.sales-board-intro h2{
    font-size: 20px;
    padding-bottom: 15px;
}
.sales-board-des h3, 
.sales-board-intro h3{
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
}
.sales-board-des li, 
.sales-board-intro li{
    padding: 5px 0;
}
</style>