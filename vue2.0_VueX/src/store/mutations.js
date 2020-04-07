export default {
  // 变更状态
  add(state) {
    state.count++
  },
  min(state) {
    state.count--
  },
  login(state) {
    state.isLogin = true
  },
  logout(state) {
    state.isLogin = false
  }
}
