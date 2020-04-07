1.VueX
    状态管理模式(可以做到状态共享)
    cnpm install vuex --save

    import Vuex from 'vuex'
    Vue.use(Vuex)
2.VueX的流程

    View -> Action -> State -> View

    VueComponent -> (dispatch) Action -> (Commit) Mutations -> (Mutate) State -> (Render) -> VueComponent
3.Actions:
    1.Action 提交的是 mutation，而不是直接变更状态
    2.Action 可以包含任意异步操作
    注意：mutation只能做同步处理