import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"

Vue.use(Vuex)
// 创建Store
export default new Vuex.Store({
    state:state,
    mutations:mutations,
    getters:getters,
    actions:actions
  })