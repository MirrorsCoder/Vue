export default {
  // 异步处理
  adds(context) {
    setTimeout(function () {
      context.commit("add")
    }, 3000)
  },
  mins(context) {
    context.commit("min")
  }
}
