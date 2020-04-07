import Vue from "vue"
import VueX from "vuex"

Vue.use(VueX)

export default new VueX.Store({
    state:{
        order:{
            "counterData":1,
            "timesData":1,
            "typerData":1            
        }
    },
    mutations:{
        // 计算操作
        updateOrder(state,data){
            // console.log(data)
            state.order[Object.keys(data)[0]] = data[Object.keys(data)[0]]
        }
    },
    actions:{
        updateOrder(context,data){
            context.commit("updateOrder",data)
        }
    },
    getters:{
        getOrder(state){
            if(state.order){
                return state.order
            }
        }
    }
})